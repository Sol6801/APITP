import { Router } from 'express'
import { reviewController } from '../controllers/reviewController.js'
// import { schemaValidator } from '../middlewares/validations.js'
// import { bodyReviewSchema, updateReviewSchema } from '../schemas/reviewSchemas.js'
// import { isAdmin } from '../middlewares/checkRole.js'

export const reviewRoutes = () => {
  const reviewRouter = Router()
  const { getReviews, getReviewByPlace, getReviewByUser, createReview, getReviewById, deleteById, updateById } = reviewController()

  reviewRouter.route('/review')
    .get(getReviews)
    .post(/*schemaValidator(bodyReviewSchema), isAdmin,*/createReview)
    
    reviewRouter.route('/review/:id')
    .get(getReviewById)
    .delete(deleteById)
    .patch(/*schemaValidator(updateReviewSchema),*/ updateById)

    reviewRouter.route('/review-place')
    .get(getReviewByPlace)

    reviewRouter.route('/review-user')
    .get(getReviewByUser)

  return reviewRouter
}