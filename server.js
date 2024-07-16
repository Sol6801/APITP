import express from 'express'
import dotenv from 'dotenv'
//import { BOOKS } from '.data.js'
//import { placeRoutes } from './routes/placeRouter.js'
//import errorHandler from './middlewares/errorHandler.js'

dotenv.config()

const PORT = process.env.PORT || 3001

const app = express ()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//app.use('/api', placeRoutes(BOOKS))
//app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log (`Server running on port ${PORT}`)
})