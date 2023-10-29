const { Router } = require("express");
const {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
} = require("../controllers/customers.controllers");

const router = Router();

router.get("/clientes", getCustomers);

router.get("/clientes/:id", getCustomer);

router.post("/clientes", createCustomer);

router.put("/clientes/:id", updateCustomer);

router.delete("/clientes/:id", deleteCustomer);

module.exports = router;
