import express from "express";
import {
  createCompany,
  getAllCompanies,
  getCompanyByName,
  updateCompanyByName,
  deleteCompanyByName,
} from "../controller/companies.js";

const router = express.Router();

router
  .post("/", createCompany)
  .get("/all", getAllCompanies)
  .get("/one", getCompanyByName)
  .put("/", updateCompanyByName)
  .delete("/", deleteCompanyByName);

// module.exports = router;
export default router;
