import { Star } from "@public/assets/icons/Star";


const ReadOnlyReviews = ({rating}: {rating: number}) => {

  const maxStars = 5;

  const render = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} type="full" />);
      } else if (i - 0.5 === rating) {
        stars.push(<Star key={i} type="half" />);
      } else {
        stars.push(<Star key={i} type="empty" />);
      }
    }
    return stars;
  };

  return (
    <div id="star-rating_read-only">
      <div className="stars">
        {render()}
      </div>
      <span>{Number(rating.toFixed(1))}</span>
    </div>
  )
}

export default ReadOnlyReviews