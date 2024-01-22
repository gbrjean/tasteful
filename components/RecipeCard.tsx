"use client"

import { Button } from "./Button"
import { Star } from "@public/assets/icons/Star"
import { CommentsIcon } from "@public/assets/icons/CommentsIcon"
import { TimerIcon } from "@public/assets/icons/TimerIcon"
import { Controller, useFormContext } from "react-hook-form";
import { formatDateToString, truncateText } from "@lib/utils"
import { ChangeEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from 'next/link'

type CardDetails = {
  profile_picture?: string | null;
  recipe_picture?: string;
  name: string | null | undefined;
  title: string;
  description: string;
  reviews?: number;
  comments?: number;
  preptime?: string;
  date?: string;
  slug?: string;
};

type props = {
  isPreview?: boolean;
  CardDetails?: CardDetails;
  setFiles?: (files: File[]) => void;
}

const RecipeCard = ({isPreview, CardDetails, setFiles} : props) => {

  const currentDate = new Date();
  const [formattedDate, setFormattedDate] = useState('');

  const router = useRouter()

  useEffect(() => {
    if(CardDetails?.date){
      const date = formatDateToString(CardDetails.date, currentDate);
      setFormattedDate(date);
    }
  }, [CardDetails]);

  const handleClick = () => {
    router.push(`recipe/${CardDetails?.slug}`)
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) => {
    e.preventDefault();

    const fileReader = new FileReader()

    if(e.target.files && e.target.files.length > 0){
      const file = e.target.files[0]

      if (isPreview && setFiles) {
        setFiles(Array.from(e.target.files))
      }

      if(!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        fieldChange(imageDataUrl)
      }

      fileReader.readAsDataURL(file)

    }

  }

  if(!isPreview){
    return (

      <div className="recipe-card">
        <div className="recipe-card-header">
          
          <img className="userdata-picture" src={CardDetails?.profile_picture! || "/assets/images/pfp.png"} alt="" />
            
          <div className="userdata">
            <span className="userdata-name">{CardDetails?.name}</span>
            <span className="timeline">{formattedDate}</span>
          </div>

        </div>
        <div className="recipe-card-title">{CardDetails?.title}</div>
        <img className="recipe-card-image" src={CardDetails?.recipe_picture} alt="" />
        <div className="recipe-card-desc">
          {CardDetails && truncateText(CardDetails?.description, 80)}
        </div>

        <div className="recipe-card-footer">
          <div className="recipe-card-stats">
            <div>
              <Star type="half" />
              <span>{Number(CardDetails?.reviews?.toFixed(1))}</span>
            </div>

            <div>
              <CommentsIcon />
              <span>{CardDetails?.comments}</span>
            </div>

            <div>
              <TimerIcon />
              <span>{CardDetails?.preptime} MIN</span>
            </div>
          </div>

          <Link href={`recipe/${CardDetails?.slug}`}>
            <Button onClick={handleClick} gap={'narrow'} type={'outline'} color={'colorful'} text="Read more" />
          </Link>
          
          
        </div>
        
      </div>

    )
  }

  const { control } = useFormContext();


  return (

    <div className="recipe-card">
      <div className="recipe-card-header">
        
        <img className="userdata-picture" src={CardDetails?.profile_picture || "/assets/images/pfp.png"} alt="" />
          
        <div className="userdata">
          <span className="userdata-name">{CardDetails?.name}</span>
          <span className="timeline">1 minute ago</span>
        </div>

      </div>
      <div className="recipe-card-title">{CardDetails?.title ? truncateText(CardDetails.title, 150) : "The title will appear here."}</div>

      <div className="recipe-card-image-wrapper">
        <Controller
          name="photo"
          control={control}
          defaultValue=""
          render={({ field }) => (
            field.value ? (
              <img className="recipe-card-image" src={field.value} alt="" />
            ) : (
              CardDetails?.recipe_picture ? (
                <img className="recipe-card-image" src={CardDetails.recipe_picture} alt="" />
              ) : (
                <img className="recipe-card-image" src="/assets/images/recipe_default.jpg" alt="" />
              )
            )
          )}
        />

        <div className="recipe-card-image-select">

          <Controller
            name="photo"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="file"
                accept="image/*"
                placeholder="Upload picture"
                className="btn btn-large btn-outline btn-gray"
                onChange={(e) => handleImageChange(e, field.onChange)}
              />
            )}
          />

        </div>

      </div>

      <div className="recipe-card-desc">
        {CardDetails?.description ? truncateText(CardDetails.description, 220) : "The description will appear here."}
      </div>
      
    </div>
  
  )
}

export default RecipeCard