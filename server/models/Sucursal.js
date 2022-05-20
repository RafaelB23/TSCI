import mongoose from 'mongoose'

const sucursalSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    address: {
        street:{type: String, required: true, trim: true},
        cp:{type: Number, minlength: 5, maxlength: 7, required: true, trim: true},
        city:{type: String, required: true, trim: true},
        state:{type: String, required: true, trim: true}
    },
    phone_number:{type: Number, required: true, trim: true}
})

export default mongoose.model("Sucursal", sucursalSchema)