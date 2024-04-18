"use server"

import mongoose from "mongoose";
import { connectToDB } from "@lib/mongoose";
import Recipe from "@lib/models/recipe.model";
import User from "@lib/models/user.model";
import { z } from "zod"
import { RecipeValidation } from "@lib/validations/recipe"
import { mapFormDataToRecipeModel } from "@lib/utils";
import Comment from "@lib/models/comment.model";
import { revalidatePath } from 'next/cache';
import { utapi } from "uploadthing/server";


type FormData = z.infer<typeof RecipeValidation>;

interface RecipeForm {
  formData: FormData;
  userEmail: string;
  recipeId?: string;
}


export async function createRecipe({
  formData, userEmail
}: RecipeForm) : Promise<void>{

  connectToDB();

  try {
    const user = await User.findOne({ email: userEmail });

    if(!user){
      throw new Error("User not found")
    }

    const recipeData = mapFormDataToRecipeModel(formData, user._id)
    const newRecipe = new Recipe(recipeData)
    const createdRecipe = await newRecipe.save();

    user.recipes.push(createdRecipe._id);
    await user.save();


  } catch (error: any) {
    throw new Error(`Can't create recipe: ${error.message}`)
  }

}

export async function updateRecipe({
  formData, userEmail, recipeId
}: RecipeForm) : Promise<void>{

  try {

    connectToDB()

    const user = await User.findOne({ email: userEmail });

    if(!user){
      throw new Error("User not found")
    }

    const recipe = await Recipe.findById(recipeId);

    if(user._id.toString() !== recipe.author.toString()){
      throw new Error("The user doesn't match with the recipe author")
    }

    const recipePhotoURL = recipe.photo.split('/')
    const fileId: string | string[] = recipePhotoURL[recipePhotoURL.length - 1]
    
    await utapi.deleteFiles(fileId);

    const recipeData = mapFormDataToRecipeModel(formData, user._id)

    await Recipe.findOneAndUpdate(
      { _id: recipeId },
      {
        ...recipeData
      }
    )
    
  } catch (error: any) {
    throw new Error(`Can't update recipe: ${error.message}`)
  }

}


export async function fetchRecipes(pageNumber = 1, pageSize = 20){

  connectToDB()

  try {

    const skipAmount = (pageNumber-1) * pageSize

    const recipesQuery = Recipe.find()
      .sort({ created_at: 'desc'})
      .skip(skipAmount)
      .limit(pageSize)
      .populate({
        path: 'author',
        model: 'User',
        select: 'fullname image',
      })
      .select('_id title slug description photo prep_time comments_no rating created_at');

    const totalRecipesCount = await Recipe.countDocuments()

    const recipes = await recipesQuery.exec()

    const isNext = totalRecipesCount > skipAmount + recipes.length

    return {recipes, isNext}

    
  } catch (error: any) {
    throw new Error(`Can't fetch recipes: ${error.message}`)
  }

}

export async function fetchRecipeBySlug(slug: string, userEmail: string | null = null){

  connectToDB()

  try {

    const recipeData = await Recipe.findOne({ slug })
      .populate({
        path: "author",
        model: User,
        select: "fullname _id image",
      })
      .populate([
        {
          path: "comments",
          model: Comment,
          populate: [
            {
              path: "author",
              model: User,
              select: "fullname _id image",
            },
            {
              path: "children",
              model: Comment,
              populate: {
                path: "author",
                model: User,
                select: "fullname _id image",
              },
            },
          ],
        },
      ]).exec();

    const recipe = recipeData.toObject();

    let isSaved = false;
    if (userEmail) {
      const user = await User.findOne({ email: userEmail });
      if (user) {
        const pocketLists = user.pocket || [];
        for (const list of pocketLists) {
          if (list.elements.includes(recipeData._id)) {
            isSaved = true;
            break;
          }
        }
      }
    }

    return { recipe, isSaved }
    
  } catch (error:any) {
    throw new Error(`Can't fetch recipe: ${error.message}`)
  }

}

export async function fetchRecipeById(id: string){
  try {

    connectToDB()

    const recipe = await Recipe.findOne({ _id: id })
      .populate({
        path: "author",
        model: User,
        select: "fullname _id image",
      })
      .populate([
        {
          path: "comments",
          model: Comment,
          populate: [
            {
              path: "author",
              model: User,
              select: "fullname _id image",
            },
            {
              path: "children",
              model: Comment,
              populate: {
                path: "author",
                model: User,
                select: "fullname _id image",
              },
            },
          ],
        },
      ]).exec();

    const serializedRecipe = recipe.toObject();

    return serializedRecipe
    
  } catch (error: any) {
    throw new Error(`Can't fetch recipe: ${error.message}`)
  }
}


export async function fetchFilteredRecipes({
  pageNumber = 1,
  pageSize = 20,
  sortBy = 'created_at',
  sortOrder = 'desc',
  categories = [] as string[],
  prepTime = '',
  sessionUserId = '',
}) {
  connectToDB();

  try {
    const existingSession = sessionUserId ? { 'author': { $ne: new mongoose.Types.ObjectId(sessionUserId) } } : {};

    const skipAmount = (pageNumber - 1) * pageSize;

    const sortOptions: Record<string, 'asc' | 'desc'> = {};

    if (sortBy === 'created_at' || sortBy === 'comments_no' || sortBy === 'rating') {
      sortOptions[sortBy] = sortOrder as 'asc' | 'desc';
    }

    const prepTimeFilter = prepTime ? { prep_time: prepTime } : {};

    const categoryFilter = categories.length > 0 ? { category: { $in: categories } } : {};

    const recipesQuery = Recipe.find({ ...prepTimeFilter, ...categoryFilter, ...existingSession })
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize)
      .populate({
        path: 'author',
        model: 'User',
        select: 'fullname image',
      })
      .select(
        '_id title slug description photo prep_time comments_no rating created_at'
      )
      .lean();

    const totalRecipesCount = await Recipe.countDocuments({
      ...prepTimeFilter,
      ...categoryFilter,
      ...existingSession,
    });

    const recipes = await recipesQuery.exec();


    const isNext = totalRecipesCount > skipAmount + recipes.length;

    return { recipes, isNext };
  } catch (error: any) {
    throw new Error(`Can't fetch filtered recipes: ${error.message}`);
  }
}

export async function deleteRecipeById(recipeId: string,
  userEmail: string,
  path: string)
{

  try {
    connectToDB()

    const user = await User.findOne({ email: userEmail })
    if(!user){
      throw new Error(`User not found`)
    }

    const recipe = await Recipe.findOne({ _id: new mongoose.Types.ObjectId(recipeId) })
    if(!recipe){
      throw new Error(`Recipe not found`)
    }


    user.recipes.pull(recipeId)

    const recipePhotoURL = recipe.photo.split('/')
    const fileId: string | string[] = recipePhotoURL[recipePhotoURL.length - 1]
    await utapi.deleteFiles(fileId);

    await Recipe.deleteOne({ _id: new mongoose.Types.ObjectId(recipeId) })
    await user.save()

    revalidatePath(path)
    
  } catch (error: any) {
    throw Error(`Can't delete recipe: ${error.message}`)
  }

}

export async function saveRecipeToPocket(recipeId: string, pocketName: string, userId: string, path: string) {
  connectToDB();

  try {

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const pocketList = user.pocket.find((pocket: any) => pocket.pocket_name === pocketName);

    if (!pocketList) {
      throw new Error(`Pocket list with name ${pocketName} not found`);
    }

    if (pocketList.elements.includes(recipeId)) {
      throw new Error("Recipe is already in the pocket list");
    }


    pocketList.elements.push(recipeId);

    await user.save();

    revalidatePath(path)

  } catch (error: any) {
    throw new Error(`Can't add recipe to pocket: ${error.message}`);
  }
}

export async function deleteRecipeFromPocket(recipeId: string, userId: string, path: string) {
  connectToDB();

  try {

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    for (const pocketList of user.pocket) {
      const index = pocketList.elements.indexOf(recipeId);
      if (index !== -1) {
        pocketList.elements.splice(index, 1);
        break;
      }
    }


    await user.save();

    revalidatePath(path)

  } catch (error: any) {
    throw new Error(`Can't delete recipe from pocket: ${error.message}`);
  }
}
