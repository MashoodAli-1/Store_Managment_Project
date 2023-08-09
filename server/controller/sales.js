import Sales from "../models/sales.js"; // Make sure to import your model correctly

// Create a new sales record
export const createSalesRecord = async (req, res) => {
  try {
    const {
      cname,
      data,
      totalBill,
      receivedAmount,
      remainingAmount,
      status,
      date,
    } = req.body;

    const newRecord = new Sales({
      cname,
      data,
      totalBill,
      receivedAmount,
      remainingAmount,
      status,
      date,
    });

    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all sales records
export const getAllSalesRecords = async (req, res) => {
  try {
    const allRecords = await Sales.find();
    res.status(200).json(allRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific sales record by cname
export const getSalesRecordByName = async (req, res) => {
  try {
    const { cname } = req.body;
    const record = await Sales.findOne({ cname });
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a sales record by id
export const updateSalesRecordById = async (req, res) => {
  try {
    const { data, totalBill, receivedAmount, remainingAmount, status, date } =
      req.body;

    const updatedRecord = await Sales.findByIdAndUpdate(
      req.params.id,
      {
        data,
        totalBill,
        receivedAmount,
        remainingAmount,
        status,
        date,
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

// Delete a sales record by id
export const deleteSalesRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecord = await Sales.findByIdAndRemove(id);
    if (!deletedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(deletedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
