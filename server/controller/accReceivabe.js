// const { AccReceivable } = require("../models/accReceivabe.js"); // Assuming you have a model defined for AccReceivable

import AccReceivable from "../models/accReceivabe.js";

export const createAccountReceivable = async (req, res) => {
  try {
    const { data, receivedTillNow, receiveToday, remainingAmount } = req.body;
    const newRecord = await AccReceivable.create({
      data,
      receivedTillNow,
      receiveToday,
      remainingAmount,
    });
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllAccountReceivables = async (req, res) => {
  try {
    const allRecords = await AccReceivable.findAll();
    res.status(200).json(allRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAccountReceivableById = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await AccReceivable.findByPk(id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAccountReceivableById = async (req, res) => {
  try {
    const { data, receivedTillNow, receiveToday, remainingAmount } = req.body;
    const { id } = req.params;
    const [affectedRows] = await AccReceivable.update(
      {
        data,
        receivedTillNow,
        receiveToday,
        remainingAmount,
      },
      { where: { id } }
    );

    if (affectedRows === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    const updatedRecord = await AccReceivable.findByPk(id);
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAccountReceivableById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecord = await AccReceivable.findByPk(id);
    if (!deletedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }
    await AccReceivable.destroy({ where: { id } });
    res.status(200).json(deletedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
