import { SearchIcon } from "@public/assets/icons/SearchIcon"
import { useEffect, useState } from "react"
import Link from "next/link"
import { getSearchResults } from "@lib/actions/user.actions"

const Searchbar = () => {

  const [show, setShow] = useState(false)
  const [searchMode, setSearchMode] = useState<'recipes' | 'users'>('recipes')

  const [fetchTimeout, setFetchTimeout] = useState<any>(null)
  let fetchDelay = 600;

  const [result, setResult] = useState<any[] | null>(null)

  const getResults = async (keyword: string) => {
    try {
      const results = await getSearchResults(searchMode, keyword)
      setResult(results)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 0){
      
      clearTimeout(fetchTimeout)

      const timeoutId = setTimeout(() => {
        getResults(e.target.value.trim())
        setFetchTimeout(null)
      }, fetchDelay);

      setFetchTimeout(timeoutId)

    } else {
      clearTimeout(fetchTimeout)
      setResult(null)
    }
  }

  useEffect(() => {
    return () => {
      if (fetchTimeout !== null) {
        clearTimeout(fetchTimeout);
      }
    };
  }, [fetchTimeout])
  

  return (
    <>
      <SearchIcon onClick={() => setShow(prev => !prev)} />

      { show && (
        <div className="search-wrapper">
          <div className="search-header">
            <div className="search-options">
              <span>Search for:</span>
              <span className={searchMode == 'recipes' ? 'active' : undefined}
                onClick={() => setSearchMode('recipes')}
              >
                Recipes
              </span>
              <div className="spacer"></div>
              <span className={searchMode == 'users' ? 'active' : undefined}
                onClick={() => setSearchMode('users')}
              >
                Users
              </span>
            </div>
            <input type="text" placeholder="Type here..." onChange={handleChange} />
          </div>
          <div className="search-container">

            <div className="search-elements">
              { result && result.length === 0 ? (
                <p>No results found</p>
              ) : (
                result?.map((element) => (
                  searchMode == 'recipes' ? (
                    <Link href={`/recipe/${element.slug}`} className="search-element" onClick={() => setShow(false)}>
                      <img src={element.photo} alt="" />
                      <span>{element.title}</span>
                    </Link>
                  ) : (
                    <Link href={`/user/${element._id}`} className="search-element _user" onClick={() => setShow(false)}>
                      <img src={element.image || "/assets/images/pfp.png"} alt="" />
                      <span>{element.fullname}</span>
                    </Link>
                  )
                ))
              )}


            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Searchbar