"use server"

import { revalidatePath } from "next/cache";
import { connectToDB } from "@lib/mongoose";
import Recipe from "@lib/models/recipe.model";
import Comment from "@lib/models/comment.model";
import User from "@lib/models/user.model";



export async function addCommentToRecipe(
  recipeId: string,
  commentText: string,
  starsRating: number,
  userEmail: string,
  path: string,
) {

  connectToDB();

  try {

    const recipe = await Recipe.findById(recipeId);
    
    if (!recipe) {
      throw new Error('Recipe not found');
    }

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error('User not found');
    }

    const newComment = new Comment({
      author: user._id,
      comment: commentText,
      stars: starsRating,
    });

    const savedComment = await newComment.save()

    recipe.comments.push(savedComment._id);
    user.reviews_no++;

    recipe.topLevelComments_no++;
    recipe.comments_no++;
    recipe.ratingSum += starsRating;
    recipe.rating = recipe.ratingSum / recipe.topLevelComments_no;

    await recipe.save();
    await user.save();

    revalidatePath(path)

    
  } catch (error: any) {
    throw new Error(`Can't add comment to recipe: ${error.message}`);
  }

}

export async function removeCommentFromRecipe(
  commentId: string,
  userEmail: string,
  path: string,
) {

  try {
    connectToDB()

    const comment = await Comment.findById(commentId);
    if (!comment) {
      throw new Error('Comment not found');
    }

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      throw new Error('User not found');
    }

    const recipe = await Recipe.findOne({ comments: commentId });

    recipe.comments.pull(commentId);
    user.reviews_no--;

    recipe.topLevelComments_no--;
    recipe.comments_no--;
    recipe.ratingSum -= +comment.stars;
    recipe.rating = recipe.ratingSum / recipe.topLevelComments_no;


    await Comment.deleteOne(comment)
    await recipe.save()
    await user.save()

    revalidatePath(path)
    
  } catch (error: any) {
    throw Error(`Can't delete comment: ${error.message}`)
  }

}

export async function editCommentToRecipe(
  recipeId: string,
  commentId: string,
  commentText: string,
  starsRating: number,
  path: string,
) {

  try {

    connectToDB()

    const comment = await Comment.findById(commentId);

    if (!comment) {
      throw new Error('Comment not found');
    }

    const recipe = await Recipe.findById(recipeId)

    const newComment = await Comment.findOneAndUpdate(
      { _id: commentId },
      {
        comment: commentText,
        stars: starsRating,
      },
      { new: true }
    )

    if (!newComment) {
      throw new Error('Comment not updated');
    }

    recipe.ratingSum += starsRating - comment.stars;
    recipe.rating = recipe.ratingSum / recipe.topLevelComments_no;
    
    revalidatePath(path)
    
  } catch (error: any) {
    throw new Error(`Can't edit comment to recipe: ${error.message}`);
  }

}

export async function addCommentToComment(
  parentId: string,
  userEmail: string,
  commentText: string,
  path: string,
) {

  connectToDB();

  try {

    const parentComment = await Comment.findById(parentId);
    
    if (!parentComment) {
      throw new Error("Parent comment not found");
    }

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error('User not found');
    }

    const nestedComment = new Comment({
      author: user._id,
      comment: commentText,
      parent_id: parentId,
    });
    
    const savedNestedComment = await nestedComment.save();

    parentComment.children.push(savedNestedComment._id);
    parentComment.children_no++;

    await parentComment.save();

    const parentRecipe = await Recipe.findOne({ comments: parentComment._id });

    if (!parentRecipe) {
      throw new Error("Parent recipe not found");
    }

    parentRecipe.comments_no++;

    await parentRecipe.save()
    

    revalidatePath(path)
    
  } catch (error: any) {
    throw new Error(`Can't add comment to comment: ${error.message}`);
  }


}

export async function removeCommentfromComment(
  commentId: string,
  path: string,
) {

  try {
    
    connectToDB()

    const comment = await Comment.findById(commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }

    const parentComment = await Comment.findById(comment.parent_id);
    if (!parentComment) {
      throw new Error("Parent comment not found");
    }
    
    const parentRecipe = await Recipe.findOne({ comments: parentComment._id });

    parentComment.children.pull(comment._id);
    parentComment.children_no--;

    await parentComment.save()

    parentRecipe.comments_no--;

    await parentRecipe.save()

    revalidatePath(path)

  } catch (error: any) {
    throw Error(`Can't delete comment: ${error.message}`)
  }

}

export async function editCommentToComment(
  replyId: string,
  commentText: string,
  path: string,
) {

  try {

    connectToDB()

    await Comment.findOneAndUpdate(
      { _id: replyId },
      {
        comment: commentText,
      }
    )


    revalidatePath(path)
    
  } catch (error: any) {
    throw new Error(`Can't edit comment to comment: ${error.message}`);
  }

}