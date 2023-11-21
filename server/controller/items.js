// const { Item } = require("../models/items.js"); // Assuming you have a model defined for Item
import Item from "../models/items.js";

export const createItem = async (req, res) => {
  try {
    const { name, size, category, price, quantity } = req.body;
    const newItem = await Item.create({
      name,
      size,
      category,
      price,
      quantity,
    });

    const items = await Item.findAll();

    res.status(201).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const updateItemById = async (req, res) => {
  try {
    const { id, name, size, category, price, quantity } = req.body;
    const updatedItem = await Item.findByPk(id);
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    updatedItem.name = name;
    updatedItem.size = size;
    updatedItem.category = category;
    updatedItem.price = price;
    updatedItem.quantity = quantity;

    await updatedItem.save();

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
    await Item.destroy({ where: { id } });
    res.status(200).json({ msg: `Deleted the item with ID: ${id}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
