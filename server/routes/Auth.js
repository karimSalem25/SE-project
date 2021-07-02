import express from "express";
import { getUsers, createUser, deleteUser } from "../controllers/user.js";
import user from "../models/user.js";

import UserData from "../models/user.js";
const resetPassword = async (req, res) => {
  try {
    const checkUsers = await UserData.findOne({
      UserName: req.body.userName,
    });
    console.log(checkUsers);
    console.log(req.body);
    if (checkUsers) {
      checkUsers.Password = req.body.password;
      await checkUsers.save();
      return res.status(200).json(checkUsers);
    }
    res.status(404).json("user not found");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const authUsers = async (req, res) => {
  try {
    const checkUsers = await UserData.findOne({
      UserName: req.body.userName,
      Password: req.body.password,
    });
    res.status(200).json(checkUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


const router = express.Router();
router.post("/resetp",resetPassword)
router.post("/", authUsers);
export default router;
