
import RecipeView from "@components/RecipeView";
import { fetchRecipeBySlug } from "@lib/actions/recipe.actions"
import { fetchPocketNames, getCurrentUser } from "@lib/actions/user.actions";

type Result = {
  recipe: any;
  isSaved: boolean;
}

const RecipePost = async ({ params }: { params: { slug: string } }) => {
  
  if(!params.slug) return null;

  let result: Result | null = null;
  let pocketLists = null;

  const session = await getCurrentUser()

  if(session && session.user){
    result = await fetchRecipeBySlug(params.slug, session.user.email)
    pocketLists = await fetchPocketNames(session.user.email!)
  } else {
    result = await fetchRecipeBySlug(params.slug)
  }
  console.log(result)
  console.log(pocketLists)

  let userReview: {
    _id: string;
    comment: string;
    stars: string;
  } | undefined;

  if(session?.user?.id){
    result.recipe.comments.forEach((comment: any) => {
      if(session.user.id == comment.author._id){
        userReview = {
          _id: comment._id,
          comment: comment.comment,
          stars: comment.stars,
        };
      }
    })
  }


  return (

    <RecipeView
      id={result.recipe._id}
      title={result.recipe.title}
      description={result.recipe.description}
      author={result.recipe.author}
      category={result.recipe.category}
      prep_time={result.recipe.prep_time}
      photo={result.recipe.photo}
      created_at={result.recipe.created_at}
      comments_no={result.recipe.comments_no}
      rating={result.recipe.rating}
      ingredients={result.recipe.ingredients}
      instructions={result.recipe.instructions}
      comments={result.recipe.comments}
      userReview={userReview ? userReview : null}
      session={session?.user?.id}
      isOwned={session?.user ? (session.user.id == result.recipe.author._id ? true : false) : false}
      isSaved={result.isSaved}
      pocketLists={pocketLists}
    />

  )
}

export default RecipePost