import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    username: String,
    email: String,
    major: String,
    section : {
        type: String,
        default : 'AAAAAA'
    }

});

const student = mongoose.model('student' , studentSchema);

export default student;