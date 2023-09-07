import Category from "@components/Category"
import { ArrowIcon } from "@public/assets/icons/ArrowIcon"
import { useState } from "react";
import { useFormContext } from 'react-hook-form';

type props = {
  className?: string;
}

const Dropdown = ({className} : props) => {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState({image: '', name: ''})

  const { register } = useFormContext()

  const handleCategoryClick = (image: string, name: string) => {
    setOpen(false)
    setSelected({image, name})
    register('photo', { value: image })
    register('category', { value: name })
  }

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
          <Category image="/assets/images/post.jpg" name="Seafood" onClick={() => handleCategoryClick("/assets/images/post.jpg", "Seafood")} />
          <Category image="/assets/images/post.jpg" name="Less than 30 min" onClick={() => handleCategoryClick("/assets/images/post.jpg", "Less than 30 min")} />
          <Category image="/assets/images/post.jpg" name="Less than 30 min" />
        </div>
    )}

    
  </div>
  )
}

export default Dropdown