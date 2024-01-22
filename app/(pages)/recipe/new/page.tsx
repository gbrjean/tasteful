"use client"

import { Button } from "@components/Button"
import { useSession } from "next-auth/react"
import Dropdown from "@components/Dropdown"
import DynamicInstructions from "@components/DynamicInstructions"
import DynamicPrompt from "@components/DynamicPrompt"
import RecipeCard from "@components/RecipeCard"
import { useRef, useState } from "react"
import { useForm, SubmitHandler, FormProvider, Controller, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { RecipeValidation } from "@lib/validations/recipe"
import { isBase64Image } from "@lib/utils"
import { useUploadThing } from "@lib/uploadthing"
import { useRouter } from "next/navigation"
import { createRecipe } from "@lib/actions/recipe.actions"


type FormData = z.infer<typeof RecipeValidation>;

const NewRecipe = () => {

  const router = useRouter()

  const { data: session } = useSession()

  const [files, setFiles] = useState<File[]>([])
  const { startUpload } = useUploadThing("media")

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  const resolver = zodResolver(RecipeValidation);

  const methods = useForm<FormData>({resolver});


  const onSubmit: SubmitHandler<FormData> = async (data) => {

    const blob = data.photo

    const hasImageChanged = isBase64Image(blob)
    if(hasImageChanged){
      const imgRes = await startUpload(files)

      if(imgRes && imgRes[0].url){
        data.photo = imgRes[0].url
      }

    }

    try {
      if(session && session.user){
        await createRecipe({ formData: data, userEmail: session.user.email! });
      }
      router.push("/")
    } catch (error: any) {
      console.error("Error creating recipe:", error.message);
    }

  };

  const formTitle = useWatch({ control: methods.control, name: 'title' });
  const formDescription = useWatch({ control: methods.control, name: 'description' });

  const CardDetails = {
    name: session?.user?.name,
    profile_picture: session?.user?.image,
    title: formTitle,
    description: formDescription,
  }


  return (
    <>
    <h1>Write new recipe</h1>

    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="form-recipe">
        <div className="form-recipe-container">

          <h2>Basic informations</h2>

          <div className="form-recipe-input">
            <label htmlFor="title">Recipe title</label>
            <input type="text" id="title" {...methods.register('title')} placeholder="Enter recipe title" />
            {methods.formState.errors.title && <p className="error">{methods.formState.errors.title.message}</p>}
          </div>

          <div className="form-recipe-input">
            <label htmlFor="description">Recipe description</label>
            <Controller
              name="description"
              control={methods.control}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Enter recipe description"
                  onChange={(e) => {
                    field.onChange(e);
                    handleTextareaChange();
                  }}
                  ref={textareaRef}
                />
              )}
            />
           
            {methods.formState.errors.description && <p className="error">{methods.formState.errors.description.message}</p>}
          </div>

          <div className="form-recipe-input">
            <span>Preparation time</span>
            
            <div className="form-recipe-input-wrapper">

              <Button onClick={() => methods.setValue('prep_time', 'lt-5')} gap="narrow" type="outline" color="gray" text="<5 MIN" value="lt-5" />
              <Button onClick={() => methods.setValue('prep_time', '5-10')} gap="narrow" type="outline" color="gray" text="5-10 MIN" value="5-10" />
              <Button onClick={() => methods.setValue('prep_time', '10-20')} gap="narrow" type="outline" color="gray" text="10-20 MIN" value="10-20" />
              <Button onClick={() => methods.setValue('prep_time', '20-30')} gap="narrow" type="outline" color="gray" text="20-30 MIN" value="20-30" />
              <Button onClick={() => methods.setValue('prep_time', '30-45')} gap="narrow" type="outline" color="gray" text="30-45 MIN" value="30-45" />
              <Button onClick={() => methods.setValue('prep_time', '45-60')} gap="narrow" type="outline" color="gray" text="45-60 MIN" value="45-60" />
              <Button onClick={() => methods.setValue('prep_time', '60-100')} gap="narrow" type="outline" color="gray" text="60-100 MIN" value="60-100" />

            </div>

            {methods.formState.errors.prep_time && <p className="error">{methods.formState.errors.prep_time.message}</p>}

          </div>

          <Dropdown className="form-recipe-input" />

          {methods.formState.errors.category && <p className="error">{methods.formState.errors.category.message}</p>}

        </div>

        <div className="form-recipe-container">

          <h2>Preparation ingredients</h2>

          <DynamicPrompt />

          {methods.formState.errors.materials && <p className="error">{methods.formState.errors.materials.message}</p>}

        </div>

        <div className="form-recipe-container">

          <h2>Preview</h2>

          <RecipeCard isPreview CardDetails={CardDetails} setFiles={setFiles} />

        </div>

        <div className="form-recipe-container">

          <h2>Recipe instructions</h2>

          <DynamicInstructions />

          {methods.formState.errors.instructions && <p className="error">{methods.formState.errors.instructions.message}</p>}

        </div>

        <button type="submit">Create recipe</button>

      </form>
    </FormProvider>


    </>
  )
}

export default NewRecipe