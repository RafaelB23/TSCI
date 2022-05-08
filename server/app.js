import express from 'express'
import fileUpload from 'express-fileupload'
import ordersRoutes from './routes/orders.routes.js'
import driversRoutes from './routes/drivers.routes.js'

const app = express()

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
app.use(ordersRoutes)
app.use(driversRoutes)

export default app