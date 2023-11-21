// const { Party } = require("../models/parties.js"); // Assuming you have a model defined for Party

import Party from "../models/parties.js";

export const createParty = async (req, res) => {
  try {
    const { name, phone, address, cnic } = req.body;
    const newParty = await Party.create({
      name,
      phone,
      address,
      cnic,
    });

    const parties = await Party.findAll();

    res.status(201).json(parties);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getAllParties = async (req, res) => {
  try {
    const parties = await Party.findAll();
    res.status(200).json(parties);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const updatePartyById = async (req, res) => {
  try {
    const { id, name, phone, address, cnic } = req.body;
    const updatedParty = await Party.findByPk(id);
    if (!updatedParty) {
      return res.status(404).json({ message: "Party not found" });
    }

    updatedParty.name = name;
    updatedParty.phone = phone;
    updatedParty.address = address;
    updatedParty.cnic = cnic;

    await updatedParty.save();

    res.status(200).json(updatedParty);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const deletePartyById = async (req, res) => {
  try {
    const { id } = req.params;
    await Party.destroy({ where: { id } });
    res.status(200).json({ msg: `Deleted the party with ID: ${id}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
