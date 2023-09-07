"use client"

import { Button } from "@components/Button"
import UserCard from "@components/UserCard"


const CommunityPage = () => {

  const handleClick = () => {

  }

  return (
    <>
    <h1>Community</h1>

    <div className="user-card-group">

      <UserCard /><UserCard /><UserCard /><UserCard /><UserCard /><UserCard />

    </div>

    <div className="centered-button">
      <Button onClick={handleClick} gap="large" type="outline" color="colorful" text="Load more" />
    </div>

    </>
  )
}

export default CommunityPage