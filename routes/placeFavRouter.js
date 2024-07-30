import { Router } from 'express'
import { placeFavController } from '../controllers/placeFavController.js'

export const placeFavRoutes = () => {
  const placeFavRouter = Router()
  const { markAsFavorite, getAllFavoritePlaces, getAllUsersWhoFavedAPlace } = placeFavController()

  placeFavRouter.route('/place-fav')
    .post(markAsFavorite)
    .get(getAllFavoritePlaces) //*Devuelve los lugares que faveo un usuario (segun el id del usuario) */
  ///api/place-fav?(user)id=num 

  placeFavRouter.route('/users-place-fav')
    .get(getAllUsersWhoFavedAPlace) //*Devuelve los usuarios que favearon un lugar (segun el id del lugar) */
  ///api/users-place-fav?(place)id=num 

  return placeFavRouter
}