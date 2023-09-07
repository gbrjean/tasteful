"use client"

import { Button } from "./Button"
import { ReviewsIcon } from "@public/assets/icons/ReviewsIcon"
import { CommentsIcon } from "@public/assets/icons/CommentsIcon"
import { TimerIcon } from "@public/assets/icons/TimerIcon"
import { Controller, useFormContext } from "react-hook-form";
import { truncateText } from "@lib/utils"
import { ChangeEvent } from "react"

type CardDetails = {
  profile_picture?: string | null;
  recipe_picture?: string;
  name: string | null | undefined;
  timeline?: string;
  title: string;
  description: string;
  reviews?: number;
  comments?: number;
  preptime?: string;
};

type props = {
  isPreview?: boolean;
  CardDetails?: CardDetails;
  setFiles: (files: File[]) => void;
}

const RecipeCard = ({isPreview, CardDetails, setFiles} : props) => {


  const handleClick = () => {
    console.log("clicked")
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) => {
    e.preventDefault();

    const fileReader = new FileReader()

    if(e.target.files && e.target.files.length > 0){
      const file = e.target.files[0]

      setFiles(Array.from(e.target.files))

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
          
          <img className="userdata-picture" src="/assets/images/pfp.jpg" alt="" />
            
          <div className="userdata">
            <span className="userdata-name">Gabriel Stanescu</span>
            <span className="timeline">17 hours ago</span>
          </div>

        </div>
        <div className="recipe-card-title">Pizza de casa cu salam si sunca presata</div>
        <img className="recipe-card-image" src="/assets/images/post.jpg" alt="" />
        <div className="recipe-card-desc">
          O reteta gustoasa de pizza de casa cu gorgonzolla si parmesan, cu sunca presata si salam de casa. Pofta buna!
        </div>

        <div className="recipe-card-footer">
          <div className="recipe-card-stats">
            <div>
              <ReviewsIcon />
              <span>4.8</span>
            </div>

            <div>
              <CommentsIcon />
              <span>8</span>
            </div>

            <div>
              <TimerIcon />
              <span>25 MIN</span>
            </div>
          </div>
          
          <Button onClick={handleClick} gap={'narrow'} type={'outline'} color={'colorful'} text="Read more" />
          
        </div>
        
      </div>

    )
  }

  const { control } = useFormContext();


  return (

    <div className="recipe-card">
      <div className="recipe-card-header">
        
        <img className="userdata-picture" src={CardDetails?.profile_picture || "/assets/images/pfp.jpg"} alt="" />
          
        <div className="userdata">
          <span className="userdata-name">{CardDetails?.name}</span>
          <span className="timeline">1 minute ago</span>
        </div>

      </div>
      <div className="recipe-card-title">{CardDetails?.title ? truncateText(CardDetails.title, 150) : "The title will appear here."}</div>

      {/* <img className="recipe-card-image" src="/assets/images/post.jpg" alt="" /> */}

      <div className="recipe-card-image-wrapper">
        <Controller
          name="photo"
          control={control}
          defaultValue=""
          render={({ field }) => (
            field.value ? (
              <img className="recipe-card-image" src={field.value} alt="" />
            ) : (
              <img className="recipe-card-image" src="/assets/images/recipe_default.jpg" alt="" />
            )
          )}
        />

        <div className="recipe-card-image-select">

          {/* <input type="file" accept="image/*" placeholder="Upload picture" 
                  className="btn btn-large btn-outline btn-gray"
                  onChange={(e) => handleImageChange(e, field.onChange)}
          /> */}

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