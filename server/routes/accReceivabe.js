import express from "express";
import {
  createAccountReceivable,
  getAllAccountReceivables,
  getAccountReceivableById,
  updateAccountReceivableById,
  deleteAccountReceivableById,
} from "../controller/accReceivabe.js";

const router = express.Router();

router
  .post("/", createAccountReceivable)
  .get("/all", getAllAccountReceivables)
  .get("/:id", getAccountReceivableById)
  .put("/:id", updateAccountReceivableById)
  .delete("/:id", deleteAccountReceivableById);

export default router;
