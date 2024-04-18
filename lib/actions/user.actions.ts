"use server"

import { connectToDB } from "@lib/mongoose";
import User from "@lib/models/user.model";
import Comment from "@lib/models/comment.model";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { utapi } from "uploadthing/server";
import CustomSession from "@lib/CustomSession";
import Recipe from "@lib/models/recipe.model";
import { fetchRecipes } from "./recipe.actions";


interface classicRegister {
  fullname: string;
  email: string;
  password: string;
}


export async function ClassicRegister({
  fullname, email, password
}: classicRegister): Promise<void> {

  try {
    connectToDB()

    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({fullname, email, password: hashedPassword})
    
  } catch (error: any) {
    throw new Error(`Error classic register: ${error.message}`)
  }
  
}


export async function getCurrentUser(): Promise<CustomSession | null> {
  const session = await getServerSession(authOptions)

  return session as CustomSession
}

export async function fetchUsers(pageNumber = 1, pageSize = 20, sortBy = 'newest'){
  try {
    
    connectToDB()

    const skipAmount = (pageNumber-1) * pageSize

    let sortOptions = {};
    if (sortBy === 'most_recipes') {
      sortOptions = { recipes: -1 };
    } else if (sortBy === 'most_reviews') {
      sortOptions = { reviews_no: -1 };
    } else if (sortBy === 'most_friends') {
      sortOptions = { friends: -1 };
    } else if (sortBy === 'oldest') {
      sortOptions = { created_at: 1 };
    } else {
      sortOptions = { created_at: -1 };
    }

    const users = await User.aggregate([
      { $sort: sortOptions },
      { $skip: skipAmount },
      { $limit: pageSize },
      {
        $project: {
          _id: 1,
          fullname: 1,
          image: 1,
          created_at: {
            $dateToString: {
              format: "%d.%m.%Y",
              date: "$created_at",
              timezone: "Europe/Bucharest",
            },
          },
          recipes: { $size: '$recipes' },
          friends: { $size: '$friends' },
        },
      },
      {
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'author',
          as: 'comments',
        },
      },
      {
        $addFields: {
          comments: { $size: '$comments' },
        },
      },
    ]);


    const totalUsersCount = await User.countDocuments()
    const isNext = totalUsersCount > skipAmount + users.length

    return { users, isNext }

  } catch (error: any) {
    throw new Error(`Coudn't fetch users: ${error.message}`)
  }
}

export async function fetchUserById(userId: string, sessionEmail: string) {

  try {

    connectToDB()

    const sessionUser = await User.findOne({ email: sessionEmail })

    if(!sessionUser){
      throw new Error("Session not found")
    }
    
    const userDataAndRecipes = await User.aggregate([
      { $match: { _id: mongoose.Types.ObjectId.createFromHexString(userId) } },
      {
        $project: {
          _id: 1,
          fullname: 1,
          image: 1,
          created_at: {
            $dateToString: {
              format: '%d.%m.%Y',
              date: '$created_at',
              timezone: 'Europe/Bucharest',
            },
          },
          recipesCount: { $size: '$recipes' },
          friendsCount: { $size: '$friends' },
        },
      },
      {
        $lookup: {
          from: 'recipes',
          localField: '_id',
          foreignField: 'author',
          as: 'recipesList',
        },
      },
      {
        $project: {
          _id: 1,
          fullname: 1,
          image: 1,
          created_at: 1,
          recipesCount: 1,
          friendsCount: 1,
          recipesList: {
            title: 1,
            slug: 1,
            rating: 1,
            photo: 1,
            comments_no: 1,
            created_at: 1,
            prep_time: 1,
          },
        },
      },
    ]);


    const userReviews = await Comment.aggregate([
      {
        $match: { author: mongoose.Types.ObjectId.createFromHexString(userId) },
      },
      {
        $lookup: {
          from: 'recipes',
          localField: '_id',
          foreignField: 'comments',
          as: 'recipeComments',
        },
      },
      {
        $unwind: '$recipeComments',
      },
      {
        $group: {
          _id: null,
          recipeComments: {
            $push: {
              title: '$recipeComments.title',
              slug: '$recipeComments.slug',
              photo: '$recipeComments.photo',
              comments: {
                comment: '$comment',
                stars: '$stars',
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          recipeComments: 1,
        },
      },
    ]);


    // if (userDataAndRecipes.length === 0) {
    //   return null;
    // }

    const isFriend = sessionUser.friends.some(
      (friendId: mongoose.Types.ObjectId) => friendId.equals(userDataAndRecipes[0]._id
    ));

    const result = {
      _id: userDataAndRecipes[0]._id,
      fullname: userDataAndRecipes[0].fullname,
      image: userDataAndRecipes[0].image,
      created_at: userDataAndRecipes[0].created_at,
      recipesCount: userDataAndRecipes[0].recipesCount,
      friendsCount: userDataAndRecipes[0].friendsCount,
      recipesList: userDataAndRecipes[0].recipesList,
      recipeComments: userReviews.length === 0 ? [] : userReviews[0].recipeComments,
      isFriend: isFriend
    };

    return result;


  } catch (error: any) {
    throw new Error(`Coudn't fetch the user: ${error.message}`)
  }

}

export async function fetchSessionProfile(email: string){

  try {

    connectToDB()

    const userDataAndRecipes = await User.aggregate([
      { $match: { email: email } },
      {
        $lookup: {
          from: 'recipes',
          localField: '_id',
          foreignField: 'author',
          as: 'recipesList',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'friends',
          foreignField: '_id',
          as: 'friendsList',
        },
      },
      {
        $addFields: {
          recipesList: {
            $map: {
              input: '$recipesList',
              as: 'recipe',
              in: {
                _id: { $toString: '$$recipe._id' },
                title: '$$recipe.title',
                slug: '$$recipe.slug',
                rating: '$$recipe.rating',
                photo: '$$recipe.photo',
                comments_no: '$$recipe.comments_no',
                created_at: '$$recipe.created_at',
                prep_time: '$$recipe.prep_time',
              },
            },
          },
          friendsList: {
            $map: {
              input: '$friendsList',
              as: 'friend',
              in: {
                _id: { $toString: '$$friend._id' },
                fullname: '$$friend.fullname',
                image: '$$friend.image',
                created_at: {
                  $dateToString: {
                    format: "%d.%m.%Y",
                    date: "$$friend.created_at",
                    timezone: "Europe/Bucharest",
                  },
                },
                recipes: { $size: { $ifNull: ['$$friend.recipes', []] } },
                friends: { $size: { $ifNull: ['$$friend.friends', []] } },
                comments: 0,
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 1,
          fullname: 1,
          image: 1,
          friendsList: 1,
          recipesList: 1,
        },
      },
    ]);

    
    
    if (userDataAndRecipes.length === 0) {
      throw new Error('User not found');
    }

    const userReviews = await Comment.aggregate([
      {
        $match: { author: userDataAndRecipes[0]._id },
      },
      {
        $lookup: {
          from: 'recipes',
          localField: '_id',
          foreignField: 'comments',
          as: 'recipeComments',
        },
      },
      {
        $unwind: '$recipeComments',
      },
      {
        $group: {
          _id: null,
          recipeComments: {
            $push: {
              id: '$_id',
              title: '$recipeComments.title',
              slug: '$recipeComments.slug',
              photo: '$recipeComments.photo',
              comments: {
                comment: '$comment',
                stars: '$stars',
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          recipeComments: 1,
        },
      },
    ]);

    const result = {
      _id: userDataAndRecipes[0]._id,
      fullname: userDataAndRecipes[0].fullname,
      image: userDataAndRecipes[0].image,
      friends: userDataAndRecipes[0].friendsList,
      recipes: userDataAndRecipes[0].recipesList,
      recipeComments: userReviews.length === 0 ? [] : userReviews[0].recipeComments,
    };

    return result;
    
  } catch (error: any) {
    throw new Error(`Can't fetch the profile: ${error.message}`)
  }

}


export async function followUser(
  userToFollowId: string, 
  userEmail: string,
  path: string
  ) {
   try {
    
    connectToDB()

    const user = await User.findOne({ email: userEmail });

    if(!user){
      throw new Error("Session not found")
    }

    const userToFollow = await User.findOne({ _id: userToFollowId });

    if(!userToFollow){
      throw new Error("User not found")
    }

    user.friends.push(userToFollow._id)
    await user.save()

    revalidatePath(path)

   } catch (error: any) {
    throw new Error(`Coudn't follow user: ${error.message}`)
   }
}

export async function unfollowUser(
  userToFollowId: string, 
  userEmail: string,
  path: string
  ) {
   try {
    
    connectToDB()

    const user = await User.findOne({ email: userEmail });

    if(!user){
      throw new Error("Session not found")
    }

    const userToFollow = await User.findOne({ _id: userToFollowId });

    if(!userToFollow){
      throw new Error("User not found")
    }

    user.friends.pull(userToFollow._id)
    await user.save()

    revalidatePath(path)

   } catch (error:any) {
    throw new Error(`Coudn't unfollow user: ${error.message}`)
   }
}

export async function updateProfile(
  userEmail: string,
  path: string,
  formData?: any, //! INLOCUIT CU FormData
) {

  try {

    connectToDB()

    if(formData?.photo){
      await User.findOneAndUpdate(
        { email: userEmail },
        {
          image: formData.photo
        }
      )
    } else {
      const user = await User.findOne({ email: userEmail})

      const userPhotoURL = user.image.split('/')
      const fileId: string | string[] = userPhotoURL[userPhotoURL.length - 1]
      
      await utapi.deleteFiles(fileId);
      // const files = await utapi.listFiles();
      // if(files && files.length > 0){
      //   files.map(async (file) => {
      //     if(file.key == fileId){
      //       await utapi.deleteFiles(fileId);
      //     }
      //   })
      // }

      await User.findOneAndUpdate(
        { _id: user._id },
        { $unset: { image: '' } }
      );

    }

    revalidatePath(path)

  } catch (error: any) {
    throw Error(`Can't update profile: ${error.message}`)
  }

}


export async function fetchPocketLists(userEmail: string) {
  connectToDB();

  try {

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error("User not found");
    }


    const pocketLists = user.pocket.map((pocket: any) => pocket.pocket_name)
      .sort((a: string, b: string) => a.localeCompare(b, undefined, { sensitivity: 'base' }));


    let recipes: any[] = [];

    if (pocketLists.length > 0) {
      const firstPocket = user.pocket.find((pocket: any) => pocket.pocket_name === pocketLists[0]);

      if (firstPocket) {
        recipes = await Recipe.find({ _id: { $in: firstPocket.elements } })
          .populate({
            path: "author",
            model: User,
            select: "fullname _id",
          })
          .select("slug title photo created_at rating comments_no prep_time")
          .lean()
          .exec();
      }
    }

    return { pocketLists, recipes };
  } catch (error: any) {
    throw new Error(`Can't fetch pocket lists: ${error.message}`);
  }
}

export async function fetchPocketNames(userEmail: string){
  connectToDB();

  try {

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error("User not found");
    }

    const result = user.pocket.map((pocket: any) => pocket.pocket_name).sort();

    if (!result || result.length === 0) {
      return []
    }

    return result

  } catch (error: any) {
    throw new Error(`Can't fetch pocket names: ${error.message}`);
  }
}

export async function fetchPocket(userEmail: string, pocketName: string) {
  connectToDB();

  try {

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error("User not found");
    }

    const pocketLists = user.pocket.map((pocket: any) => pocket.pocket_name)
    .sort((a: string, b: string) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    pocketName = pocketName.replaceAll("-", " ").toLowerCase()
    const pocketList = user.pocket.find((pocket: any) => pocket.pocket_name.toLowerCase() === pocketName);

    if (!pocketList) {
      throw new Error(`Pocket list with name '${pocketName}' not found`);
    }

    const recipes = await Recipe.find({ _id: { $in: pocketList.elements } })
      .populate({
        path: "author",
        model: User,
        select: "fullname _id",
      })
      .select("slug title photo created_at rating comments_no prep_time")
      .lean()
      .exec();

    return {pocketLists, recipes};
  } catch (error: any) {
    throw new Error(`Can't fetch recipes by pocket name: ${error.message}`);
  }
}

export async function createPocketList(pocketName: string, userEmail: string, path: string) {
  connectToDB();

  try {

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error("User not found");
    }

    const existingPocket = user.pocket.find((pocket: any) => pocket.pocket_name === pocketName);

    if (existingPocket) {
      throw new Error(`A pocket with the name '${pocketName}' already exists`);
    }

    const newPocket = {
      pocket_name: pocketName,
      elements: [],
    };


    user.pocket.push(newPocket);

    await user.save();

    revalidatePath(path)

  } catch (error: any) {
    throw new Error(`Can't create pocket: ${error.message}`);
  }
}

export async function deletePocketList(pocketName: string, userEmail: string, path: string) {
  connectToDB();

  try {

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error("User not found");
    }

    const pocketIndex = user.pocket.findIndex((pocket: any) => pocket.pocket_name === pocketName);

    if (pocketIndex === -1) {
      throw new Error(`Pocket with the name '${pocketName}' not found`);
    }


    user.pocket.splice(pocketIndex, 1);

    await user.save();

    revalidatePath(path)

  } catch (error: any) {
    throw new Error(`Can't delete pocket: ${error.message}`);
  }
}

export async function editPocketList(pocketName: string, newName: string, userEmail: string, path: string){

  try {
    connectToDB()

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error("User not found");
    }

    const pocketObj = user.pocket.find((pocket: any) => pocket.pocket_name === pocketName);

    if (!pocketObj) {
      throw new Error(`A pocket with the name '${pocketName}' doesn't exist`);
    }

    pocketObj.pocket_name = newName

    await user.save()

    revalidatePath(path)

  } catch (error: any) {
    throw new Error(`Can't edit pocket: ${error.message}`);
  }

}


export async function getSearchResults(mode: string, keyword: string) {

  try {
    connectToDB()

    let results: any[] = []

    if(mode == 'recipes'){
      results = await Recipe.find({
        title: { $regex: new RegExp(keyword, 'i') },
      }).select('title slug photo').lean().exec();
    }

    if(mode == 'users'){
      results = await User.find({
        fullname: { $regex: new RegExp(keyword, 'i') },
      }).select('fullname _id image').lean().exec();
    }
    
    
    return results
    
  } catch (error: any) {
    throw new Error(`Can't get search results for mode ${mode}: ${error.message}`)
  }

}


interface RecommendationResult {
  recipes: any[]; // Modify the type as per your Recipe model
  isNext: boolean;
}

async function fetchRecommendations(userEmail: string, pageNumber: number = 1, pageSize: number = 20) {
  connectToDB();

  try {
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error("User not found");
    }


    const { friends, pocket } = user;
    const hasFriends = friends.length > 0;
    const hasPocketRecipes = pocket.some((pocketItem: any) => pocketItem.elements.length > 0);

    const skipAmount = (pageNumber-1) * pageSize
    let recommendations: RecommendationResult = { recipes: [], isNext: false };

    if (!hasFriends && !hasPocketRecipes) {
      // Case 1: User doesn't have friends or recipes in the pocket
      if(pageNumber == 1 || pageNumber == 2){
        recommendations = await fetchRecipes(pageNumber, pageSize);
      } else{
        recommendations = await fetchRecipes(2, pageSize);
      }
      if(pageNumber == 2){
        recommendations.isNext = false
      }
    } else if (hasFriends && !hasPocketRecipes) {
      // Case 2: User has friends but no pocket recipes
      const friendsRecipes = await fetchFriendsRecipes(user);
      const recipesFromDiscover = await fetchRecipes(1, pageSize*2);

      recommendations.recipes = [...friendsRecipes, ...recipesFromDiscover.recipes];
      recommendations.recipes = recommendations.recipes.filter((recipe, index, self) =>
        index === self.findIndex((r) => r._id.toString() === recipe._id.toString())
      );

      const total = recommendations.recipes.length;

      recommendations.recipes = recommendations.recipes.slice(skipAmount, skipAmount + pageSize);
      
      recommendations.isNext = total > skipAmount + recommendations.recipes.length

    } else if (!hasFriends && hasPocketRecipes) {
      // Case 3: User doesn't have friends but has pocket recipes
      const pocketRecommendations = await fetchPocketRecommendations(user);
      const recipesFromDiscover = await fetchRecipes(1, pageSize*2);

      recommendations.recipes = [...pocketRecommendations, ...recipesFromDiscover.recipes];
      recommendations.recipes = recommendations.recipes.filter((recipe, index, self) =>
        index === self.findIndex((r) => r._id.toString() === recipe._id.toString())
      );

      const total = recommendations.recipes.length;

      recommendations.recipes = recommendations.recipes.slice(skipAmount, skipAmount + pageSize);
      
      recommendations.isNext = total > skipAmount + recommendations.recipes.length
      

    } else {
      // Case 4: User has both friends and pocket recipes
      const friendsRecipes = await fetchFriendsRecipes(user);
      const pocketRecommendations = await fetchPocketRecommendations(user);
      const recipesFromDiscover = await fetchRecipes(1, pageSize*2);

      recommendations.recipes = [...friendsRecipes, ...pocketRecommendations, ...recipesFromDiscover.recipes];
      recommendations.recipes = recommendations.recipes.filter((recipe, index, self) =>
        index === self.findIndex((r) => r._id.toString() === recipe._id.toString())
      );
      
      const total = recommendations.recipes.length;

      recommendations.recipes = recommendations.recipes.slice(skipAmount, skipAmount + pageSize);
      
      recommendations.isNext = total > skipAmount + recommendations.recipes.length

    }

    // Randomize the order of recipes
    recommendations.recipes.sort(() => Math.random() - 0.5);
    return recommendations;

  } catch (error: any) {
    throw new Error(`Can't fetch recommendations: ${error.message}`);
  }
}


async function fetchFriendsRecipes(user: any) {
  try {
    const { friends } = user;

    // Check if there are any friends
    if (friends.length === 0) {
      return [];
    }

    const friendIds = friends.map((friend: any) => friend._id);

    // Query recipes authored by friends
    const recipes = await Recipe.find({ author: { $in: friendIds } })
      .sort({ created_at: 'desc' })
      .populate({
        path: 'author',
        model: 'User',
        select: 'fullname image',
      })
      .select('_id title slug description photo prep_time comments_no rating created_at')
      .exec();

    return recipes;
  } catch (error: any) {
    throw new Error(`Can't fetch friend's recipes: ${error.message}`);
  }
}

async function fetchPocketRecommendations(user: any) {
  try {
    const { pocket } = user;

    // Check if there are any pocket lists with recipes
    const pocketLists = pocket.filter((pocketItem: any) => pocketItem.elements.length > 0);

    if (pocketLists.length === 0) {
      return [];
    }

    const categories: Set<string> = new Set();
    const excludedRecipeIds: Set<string> = new Set();

    // Collect categories from pocket lists
    for (const pocketItem of pocketLists) {
      for (const recipeId of pocketItem.elements) {
        const recipe: any = await Recipe.findById(recipeId).select('category').lean();
        if (recipe && recipe.category) {
          categories.add(recipe.category);
        }
        // Add the recipe ID to the excluded list
        excludedRecipeIds.add(recipeId.toString());
      }
    }

    const categoryArray = Array.from(categories);

    // Query recipes by category
    const recipes = Recipe.find({ category: { $in: categoryArray }, _id: { $nin: Array.from(excludedRecipeIds) } })
      .sort({ created_at: 'desc' })
      .populate({
        path: 'author',
        model: 'User',
        select: 'fullname image',
      })
      .select('_id title slug description photo prep_time comments_no rating created_at')
      .exec();

    return recipes;
  } catch (error: any) {
    throw new Error(`Can't fetch pocket recommendations: ${error.message}`);
  }
}

export default fetchRecommendations;
