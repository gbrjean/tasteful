import RecipeCardMini from "@components/RecipeCardMini"


const PocketPage = () => {
  return (
    <>
    <h1>My Pocket</h1>

    <div className="recipe-card-group-mini">

      <RecipeCardMini /><RecipeCardMini /><RecipeCardMini /><RecipeCardMini />

    </div>


    </>
  )
}

export default PocketPage