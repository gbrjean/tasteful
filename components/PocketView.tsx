"use client"
import { Button } from "@components/Button"
import Pagination from "@components/Pagination"
import RecipeCardMini from "@components/RecipeCardMini"
import { useEffect, useRef, useState } from "react"
import PocketFilter from "./Filters/PocketFilter"
import { AddCircleIcon } from "@public/assets/icons/AddCircleIcon"
import PocketManageItem from "./PocketManageItem"
import { createPocketList } from "@lib/actions/user.actions"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { CloseIcon } from "@public/assets/icons/CloseIcon"


type Props = {
  pocketList: [];
  recipesList: any[] | undefined;
}

const PocketView = ({pocketList, recipesList}: Props) => {

  const {data: session} = useSession()

  const pathname = usePathname()

  const [managePocket, setManagePocket] = useState(false)
  const [createPocket, setCreatePocket] = useState(false)
  const createPocketInput = useRef<HTMLInputElement | null>(null)
  const managePocketBox = useRef<HTMLDivElement | null>(null);

  const handleCreatePocket = async () => {
    if(createPocketInput.current?.value && session && session.user){
      try {
        await createPocketList(createPocketInput.current.value, session.user.email!, pathname)
        setCreatePocket(false)
        createPocketInput.current.value = ''
      } catch (error: any) {
        console.log(error)
      }
    }
  }



  return (
    <>
    <div id="page-header">
      <h1>My Pocket</h1>
      <Button onClick={() => setManagePocket(prev => !prev)} type="full" gap="large" color="colorful" text="Manage pocket" />

      { managePocket && (
        <div id="create-pocket-wrapper" ref={managePocketBox}>
          <div id="create-pocket-header">
            <span>Manage pocket</span>
           <Button onClick={() => setManagePocket(prev => !prev)} type="icon" text={<CloseIcon />} />
          </div>
          { !createPocket &&
              <Button onClick={() => setCreatePocket(prev => !prev)} type='icon'
                text={<> <AddCircleIcon /> <div>Create new pocket</div> </>}
              />
          }

          { createPocket && (
            <div id="create-pocket">
              <input type="text" placeholder="Write a name..." ref={createPocketInput} />
              <Button onClick={handleCreatePocket} type="outline" gap="narrow" color="colorful" text="Create" />
            </div>
          )}

          <div id="create-pocket-content">

            { pocketList.length === 0 ? (
              <p>No pocket lists created</p>
            ) : (
              pocketList.map((pocket, key) => (
                <PocketManageItem 
                  key={key} 
                  pocketName={pocket}
                  session={session?.user?.email!}
                  pathname={pathname}
                />
            )))}


          </div>
        </div>
      )}

    </div>

    { pocketList.length === 0 ? (
      <p>No pocket lists created</p>
    ) : (
      <PocketFilter list={pocketList} />
    )}

    <div className="recipe-card-group-mini">

      { (pocketList.length != 0 && recipesList?.length === 0) ? (
        <p>No recipes in this pocket</p>
      ) : (
        recipesList?.map((recipe) => (
          <RecipeCardMini
            key={recipe._id}
            id={recipe._id}
            title={recipe.title}
            slug={recipe.slug}
            author={recipe.author}
            photo={recipe.photo}
            prep_time={recipe.prep_time}
            comments_no={recipe.comments_no}
            rating={recipe.rating}
            created_at={recipe.created_at}
          />
      )))}

    </div>

    {/* <Pagination
      path='pocket'
      pageNumber={searchParams?.page ? +searchParams.page : 1}
      isNext={result.isNext}
    /> */}


    </>
  )
}

export default PocketView