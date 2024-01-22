import Pagination from "@components/Pagination";
import RecipeCard from "@components/RecipeCard"
import fetchRecommendations, { getCurrentUser } from "@lib/actions/user.actions";
import { redirect } from "next/navigation"
import Link from "next/link"


const Homepage = async ({
  searchParams
}: { searchParams: { [key: string]: string | undefined} }) => {

  const session = await getCurrentUser()
  if(!session) {
    redirect('/')
  }

  const result = await fetchRecommendations(
    session.user.email!, searchParams.page ? +searchParams.page : 1, 21
  );

  return (
    <>
    <div id="page-header">
      <h1>My Feed</h1>
      <Link href="recipe/new" className="btn btn-full btn-large btn-colorful">New recipe</Link>
    </div>

    <div className="recipe-card-group">


      { result.recipes.length === 0 ? (
          <p>No recipes found</p>
      ) : (
          result.recipes.map((recipe) => (
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

    <Pagination
      path=''
      pageNumber={searchParams?.page ? +searchParams.page : 1}
      isNext={result.isNext}
    />

    </>
  )
}

export default Homepage