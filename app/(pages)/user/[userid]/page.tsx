import ProfileContent from '@components/ProfileContent'
import UserHeader from '@components/UserHeader'
import React from 'react'
import { fetchUserById, getCurrentUser } from '@lib/actions/user.actions'
import { redirect } from "next/navigation"

const UserProfile = async ({ params }: { params: { userid: string } }) => {

  if(!params.userid) return null;

  const session = await getCurrentUser()

  if(!session?.user) return null;

  let user;

  try {
    user = await fetchUserById(params.userid, session.user.email!)
  } catch (error) {
    redirect("/")
  }
  if(!user) return null;

  return (
    <>
    <h1>{user.fullname}</h1>

    {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

    <UserHeader user={user} session={session.user.email!} />

    <ProfileContent user={user} />

    </>
  )
}

export default UserProfile