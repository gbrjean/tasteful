"use client"

import { CommentsIcon } from "@public/assets/icons/CommentsIcon"
import { useState, useEffect } from "react";
import Feedback from "./Feedback";
import { formatDateToString } from "@lib/utils";
import { usePathname } from "next/navigation"
import { removeCommentfromComment } from "@lib/actions/comment.actions";


type nestedComment = {
  id: string;
  text: string;
};

type props = {
  session?: string | null;
  userReply? : {
    id: string;
    text: string;
  } | null;
  parentId: string;
  replyId?: string;
  author: {
    _id: string;
    fullname: string;
    image: string;
  };
  comment: string;
  stars?: string;
  created_at: string;
  repliesCount?: number;
  replies?: {
    _id: string;
    author: {
      _id: string;
      fullname: string;
      image: string;
    };
    comment: string;
    created_at: string;
  }[]
}

const RecipeComment = ({
  session,
  userReply,
  parentId,
  replyId,
  author,
  comment,
  stars,
  created_at,
  replies,
  repliesCount,
} : props) => {

  const currentDate = new Date();

  const pathname = usePathname()

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = formatDateToString(created_at, currentDate);
    setFormattedDate(date);
  }, []);

  const [openFeedback, setOpenFeedback] = useState(false)


  const [nestedSessionComment, setNestedSessionComment] = useState<nestedComment[]>([])

  useEffect(() => {
    if (session && replies && replies.length > 0) {
      const userReplies = replies.filter((reply) => session === reply.author._id);
  
      if (userReplies.length > 0) {
        setNestedSessionComment(userReplies.map((reply) => ({
          id: reply._id,
          text: reply.comment,
        })));
      }
    }
  }, []);

  const handleCommentDelete = async () => {
    try {
      if(userReply){
        await removeCommentfromComment(userReply.id, pathname)
      } 
    } catch (error: any) {
      console.log(`Couldn't delete the comment: ${error.message}`)
    }
  }  

  return (
    <div className="recipe-post-comment">

      <div className="userdata">

        <img className="userdata-picture" src={author.image || "/assets/images/pfp.png"} alt="" />
          
        <div className="userdata-contact">
          <span className="userdata-name">{author.fullname}</span>
          <span className="userdata-timeline">{formattedDate}</span>
        </div>

      </div>

      <p>{comment}</p>

      { replies && (
          <div className="recipe-post-comment-actions">

            <div className="recipe-post-comment-action">
              <CommentsIcon />
              <span onClick={() => setOpenFeedback(prev => !prev)}>Reply ({repliesCount})</span>
            </div>

          </div>
      )}


      { (replyId && userReply?.id == replyId && !openFeedback) && (
          <div className="recipe-post-comment-actions">

            <div className="recipe-post-comment-action">
              <span onClick={() => setOpenFeedback(prev => !prev)}>Edit</span>
            </div>

            <div className="recipe-post-comment-action">
              <span onClick={handleCommentDelete}>Delete</span>
            </div>

          </div>
      )}

      { openFeedback && (
         <Feedback parentId={parentId} forReply setOpenFeedback={setOpenFeedback}
          reply={userReply ? userReply : null}
         />
      )}

      { replies && replies.length > 0 && (
          <div className="recipe-post-comment-replies">

            { replies.map((reply) => (
              <RecipeComment key={reply._id}
                parentId={parentId}
                author={reply.author}
                comment={reply.comment}
                created_at={reply.created_at}
                userReply={
                  nestedSessionComment && nestedSessionComment.length > 0
                    ? nestedSessionComment.find((comment) => comment.id === reply._id) || null
                    : null
                }
                replyId={reply._id}
              />
            ))}

          </div>
      )}

    </div>
  )
}

export default RecipeComment