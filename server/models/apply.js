import mongoose from 'mongoose';

const ApplySchema = mongoose.Schema({
    id: Number,
    userName: String,
    firstName: String,
    secondName: String,
    major: String,
    lastName: String,
    section : {
        type: String,
        default : ''
    }

});

const apply = mongoose.model('apply' , ApplySchema);

export default apply;