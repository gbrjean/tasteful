"use client"

import { Button } from "./Button"


type UserProps = {
  picture: string;
  date_joined: string;
  recipes: string;
  friends: string;
  reviews: string;
}

type props = {
  isProfile?: boolean;
  user?: UserProps;
}


const showUserHeader = () => {

  const handleClick = () => {

  }

  return (
    <div className="profile-header">
      <img className="profile-picture" src="/assets/images/pfp.jpg" alt="" />
      <div className="profile-data">
        <div className="user-card-data">
          <div>
            <span>Date joined</span>
            <span>20.06.2023</span>
          </div>
          <div>
            <span>Recipes</span>
            <span>47</span>
          </div>
          <div>
            <span>Friends</span>
            <span>200</span>
          </div>
          <div>
            <span>Reviews</span>
            <span>1084</span>
          </div>
        </div>
        <Button onClick={handleClick} gap="narrow" type="outline" color="colorful" text="Unfriend"  />
      </div>
      <div className="user-card-data">
          <div>
            <span>Date joined</span>
            <span>20.06.2023</span>
          </div>
          <div>
            <span>Recipes</span>
            <span>47</span>
          </div>
          <div>
            <span>Friends</span>
            <span>200</span>
          </div>
          <div>
            <span>Reviews</span>
            <span>1084</span>
          </div>
        </div>
    </div>
  )
}

const showProfileHeader = () => {

  const handleChangePhoto = () => {

  }

  const handleDeletePhoto = () => {

  }


  return (
    <div className="profile-header">
      <img className="profile-picture" src="/assets/images/pfp.jpg" alt="" />
      <div className="profile-ctas">
        <Button onClick={handleChangePhoto} gap="large" type="outline" color="colorful" text="Change photo" />
        <Button onClick={handleDeletePhoto} gap="large" type="outline" color="gray" text="Delete photo" />
      </div>

    </div>
  )

}

const UserHeader = ({isProfile, user} : props) => {

  return isProfile ? showProfileHeader() : showUserHeader()

}

export default UserHeader