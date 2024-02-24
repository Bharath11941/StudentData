
import User from "../models/userModel.js";

export const addMultipleUser = async (req, res) => {
  try {
    const { users } = req.body;

    if (Array.isArray(users)&&users.length === 500) {
      await User.insertMany(users);
    } else {
      return res
        .status(500)
        .json({ message: "Some missing datas or morethan the exprected data" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const userData = await User.find({}).sort({ name: -1 });
    return res.status(200).json({userData, message: "get the datas successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const addSingleUser = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
