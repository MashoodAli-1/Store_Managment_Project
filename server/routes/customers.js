import express from "express";
const router = express.Router();
import {
  createCustomer,
  getAllCustomers,
  getCustomerByName,
  updateCustomerByName,
  deleteCustomerByName,
} from "../controller/customers";

// Create a new customer
router
  .post("/", createCustomer)

  // Get all customers
  .get("/all", getAllCustomers)

  // Get a specific customer by name
  .get("/one", getCustomerByName)

  // Update a customer by name
  .put("/", updateCustomerByName)

  // Delete a customer by name
  .delete("/", deleteCustomerByName);

module.exports = router;
