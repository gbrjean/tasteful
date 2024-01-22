"use client"

import { Button } from "@components/Button"

import RecipeComment from "@components/RecipeComment"
import { formatDateToString } from "@lib/utils"
import { CommentsIcon } from "@public/assets/icons/CommentsIcon"
import { useEffect, useRef, useState } from "react"
import Feedback from "./Feedback"
import Link from "next/link"
import { PocketIcon } from "@public/assets/icons/PocketIcon"
import { deleteRecipeFromPocket, saveRecipeToPocket } from "@lib/actions/recipe.actions"
import { usePathname } from "next/navigation"
import ReadOnlyReviews from "./Reviews/ReadOnlyReviews"
import { useCheckedIngredients } from "@lib/hooks"


interface props {
  session?: string | null;
  userReview?: {
    _id: string;
    comment: string;
    stars: string;
  } | null,
  isOwned?: boolean;
  isSaved: boolean;
  id: string;
  title: string;
  description: string;
  author: {
    _id: string;
    fullname: string;
    image: string;
  };
  category: string;
  photo: string;
  created_at: string;
  prep_time: string;
  comments_no: number;
  rating: number;
  ingredients: {
    material: string;
    elements: {
      _id: string;
      ingredient: string;
      quantity: number;
      unit: string;
    }[];
  }[];
  instructions: { instruction: string }[];
  comments: {
    _id: string;
    author: {
      _id: string;
      fullname: string;
      image: string;
    };
    comment: string;
    stars: string;
    created_at: string;
    children_no: number;
    children: {
      _id: string;
      author: {
        _id: string;
        fullname: string;
        image: string;
      };
      comment: string;
      created_at: string;
    }[]
  }[];
  pocketLists: any;
}


const RecipeView = ({
  session,
  userReview,
  isOwned,
  isSaved,
  id,
  title,
  description,
  author,
  category,
  prep_time,
  photo,
  created_at,
  comments_no,
  rating,
  ingredients,
  instructions,
  comments,
  pocketLists
}: props) => {

  const pathname = usePathname()

  const currentDate = new Date();

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = formatDateToString(created_at, currentDate);
    setFormattedDate(date);
  }, []);

  
  const textareasRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  useEffect(() => {
    textareasRefs.current.forEach((textarea) => {
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    });
  }, [])



  const [openFeedback, setOpenFeedback] = useState(false)
  const [openPocketContext, setOpenPocketContext] = useState(false)

  const { checkedIngredients, toggleIngredient } = useCheckedIngredients(id);


  const handlePocketContext = async () => {
    if(!isSaved) {
      setOpenPocketContext(prev => !prev)
    } else if (session) {
      try {
        await deleteRecipeFromPocket(id, session, pathname)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handlePocketClick = async (name: string) => {
    if(session) {
      try {
        await saveRecipeToPocket(id, name, session, pathname)
        setOpenPocketContext(false)
      } catch (error) {
        console.log(error)
      }
    }
  }


  return (
    <section className="recipe-post">
      <h1>{title}</h1>
      <span className="recipe-post-category">Recipe category: {category}</span>

      <div className="recipe-post-header">

        <div className="userdata">

          <img className="userdata-picture" src={author.image || "/assets/images/pfp.png"} alt="" />
            
          <div className="userdata-contact">
            <span className="userdata-name">{author.fullname}</span>
            <span className="userdata-timeline">{formattedDate}</span>
          </div>

        </div>

        <div className="recipe-post-stats">

          <div>
            <CommentsIcon />
            <span>{comments_no}</span>
          </div>

          <ReadOnlyReviews rating={rating} />

          { session && (
            <div className="recipe-post-pocket">
              <PocketIcon isSaved={isSaved} onClick={handlePocketContext} />

              { openPocketContext && (
                <div className="pocket-context-wrapper">
                  <span>Select a pocket</span>
                  <div className="pocket-context-content">
                    { pocketLists && pocketLists.length === 0 ? (
                      <p>No pocket lists found</p>
                    ) : (
                      pocketLists?.map((list: any) => (
                        <p onClick={() => handlePocketClick(list)}>{list}</p>
                      ))
                    )}
                  </div>
                </div>
               )}  

            </div>
          )}

        </div>

        <div className="recipe-post-header-group">
          <div className="recipe-post-preptime">PREPARATION TIME: {prep_time} MIN</div>
          { isOwned && <Link href={`/recipe/edit?id=${id}`} className="btn btn-large btn-full btn-colorful">Edit recipe</Link> }
        </div>
      </div>

      <p className="recipe-post-description">
        {description}
      </p>

      <img className="recipe-post-image" src={photo} alt="" />

      <div className="recipe-post-wrapper">

        <div className="recipe-post-column">
          <h2>Ingredients</h2>

          {ingredients.map((ingredient: any) => (
              <div className="recipe-post-ingredient">

                <span className="recipe-post-ingredient-title">
                  {ingredient.material}
                </span>

                <div className="recipe-post-ingredient-elements">

                  { ingredient.elements.map((element: any) => (
                      <label key={element._id} className="recipe-post-ingredient-element">
                        <input type="checkbox"
                          checked={checkedIngredients.includes(element._id)}
                          onChange={() => toggleIngredient(element._id)}
                        />
                        <span></span>
                        <p>{element.quantity} {element?.unit} {element.ingredient}</p>
                      </label>
                  ))}

                </div>

              </div>
          ))}

        </div>

        <div className="recipe-post-column">
          <h2>Instructions</h2>

          <div className="dynamic-instruction">

            { instructions.map((instruction, index) => (
                <div className="dynamic-instruction-input" key={index}>
                  <div className="dynamic-instruction-input-content">
                    <div className="dynamic-instruction-number">{index + 1}</div>
                    <textarea
                      ref={(el) => (textareasRefs.current[index] = el)}
                      readOnly
                      value={instruction.instruction}
                    />
                  </div>
                </div>
            ))}

          </div>

        </div>

      </div>

      <div className="recipe-post-comments-container" id="user-review">
        <span className="title">Already made this?</span>
        
        <div className="cta">
          {(!openFeedback && !userReview ) && <Button onClick={() => setOpenFeedback(true)} gap='large' type='outline' color='gray' text="Share your feedback" />}
        
          {openFeedback && 
            <Feedback 
              parentId={id} 
              setOpenFeedback={setOpenFeedback}
            />
          }

          {userReview && 
            <Feedback 
              parentId={id} 
              setOpenFeedback={setOpenFeedback}
              review={{
                id: userReview?._id!,
                text: userReview?.comment!,
                rating: userReview?.stars!
              }}
            />
          }
        </div>

        <div className="separator"></div>


        <div className="recipe-post-comments">
          <h2>Comments ({comments_no})</h2>

          { comments.map((comment) => (
            <RecipeComment key={comment._id}
              parentId={comment._id}
              author={comment.author}
              comment={comment.comment}
              stars={comment.stars}
              created_at={comment.created_at}
              replies={comment.children}
              repliesCount={comment.children_no}
              session={session}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default RecipeView