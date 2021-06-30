import StudentData from "../models/TA.js";

export const getStudents = async (req, res) => {
  try {
    const allStudents = await StudentData.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const uploadGrades = async (req, res) => {
  const student = req.body;
  const newStudent = new StudentData(student);

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  const idd = req.params.idd;

  try {
    await StudentData.findByIdAndRemove(idd).exec();
    res.send("Student Deleted!");
  } catch (error) {
    console.log(error);
  }
};