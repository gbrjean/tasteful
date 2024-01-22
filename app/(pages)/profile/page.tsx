
import ProfileContent from '@components/ProfileContent'
import SignOut from '@components/SignOut'
import UserHeader from '@components/UserHeader'
import { fetchSessionProfile, getCurrentUser } from '@lib/actions/user.actions'
import { redirect } from 'next/navigation'


const Profile = async () => {

  const session = await getCurrentUser()

  if(!session?.user) redirect('auth/login')


  const user = await fetchSessionProfile(session?.user.email!)

  return (
    <>
    
    <UserHeader user={user.image} session={session.user.email!} isProfile />

    <ProfileContent user={user} session={session.user.email!} isProfile />

    <SignOut />

    </>
  )
}

export default Profile