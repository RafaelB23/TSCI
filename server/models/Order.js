import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    owner:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: new mongoose.Schema({
            specs:{
                type: String,
                required: true,
                trim: true
            },
            no_pieces:{
                type: Number,
                required: true,
                trim: true
            },
        }, { _id : false })
    },
    blueprints: {
        type: Map,
        of: new mongoose.Schema({
            url: String,
            public_id: String
        })
    },
    created_at:{
        type: String,
        default: Date.now
    }
})

export default mongoose.model('Order', orderSchema)