"use server"

import { connectToDB } from "@lib/mongoose";
import Recipe from "@lib/models/recipe.model";
import User from "@lib/models/user.model";
import mongoose from "mongoose";
import { z } from "zod"
import { RecipeValidation } from "@lib/validations/recipe"

type FormData = z.infer<typeof RecipeValidation>;

interface RecipeForm {
  formData: FormData;
  userEmail: string;
}


const mapFormDataToRecipeModel = (formData: FormData, userId: mongoose.Types.ObjectId) => {
  const ingredients = formData.materials.map((material) => ({
    material: material.name,
    elements: material.ingredients.map((ingredient) => ({
      ingredient: ingredient.name,
      quantity: ingredient.quantity,
    })),
  }));

  const instructions = formData.instructions.map((instruction) => ({
    instruction: instruction.instruction,
  }));

  return {
    title: formData.title,
    slug: formData.title.toLowerCase().replace(/ /g, "-"),
    author: userId,
    description: formData.description,
    category: formData.category,
    photo: formData.photo,
    prep_time: formData.prep_time,
    ingredients,
    instructions,
  };
};

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