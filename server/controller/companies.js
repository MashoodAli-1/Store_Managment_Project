import Company from "../models/companies.js";
// const { Company } = require("../models/companies.js");
export const createCompany = async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const newCompany = await Company.create({
      name,
      phone,
      address,
    });
    const companies = await Company.findAll();
    res.status(201).json(companies);
    console.log(companies);
  } catch (error) {
    console.error("Error creating company:", error);
    res.status(500).json({ message: "Failed to create a new company" });
  }
};

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ message: "Failed to fetch companies" });
  }
};

export const updateCompanyById = async (req, res) => {
  try {
    const { id, name, phone, address } = req.body;
    const updatedCompany = await Company.findByPk(id);

    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    updatedCompany.name = name;
    updatedCompany.phone = phone;
    updatedCompany.address = address;

    await updatedCompany.save();
    res.status(200).json(updatedCompany);
  } catch (error) {
    console.error("Error updating company:", error);
    res.status(500).json({ message: "Failed to update the company" });
  }
};

export const deleteCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const companyToDelete = await Company.findByPk(id);

    if (!companyToDelete) {
      return res.status(404).json({ message: "Company not found" });
    }

    await companyToDelete.destroy();
    res.status(200).json({ message: `Deleted the company with ID: ${id}` });
  } catch (error) {
    console.error("Error deleting company:", error);
    res.status(500).json({ message: "Failed to delete the company" });
  }
};
