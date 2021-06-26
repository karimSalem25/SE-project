import express from 'express'
import { getStudents, uploadGrades, deleteStudent} from '../controllers/student.js';


const router = express.Router();

router.get('/', getStudents);
router.post('/', uploadGrades);
router.delete('/:idd', deleteStudent);



//
export default router;