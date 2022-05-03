import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    owner:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        // type: Map,
        // of: String
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
    blueprints:{
        url: String,
        public_id: String
    },
    date:{
        type: Date,
        // required:true
    }
})

export default mongoose.model('Order', orderSchema)