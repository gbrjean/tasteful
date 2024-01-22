"use client"

import { Button } from "./Button"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { CommentValidation, ReplyValidation } from "@lib/validations/recipe"
import { useRef, useState } from "react"
import { addCommentToRecipe, addCommentToComment, editCommentToRecipe, editCommentToComment } from "@lib/actions/comment.actions"
import { useSession } from "next-auth/react"
import { usePathname } from 'next/navigation'
import ReadOnlyReviews from "./Reviews/ReadOnlyReviews"
import ReviewSelect from "./Reviews/ReviewSelect"

type ReviewProps = {
  id: string;
  text: string;
  rating: string;
}

type props = {
  parentId: string;
  forReply?: boolean;
  setOpenFeedback: React.Dispatch<React.SetStateAction<boolean>>;
  review?: ReviewProps;
  reply?: {
    id: string;
    text: string;
  } | null;
}


const Feedback = ({parentId, forReply, setOpenFeedback, review, reply} : props) => {

  const { data: session } = useSession()

  const pathname = usePathname()

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  const [editableReview, setEditableReview] = useState(false)
  const [enableReview, setEnableReview] = useState(false)

  const commentForm = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      rating: '5',
      comment: '',
    }
  })

  const replyForm = useForm({
    resolver: zodResolver(ReplyValidation),
    defaultValues: {
      comment: '',
    }
  })

  const onCommentSubmit = async (values: z.infer<typeof CommentValidation>) => {
    if(session && session.user){
      if(!review){
        await addCommentToRecipe(
          parentId,
          values.comment,
          +values.rating,
          session.user.email!,
          pathname,
        )
      } else {
        await editCommentToRecipe(
          parentId,
          review.id,
          values.comment,
          +values.rating,
          pathname,
        )
        setEnableReview(false)
      }

      commentForm.reset()
      setOpenFeedback(false)

    }
  }

  const onReplySubmit = async (values: z.infer<typeof ReplyValidation>) => {
    if(session && session.user){
      if(!reply){
        await addCommentToComment(
          parentId,
          session.user.email!,
          values.comment,
          pathname,
        )
      } else {
        await editCommentToComment(
          reply.id,
          values.comment,
          pathname,
        )
      }

      replyForm.reset()
      setOpenFeedback(false)

    }
  }


  // const setRating = (rating: number) => {
  //   form.setValue('rating', rating);
  // };

  return (

    !forReply ? (

      <div className="feedback-wrapper">
        <form onSubmit={commentForm.handleSubmit(onCommentSubmit)}>
          <div className="feedback-rating">
            <span>{!review ? 'Select your rating:' : (!enableReview ? 'Your rating:' : 'Select your rating:')}</span>
            { (review && !enableReview) ? (
              <ReadOnlyReviews rating={+review.rating} />
            ) : (
              // <Controller
              //   name="rating"
              //   control={commentForm.control}
              //   defaultValue={'5'}
              //   render={({ field }) => (
              //     <input
              //       {...field}
              //       type="text"
              //       onChange={field.onChange}
              //     />
              //   )}
              // />
              <Controller
                name="rating"
                control={commentForm.control}
                defaultValue={'5'}
                render={({ field }) => (
                  <ReviewSelect
                  onChange={(rating) => {
                    commentForm.setValue('rating', rating.toString());
                    field.onChange(rating.toString());
                  }}
                />
                )}
              />
            )}



          </div>

          {commentForm.formState.errors?.rating && (
            <p className="error">{commentForm.formState.errors.rating.message}</p>
          )}

          <div className="feedback-container">

            { (review && !enableReview) ? (
              <>
              <p>{review.text}</p>
              {!editableReview && <Button onClick={() => {setEditableReview(true); setEnableReview(true)}} gap="large" type="full" color="colorful" text="Edit review" /> }
              </>
            ) : (
              <>
              <Controller
                name="comment"
                control={commentForm.control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Write a comment..."
                    onChange={(e) => {
                      field.onChange(e);
                      handleTextareaChange();
                    }}
                    ref={textareaRef}
                  />
                )}
              />
              
              <input type="submit" className="btn btn-large btn-full btn-colorful" value="Post review" />
              </>
            )}

          </div>

          {commentForm.formState.errors?.comment && (
            <p className="error">{commentForm.formState.errors.comment.message}</p>
          )}
        </form>
  
      </div>

    ) : (

      <div className="feedback-container _reply">
        <form onSubmit={replyForm.handleSubmit(onReplySubmit)}>
          <textarea placeholder={reply ? `Edit: ${reply.text}` :"Write a comment..."} {...replyForm.register('comment')}></textarea>
          <div className="feedback-actions">
            { !reply ? (
              <input type="submit" className="btn btn-narrow btn-outline btn-colorful" value="Post comment" />
            ) : ( 
              <input type="submit" className="btn btn-narrow btn-outline btn-colorful" value="Edit comment" />
            )}
            <Button onClick={() => setOpenFeedback(false)} gap={'narrow'} type={'outline'} color={'gray'} text="Cancel" />
          </div>
        </form>

        {replyForm.formState.errors?.comment && (
          <p className="error">{replyForm.formState.errors.comment.message}</p>
        )}

      </div>

    )

  )
}

export default Feedback