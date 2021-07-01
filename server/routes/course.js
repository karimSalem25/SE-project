import express from 'express'
import { getCourse, addCourse, deleteCourse} from '../controllers/course.js';
import course from '../models/course.js'


const router = express.Router();

router.get('/', getCourse);
router.post('/', addCourse);
router.delete('/:idd', deleteCourse);



//
export default router;