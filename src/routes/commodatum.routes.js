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

router.get("/commodatum/:id", getCommodatum);

router.get("/commodatum", getCommodatums);

router.post("/commodatum", createCommodatum);

router.put("/commodatum/:id", updateCommodatum);

router.delete("/commodatum/:id", deleteCommodatum);

module.exports = router;