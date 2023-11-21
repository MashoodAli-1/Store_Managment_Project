import express from "express";
import {
  createSalesRecord,
  getAllSalesRecords,
  getSalesRecordByName,
  updateSalesRecordById,
  deleteSalesRecordById,
} from "../controller/sales.js";

const router = express.Router();

router
  .post("/", createSalesRecord) // Create a new sales record
  .get("/all", getAllSalesRecords) // Get all sales records
  .get("/one", getSalesRecordByName) // Get a specific sales record by cname
  .put("/:id", updateSalesRecordById) // Update a sales record by id
  .delete("/:id", deleteSalesRecordById); // Delete a sales record by id

export default router;
 