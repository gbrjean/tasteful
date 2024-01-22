"use client"

import Link from "next/link"

interface props {
  id: string;
  fullName: string;
  image: string;
  created_at: string;
  recipes: string;
  friends: string;
  comments: string;
}

const UserCard = ({
  id,
  fullName,
  image,
  created_at,
  recipes,
  friends,
  comments,
}: props) => {


  return (
    <Link href={`/user/${id}`} className="user-card">
      <div className="user-card-header">
        <div className="userdata">
          <img src={image || "/assets/images/pfp.png"} alt="" />
          <span>{fullName}</span>
        </div>
      </div>

      <div className="user-card-data">
        <div>
          <span>Date joined</span>
          <span>{created_at}</span>
        </div>
        <div>
          <span>Recipes</span>
          <span>{recipes}</span>
        </div>
        <div>
          <span>Friends</span>
          <span>{friends}</span>
        </div>
        <div>
          <span>Comments</span>
          <span>{comments}</span>
        </div>
      </div>

    </Link>
  )
}

export default UserCard