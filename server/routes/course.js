import express from 'express'
import { getCourse, createCourse, deleteCourse,updateCourse} from '../controllers/course.js';
import course from '../models/course.js'


const router = express.Router();

router.get('/', getCourse);
router.post('/', createCourse);
router.delete('/:idd', deleteCourse);
router.post('/update', updateCourse);


//
export default router;