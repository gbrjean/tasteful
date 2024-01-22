import { useEffect, useRef, useState } from "react"
import { Button } from "./Button";
import { RemoveCircleIcon } from "@public/assets/icons/RemoveCircleIcon";
import { AddCircleIcon } from "@public/assets/icons/AddCircleIcon";
import { useFormContext, Controller, useFieldArray } from "react-hook-form";


interface InstructionProps {
  instructionIndex: number;
  onDeleteInstruction: (instructionIndex: number) => void;
}

interface props {
  defaultValues?: [];
}


const Instruction = ({ instructionIndex, onDeleteInstruction } : InstructionProps ) => {

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


const DynamicInstructions = ({defaultValues}: props) => {


  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "instructions",
  });

  const handleAddInstruction = () => {
    append({ instruction: "" });
  };  

  const handleDeleteInstruction = (instructionIndex: number) => {
    remove(instructionIndex);
  };


  useEffect(() => {
    if (defaultValues) {
      remove(0);
      defaultValues.forEach((instruction: any) => {
        append({ instruction: instruction.instruction });
      });
    } else {
      handleAddInstruction();
    }
  }, [defaultValues]);


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