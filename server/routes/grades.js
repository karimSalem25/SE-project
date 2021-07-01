import express from 'express'
import { getGrades, createGrade, deleteGrade} from '../controllers/grade.js';
import grades from '../models/uploadgrades.js'


const router = express.Router();

router.get('/', getGrades);
router.post('/', createGrade);
router.delete('/:idd', deleteGrade);



//
export default router;
