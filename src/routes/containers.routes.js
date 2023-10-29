const {
  getContainers,
  createContainer,
  getContainer,
  updateContainer,
  deleteContainer,
} = require("../controllers/containers.controller");

const { Router } = require("express");
const router = Router();

router.get("/contenedores", getContainers);

router.get("/contenedores/:id", getContainer);

router.post("/contenedores", createContainer);

router.put("/contenedores/:id", updateContainer);

router.delete("/contenedores/:id", deleteContainer);

module.exports = router;
