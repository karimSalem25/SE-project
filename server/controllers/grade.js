import GradeData from "../models/uploadgrades.js";

export const getGrades = async (req, res) => {
  try {
    const allGrades = await GradeData.find();
    res.status(200).json(allGrades);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createGrade = async (req, res) => {
  const grade = req.body;
  const newGrade = new GradeData(grade);

  try {
    await newGrade.save();
    res.status(201).json(newGrade);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteGrade = async (req, res) => {
  const idd = req.params.idd;

  try {
    await GradeData.findByIdAndRemove(idd).exec();
    res.send("Grade Deleted!");
  } catch (error) {
    console.log(error);
  }
};
