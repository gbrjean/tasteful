"use client"

import { Button } from '@components/Button'
import ProfileContent from '@components/ProfileContent'
import UserHeader from '@components/UserHeader'


const Profile = () => {

  const handleSave = () => {

  }

  return (
    <>
    <div id="page-header">
      <h1>Profile</h1>
      <Button onClick={handleSave} gap="large" type="full" color="colorful" text="Save profile" />
    </div>

    <UserHeader isProfile />

    <ProfileContent isProfile />

    </>
  )
}

export default Profile