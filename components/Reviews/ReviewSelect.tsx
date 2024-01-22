import { Star } from "@public/assets/icons/Star";
import { useState } from "react";

const ReviewSelect = ({onChange}: {onChange: (rating: number) => void}) => {

  const maxStars = 5;
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    onChange(rating); // Call the parent component's onChange function
  };

  const render = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      const type = i <= (selectedRating || 0)
        ? "full"
        : (i - 0.5 === (selectedRating || 0) ? "half" : "empty");
      stars.push(
        <Star
          key={i}
          type={type}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  }

  return (
    <div id="star-rating">
      <div className="stars">
        {render()}
      </div>
    </div>
  )
}

export default ReviewSelect