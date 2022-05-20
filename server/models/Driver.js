import mongoose from 'mongoose'
//TO-DO Roles
const driverSchema = new mongoose.Schema({
    name:{
        type: new mongoose.Schema({
            first_name:{ type: String, required: true, trim: true },
            last_name:{ type: String, required: true, trim: true }
        }, { _id : false })
    },
    phone_number:{
        type: Number, minlength: 10, maxlength: 10, required: true, trim: true
    },
    mail:{
        type: String, required: true, trim: true
    },
    password:{
        type: String, required: true, trim: true, default: "password"
    },
    rfc:{
        type: String, maxlength: 13 , required: true, trim: true
    },
    address:{
        type: new mongoose.Schema({
            street:{type: String, required: true, trim: true},
            cp:{type: Number, minlength: 5, maxlength: 7, required: true, trim: true},
            city:{type: String, required: true, trim: true},
            state:{type: String, required: true, trim: true}
        }, { _id : false })
    },
    rol:{type:String,required:true,trim: true}, //User,Employee
    hiring_date:{
        type: Date
    },
    employment:{
        type: String, required: true, trim: true
    },
    salary_hour:{
        type: Number
    },
    profile_img:{
        public_id: String,
        url: String
    },
})

export default mongoose.model('Driver', driverSchema)