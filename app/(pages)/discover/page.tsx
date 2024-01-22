
import DiscoverView from "@components/DiscoverView";
import Pagination from "@components/Pagination";
import { fetchFilteredRecipes } from "@lib/actions/recipe.actions";
import { getCurrentUser } from "@lib/actions/user.actions";


type SearchParams = {
  categories: string;
  preptime: string;
  sortby: string;
  keep: boolean;
  page?: string;
};

const DiscoverPage = async ({searchParams} : {searchParams: SearchParams}) => {

  const session = await getCurrentUser()

  const result = await fetchFilteredRecipes({
    sortBy: searchParams.sortby || '',
    categories: searchParams.categories ? searchParams.categories.split(',') : [],
    prepTime: searchParams.preptime || '',
    sessionUserId: session?.user.id || ''
  })


  return (
    <>
    <h1>Discover</h1>

    { searchParams.keep ? (
      <DiscoverView
        recipes={result.recipes}
        categories={searchParams.categories ? searchParams.categories.split(',') : []}
        preptime={searchParams.preptime || ''}
        sortBy={searchParams.sortby || ''}
        isKeep
      />

    ) : (
      <DiscoverView 
        recipes={result.recipes}
        categories={searchParams.categories ? searchParams.categories.split(',') : []}
        preptime={searchParams.preptime || ''}
        sortBy={searchParams.sortby || ''}
      />
    )}

    <Pagination
      path='discover'
      pageNumber={searchParams?.page ? +searchParams.page : 1}
      isNext={result.isNext}
    />

    </>
  )
}

export default DiscoverPage