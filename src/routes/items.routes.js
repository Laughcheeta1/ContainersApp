const { Router } = require("express");
const router = Router();
const authRequired = require("../middlewares/validateToken");
const {
  getItemsByName,
  getItem,
  getItems,
  deleteItem,
  updateItem,
  createItem,
} = require("../controllers/items.controllers");
const validateSchema = require("../middlewares/validator.middleware");
const createItemsSchema = require("../schemas/item.schema");

router.get("/itemsByName/:name", getItemsByName);

router.get("/items", authRequired, getItems);

router.get("/items/:id", getItem)

router.post("/items", validateSchema(createItemsSchema), authRequired, createItem);

router.delete("/items/:id", authRequired, deleteItem);

router.put("/items/:id", updateItem);

module.exports = router;
