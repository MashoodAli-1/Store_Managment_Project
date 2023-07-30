import Customer from "../Model/customers";

const createCustomer = async (req, res) => {
  try {
    const { cname, phoneNo, address, cnic } = req.body;
    const newCustomer = new Customer({ cname, phoneNo, address, cnic });
    await newCustomer.save();
    res
      .status(201)
      .json({
        message: "Customer created successfully",
        customer: newCustomer,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const getCustomerByName = async (req, res) => {
  try {
    const { name } = req.body;
    const customer = await Customer.findOne({ cname: name });
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const updateCustomerByName = async (req, res) => {
  try {
    const { cname, phoneNo, address, cnic } = req.body;
    const updatedCustomer = await Customer.findOneAndUpdate(
      { cname: req.body.name },
      { cname, phoneNo, address, cnic },
      { new: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res
      .status(200)
      .json({
        message: "Customer updated successfully",
        customer: updatedCustomer,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const deleteCustomerByName = async (req, res) => {
  try {
    const { name } = req.body;
    const deletedCustomer = await Customer.findOneAndRemove({ cname: name });
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res
      .status(200)
      .json({
        message: "Customer deleted successfully",
        customer: deletedCustomer,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export default {
  createCustomer,
  getAllCustomers,
  getCustomerByName,
  updateCustomerByName,
  deleteCustomerByName,
};
