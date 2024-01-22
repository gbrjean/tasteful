import Category from "@components/Category"
import { ArrowIcon } from "@public/assets/icons/ArrowIcon"
import { useState, useEffect } from "react";
import { useFormContext } from 'react-hook-form';
import { categories } from "@constants/categories";

type props = {
  className?: string;
  defaultValue?: string;
}

const Dropdown = ({className, defaultValue} : props) => {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState({image: '', name: ''})

  const { register } = useFormContext()

  const handleCategoryClick = (image: string, name: string) => {
    setOpen(false)
    setSelected({image, name})
    // register('photo', { value: image })
    register('category', { value: name.toLowerCase() })
  }

  useEffect(() => {
    if(defaultValue){
      let selectedCategory = categories.find((category) => category.name.toLowerCase() == defaultValue);
      if(selectedCategory){
        setSelected({image: selectedCategory.image, name: selectedCategory.name})
      }
      register('category', { value: defaultValue.toLowerCase() })
    }
  }, [defaultValue])
  


  return (
    <div className={open ? `input-dropdown ${className} --active` : `input-dropdown ${className}`}>

    <div className="input-dropdown-header" onClick={() => setOpen(prev => !prev)}>
      { selected.image && selected.name ? (
        <Category image={selected.image} name={selected.name} />
      ) : (
        <span>Select recipe category</span>
      )}
      <ArrowIcon />
    </div>

    { open && (
        <div className="input-dropdown-content">

          { categories.map((category) => (
            <Category image={category.image} name={category.name} onClick={() => handleCategoryClick(category.image, category.name)} />
          ))}

        </div>
    )}

    
  </div>
  )
}

export default Dropdown