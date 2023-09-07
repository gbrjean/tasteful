import RecipeCard from "@components/RecipeCard"


const Homepage = () => {
  return (
    <>
    <h1>My Feed</h1>

    <div className="recipe-card-group">

      <RecipeCard /><RecipeCard /><RecipeCard />

    </div>


    </>
  )
}

export default Homepage