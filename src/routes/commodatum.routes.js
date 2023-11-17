// const authRequired = require("../middlewares/validateToken");
const {
  getCommodatumByNumber,
  getCommodatums,
  getCommodatum,
  deleteCommodatum,
  updateCommodatum,
  createCommodatum,
} = require("../controllers/commodatum.controller");

const { Router } = require("express");
const router = Router();

router.get("/commodatumsByNumber/:number", getCommodatumByNumber);

router.get("/commodatums/:id", getCommodatum);

router.get("/commodatums", getCommodatums);

router.post("/commodatums", createCommodatum);

// router.put("/commodatums/:id", updateCommodatum);

router.delete("/commodatums/:id", deleteCommodatum);

module.exports = router;