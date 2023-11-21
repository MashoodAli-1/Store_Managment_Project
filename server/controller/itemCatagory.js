import Category from "../models/itemCatagory.js";
// const { Category } = require("../models/itemCatagory.js");

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({
      name,
    });

    const categories = await Category.findAll();

    res.status(201).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getCategoryByName = async (req, res) => {
  try {
    const { cname } = req.params;
    const category = await Category.findOne({ name: cname });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const updateCategoryById = async (req, res) => {
  try {
    const { id, name } = req.body;
    const updatedCategory = await Category.findByPk(id);
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    updatedCategory.name = name;

    await updatedCategory.save();

    res.status(200).json(updatedCategory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.destroy({ where: { id } });
    res.status(200).json({ msg: `Deleted the category with ID: ${id}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
