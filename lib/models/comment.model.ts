import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  comment: { type: String, required: true },
  stars: String,
  parent_id: { type: String },
  children: [
    { type: Schema.Types.ObjectId, 
      ref: 'Comment' 
    }
  ],
  children_no: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
});


const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export default Comment;