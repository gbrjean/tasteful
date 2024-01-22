require('dotenv').config({ path: '.env.local' });
import { connectToDB } from "../../lib/mongoose";
import User from "../../lib/models/user.model";
import Recipe from "../../lib/models/recipe.model";
import Comment from "../../lib/models/comment.model";
import { dummyRatings } from "../../constants/dummy_comments";


const uploadRecipeRatings = async () => {
  try {

    connectToDB()

    const recipes = await Recipe.find({});
    const totalUsers = await User.countDocuments();

    for (const recipe of recipes) {
      // Generate a random number between 2 and 5 for the number of comments
      const numComments = Math.floor(Math.random() * 4) + 2;

      for (let i = 0; i < numComments; i++) {

        const user = await User.findOne().skip(Math.floor(Math.random() * totalUsers)).limit(1)

        const randomCommentObj = dummyRatings[Math.floor(Math.random() * dummyRatings.length)];
        const { commentText, starsRating } = randomCommentObj;

        const newComment = new Comment({
          author: user._id,
          comment: commentText,
          stars: starsRating,
        });


        const savedComment = await newComment.save();

        recipe.comments.push(savedComment._id);
        user.reviews_no++;

        recipe.topLevelComments_no++;
        recipe.comments_no++;
        recipe.ratingSum += starsRating;
        recipe.rating = recipe.ratingSum / recipe.topLevelComments_no;

        await recipe.save();
        await user.save();
      }
      
    }

    
    console.log('Dummy recipe ratings seeded');
  } catch (error: any) {
    console.log(`Error seeding ratings: ${error.message}`)
  }
}

uploadRecipeRatings();