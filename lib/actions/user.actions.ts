"use server"

import { connectToDB } from "@lib/mongoose";
import User from "@lib/models/user.model";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { Session } from "next-auth";



interface classicRegister {
  fullname: string;
  email: string;
  password: string;
}


export async function ClassicRegister({
  fullname, email, password
}: classicRegister): Promise<void> {

  try {
    connectToDB()

    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({fullname, email, password: hashedPassword})
    
  } catch (error: any) {
    throw new Error(`Error classic register: ${error.message}`)
  }
  
}


export async function getCurrentUser(): Promise<Session | null> {
  const session = await getServerSession(authOptions)

  return session
}

