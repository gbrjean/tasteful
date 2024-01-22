require('dotenv').config({ path: '.env.local' });
import { connectToDB } from "../../lib/mongoose";
import User from "../../lib/models/user.model";
import { dummyUsers } from "../../constants/dummy_users";


const uploadUsers = async () => {
  try {
    connectToDB()
    await User.insertMany(dummyUsers)
    console.log('Dummy users seeded');
  } catch (error: any) {
    console.log(`Error seeding users: ${error.message}`)
  }
}

uploadUsers();