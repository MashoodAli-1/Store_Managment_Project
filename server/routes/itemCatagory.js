// import express from "express";
// import {
//   createCategory,
//   getAllCategories,
//   getCategoryByName,
//   updateCategoryByName,
//   deleteCategoryByName,
// } from "../controller/itemCatagory.js";

// const router = express.Router();

// // Create a new category
// router.post("/categories", createCategory);

// // Get all categories
// router.get("/categories", getAllCategories);

// // Get a specific category by name
// router.get("/categories/:cname", getCategoryByName);

// // Update a category by name
// router.put("/categories/:cname", updateCategoryByName);

// // Delete a category by name
// router.delete("/categories/:cname", deleteCategoryByName);

// export default router;

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
