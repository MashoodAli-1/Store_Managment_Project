import Category from "../models/itemCatagory.js";

export const createCategory = async (req, res) => {
  try {
    const category = req.body;
    const newCategory = new Category(category);
    await newCategory.save();
    const allCategories = await Category.find({});
    res.status(201).json(allCategories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
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
    const { _id, name } = req.body;
    const updatedCategory = await Category.findOneAndUpdate(
      { _id },
      { name },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
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
    const cat = await Category.findOneAndDelete({ _id: id });
    console.log(id, cat);
    res.status(200).json({ msg: `Deleted the category: ${id}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
