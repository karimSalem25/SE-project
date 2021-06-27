import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    id: Number,
    username: String,
    email: String,
    major: String,
    section : {
        type: String,
        default : ''
    }

});

const student = mongoose.model('student' , studentSchema);

export default student;