require('dotenv').config({ path: '.env.local' });
import { connectToDB } from "../../lib/mongoose";
import User from "../../lib/models/user.model";
import Recipe from "../../lib/models/recipe.model";
import Comment from "../../lib/models/comment.model";
import { dummyReplies } from "../../constants/dummy_comments";

const uploadCommentReplies = async () => {
  try {

    connectToDB()

    const comments = await Comment.find({ stars: { $exists: true } });

    const totalUsers = await User.countDocuments();

    for (const comment of comments) {
      // Generate a random number between 0 and 2
      const numReplies = Math.random() < 0.6 ? 0 : Math.floor(Math.random() * 2) + 1;

      for (let i = 0; i < numReplies; i++) {

        const randomReply = dummyReplies[Math.floor(Math.random() * dummyReplies.length)];

        let user;
        do {
          user = await User.findOne().skip(Math.floor(Math.random() * totalUsers)).limit(1)
        } while (user._id.toString() === comment.author.toString());


        const nestedComment = new Comment({
          author: user._id,
          comment: randomReply,
          parent_id: comment._id,
        });

        const savedNestedComment = await nestedComment.save();

        comment.children.push(savedNestedComment._id);
        comment.children_no++;

        await comment.save();

        const parentRecipe = await Recipe.findOne({ comments: comment._id });

        if (!parentRecipe) {
          throw new Error("Parent recipe not found");
        }
    
        parentRecipe.comments_no++;
    
        await parentRecipe.save()
      }
    }
    
    console.log('Dummy comment replies seeded');
  } catch (error: any) {
    console.log(`Error seeding replies: ${error.message}`)
  }
}

uploadCommentReplies();