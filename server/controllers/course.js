import CourseData from "../models/course.js";

export const getCourse = async (req, res) => {
  try {
    const allCourses = await CourseData.find();
    res.status(200).json(allCourses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCourse = async (req, res) => {
  const course = req.body;
  const newCourse = new CourseData(course);

  try {
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  const idd = req.params.idd;

  try {
    await CourseData.findByIdAndRemove(idd).exec();
    res.send("Course Deleted!");
  } catch (error) {
    console.log(error);
  }
};
