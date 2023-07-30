import express from "express";
import usersController from "../controller/users";

const router = express.Router();

// Create a new user
router.post("/signup", usersController.createUser);

// Get all users
router.get("/", usersController.getAllUsers);

// Get a specific user by email
router.get("/signin", usersController.SignIn);

// Delete a specific user by email
router.delete("/", usersController.deleteUserByEmail);

router.put("/forgetpassword", usersController.forgetPassword);

export default router;
