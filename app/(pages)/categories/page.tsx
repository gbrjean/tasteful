"use client"

import Category from "@components/Category"
import { categories } from "@constants/categories"
import { useRouter } from "next/navigation"


const CategoriesPage = () => {

  const router = useRouter()

  const gotoDiscover = (category: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if(!category) return;
    searchParams.set('categories', category)
    const newPathname = `/discover?${searchParams.toString()}&keep=true`
    router.push(newPathname)
  }


  return (
    <>
    <h1>Categories</h1>

    <div className="category-group">

      { categories.map((category, key) => (
          <Category key={key} image={category.image} name={category.name} 
            onClick={() => gotoDiscover(category.name)}
          />
      ))}
      
    </div>


    </>
  )
}

export default CategoriesPage