import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: String,
  image: String,
  recipes: [
    { type: Schema.Types.ObjectId,
       ref: 'Recipe'
    }
  ],
  friends: [
    { type: Schema.Types.ObjectId,
      ref: 'User' 
    }
  ],
  pocket: {
    pocket_name: String,
    elements: [
      { type: Schema.Types.ObjectId, 
        ref: 'Recipe' 
      }
    ],
  },
  created_at: { type: Date, default: Date.now },
});


const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;