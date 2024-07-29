import { Router } from 'express'
import { placeController } from '../controllers/placeController.js'
// import { schemaValidator } from '../middlewares/validations.js'
// import { bodyPlaceSchema, updatePlaceSchema } from '../schemas/placeSchemas.js'
// import { isAdmin } from '../middlewares/checkRole.js'

export const placeRoutes = () => {
  const placeRouter = Router()
  const { getPlaces, getPlaceById, getAllPlaces } = placeController()

  placeRouter.route('/place')
    .get(getPlaces)

  placeRouter.route('/places')
    .get(getAllPlaces)

  placeRouter.route('/place/:id')
    .get(getPlaceById)

  return placeRouter
}