import mongoose from 'mongoose'; 

const studentSchema = mongoose.Schema({
    Day: String,
    FirstP: String, 
    SecondP: String,
    ThirdP: String, 
    FourthP: String, 
    FifthP: String,  
    tutorial: {
        type: String, 
        default: 'A'
    },
    
}); 

const student= mongoose.model('student', studentSchema);
export default student;