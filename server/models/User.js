import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String, required: true, trim: true
    },
    lastname:{
        maternal:{type: String, trim: true},
        paternal:{type: String, trim: true}
    },
    phone_number:{
        type: Number, minlength: 10, maxlength: 10, required: true, trim: true
    },
    password:{
        type: String, required: true
    },
    mail:{
        type: String, required: true, trim: true
    },
    address:{
        street:{type: String, required: true, trim: true},
        streetNum:{type: String, required: true, trim: true},
        cp:{type: Number, minlength: 5, maxlength: 7, required: true, trim: true},
        city:{type: String, required: true, trim: true},
        state:{type: String, required: true, trim: true}
    },
    profile_img:{
        public_id: String,
        url: String
    },
})

export default mongoose.model('User', userSchema)