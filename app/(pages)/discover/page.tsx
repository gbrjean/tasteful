"use client"
import { useState } from "react";
import RecipeCard from "@components/RecipeCard";
import Filter from "@components/Filter";

const DiscoverPage = () => {

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
    <h1>Discover</h1>

    <Filter
      type="filter-sort"
      currentValue={selectedCategory}
      onValueChange={handleCategoryChange}
    />

    <div className="recipe-card-group">

      <RecipeCard /><RecipeCard /><RecipeCard />

    </div>


    </>
  )
}

export default DiscoverPage