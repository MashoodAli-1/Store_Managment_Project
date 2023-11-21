// const { User } = require("../models/users"); // Assuming you have a model defined for User

import User from "../models/users.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.email === email && user.password === password) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const deleteUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const deletedUser = await User.destroy({ where: { email } });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const forgetPassword = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const [rowsUpdated] = await User.update(
      { name, password },
      { where: { email }, returning: true }
    );

    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
