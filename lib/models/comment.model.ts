import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  comment: String,
  parent_id: { type: String },
  children: [
    { type: Schema.Types.ObjectId, 
      ref: 'Comment' 
    }
  ],
});


const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export default Comment;