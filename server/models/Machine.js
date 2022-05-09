import mongoose from 'mongoose'

const machineSchema = new mongoose.Schema({
    description: new mongoose.Schema({
        sucursalId: {
            type: String,
            required: true    
        },
        noMachine: {
            type: Number,
            required: true    
        }
    }, { _id : false }),
    area: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Machine', machineSchema)