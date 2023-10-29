const Customer = require("../models/customers.model");

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    return res.status(400).json({ message: "An Error Occured" });
  }
};

const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer)
      return res.status(404).json({ message: "Customer Not Found" });
    return res.json(customer);
  } catch (error) {
    return res.status(400).json({ message: "An Error Occurred" });
  }
};

const createCustomer = async (req, res) => {
  const { version, company_NIT, name, address, phone, created_by } = req.body;
  try {
    const duplicateCustomer = await Customer.find();
  } catch (error) {}
};

const updateCustomer = async (req, res) => {};

const deleteCustomer = async (req, res) => {};
