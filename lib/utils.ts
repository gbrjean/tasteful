import mongoose from "mongoose";
import { z } from "zod"
import { RecipeValidation } from "@lib/validations/recipe"

type FormData = z.infer<typeof RecipeValidation>;


export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}

export function isBase64Image(data: string) {
  const regex = /^data:image\/(png|jpg|jpeg|gif);base64,/;
  return regex.test(data);
}


export const mapFormDataToRecipeModel = (formData: FormData, userId: mongoose.Types.ObjectId) => {
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


export function formatDateToString(date: string, currentDate: Date) {
  if (!date) return '';

  const dateObj = new Date(date);
  const diffInSeconds = Math.floor((currentDate.getTime() - dateObj.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return days === 1 ? '1 day ago' : `${days} days ago`;
  } else if (diffInSeconds < 604800 * 52) {
    const weeks = Math.floor(diffInSeconds / (86400 * 7));
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  } else if (diffInSeconds < 604800 * 52 * 100) {
    const years = Math.floor(diffInSeconds / (86400 * 365.25));
    return years === 1 ? '1 year ago' : `${years} years ago`;
  } else {
    return dateObj.toLocaleDateString();
  }
}

