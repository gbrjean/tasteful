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
  comments_no: { type: Number, default: 0 },
  rating: { type: Number, default: 0.0 },
  ratingSum: { type: Number, default: 0 },
  topLevelComments_no: { type: Number, default: 0 },
  ingredients: [
    {
      material: String,
      elements: [
        {
          ingredient: String,
          quantity: String,
          unit: String,
        },
      ],
    },
  ],
  instructions: [{ instruction: String }],
  comments: [
    { type: Schema.Types.ObjectId, ref: 'Comment' }
  ],
});


const Recipe = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);

export default Recipe;