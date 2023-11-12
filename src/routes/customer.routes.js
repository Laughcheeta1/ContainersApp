const { Router } = require("express");
const {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
} = require("../controllers/customers.controllers");

const router = Router();

router.get("/customers", getCustomers);

router.get("/customers/:id", getCustomer);

router.post("/customers", createCustomer);

router.put("/customers/:id", updateCustomer);

router.delete("/customers/:id", deleteCustomer);

module.exports = router;
