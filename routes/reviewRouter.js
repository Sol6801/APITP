import { Router } from 'express'
import { reviewController } from '../controllers/reviewController.js'
import { schemaValidator } from '../middlewares/validations.js'
import { bodyReviewSchema, updateReviewSchema } from '../schemas/reviewSchemas.js'

export const reviewRoutes = () => {
  const reviewRouter = Router()
  const { getReviews, getReviewByPlace, getReviewByUser, createReview, getReviewById, deleteById, updateById } = reviewController()

  reviewRouter.route('/reviews')
    .get(getReviews)
    .post(schemaValidator(bodyReviewSchema), createReview)

  reviewRouter.route('/review/:id')
    .get(getReviewById)
    .delete(deleteById)
    .patch(schemaValidator(updateReviewSchema), updateById)

  reviewRouter.route('/review-place')
    .get(getReviewByPlace)

  reviewRouter.route('/review-user')
    .get(getReviewByUser)

  return reviewRouter
}