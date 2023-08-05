// // import Item from "../Model/items.js";
// import Item from "../models/items.js"; // Update the path if needed

// // Create a new item
// export const createItem = async (req, res) => {
//   try {
//     const { size, itemName, catagory, price } = req.body;
//     const newItem = new Item({ size, itemName, catagory, price });
//     await newItem.save();
//     res
//       .status(201)
//       .json({ message: "Item created successfully", item: newItem });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Something went wrong", error: error.message });
//   }
// };

// // Get all items
// export const getAllItems = async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.status(200).json(items);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Something went wrong", error: error.message });
//   }
// };

// // Get a specific item by name
// export const getItemByName = async (req, res) => {
//   try {
//     const { itemName } = req.body;
//     const item = await Item.findOne({ itemName });
//     if (!item) {
//       return res.status(404).json({ message: "Item not found" });
//     }
//     res.status(200).json(item);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Something went wrong", error: error.message });
//   }
// };

// // Update an item by name
// export const updateItemByName = async (req, res) => {
//   try {
//     const { size, itemName, catagory, price } = req.body;
//     const updatedItem = await Item.findOneAndUpdate(
//       { itemName: req.params.itemName },
//       { size, itemName, catagory, price },
//       { new: true }
//     );
//     if (!updatedItem) {
//       return res.status(404).json({ message: "Item not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Item updated successfully", item: updatedItem });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Something went wrong", error: error.message });
//   }
// };

// // Delete an item by name
// export const deleteItemByName = async (req, res) => {
//   try {
//     const { itemName } = req.body;
//     const deletedItem = await Item.findOneAndRemove({ itemName });
//     if (!deletedItem) {
//       return res.status(404).json({ message: "Item not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Item deleted successfully", item: deletedItem });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Something went wrong", error: error.message });
//   }
// };

// controllers/items.js
import Item from "../models/items.js";

export const createItem = async (req, res) => {
  try {
    const item = req.body;
    const newItem = new Item(item);
    await newItem.save();
    console.log(newItem);
    const allItems = await Item.find({});
    console.log(allItems);
    res.status(201).json(allItems);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const updateItemById = async (req, res) => {
  try {
    const { _id, name, size, category, price } = req.body;
    const updatedItem = await Item.findOneAndUpdate(
      { _id },
      { name, size, category, price },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const deleteItemById = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);

    res.status(200).json({ msg: `Deleted the item with ID:${id}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
