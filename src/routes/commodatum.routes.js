const { Router } = require("express");
const authRequired = require("../middlewares/validateToken");
const {
  getCommodatums,
  getSpecificCommodatum,
  deleteCommodatum,
  createCommodatum,
} = require("../controllers/commodatum.controller");

const validateSchema = require("../middlewares/validator.middleware");
const commodatumSchema = require("../models/commodatum.model");
const router = Router();

router.get("/comodatos/:search_value",
  // authRequired, 
  getCommodatums);

router.get("/comodatos_especifico/:id",
  // authRequired, 
  getSpecificCommodatum);

router.post(
  "/add_commodatum",
  // authRequired,
  // validateSchema(commodatumSchema),
  createCommodatum
);

router.delete("/delete_commodatum/:id",
  // authRequired, 
  deleteCommodatum);

module.exports = router;

// It makes no sense to be able to modify a commodatum, you shall only delete it, and create a new one
