import { response, Router } from 'express'
import { placeController } from 'express'

export const placeRoutes = (PLACES) => {
    const placeRouter = Router()
    const {getPlaces, createPlace, getPlaceById } = placeController(PLACES)

    placeRouter.route('/places')
        .get(getPlaces)
        .post(createPlace)
 

    placeRouter.route('places/books/:id')
        .get((request, response) => {
            console.log(request.params)
            //const { id } = request.params 
            //const place = PLACES.find.....
            return response.status(200).json(place)
    })
}