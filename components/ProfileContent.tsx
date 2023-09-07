"use client"

import { useState } from "react"
import RecipeCardUser from "./RecipeCardUser"
import ReviewCardUser from "./ReviewCardUser"
import UserCard from "./UserCard"
import SignOut from "./SignOut"
import { ProfileUserIcon } from "@public/assets/icons/ProfileUserIcon"
import { ProfileFriendsIcon } from "@public/assets/icons/ProfileFriendsIcon"
import { ProfileReviewsIcon } from "@public/assets/icons/ProfileReviewsIcon"
import { ProfileRecipesIcon } from "@public/assets/icons/ProfileRecipesIcon"
import { useSession } from "next-auth/react"

type props = {
  isProfile?: boolean;
}


const showUserContent = () => {

  type Tabs = "recipes" | "reviews";

  const [tab, setTab] = useState<Tabs>("recipes");

  return (
    <div className="profile-content">
      
      { tab == "recipes" && (
        <div className="profile-content-body recipe-card-group-profile">
          <RecipeCardUser /><RecipeCardUser /><RecipeCardUser />
        </div>
      )}

      { tab == "reviews" && (
        <div className="profile-content-body review-card-group">
          <ReviewCardUser /><ReviewCardUser /><ReviewCardUser />
        </div>
      )}

      <div className="profile-content-navigation">
        <div className={tab == "recipes" ? "profile-content-navigation-item --active" : "profile-content-navigation-item"} 
             onClick={() => setTab("recipes")} >
          <ProfileRecipesIcon />
          <span>Recipes</span>
        </div>

        <div className={tab == "reviews" ? "profile-content-navigation-item --active" : "profile-content-navigation-item"}
             onClick={() => setTab("reviews")}>
          <ProfileReviewsIcon />
          <span>Reviews</span>
        </div>
      </div>

    </div>
  )
}

const showProfileContent = () => {

  const { data: session} = useSession()


  type Tabs = "data" | "friends" | "recipes" | "reviews";

  const [tab, setTab] = useState<Tabs>("data");

  return (
    <div className="profile-content">

      { tab == "data" && (
        <div className="profile-content-body data-group">
          <div className="profile-input-group">
            {/* //TODO: Implementare react hook form + zod */}

            <div className="profile-input">
              <label htmlFor="username">FULL NAME</label>
              <input type="text" name="username" defaultValue={session?.user?.name ?? ''} />
              <div className="line"></div>
            </div>

            <div className="profile-input">
              <label htmlFor="email">E-MAIL</label>
              <input type="text" name="email" defaultValue={session?.user?.email ?? ''} autoComplete="off" />
              <div className="line"></div>
            </div>

            <div className="profile-input">
              <label htmlFor="password">PASSWORD</label>
              <input type="password" name="password" placeholder="Insert new password" autoComplete="new-password" />
              <div className="line"></div>
            </div>

          </div>

          <SignOut />
        </div>
      )}

      { tab == "friends" && (
        <div className="profile-content-body user-card-group">
          <UserCard /><UserCard /><UserCard /><UserCard /><UserCard /><UserCard />
        </div>
      )}

      { tab == "reviews" && (
        <div className="profile-content-body review-card-group">
          <ReviewCardUser /><ReviewCardUser /><ReviewCardUser />
        </div>
      )}
      
      { tab == "recipes" && (
        <div className="profile-content-body recipe-card-group-profile">
          <RecipeCardUser /><RecipeCardUser /><RecipeCardUser />
        </div>
      )}


      <div className="profile-content-navigation">

        <div className={tab == "data" ? "profile-content-navigation-item --active" : "profile-content-navigation-item"}
             onClick={() => setTab("data")}>
          <ProfileUserIcon />
          <span>Personal data</span>
        </div>

        <div className={tab == "friends" ? "profile-content-navigation-item --active" : "profile-content-navigation-item"} 
             onClick={() => setTab("friends")}>
          <ProfileFriendsIcon />
          <span>My friends</span>
        </div>

        <div className={tab == "reviews" ? "profile-content-navigation-item --active" : "profile-content-navigation-item"} 
             onClick={() => setTab("reviews")}>
          <ProfileReviewsIcon />
          <span>My Reviews</span>
        </div>

        <div className={tab == "recipes" ? "profile-content-navigation-item --active" : "profile-content-navigation-item"} 
             onClick={() => setTab("recipes")}>
          <ProfileRecipesIcon />
          <span>My Recipes</span>
        </div>

      </div>

    </div>
  )
}

const ProfileContent = ({isProfile} : props) => {

  return isProfile ? showProfileContent() : showUserContent()

}

export default ProfileContent