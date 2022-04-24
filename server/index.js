import express from 'express'
import { PORT } from './config.js'
import ordersRoutes from './routes/orders.routes.js'
import { connectDB } from './db.js'

const app = express()
connectDB()

app.use(ordersRoutes)

app.listen(PORT)
console.log('Server is runnning on port', PORT)