import mongoose from 'mongoose';

const UserSchm = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    gmail:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
    
})

export default mongoose.model('UserDtl', UserSchm)