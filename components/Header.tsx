"use client"

import { Tasteful } from "@public/assets/icons/Tasteful"
import { useSession } from "next-auth/react"
import { useState } from 'react'
import Searchbar from "./Searchbar"
import Link from "next/link"

const Header = () => {

  const { data: session } = useSession()

  let [menu, setMenu] = useState(false)

  const openMenu = () => {
    setMenu((prev) => !prev);
  }

  return (
    <header className="container">
      <a href="/" className="logo"><Tasteful /></a>
      <ul className={menu ? "nav_links --active" : "nav_links"}>
        <li><a href="/">My feed</a></li>
        <li><a href="/discover">Discover</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/pocket">Pocket</a></li>
        <li><a href="/community">Community</a></li>
      </ul>
      <div className="nav_actions">
        { !menu && (
          <>
          <Searchbar />
          { (session && session.user) ? (
              session.user.image ? (
                <Link href={'/profile'}><img className="profile_picture" src={session.user.image} alt="" /></Link>
              ) : (
                <Link href={'/profile'}><img className="profile_picture" src="/assets/images/pfp.png" alt="" /></Link>
              )
          ) : (
            <Link href={'/auth/login'}><img className="profile_picture" src="/assets/images/pfp.png" alt="" /></Link>
          )}
          </>
        )}
        <div className="nav_toggle" onClick={openMenu}></div>
      </div>
    </header>
  )
}

export default Header