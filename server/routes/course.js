import express from 'express'
import {addCourse, deleteCourse} from '../controllers/course.js';
import course from '../models/course.js'


const router = express.Router();

//router.get('/', addCourse);
router.post('/', addCourse);
router.delete('/:idd', deleteCourse);



//
export default router;