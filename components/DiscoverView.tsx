"use client"

import { useEffect, useState } from "react";
import RecipeCard from "@components/RecipeCard";
import Filter from "@components/Filters/Filter";
import { useRouter } from "next/navigation";

interface Props {
  recipes: Omit<any, never>[];
  categories: string[];
  preptime: string;
  sortBy: string;
  isKeep?: boolean;
}

type selectedFilters = {
  categories: string[];
  preptime: string;
  sortby: string;
}

const DiscoverView = ({
  recipes,
  categories,
  preptime,
  sortBy,
  isKeep
}: Props) => {

  const router = useRouter()

  const [keepParams, setKeepParams] = useState(true)

  const defaultFilters: selectedFilters = {
    categories: categories,
    preptime: preptime,
    sortby: sortBy,
  };


  const [selectedFilters, setSelectedFilters] = useState<selectedFilters>(defaultFilters);
  
  const updateSearchParams = (categories: string[], sortBy: string, prepTime: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(categories.length > 0){
      searchParams.set('categories', categories.join(','))
    } else {
      searchParams.delete('categories')
    }

    if(sortBy){
      searchParams.set('sortby', sortBy)
    } else {
      searchParams.delete('sortby')
    }

    if(prepTime){
      searchParams.set('preptime', prepTime)
    } else {
      searchParams.delete('preptime')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname)

  }


  useEffect(() => {
    if(!isKeep){
      updateSearchParams(
        selectedFilters.categories, 
        selectedFilters.sortby,
        selectedFilters.preptime,
      )
    }
    if(isKeep){
      setKeepParams(false);
    }
  }, [selectedFilters])


  return (
    <>
    <Filter
      type="filter-sort"
      currentValue={selectedFilters}
      onValueChange={setSelectedFilters}
    />

    <div className="recipe-card-group">

      { recipes?.length === 0 ? (
            <p>No recipes found</p>
        ) : (
        recipes?.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            CardDetails={{
              profile_picture: recipe.author.image,
              recipe_picture: recipe.photo,
              name: recipe.author.fullname,
              preptime: recipe.prep_time,
              title: recipe.title,
              description: recipe.description,
              reviews: recipe.rating,
              comments: recipe.comments_no,
              date: recipe.created_at,
              slug: recipe.slug,
            }}
          />
        ))
      )}

    </div>
    </>

  )
}

export default DiscoverView