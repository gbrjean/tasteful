"use client"

import { Logout } from "@public/assets/icons/Logout"
import { signOut } from "next-auth/react"

const SignOut = () => {
  return (
    <div id="logout" onClick={() => signOut({ callbackUrl: '/' })}>
      <Logout />
      <span>Sign out</span>
    </div>
  )
}

export default SignOut