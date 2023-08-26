import accReceivable from "../models/accReceivabe.js";

// Create a new account receivable record
export const createAccountReceivable = async (req, res) => {
  try {
    const { data, receivedTillNow, receiveToday, remainingAmount } = req.body;

    const newRecord = new accReceivable({
      data,
      receivedTillNow,
      receiveToday,
      remainingAmount,
    });

    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all account receivable records
export const getAllAccountReceivables = async (req, res) => {
  try {
    const allRecords = await accReceivable.find();
    res.status(200).json(allRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific account receivable record by _id
export const getAccountReceivableById = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await accReceivable.findById(id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an account receivable record by _id
export const updateAccountReceivableById = async (req, res) => {
  try {
    const { data, receivedTillNow, receiveToday, remainingAmount } = req.body;

    const { id } = req.params;
    const updatedRecord = await accReceivable.findByIdAndUpdate(
      id,
      {
        data,
        receivedTillNow,
        receiveToday,
        remainingAmount,
      },
      { new: true }
    );

    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an account receivable record by _id
export const deleteAccountReceivableById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecord = await accReceivable.findByIdAndDelete(id);
    if (!deletedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(deletedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
