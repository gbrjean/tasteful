type props = {
  image: string;
  name: string;
  onClick?: () => void;
}

const Category = ({image, name, onClick}: props) => {
  return (
    <div className="category" onClick={onClick}>
      <img src={image} alt="" />
      <span>{name}</span>
    </div>
  )
}

export default Category