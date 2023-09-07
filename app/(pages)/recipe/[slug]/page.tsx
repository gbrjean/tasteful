"use client"

import { useRef, useEffect } from "react"
import { Button } from "@components/Button"
import RecipeComment from "@components/RecipeComment"
import { CommentsIcon } from "@public/assets/icons/CommentsIcon"
import { ReviewsIcon } from "@public/assets/icons/ReviewsIcon"

const RecipePost = () => {

  const textareasRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  useEffect(() => {
    textareasRefs.current.forEach((textarea) => {
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    });
  }, [])
  

  return (
    <>
    <h1>Pizza de casa cu gorgonzolla si parmesan, sunca presata si salam de casa</h1>

    <div className="recipe-post-header">

      <div className="userdata">

        <img className="userdata-picture" src="/assets/images/pfp.jpg" alt="" />
          
        <div className="userdata-contact">
          <span className="userdata-name">Gabriel Stanescu</span>
          <span className="userdata-timeline">1 minute ago</span>
        </div>

      </div>

      <div className="recipe-post-stats">

        <div>
          <CommentsIcon />
          <span>8</span>
        </div>

        <div>
          <div className="stars">
            {/* //TODO: modifica ReviewsIcon sa primeasca props si sa afiseze StarRating din gpt */ }
            <ReviewsIcon /><ReviewsIcon /><ReviewsIcon /><ReviewsIcon /><ReviewsIcon />
          </div>
          <span>5.0</span>
        </div>

      </div>

      <div className="recipe-post-preptime">PREPARATION TIME: 25 MIN</div>

    </div>

    <p className="recipe-post-description">
      O reteta gustoasa de pizza de casa cu gorgonzolla si parmesan, cu sunca presata si salam de casa. Pofta buna! O reteta gustoasa de pizza de casa cu gorgonzolla si parmesan, cu sunca presata si salam de casa. Pofta buna!
    </p>

    <img className="recipe-post-image" src="/assets/images/post.jpg" alt="" />

    <div className="recipe-post-wrapper">

      <div className="recipe-post-column">
        <h2>Ingredients</h2>

        <div className="recipe-post-ingredient">

          <span className="recipe-post-ingredient-title">
            For the crust
          </span>

          <div className="recipe-post-ingredient-elements">

            <div className="recipe-post-ingredient-element">
              <input type="checkbox" />
              <span>400g graham crackers</span>
            </div>

            <div className="recipe-post-ingredient-element">
              <input type="checkbox" />
              <span>400g graham crackers</span>
            </div>

          </div>

        </div>

        <div className="recipe-post-ingredient">

          <span className="recipe-post-ingredient-title">
            For the crust
          </span>

          <div className="recipe-post-ingredient-elements">

          <div className="recipe-post-ingredient-element">
            <input type="checkbox" />
            <span>400g graham crackers</span>
          </div>

          <div className="recipe-post-ingredient-element">
            <input type="checkbox" />
            <span>400g graham crackers</span>
          </div>

        </div>

        </div>

      </div>

      <div className="recipe-post-column">
        <h2>Instructions</h2>

        <div className="dynamic-instruction">

          {Array.from({ length: 8 }, (_, index) => (
            <div className="dynamic-instruction-input" key={index}>
              <div className="dynamic-instruction-input-content">
                <div className="dynamic-instruction-number">{index + 1}</div>
                <textarea ref={(el) => (textareasRefs.current[index] = el)}
                 readOnly value="To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter." />
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>

    <div className="recipe-post-comments-container">
      <span className="title">Already made this?</span>
      
      <div className="cta">
        <Button onClick={() => {}} gap='large' type='outline' color='gray' text="Share your feedback" />
      </div>

      <div className="separator"></div>


      <div className="recipe-post-comments">
        <h2>Comments (25)</h2>

        <RecipeComment isReply /><RecipeComment />

      </div>

    </div>

    </>
  )
}

export default RecipePost