import { ReviewsIcon } from "@public/assets/icons/ReviewsIcon"
import { Button } from "./Button"

type props = {
  hasActions?: boolean;
}

const ReviewCardUser = ({hasActions} : props) => {

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  return (
    <div className="review-card-user">
      <img className="review-card-user-image" src="/assets/images/post.jpg" alt="" />
      <div className="review-card-content">

        <div className="review-card-content-header">
          <div className="review-card-content-header-data">

            <div className="review-card-title">Pizza de casa</div>
            <div className="review-card-rating">
              <span>Your rating:</span>
              <div>
                <ReviewsIcon />
                <span>4.8</span>
              </div>
            </div>

          </div>

          { hasActions && (
            <div className="review-card-content-header-actions review-card-actions">
              <Button onClick={handleEdit} type="outline" gap="narrow" color="gray" text="Edit" />
              <Button onClick={handleDelete} type="outline" gap="narrow" color="gray" text="Delete" />
            </div>
          )}
        
        </div>

        <p className="review-card-content-text">
        Lorem ipsum dolor sit amet consectetur. Viverra in morbi donec sed nunc cursus eget enim mattis. Neque accumsan odio senectus mauris malesuada augue faucibus amet sed. Adipiscing ornare velit vel blandit donec eget habitasse.
        </p>

        { hasActions && (
          <div className="review-card-actions">
            <Button onClick={handleEdit} type="outline" gap="narrow" color="gray" text="Edit" />
            <Button onClick={handleDelete} type="outline" gap="narrow" color="gray" text="Delete" />    
          </div>
        )}

      </div>
    </div>
  )
}

export default ReviewCardUser