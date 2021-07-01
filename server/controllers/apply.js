import ApplyData from "../models/apply.js";

export const getAppliedStudents = async (req, res) => {
  try {
    const allApplied = await ApplyData.find();
    res.status(200).json(allApplied);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const apply = async (req, res) => {
  const apply = req.body;
  const newApplied = new ApplyData(apply);

  try {
    await newApplied.save();
    res.status(201).json(newApplied);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteAppliedStudent = async (req, res) => {
  const idd = req.params.idd;

  try {
    await ApplyData.findByIdAndRemove(idd).exec();
    res.send("Student Deleted!");
  } catch (error) {
    console.log(error);
  }
};