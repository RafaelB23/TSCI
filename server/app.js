import express from 'express'
import fileUpload from 'express-fileupload'
import ordersRoutes from './routes/orders.routes.js'
import driversRoutes from './routes/drivers.routes.js'
import machinesRoutes from './routes/machines.routes.js'

const app = express()

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
app.use(ordersRoutes)
app.use(driversRoutes)
app.use(machinesRoutes)

export default app