import courseDATA from "../models/course.js";


export const getCourse = async (req, res) => {
  try {
    const allCourses = await courseDATA.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addCourse = async (req, res) => {
  const course = req.body;
  const newCourse = new courseDATA(course);

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
    await corseDATA.findByIdAndRemove(idd).exec();
    res.send("course Deleted!");
  } catch (error) {
    console.log(error);
  }
};
