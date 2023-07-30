import Company from "../Model/companies";

// Create a new company
export const createCompany = async (req, res) => {
  try {
    const { cname, phoneNo, address } = req.body;
    const newCompany = new Company({ cname, phoneNo, address });
    await newCompany.save();
    res
      .status(201)
      .json({ message: "Company created successfully", company: newCompany });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get all companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get a specific company by name
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
export const updateCompanyByName = async (req, res) => {
  try {
    const { cname, phoneNo, address } = req.body;
    const updatedCompany = await Company.findOneAndUpdate(
      { cname },
      { cname, phoneNo, address },
      { new: true }
    );
    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    res
      .status(200)
      .json({
        message: "Company updated successfully",
        company: updatedCompany,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Delete a company by name
export const deleteCompanyByName = async (req, res) => {
  try {
    const { cname } = req.body;
    const deletedCompany = await Company.findOneAndRemove({ cname });
    if (!deletedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    res
      .status(200)
      .json({
        message: "Company deleted successfully",
        company: deletedCompany,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
import Item from "../models/items";

// Create a new item
export const createItem = async (req, res) => {
  try {
    const { size, itemName, catagory, price } = req.body;
    const newItem = new Item({ size, itemName, catagory, price });
    await newItem.save();
    res
      .status(201)
      .json({ message: "Item created successfully", item: newItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get all items
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get a specific item by name
export const getItemByName = async (req, res) => {
  try {
    const { itemName } = req.body;
    const item = await Item.findOne({ itemName });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Update an item by name
export const updateItemByName = async (req, res) => {
  try {
    const { size, itemName, catagory, price } = req.body;
    const updatedItem = await Item.findOneAndUpdate(
      { itemName: req.params.itemName },
      { size, itemName, catagory, price },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res
      .status(200)
      .json({ message: "Item updated successfully", item: updatedItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Delete an item by name
export const deleteItemByName = async (req, res) => {
  try {
    const { itemName } = req.body;
    const deletedItem = await Item.findOneAndRemove({ itemName });
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res
      .status(200)
      .json({ message: "Item deleted successfully", item: deletedItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
