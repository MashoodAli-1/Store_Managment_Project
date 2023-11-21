import express from "express";
import {
  createUser,
  getAllUsers,
  deleteUserByEmail,
  forgetPassword,
  signIn,
} from "../controller/users.js";

const router = express.Router();

// Create a new user
router.post("/signup", createUser);

// Get all users
router.get("/", getAllUsers);

// Get a specific user by email
router.get("/signin", signIn);

// Delete a specific user by email
router.delete("/", deleteUserByEmail);

router.put("/forgetpassword", forgetPassword);

export default router;
