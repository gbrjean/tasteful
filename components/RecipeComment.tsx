import { CommentsIcon } from "@public/assets/icons/CommentsIcon"
import { useRef, useState } from "react";
import { Button } from "./Button";

type props = {
  isReply?: boolean;
}

const RecipeComment = ({isReply} : props) => {

  const [openReply, setOpenReply] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  return (
    <div className="recipe-post-comment">

      <div className="userdata">

        <img className="userdata-picture" src="/assets/images/pfp.jpg" alt="" />
          
        <div className="userdata-contact">
          <span className="userdata-name">Gabriel Stanescu</span>
          <span className="userdata-timeline">1 minute ago</span>
        </div>

      </div>

      <p>
      To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.
      </p>

      <div className="recipe-post-comment-actions">

        <div className="recipe-post-comment-action">
          <CommentsIcon />
          <span onClick={() => setOpenReply(prev => !prev)}>Reply (2)</span>
        </div>

      </div>

      { openReply && (
          <div className="recipe-post-comment-reply">
            <textarea placeholder="Write a comment..." onChange={handleTextareaChange} ref={textareaRef} />
            <div className="recipe-post-comment-reply-actions">
              <Button onClick={() => {}} gap='narrow' type='outline' color='colorful' text="Post comment" />
              <Button onClick={() => {}} gap='narrow' type='outline' color='gray' text="Cancel" />
            </div>
          </div>
      )}

      { isReply && (
          <div className="recipe-post-comment-replies">

            <RecipeComment /><RecipeComment />

          </div>
      )}

    </div>
  )
}

export default RecipeComment