import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    id: Number,
    studentName: String,
    grade: String,
    TAIname: String,
    section : {
        type: String,
        default : ''
    }

});

const student = mongoose.model('student' , studentSchema);

export default student;