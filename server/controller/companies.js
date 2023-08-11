import Company from "../models/companies.js";

// Create a new company
export const createCompany = async (req, res) => {
  try {
    // const { name, phone, address } = req.body;
    const company = req.body;
    const newCompany = new Company(company);
    await newCompany.save();

    const companies = await Company.find({});

    res.status(201).json(companies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get all companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find({});
    res.status(200).json(companies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get a specific company by name donot need this api
export const getCompanyByName = async (req, res) => {
  try {
    const { cname } = req.body;
    const company = await Company.findOne({ cname });
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json(company);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Update a company by name
export const updateCompanyById = async (req, res) => {
  try {
    const { _id, name, phone, address } = req.body;
    const updatedCompany = await Company.findOneAndUpdate(
      { _id },
      { name, phone, address },
      { new: true }
    );
    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json(updatedCompany);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Delete a company by name
export const deleteCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Company.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: `Deleted the post with ID:${id}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
