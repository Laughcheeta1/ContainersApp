// const authRequired = require("../middlewares/validateToken");
const {
  getCommodatums,
  getCommodatum,
  deleteCommodatum,
  updateCommodatum,
  createCommodatum,
} = require("../controllers/commodatum.controller");

const { Router } = require("express");
const router = Router();

router.get("/comodatos/:id", getCommodatum);

router.get("/comodatos/", getCommodatums);

router.post("/comodatos", createCommodatum);

router.put("/comodatos/:id", updateCommodatum);

module.exports = router;

// router.delete("/comodatos/:id", deleteCommodatum);
