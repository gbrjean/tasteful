import PocketView from "@components/PocketView"
import { fetchPocket, fetchPocketLists } from "@lib/actions/user.actions"
import { getCurrentUser } from "@lib/actions/user.actions"
import { redirect } from "next/navigation"

const PocketPage = async ({ params }: { params: { pocket: string } }) => {

  const session = await getCurrentUser()
  if(!session) {
    redirect('/')
  }

  let result: {
    pocketLists?: any;
    recipes?: any[];
  } = {}; 

  if (!params.pocket) {
    result = await fetchPocketLists(session.user.email!)
  } else {
    console.log(params.pocket)
    result = await fetchPocket(session.user.email!, params.pocket)
  }
  console.log(result)

  return (
   <PocketView
    pocketList={result.pocketLists}
    recipesList={result.recipes}
   />
  )
}

export default PocketPage