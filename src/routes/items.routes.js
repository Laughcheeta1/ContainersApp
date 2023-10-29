const { Router } = require("express");
const router = Router();
const authRequired = require("../middlewares/validateToken");
const {
  getItems,
  deleteItem,
  updateItem,
  createItem,
} = require("../controllers/items.controller");
const validateSchema = require("../middlewares/validator.middleware");
const createItemsSchema = require("../schemas/items.schema");


// TODO: when validation works, remember to put in every one of them
router.get("/items", getItems);

router.post("/items", createItem);

router.delete("/items", deleteItem);

router.put("/items", updateItem);

module.exports = router;