import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    id: Number,
    credit_hrs: Number,
    course_name: String,
 
    section : {
        type: String,
        default : ' '
    }

});

const course = mongoose.model('course' , courseSchema);

export default course;