import express from "express";
import {
  createCompany,
  getAllCompanies,
  // getCompanyByName,
  updateCompanyById,
  deleteCompanyById,
} from "../controller/companies.js";

const router = express.Router();

router
  .post("/", createCompany)
  .get("/all", getAllCompanies)
  // .get("/one", getCompanyByName)
  .patch("/update", updateCompanyById)
  .delete("/:id", deleteCompanyById);

// module.exports = router;
export default router;
