import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 5000
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testdb"
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET