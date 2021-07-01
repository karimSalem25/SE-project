import express from 'express'
import { getCourse, createCourse, deleteCourse} from '../controllers/course.js';
import course from '../models/course.js'


const router = express.Router();

router.get('/', getCourse);
router.post('/', createCourse);
router.delete('/:idd', deleteCourse);



//
export default router;