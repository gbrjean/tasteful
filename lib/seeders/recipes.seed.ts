"use server"

import { connectToDB } from "@lib/mongoose";
import User from "@lib/models/user.model";
import Recipe from "@lib/models/recipe.model";


type formData = {
  title: string;
  slug: string;
  author: string;
  description: string;
  category: string;
  photo: string;
  prep_time: string;
  ingredients: {
    material: string;
    elements: {
        ingredient: string;
        quantity: string;
    }[];
  }[];
  instructions: {
    instruction: string;
  }[];
}

export const uploadRecipes =  async (formData: formData) => {
  try {
    connectToDB()

    const user = await User.findOne({ email: formData.author });

    if (!user) {
      throw new Error(`User not found for recipe author: ${formData.author}`)
    }

    const recipeData = {
      title: formData.title,
      slug: formData.slug,
      author: user._id,
      description: formData.description,
      category: formData.category,
      photo: formData.photo,
      prep_time: formData.prep_time,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
    };

    console.log(recipeData)

    const newRecipe = new Recipe(recipeData);
    const createdRecipe = await newRecipe.save();

    user.recipes.push(createdRecipe._id);
    await user.save();
    
    console.log('Dummy recipes seeded');
  } catch (error: any) {
    console.log(`Error seeding recipes: ${error.message}`)
  }
}