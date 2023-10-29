const Customer = require("../models/customers.model");

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    return res.status(400).json({ message: "An Error Occured" });
  }
};

const getCustomer = async (req, res) => {};

const createCustomer = async (req, res) => {};

const updateCustomer = async (req, res) => {};

const deleteCustomer = async (req, res) => {};
