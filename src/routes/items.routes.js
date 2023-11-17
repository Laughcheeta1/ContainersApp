const { Router } = require("express");
const router = Router();
const authRequired = require("../middlewares/validateToken");
const {
  getItemsByName,
  getItems,
  deleteItem,
  updateItem,
  createItem,
} = require("../controllers/items.controllers");
const validateSchema = require("../middlewares/validator.middleware");
const createItemsSchema = require("../schemas/item.schema");

router.get("/itemsByName/:name", getItemsByName);

router.get("/items", authRequired, getItems);

router.post("/items", validateSchema(createItemsSchema), authRequired, createItem);

router.delete("/items/:id", authRequired, deleteItem);

router.put("/items/:id", authRequired, updateItem);

module.exports = router;
