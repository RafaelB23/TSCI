import {v2 as cloudinary} from 'cloudinary'


cloudinary.config({ 
    cloud_name: 'rambtest', 
    api_key: '153453978869194', 
    api_secret: 'hh_hPEzL4kjHjFVkPdqTd2jm9S4',
    secure: true
});

export const uplaodImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'test/orders'
    })
}