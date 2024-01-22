import { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
import { Button } from "./Button";
import { RemoveCircleIcon } from "@public/assets/icons/RemoveCircleIcon";
import { AddCircleIcon } from "@public/assets/icons/AddCircleIcon";
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';


interface IngredientInputProps {
  materialIndex: number;
  ingredientIndex: number;
  onDeleteIngredient: (materialIndex: number, ingredientIndex: number) => void;
}

interface MaterialInputProps {
  materialIndex: number;
  onDeleteMaterial: (materialIndex: number) => void;
}



const IngredientInput = ({ materialIndex, ingredientIndex, onDeleteIngredient } : IngredientInputProps) => {

  const { control } = useFormContext();
  
  const handleDelete = () => {
    onDeleteIngredient(materialIndex, ingredientIndex);
  };

  return (
    <div className="dynamic-prompt-ingredient">
      <span>Ingredient</span>
      <div className="dynamic-prompt-input">

        <Controller
          name={`materials[${materialIndex}].ingredients[${ingredientIndex}].name`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Write here..."
              onChange={field.onChange}
            />
          )}
        />


        {ingredientIndex > 0 && 
          <Button onClick={handleDelete} type='icon' 
            text={<RemoveCircleIcon />} />
        }
      </div>
      <span>Quantity</span>
      <NumberInput name={`materials[${materialIndex}].ingredients[${ingredientIndex}].quantity`} min={1} max={99} className="quantity" />
    </div>
  );
};


const MaterialInput = ({ materialIndex, onDeleteMaterial } : MaterialInputProps ) => {


  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `materials[${materialIndex}].ingredients`,
  });

  const handleDelete = () => {
    onDeleteMaterial(materialIndex);
  };

  const handleAddIngredient = () => {
    append({ name: "" }); // Add an empty ingredient
  };

  const handleDeleteIngredient = (materialIndex: number, ingredientIndex: number) => {
    remove(ingredientIndex);
  };


  return (
    <div className="dynamic-prompt-material">
      <span>Material</span>
      <div className="dynamic-prompt-input">

        <Controller
          name={`materials[${materialIndex}].name`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Write here..."
              onChange={field.onChange}
            />
          )}
        />

        
        {materialIndex > 0 &&
          <Button onClick={handleDelete} type='icon' 
            text={<RemoveCircleIcon />} />
        }
      </div>
      <div className="dynamic-prompt-ingredient-wrapper">

        {fields.map((field, index) => (
          <IngredientInput
            key={field.id as string}
            materialIndex={materialIndex}
            ingredientIndex={index}
            onDeleteIngredient={handleDeleteIngredient}
          />
        ))}

        <Button onClick={handleAddIngredient} type='icon' 
          text={<> <AddCircleIcon /> <div>Add ingredient</div> </>} />
      </div>
    </div>
  );
};


const DynamicPrompt = ({defaultValues} : {defaultValues?: []}) => {

  const { control, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "materials",
  });

  const handleAddMaterial = () => {
    append({ name: "", ingredients: [{ name: "" }] });
  };

  const handleDeleteMaterial = (materialIndex: number) => {
    if (fields.length > 1) {
      remove(materialIndex);
    }
  };

  useEffect(() => {
    handleAddMaterial();
    if (defaultValues && defaultValues.length > 0) {
      defaultValues.forEach((material: any, materialIndex) => {
        setValue(`materials[${materialIndex}].name`, material.material);

        if (material.elements && material.elements.length > 0) {
          material.elements.forEach((element: any, ingredientIndex: number) => {
            setValue(`materials[${materialIndex}].ingredients[${ingredientIndex}].name`, element.ingredient);
            setValue(`materials[${materialIndex}].ingredients[${ingredientIndex}].quantity`, element.quantity.toString());
          });
        }
      });
    } else {
      handleAddMaterial();
    }
  }, [defaultValues]);


  return (
    <div className="dynamic-prompt">

      {fields.map((field, index) => (
        <MaterialInput key={field.id as string} materialIndex={index} onDeleteMaterial={handleDeleteMaterial}  />
      ))}

      <Button onClick={handleAddMaterial} type='icon' 
          text={<> <AddCircleIcon /> <div>Add material</div> </>}
       />

    </div>
  )
}

export default DynamicPrompt