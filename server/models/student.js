import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
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

const student = mongoose.model('student' , studentSchema);

export default student;