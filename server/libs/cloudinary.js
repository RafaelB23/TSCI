import {v2 as cloudinary} from 'cloudinary'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config.js'



cloudinary.config({ 
    cloud_name: 'rambtest', 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
});

export const uplaodImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'test/orders'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}