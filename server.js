import express from 'express'
import dotenv from 'dotenv'
//import { BOOKS } from '.data.js'
//import { bookRoutes } from './routes/bookRouter.js'
//import errorHandler from './middlewares/errorHandler.js'

dotenv.config()

const PORT = process.env.PORT || 3001

const app = express ()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//app.use('/api', bookRoutes(BOOKS))
//app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log (`Server running on port ${PORT}`)
})