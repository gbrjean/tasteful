import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type props = {
  name: string;
  min: number;
  max: number;
  className?: string;
}

const NumberInput = ({name, min, max, className} : props) => {

  // const [value, setValue] = useState<number | ''>('')
  const { control } = useFormContext();

  // const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = parseInt(event.target.value, 10);

  //   if (inputValue >= min && inputValue <= max) {
  //     setValue(inputValue)
  //   } else if (isNaN(inputValue)) setValue('')
  // };

  return (
    // <input type="number" min={min} max={max} value={value} onChange={handleValueChange} className={className} />
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <input
          type="number"
          min={min}
          max={max}
          {...field}
          className={className}
        />
      )}
    />
  )
}

export default NumberInput