import Customer from "../models/customers.js";

export const createCustomer = async (req, res) => {
  try {
    // const { cname, phoneNo, address, cnic } = req.body;
    const customer = req.body;
    const newCustomer = new Customer(customer);
    await newCustomer.save();
    console.log(newCustomer);
    const allCustomer = await Customer.find({});
    console.log(allCustomer);
    res.status(201).json(allCustomer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json(customers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// donot need this api
export const getCustomerByName = async (req, res) => {
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

export const updateCustomerById = async (req, res) => {
  try {
    const { _id, name, phone, address, cnic } = req.body;
    const updatedCustomer = await Customer.findOneAndUpdate(
      { _id },
      { name, phone, address, cnic },
      { new: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const deleteCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);

    res.status(200).json({ msg: `Deleted the post with ID:${id}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};