import { useEffect, useRef, useState } from "react"
import { Button } from "./Button";
import { RemoveCircleIcon } from "@public/assets/icons/RemoveCircleIcon";
import { AddCircleIcon } from "@public/assets/icons/AddCircleIcon";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";


interface IngredientProps {
  instructionIndex: number;
  onDeleteInstruction: (instructionIndex: number) => void;
}



const Instruction = ({ instructionIndex, onDeleteInstruction } : IngredientProps ) => {

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleTextareaChange = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  const { control } = useFormContext();

  const handleDelete = () => {
    onDeleteInstruction(instructionIndex);
  };

  return (
    <div className="dynamic-instruction-input">
      <Button onClick={handleDelete} type='icon' text={<RemoveCircleIcon />} />
      <div className="dynamic-instruction-input-content">
        <div className="dynamic-instruction-number">{(instructionIndex + 1)}</div>
        {/* <textarea placeholder="Write here..." onChange={handleTextareaChange} ref={textareaRef} /> */}

        <Controller
          name={`instructions[${instructionIndex}].instruction`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Write here..."
              onChange={(e) => {
                field.onChange(e);
                handleTextareaChange();
              }}
              ref={textareaRef}
            />
          )}
        />

      </div>
    </div>
  );
};


const DynamicInstructions = () => {

  // const [instructions, setInstructions] = useState<{}[]>(
  //   [
  //     {}
  //   ]
  // );

  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "instructions",
  });

  const handleAddInstruction = () => {
    append({ instruction: "" });
  };

  useEffect(() => {
    handleAddInstruction()
  }, [])
  

  const handleDeleteInstruction = (instructionIndex: number) => {
    remove(instructionIndex);
  };

  // const handleAddInstruction = () => {
  //   setInstructions([...instructions, {}]);
  // };

  // const handleDeleteInstruction = (instructionIndex: number) => {
  //   const newInstructions = instructions.filter((_, index) => index !== instructionIndex);
  //   setInstructions(newInstructions);
  // };


  return (
    <div className="dynamic-instruction">

      {fields.map((field, index) => (
        <Instruction
          key={field.id as string}
          instructionIndex={index}
          onDeleteInstruction={handleDeleteInstruction}
        />
      ))}

      <Button onClick={handleAddInstruction} type='icon' 
        text={<> <AddCircleIcon /> <div>Add instruction</div> </>} />
        
    </div>
  )
}

export default DynamicInstructions