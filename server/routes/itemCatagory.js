import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryByName,
  updateCategoryByName,
  deleteCategoryByName,
} from "../controller/itemCatagory";

const router = express.Router();

// Create a new category
router.post("/categories", createCategory);

// Get all categories
router.get("/categories", getAllCategories);

// Get a specific category by name
router.get("/categories/:cname", getCategoryByName);

// Update a category by name
router.put("/categories/:cname", updateCategoryByName);

// Delete a category by name
router.delete("/categories/:cname", deleteCategoryByName);

export default router;
