"use client"

import { dummyRecipes } from "@constants/dummy_recipes";
import { uploadRecipes } from "@lib/seeders/recipes.seed";
import { useEffect, useState } from "react";
import { useUploadThing } from "@lib/uploadthing";

type Recipe = {
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
};

const Uploader = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [file, setFile] = useState<File | null>(null); // Use a single file, not an array
  const { startUpload } = useUploadThing("media");

  const uploadData = async (recipeIndex: number) => {
    const recipe = recipes[recipeIndex];

    // Convert recipe.photo to File
    const response = await fetch(recipe.photo);
    if (!response.ok) {
      throw new Error(`Failed to fetch recipe photo: ${response.statusText}`);
    }
    const recipeFile = await response.blob();

    const lastSlashIndex = recipe.photo.lastIndexOf('/');
    const filename = recipe.photo.substring(lastSlashIndex + 1);
    const mimeType = recipeFile.type;

    const fileObj = new File([recipeFile], filename, { type: mimeType });

    // Update the file state
    setFile(fileObj);

    try {
      // Upload the file
      const uploadedFiles = await startUpload([fileObj]);
      console.log("Uploaded files: " + uploadedFiles)
      if (uploadedFiles && uploadedFiles[0].url) {
        console.log("Uploaded file URL: " + uploadedFiles[0].url)
        // Replace recipe.photo with the new URL
        const updatedRecipe = { ...recipe, photo: uploadedFiles[0].url };

        // Update the recipe in the recipes state
        setRecipes((prevRecipes) => [
          ...prevRecipes.slice(0, recipeIndex),
          updatedRecipe,
          ...prevRecipes.slice(recipeIndex + 1),
        ]);

        try {
          // Insert the recipe into the database
          await uploadRecipes(updatedRecipe);
        } catch (error) {
          console.log(`Error for create Recipe: ${error}`);
          return;
        }

      } else {
        console.log(`No imgRes: ${uploadedFiles}`);
        return;
      }
    } catch (error) {
      console.log(`Error for upload thing: ${error}`);
      return;
    }

  };

  const handleData = async () => {
    console.log("helloo");
    if (recipes && recipes.length > 0) {
      for (let i = 0; i < recipes.length; i++) {
        await uploadData(i);
        console.log(`Completed recipe: ${i}`);
      }
    }
  };

  useEffect(() => {
    setRecipes(dummyRecipes);
    handleData();
  }, []);

  return (
    <pre>{JSON.stringify(recipes, null, 2)}</pre>
  );
};

export default Uploader;
