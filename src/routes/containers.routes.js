const {
  getContainerByNumber,
  getContainers,
  createContainer,
  getContainer,
  updateContainer,
  deleteContainer,
} = require("../controllers/containers.controller");
const authRequired = require("../middlewares/validateToken");
const validateSchema = require("../middlewares/validator.middleware");
const containerSchema = require("../schemas/containers.schema");

const { Router } = require("express");
const router = Router();

router.get("/containersByNumber/:id", getContainerByNumber);

router.get("/containers", authRequired, getContainers);

router.get("/containers/:id", authRequired, getContainer);

router.post("/containers", authRequired, validateSchema(containerSchema), createContainer);

router.put("/containers/:id", authRequired, updateContainer);

router.delete("/containers/:id", authRequired, deleteContainer);

module.exports = router;
