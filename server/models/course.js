import mongoose from 'mongoose'; 

const courseSchema = mongoose.Schema({
    
    CourseID: Number, 
    CourseName: String, 
    CreditHours: Number,  
    
    
}); 

const course= mongoose.model('course', courseSchema);
export default course;