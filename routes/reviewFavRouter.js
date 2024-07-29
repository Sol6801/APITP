import { Router } from 'express'
import { reviewFavController } from '../controllers/reviewFavController.js'

export const reviewFavRoutes = () => {
const reviewFavRouter = Router()
const { markAsFavorite, getAllFavoriteReviews, getAllUsersWhoFavedAReview } = reviewFavController()

reviewFavRouter.route('/review-fav')
  .post(markAsFavorite)
  .get(getAllFavoriteReviews)

reviewFavRouter.route('/users-fav')
  .get(getAllUsersWhoFavedAReview)

  return reviewFavRouter
}