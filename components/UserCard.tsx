"use client"

import { Button } from "./Button"

const UserCard = () => {
  const handleClick = () => {

  }

  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="userdata">
          <img src="/assets/images/pfp.jpg" alt="" />
          <span>Gabriela Stanescu</span>
        </div>
        <Button onClick={handleClick} gap="narrow" type="outline" color="colorful" text="Add friend" />
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

export default UserCard