import Category from "../Model/itemCatagory";

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { cname } = req.body;
    const newCategory = new Category({ cname });
    await newCategory.save();
    res
      .status(201)
      .json({
        message: "Category created successfully",
        category: newCategory,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Get a specific category by name
export const getCategoryByName = async (req, res) => {
  try {
    const { cname } = req.body;
    const category = await Category.findOne({ cname });
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

// Update a category by name
export const updateCategoryByName = async (req, res) => {
  try {
    const { cname } = req.body;
    const updatedCategory = await Category.findOneAndUpdate(
      { cname: req.body.cname },
      { cname },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res
      .status(200)
      .json({
        message: "Category updated successfully",
        category: updatedCategory,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Delete a category by name
export const deleteCategoryByName = async (req, res) => {
  try {
    const { cname } = req.body;
    const deletedCategory = await Category.findOneAndRemove({ cname });
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res
      .status(200)
      .json({
        message: "Category deleted successfully",
        category: deletedCategory,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
