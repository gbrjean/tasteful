import * as z from 'zod';

const ingredientSchema = z.object({
  name: z.string().min(1).max(255).nonempty({ message: "This field is required" }),
  quantity: z.string().min(1).max(255).nonempty({ message: "This field is required" }),
});

const materialSchema = z.object({
  name: z.string().min(1).max(255).nonempty({ message: "This field is required" }),
  ingredients: z.array(ingredientSchema).min(1, { message: "Fill all the inputs" }),
});

const instructionSchema = z.object({
  instruction: z.string().min(1).nonempty({ message: "Instructions are required" }),
});

export const RecipeValidation = z.object({
  title: z.string().min(1).max(9999).nonempty({ message: "This field is required" }),
  description: z.string().min(1).max(9999).nonempty({ message: "This field is required" }),
  photo: z.string().min(1),
  materials: z.array(materialSchema).min(1, { message: "Fill all the inputs" }),
  instructions: z.array(instructionSchema).min(1, { message: "Instructions are required" }),
  prep_time: z.string().min(1, { message: "Select a preparation time" }),
  category: z.string().min(1, { message: "Select a category" }),
});

export const CommentValidation = z.object({
  rating: z.string().min(1, {message: "Select a rating"}).max(5),
  comment: z.string().nonempty({ message: "Write a comment" })
            .min(10, { message: "Write at least 10 characters" }),
});

export const ReplyValidation = z.object({
  comment: z.string().nonempty({ message: "Write a comment" })
            .min(10, { message: "Write at least 10 characters" }),
});