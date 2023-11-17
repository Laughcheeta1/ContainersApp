const Customer = require("../models/customers.model");

const getCustomersByName = async (req, res) => {
  try
  {
    const foundCustomers = await Customer.find({ name : { $regex : `${req.params.name}`} });
    res.json(foundCustomers);
  }
  catch (error)
  {
    return res.status(500).json({ message: error.message });
  }
}

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    return res.status(400).json({ message: "An Error Occured" });
  }
};

const getCustomer = async (req, res) => {
  console.log("The passed Id is: ")
  console.log(req.params.id);

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
    const duplicateCustomer = await Customer.findOne({ company_NIT });
    if (duplicateCustomer)
      return res.status(404).json({ message: "Company NIT Already Exists" });

    const newCustomer = new Customer({
      version,
      company_NIT,
      name,
      address,
      phone,
      created_by,
    });

    const savedCustomer = await newCustomer.save();
    res.json(savedCustomer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    if (req.body.company_NIT)
      return res.status(400).json({ message: "Cannot Change Specified Key" });

    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!customer)
      return res.status(404).json({ message: "Customer Not Found" });

    return res.json(customer);
  } catch (error) {
    return res.status(400).json({ message: "An Error Ocurred" });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    console.log(req.params.id);
    const customer = await Customer.findByIdAndRemove(req.params.id);

    if (!customer)
      return res.status(404).json({ message: "Customer Not Found" });

    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "An Error Occurred" });
  }
};

module.exports = {
  getCustomersByName,
  deleteCustomer,
  updateCustomer,
  createCustomer,
  getCustomer,
  getCustomers,
};
