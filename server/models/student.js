import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    id: Number,
    studentName: String,
    grade: String,
    section : {
        type: String,
        default : 'AAAAAA'
    }

});

const student = mongoose.model('student' , studentSchema);

export default student;