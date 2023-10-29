const router = Router();
const authRequired = require("../middlewares/validateToken");
const {
  getCommodatums,
  getSpecificCommodatum,
  deleteCommodatum,
  createCommodatum,
} = require("../controllers/commodatum.controller");
const validateSchema = require("../middlewares/validator.middleware");
const createCommodatumSchema = require("../schemas/commodatum.schema");

router.get("/get_commodatums/:id", authRequired, getCommodatums);

router.get("/get_specific_commodatum/:id", authRequired, getSpecificCommodatum);

router.post("/add_commodatum", authRequired, validateSchema(createCommodatumSchema), createCommodatum);

router.delete("/delete_commodatum/:id", authRequired, deleteCommodatum);

// It makes no sense to be able to modify a commodatum, you shall only delete it, and create a new one