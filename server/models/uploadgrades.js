import mongoose from 'mongoose'; 
const GradesSchema = mongoose.Schema({
    id: Number,
    studentName: String,
    elementName: String,
    grade: String,
    major: String,
    TAIname: String,
    course : {
        type: String,
        default : ''
    },
});
const grades= mongoose.model('grade', GradesSchema);
export default grades;