import { Star } from "@public/assets/icons/Star"
import { CommentsIcon } from "@public/assets/icons/CommentsIcon"
import { TimerIcon } from "@public/assets/icons/TimerIcon"
import { formatDateToString } from "@lib/utils";
import Link from "next/link"
import { useEffect, useState } from "react";

interface Recipe {
  id: string;
  title: string;
  slug: string;
  author: {
    _id: string;
    fullname: string;
  };
  photo: string;
  prep_time: string;
  comments_no: number;
  rating: number;
  created_at: string;
}


const RecipeCardMini = ({
  id,
  title,
  slug,
  author,
  photo,
  prep_time,
  comments_no,
  rating,
  created_at,
}: Recipe) => {

  const currentDate = new Date();

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = formatDateToString(created_at, currentDate);
    setFormattedDate(date);
  }, []);

  return (
    <Link href={`/recipe/${slug}`} className="recipe-card">

      <img className="recipe-card-image" src={photo} alt="" />
      <div className="recipe-card-title">{title}</div>
      <div className="recipe-card-preptime recipe-card-stats">
        <div>
          <TimerIcon />
          <span>{prep_time} MIN</span>
        </div>
      </div>

      <div className="recipe-card-footer">

        <div className="userdata">
          <span className="userdata-name">{author.fullname}</span>
          <span className="timeline">{formattedDate}</span>
        </div>

        <div className="recipe-card-stats">
          <div>
            <Star type="half" />
            <span>{Number(rating.toFixed(1))}</span>
          </div>

          <div>
            <CommentsIcon />
            <span>{comments_no}</span>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default RecipeCardMini