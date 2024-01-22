"use client"

import { Button } from "./Button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from 'zod';
import { ProfileValidation } from "@lib/validations/profile"
import { followUser, unfollowUser } from "@lib/actions/user.actions"
import { usePathname } from "next/navigation"
import { updateProfile } from "@lib/actions/user.actions"
import { ChangeEvent, useState } from "react"
import { isBase64Image } from "@lib/utils"
import { useUploadThing } from "@lib/uploadthing"


type props = {
  isProfile?: boolean;
  user?: any;
  session?: string
}


const showUserHeader = ({user, session}: {user: any, session?: string}) => {

  const pathname = usePathname()

  const handleFollowUser = async () => {
    if(session){
      try {
        await followUser(user?._id, session, pathname) 
      } catch (error: any) {
        console.log(error.message)
      }
    }
  }

  const handleUnfollowUser = async () => {
    if(session){
      try {
        await unfollowUser(user?._id, session, pathname) 
      } catch (error: any) {
        console.log(error.message)
      }
    } 
  }

  return (
    <div className="profile-header">
      <img className="profile-picture" src={user?.image || "/assets/images/pfp.png"} alt="" />
      <div className="profile-data">
        <div className="user-card-data">
          <div>
            <span>Date joined</span>
            <span>{user?.created_at}</span>
          </div>
          <div>
            <span>Recipes</span>
            <span>{user?.recipesCount}</span>
          </div>
          <div>
            <span>Friends</span>
            <span>{user?.friendsCount}</span>
          </div>
          <div>
            <span>Reviews</span>
            <span>{user?.recipeComments?.length}</span>
          </div>
        </div>

        { user?.isFriend ? (
          <Button onClick={handleUnfollowUser} gap="narrow" type="outline" color="colorful" text="Unfriend"  />
        ) : (
          <Button onClick={handleFollowUser} gap="narrow" type="outline" color="colorful" text="Add friend"  />
        )}
        
      </div>
      <div className="user-card-data">
          <div>
            <span>Date joined</span>
            <span>{user?.created_at}</span>
          </div>
          <div>
            <span>Recipes</span>
            <span>{user?.recipesCount}</span>
          </div>
          <div>
            <span>Friends</span>
            <span>{user?.friendsCount}</span>
          </div>
          <div>
            <span>Reviews</span>
            <span>{user?.recipeComments?.length}</span>
          </div>
        </div>
    </div>
  )
}

const showProfileHeader = ({user, session}: {user: any, session: string}) => {

  const pathname = usePathname()

  const [files, setFiles] = useState<File[]>([])
  const { startUpload } = useUploadThing("media")

  const form = useForm<z.infer<typeof ProfileValidation>>({
    resolver: zodResolver(ProfileValidation)
  })

  const handleChangePhoto = async (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) => {
    e.preventDefault()

    const fileReader = new FileReader()

    if(e.target.files && e.target.files.length > 0){
      const file = e.target.files[0]

      setFiles(Array.from(e.target.files))

      if(!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        fieldChange(imageDataUrl)
      }

      fileReader.readAsDataURL(file)
    }

  }

  async function onSubmit(data: z.infer<typeof ProfileValidation>){
    const blob = data.photo

    const hasImageChanged = isBase64Image(blob)
    if(hasImageChanged){
      const imgRes = await startUpload(files)

      if(imgRes && imgRes[0].url){
        data.photo = imgRes[0].url
      }

    }

    try {
      await updateProfile(session, pathname, data);
    } catch (error: any) {
      console.error("Error creating recipe:", error.message);
    }
  }

  const handleDeletePhoto = async () => {
    if(window.confirm('Are you sure you want to delete your profile photo?')) {
      await updateProfile(session, pathname)
    } else return
  }


  return (
   
    <form onSubmit={form.handleSubmit(onSubmit)} >
      <div id="page-header">
        <h1>Profile</h1>
        <input type="submit" value="Save profile" className="btn btn-large btn-full btn-colorful" />
      </div>
      
      <Controller
        name="photo"
        control={form.control}
        defaultValue=""
        render={({ field }) => (
          <div className="profile-header">
            { field.value ? (
              <img className="profile-picture" src={field.value} alt="" />
            ) : (
              <img className="profile-picture" src={user || "/assets/images/pfp.png"} alt="" />
            )}
            <div className="profile-ctas">
              <label htmlFor="change-image" className="btn btn-large btn-outline btn-colorful">
                <span>Change photo</span>
                <input
                  type="file"
                  id="change-image"
                  accept="image/*"
                  style={{ opacity: 0, visibility: 'hidden', width: 0 }}
                  onChange={(e) => handleChangePhoto(e, field.onChange)}
                />
              </label>
              <Button onClick={handleDeletePhoto} gap="large" type="outline" color="gray" text="Delete photo" />
            </div>
          </div>
        )}
      />
      
    </form>
      
  )

}

const UserHeader = ({isProfile, user, session} : props) => {

  return isProfile ? showProfileHeader({user: user, session: session!}) : showUserHeader({user: user, session: session})

}

export default UserHeader