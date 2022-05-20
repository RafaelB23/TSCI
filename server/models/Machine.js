import mongoose from 'mongoose'

const machineSchema = new mongoose.Schema({
    noMachine: {
        type: String,
        required: true    
    },
    costHour: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('Machine', machineSchema)