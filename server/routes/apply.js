import express from 'express'
import { getAppliedStudents, apply, deleteAppliedStudent} from '../controllers/apply.js';


const router = express.Router();

router.get('/', getAppliedStudents);
router.post('/', apply);
router.delete('/:idd', deleteAppliedStudent);



//
export default router;