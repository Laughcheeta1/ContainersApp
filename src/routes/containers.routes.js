const {
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

router.get("/contenedores", authRequired, getContainers);

router.get("/contenedores/:id", authRequired, getContainer);

router.post(
  "/contenedores",
  authRequired,
  validateSchema(containerSchema),
  createContainer
);

router.put("/contenedores/:id", authRequired, updateContainer);

router.delete("/contenedores/:id", authRequired, deleteContainer);

module.exports = router;
