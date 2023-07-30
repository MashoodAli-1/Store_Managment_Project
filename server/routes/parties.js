const express = require("express");
const router = express.Router();
const {
  createParty,
  deletePartyByName,
  updatePartyByName,
  getPartyByName,
  getAllParties,
} = require("./companyController");

router
  .post("/", createParty)
  .get("/all", getAllParties)
  .get("/one", getPartyByName)
  .put("/", updatePartyByName)
  .delete("/", deletePartyByName);
  
module.exports = router;
