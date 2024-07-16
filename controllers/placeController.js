import { v4 as uuid } from 'uuid'

//probablemente mejor sea para comentarios el siguiente codigo

export const placeController = (PLACES) => {
    const getPlaces = (_request, response) => {
        return response.status(200).json(PLACES)
    }
}

const createPlace = (request, response, next) => {
    const newPlace = request.body 
    const places = structuredClone(BOOKS) //structured colone porque esa BD es un objeto de js para la prueba
    try {
        if(!newPlace.title || !newPlace.author){
            throw new Error('Title and author are required')
        }
        books.push({
            id: uuid(),
            ...newPlace //objeto
        })
        return response.status(200).json(places)
        } catch (error) {
        next(error)
        }
    }
     const getPlaceById = (request, response) => {

     }

return {
    getPlaces,
    createPlace,
    getPlaceById
}