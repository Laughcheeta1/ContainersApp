const {
  getContainers,
  createContainer,
} = require("../controllers/containers.controller");

const { Router } = require("express");
const router = Router();

router.get("/contenedores", getContainers);

router.get("/contenedores/:id", (req, res) => {
  res.send("Pagina Contenedores ID");
});

router.post("/contenedores", createContainer);

router.put("/contenedores/:id", (req, res) => {
  res.send("Editar un contenedor");
});

router.delete("/contenedores/:id", (req, res) => {
  res.send("Borrar un contenedor");
});

module.exports = router;
