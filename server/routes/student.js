import express from 'express'
import { getStudents, apply, deleteStudent} from '../controllers/student.js';


const router = express.Router();

router.get('/', getStudents);
router.post('/', apply);
router.delete('/:idd', deleteStudent);



//
export default router;