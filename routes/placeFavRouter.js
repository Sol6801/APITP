import { Router } from 'express'
import { placeFavController } from '../controllers/placeFavController.js'

export const placeFavRoutes = () => {
const placeFavRouter = Router()
const { markAsFavorite, getAllFavoritePlaces, getAllUsersWhoFavedAPlace } = placeFavController()

placeFavRouter.route('/place-fav')
  .post(markAsFavorite)
  .get(getAllFavoritePlaces)

placeFavRouter.route('/users-fav')
  .get(getAllUsersWhoFavedAPlace)

  return placeFavRouter
}