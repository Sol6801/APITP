import Joi from 'joi'

export const bodyReviewSchema = Joi.object({
  body: Joi.object({
    title: Joi.string().max(80).required(),
    content: Joi.string().required(),
    year: Joi.number().optional().prefs({ convert: false }),
  })
})

export const idReviewSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().pattern(/^[0-9]+$/, 'Debe ser un número').required()
  })
})

export const updateReviewSchema = Joi.object({
  body: bodyReviewSchema.extract('body'),
  params: idReviewSchema.extract('params')
})