import Joi from 'joi'

const role = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export const bodyUserSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().max(80).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
    role: Joi.string().valid(role.USER, role.ADMIN).insensitive()
  })
})

export const idUserSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().pattern(/^[0-9]+$/, 'Debe ser un número').required()
  })
})

export const updateUserSchema = Joi.object({
  body: bodyUserSchema.extract('body'),
  params: idUserSchema.extract('params')
})