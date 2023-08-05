// const express = require("express");
import express from "express";
const router = express.Router();
import {
  createParty,
  deletePartyById,
  updatePartyById,
  getAllParties,
} from "../controller/parties.js";

router
  .post("/", createParty)
  .get("/all", getAllParties)
  .patch("/update", updatePartyById)
  .delete("/:id", deletePartyById);

export default router;
