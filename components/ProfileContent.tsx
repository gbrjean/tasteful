"use client"

import { useState } from "react"
import RecipeCardUser from "./RecipeCardUser"
import ReviewCardUser from "./ReviewCardUser"
import UserCard from "./UserCard"
import { ProfileFriendsIcon } from "@public/assets/icons/ProfileFriendsIcon"
import { ProfileReviewsIcon } from "@public/assets/icons/ProfileReviewsIcon"
import { ProfileRecipesIcon } from "@public/assets/icons/ProfileRecipesIcon"

type props = {
  isProfile?: boolean;
  user?: any;
  session?: string;
}


const showUserContent = ({user}: any) => {

  type Tabs = "recipes" | "reviews";

  const [tab, setTab] = useState<Tabs>("recipes");

  return (
    <div className="profile-content">
      
      { tab == "recipes" && (
        <div className="profile-content-body recipe-card-group-profile">
          { user?.recipesList.length === 0 ? (
            <p>No recipes found</p>
          ) : (
            user?.recipesList.map((recipe: any) => (
              <RecipeCardUser CardDetails={recipe} />
            ))
          )}
        </div>
      )}

      { tab == "reviews" && (
        <div className="profile-content-body review-card-group">
          { user?.recipeComments.length === 0 ? (
            <p>No reviews found</p>
          ) : (
            user?.recipeComments.map((review: any) => (
              <ReviewCardUser CardDetails={review} />
            ))
          )}
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

const showProfileContent = ({user, session}: {user: any, session?: string}) => {


  type Tabs = "friends" | "recipes" | "reviews";

  const [tab, setTab] = useState<Tabs>("recipes");

  return (
    <div className="profile-content">
      
      { tab == "recipes" && (
        <div className="profile-content-body recipe-card-group-profile">
          { user?.recipes.length === 0 ? (
            <p>No recipes found</p>
          ) : (
            user?.recipes.map((recipe: any) => (  
              <RecipeCardUser CardDetails={recipe} session={session} hasActions />
            ))
          )}
        </div>
      )}

      { tab == "reviews" && (
        <div className="profile-content-body review-card-group">
          { user?.recipeComments.length === 0 ? (
            <p>No reviews found</p>
          ) : (
            user?.recipeComments.map((review: any) => (      
              <ReviewCardUser CardDetails={review} session={session} hasActions />
            ))
          )}
        </div>
      )}

      
      { tab == "friends" && (
        <div className="profile-content-body user-card-group">
          { user?.friends.length === 0 ? (
            <p>No friends found</p>
          ) : (
              user?.friends.map((friend: any) => (
                <UserCard 
                  key={friend._id}
                  id={friend._id}
                  fullName={friend.fullname}
                  image={friend.image}
                  created_at={friend.created_at}
                  recipes={friend.recipes}
                  friends={friend.friends}
                  comments={friend.comments}
                />
              ))
          )}
        </div>
      )}


      <div className="profile-content-navigation">

        <div className={tab == "recipes" ? "profile-content-navigation-item --active" : "profile-content-navigation-item"} 
             onClick={() => setTab("recipes")}>
          <ProfileRecipesIcon />
          <span>My Recipes</span>
        </div>

        <div className={tab == "reviews" ? "profile-content-navigation-item --active" : "profile-content-navigation-item"} 
             onClick={() => setTab("reviews")}>
          <ProfileReviewsIcon />
          <span>My Reviews</span>
        </div>

        <div className={tab == "friends" ? "profile-content-navigation-item --active" : "profile-content-navigation-item"} 
             onClick={() => setTab("friends")}>
          <ProfileFriendsIcon />
          <span>My friends</span>
        </div>

      </div>


    </div>
  )
}

const ProfileContent = ({isProfile, user, session} : props) => {

  return isProfile ? showProfileContent({user: user, session: session}) : showUserContent({user: user})

}

export default ProfileContent