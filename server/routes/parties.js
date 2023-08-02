// const express = require("express");
import express from "express";
const router = express.Router();
import {
  createParty,
  deletePartyByName,
  updatePartyByName,
  getPartyByName,
  getAllParties,
} from "../controller/parties.js";

router
  .post("/", createParty)
  .get("/all", getAllParties)
  .get("/one", getPartyByName)
  .put("/", updatePartyByName)
  .delete("/", deletePartyByName);

module.exports = router;
