import express from 'express'
import fileUpload from 'express-fileupload'
import ordersRoutes from './routes/orders.routes.js'

const app = express()

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
app.use(ordersRoutes)

export default app