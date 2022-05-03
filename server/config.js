import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 3000
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testdb"
export const CLOUDINARY_URL = process.env.CLOUDINARY_URL