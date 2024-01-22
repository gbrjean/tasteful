import { Star } from "@public/assets/icons/Star"
import { CommentsIcon } from "@public/assets/icons/CommentsIcon"
import { TimerIcon } from "@public/assets/icons/TimerIcon"
import { formatDateToString } from "@lib/utils";
import { Button } from "./Button";
import { EditIcon } from "@public/assets/icons/EditIcon";
import { TrashIcon } from "@public/assets/icons/TrashIcon";
import Link from "next/link"
import { deleteRecipeById } from "@lib/actions/recipe.actions";
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react";


type CardDetails = {
  _id?: string;
  photo?: string;
  title: string;
  rating?: number;
  comments_no?: number;
  prep_time?: string;
  created_at?: string;
  slug?: string;
};

type props = {
  CardDetails?: CardDetails;
  hasActions?: boolean;
  session?: string
}

const RecipeCardUser = ({CardDetails, hasActions, session} : props) => {

  const currentDate = new Date();

  const router = useRouter()
  const pathname = usePathname()

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if(CardDetails?.created_at){
      const date = formatDateToString(CardDetails.created_at, currentDate);
      setFormattedDate(date);
    }
  }, [CardDetails]);

  const handleEdit = () => {
    router.push(`recipe/edit?id=${CardDetails?._id}`)
  }

  const handleDelete = async () => {
    try {
      if(session && CardDetails?._id){
        await deleteRecipeById(CardDetails._id, session, pathname)
      }
    } catch (error: any) {
      console.log(`Could not delete the comment: ${error.message}`)
    }
  }

  return (
    <div className="recipe-card">

      <Link href={`/recipe/${CardDetails?.slug}`}>
        <img className="recipe-card-image" src={CardDetails?.photo} alt="" />
      </Link>
      <div className="recipe-card-title">{CardDetails?.title}</div>
      <div className="recipe-card-preptime recipe-card-stats">
        <div>
          <Star type="half" />
          <span>{Number(CardDetails?.rating?.toFixed(1))}</span>
        </div>

        <div>
          <CommentsIcon />
          <span>{CardDetails?.comments_no}</span>
        </div>

        <div>
          <TimerIcon />
          <span>{CardDetails?.prep_time} MIN</span>
        </div>
      </div>

      <div className="recipe-card-footer">

        <div className="userdata">
          <span className="timeline">{formattedDate}</span>
        </div>

        { hasActions && (
          <div className="recipe-card-footer-actions">
            <Button onClick={handleEdit} type="icon" text={<EditIcon />} />
            <Button onClick={handleDelete} type="icon" text={<TrashIcon />} />
          </div>
        )}

      </div>
    </div>
  )
}

export default RecipeCardUser