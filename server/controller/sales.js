// const { Sales } = require("../models/sales.js"); // Assuming you have a model defined for Sales

import Sales from "../models/sales.js";

export const createSalesRecord = async (req, res) => {
  try {
    const { cname, data, totalBill, receivedAmount, remainingAmount, status } =
      req.body;

    console.log({
      cname,
      data,
      totalBill,
      receivedAmount,
      remainingAmount,
      status,
    });

    const newRecord = await Sales.create({
      cname,
      data,
      totalBill,
      receivedAmount,
      remainingAmount,
      status,
    });

    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllSalesRecords = async (req, res) => {
  try {
    const allRecords = await Sales.findAll();
    res.status(200).json(allRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSalesRecordByName = async (req, res) => {
  try {
    const { cname } = req.body;
    const record = await Sales.findOne({ where: { cname } });
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSalesRecordById = async (req, res) => {
  try {
    const { data, totalBill, receivedAmount, remainingAmount, status, date } =
      req.body;

    const [rowsUpdated, updatedRecords] = await Sales.update(
      {
        data,
        totalBill,
        receivedAmount,
        remainingAmount,
        status,
        date,
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );

    if (rowsUpdated === 0 || !updatedRecords[1]) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(updatedRecords[1][0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteSalesRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecord = await Sales.destroy({ where: { id } });

    if (!deletedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(deletedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
