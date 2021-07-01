import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    id: Number,
    studentName: String,
    major: String,
    course : {
        type: String,
        default : 'AAAAAA'
    }

});

const student = mongoose.model('student' , studentSchema);

export default student;