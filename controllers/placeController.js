import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const placeController = () => {
  const getPlaces = async (request, response, next) => {
    const { query } = request

    try {
      const places = await prisma.places.findMany({
        where: {
          name: {
            contains: query?.name ?? ''
          }
        }
      })

      const responseFormat = {
        data: places,
        message: 'Places retrieved successfully'
      }

      return response.status(200).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  const getAllPlaces = async (_request, response, next) => {
    try {
      const places = await prisma.places.findMany()

      
      const responseFormat = {
        data: places,
        message: 'Places retrieved successfully'
      }

      return response.status(httpStatus.OK).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }
  const getPlaceById = async (request, response, next) => {
    const { id } = request.params
    const placeId = Number(id)

    try {
      const place = await prisma.places.findUnique({
        where: {
          id: placeId
        }
      })

      const responseFormat = {
        data: place,
        message: 'Place retrieved successfully'
      }

      return response.status(httpStatus.OK).json(responseFormat)
    } catch (error) {
      next(error)
    } finally {
      await prisma.$disconnect()
    }
  }

  return {
    getPlaces,
    getPlaceById,
    getAllPlaces
  }
}