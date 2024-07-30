import { Router } from 'express'
import { reviewFavController } from '../controllers/reviewFavController.js'

export const reviewFavRoutes = () => {
  const reviewFavRouter = Router()
  const { markAsFavorite, getAllFavoriteReviews, getAllUsersWhoFavedAReview } = reviewFavController()

  reviewFavRouter.route('/review-fav')
    .post(markAsFavorite)
    .get(getAllFavoriteReviews) //*Devuelve las reseñas que faveo un usuario (segun el id del usuario) */
  ///api/review-fav?(user)id=num 

  reviewFavRouter.route('/users-review-fav')
    .get(getAllUsersWhoFavedAReview) //*Devuelve los usuarios que favearon una reseña (segun el id de la reseña) */
  ///api/users-review-fav?(review)id=num 


  return reviewFavRouter
}