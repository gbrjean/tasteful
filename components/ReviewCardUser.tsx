import { Star } from "@public/assets/icons/Star";
import { Button } from "./Button"
import Link from "next/link"
import { removeCommentFromRecipe } from "@lib/actions/comment.actions"
import { usePathname, useRouter } from "next/navigation"


type CardDetails = {
  id: string;
  title: string;
  slug: string;
  photo: string;
  comments: {
    comment: string;
    stars: string;
  }
}


type props = {
  hasActions?: boolean;
  CardDetails?: CardDetails;
  session?: string
}

const ReviewCardUser = ({hasActions, CardDetails, session} : props) => {

  const router = useRouter()
  const pathname = usePathname()

  const handleEdit = () => {
    if(session && CardDetails?.slug){
      router.push(`recipe/${CardDetails.slug}#user-review`)
    }
  }

  const handleDelete = async () => {
    try {
      if(session && CardDetails?.id){
        await removeCommentFromRecipe(CardDetails.id, session, pathname)
      }
    } catch (error: any) {
      console.log(`Could not delete the comment: ${error.message}`)
    }
  }

  return (
    <div className="review-card-user">
      <Link href={`/recipe/${CardDetails?.slug}`}>
        <img className="review-card-user-image" src={CardDetails?.photo} alt="" />
      </Link>
      
      <div className="review-card-content">

        <div className="review-card-content-header">
          <div className="review-card-content-header-data">

            <div className="review-card-title">{CardDetails?.title}</div>
            <div className="review-card-rating">
              <span>Your rating:</span>
              <div>
                <Star type="half" />
                <span>{CardDetails?.comments.stars}</span>
              </div>
            </div>

          </div>

          { hasActions && (
            <div className="review-card-content-header-actions review-card-actions">
              <Button onClick={handleEdit} type="outline" gap="narrow" color="gray" text="Edit" />
              <Button onClick={handleDelete} type="outline" gap="narrow" color="gray" text="Delete" />
            </div>
          )}
        
        </div>

        <p className="review-card-content-text">{CardDetails?.comments.comment}</p>

        { hasActions && (
          <div className="review-card-actions">
            <Button onClick={handleEdit} type="outline" gap="narrow" color="gray" text="Edit" />
            <Button onClick={handleDelete} type="outline" gap="narrow" color="gray" text="Delete" />    
          </div>
        )}

      </div>
    </div>
  )
}

export default ReviewCardUser