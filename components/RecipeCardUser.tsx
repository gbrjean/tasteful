import { ReviewsIcon } from "@public/assets/icons/ReviewsIcon"
import { CommentsIcon } from "@public/assets/icons/CommentsIcon"
import { TimerIcon } from "@public/assets/icons/TimerIcon"

const RecipeCardUser = () => {
  return (
    <div className="recipe-card">

      <img className="recipe-card-image" src="/assets/images/post.jpg" alt="" />
      <div className="recipe-card-title">Pizza de casa cu salam si sunca presata</div>
      <div className="recipe-card-preptime recipe-card-stats">
        <div>
          <ReviewsIcon />
          <span>4.8</span>
        </div>

        <div>
          <CommentsIcon />
          <span>8</span>
        </div>

        <div>
          <TimerIcon />
          <span>25 MIN</span>
        </div>
      </div>

      <div className="recipe-card-footer">

        <div className="userdata">
          <span className="timeline">17 hours ago</span>
          {/* //TODO: Add iconite edit si delete recipe la profil personal */}
        </div>

      </div>
    </div>
  )
}

export default RecipeCardUser