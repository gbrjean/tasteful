"use client"

import { Tasteful } from "@public/assets/icons/Tasteful"

import { useState } from 'react'
import Searchbar from "./Searchbar"

const Header = () => {

  let [menu, setMenu] = useState(false)

  const openMenu = () => {
    setMenu((prev) => !prev);
  }

  return (
    <header className="container">
      <a href="/" className="logo"><Tasteful /></a>
      <ul className={menu ? "nav_links --active" : "nav_links"}>
        <li><a href="#">My feed</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Pocket</a></li>
        <li><a href="#">Community</a></li>
      </ul>
      <div className="nav_actions">
        { !menu && (
          <>
          <Searchbar />
          <img className="profile_picture" src="/assets/images/pfp.jpg" alt="" />
          </>
        )}
        <div className="nav_toggle" onClick={openMenu}></div>
      </div>
    </header>
  )
}

export default Header