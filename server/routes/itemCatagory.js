import express from "express";
const router = express.Router();
import {
  createCategory,
  getAllCategories,
  getCategoryByName,
  updateCategoryById,
  deleteCategoryById,
} from "../controller/itemCatagory.js";

// Create a new category
router.post("/", createCategory);

// Get all categories
router.get("/all", getAllCategories);

// Get a specific category by name
router.get("/one", getCategoryByName);

// Update a category by name
router.patch("/update", updateCategoryById);

// Delete a category by name
router.delete("/:id", deleteCategoryById);

export default router;
