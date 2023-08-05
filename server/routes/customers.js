import express from "express";
const router = express.Router();
import {
  createCustomer,
  getAllCustomers,
  getCustomerByName,
  updateCustomerById,
  deleteCustomerById,
} from "../controller/customers.js";

// Create a new customer
router
  .post("/", createCustomer)

  // Get all customers
  .get("/all", getAllCustomers)

  // Get a specific customer by name
  .get("/one", getCustomerByName)

  // Update a customer by name
  .patch("/update", updateCustomerById)

  // Delete a customer by name
  .delete("/:id", deleteCustomerById);

// module.exports = router;
export default router;
