import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  description: String,
  category: { type: String, required: true },
  photo: String,
  created_at: { type: Date, default: Date.now },
  prep_time: String,
  comments_no: Number,
  rating: Number,
  ingredients: [
    {
      material: String,
      elements: [
        {
          ingredient: String,
          quantity: Number,
          unit: String,
        },
      ],
    },
  ],
  instructions: [{ instruction: String }],
  comments: [
    {
      author: { type: Schema.Types.ObjectId, ref: 'User' },
      created_at: { type: Date, default: Date.now },
      comment: String,
      replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    },
  ],
  reviews: [
    {
      author: { type: Schema.Types.ObjectId, ref: 'User' },
      stars: Number,
    },
  ],
});


const Recipe = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);

export default Recipe;