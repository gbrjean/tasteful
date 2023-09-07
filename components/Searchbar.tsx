import { SearchIcon } from "@public/assets/icons/SearchIcon"
import { useState } from "react"


const Searchbar = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <SearchIcon onClick={() => setShow(prev => !prev)} />

      { show && (
        <div className="search-wrapper">
          <div className="search-header">
            <span>Search for:</span>
            <div className="search-options">
              <span>Recipes</span>
              <div className="spacer"></div>
              <span>Users</span>
            </div>
          </div>
          <div className="search-container">

            <div className="search-elements">

              <div className="search-element _user">
                <img src="/assets/images/post.jpg" alt="" />
                <span>Pizza de casa cu salam si sunca presata</span>
              </div>

              <div className="search-element">
                <img src="/assets/images/post.jpg" alt="" />
                <span>Pizza de casa cu salam si sunca presata</span>
              </div>

              <div className="search-element">
                <img src="/assets/images/post.jpg" alt="" />
                <span>Pizza de casa cu salam si sunca presata</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Searchbar