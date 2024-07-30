import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { expressjwt as ejwt } from 'express-jwt'
import { reviewRoutes } from './routes/reviewRouter.js'
import { reviewFavRoutes } from './routes/reviewFavRouter.js'
import { placeRoutes } from './routes/placeRouter.js'
import { placeFavRoutes } from './routes/placeFavRouter.js'
import { userRoutes } from './routes/userRouter.js'
import errorHandler from './middlewares/errorHandler.js'

dotenv.config()

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
}))

app.post('/api/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err)
      return res.status(400).send('Upload failed')
    }
    res.status(200).json({ message: req.file })
  })
})

app.use(ejwt({
  secret: process.env.SECRET_KEY,
  algorithms: ['HS256'],
}).unless({
  path: ['/api/login', '/api/register', '/api/refresh-token'],
})
)

app.use('/api', placeRoutes(), userRoutes(), placeFavRoutes())
app.use('/api', reviewRoutes(), userRoutes(), reviewFavRoutes())
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})