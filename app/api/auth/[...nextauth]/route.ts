import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@lib/mongoose";
import User from "@lib/models/user.model";
import bcrypt from "bcryptjs"
import { NextAuthOptions } from "next-auth";
import CustomSession from "@lib/CustomSession";



export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credential",
      name: "credential",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      async authorize(credentials){

        try {
          connectToDB()
          const user = await User.findOne({
            email: credentials?.email
          })

          if(!user){
            throw new Error("No user found with this email")
          }

          const passwordsMatch =  await bcrypt.compare(credentials!.password, user.password);

          if(!passwordsMatch){
            throw new Error("Invalid email or password")
          }

          return {
            id: user._id,
            email: user.email,
            name: user.fullname,
          };

        } catch (error: any) {
          throw new Error(`Failed to authenticate user: ${error.message}`)
        }

      },

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({user, account}){

      try {
        if (account?.provider === 'google' || account?.provider === 'facebook'){
          connectToDB();
          
          const userExists = await User.findOne({email: user?.email})
          let newUser: any;
          if(!userExists){
            newUser = new User({
              fullname: user?.name,
              email: user?.email,
              image: user?.image,
            });
            await newUser.save();
          }

          user.id = userExists ? userExists._id : newUser._id;

        }
        return true;
      } catch (error: any) {
        console.log(error);
        return false;
      }
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }) as CustomSession,
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }