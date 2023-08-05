import express from "express";
const router = express.Router();
import {
  createItem,
  getAllItems,
  updateItemById,
  deleteItemById,
} from "../controller/items.js";

// Create a new item
router.post("/", createItem);

// Get all items
router.get("/all", getAllItems);

// Update an item by ID
router.patch("/update", updateItemById);

// Delete an item by ID
router.delete("/:id", deleteItemById);

export default router;
