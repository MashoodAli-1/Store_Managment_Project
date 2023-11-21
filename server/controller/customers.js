import Customer from "../models/customers.js";
// const { Customer } = require("../models/customers.js");

export const createCustomer = async (req, res) => {
  try {
    const { name, phone, address, cnic } = req.body;
    const newCustomer = await Customer.create({
      name,
      phone,
      address,
      cnic,
    });

    const customers = await Customer.findAll();

    res.status(201).json(customers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const updateCustomerById = async (req, res) => {
  try {
    const { id, name, phone, address, cnic } = req.body;
    const updatedCustomer = await Customer.findByPk(id);
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    updatedCustomer.name = name;
    updatedCustomer.phone = phone;
    updatedCustomer.address = address;
    updatedCustomer.cnic = cnic;

    await updatedCustomer.save();

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
    await Customer.destroy({ where: { id } });
    res.status(200).json({ msg: `Deleted the customer with ID: ${id}` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
