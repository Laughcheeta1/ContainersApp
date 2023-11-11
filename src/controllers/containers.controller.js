const Container = require("../models/container.model");

// Obtener todos los contendores

const getContainers = async (req, res) => {
  try {
    const containers = await Container.find();
    res.json(containers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Obtener un contenedor en particular

const getContainer = async (req, res) => {
  try {
    const foundContainer = await Container.findById(req.params.id);
    if (!foundContainer)
      res.status(404).json({ message: "Container Not Found" });

    res.json(foundContainer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear un contenedor

const createContainer = async (req, res) => {
  try {
    const {
      container_id,
      type,
      status,
      notes,
      color,
      size,
      qr_code,
      purchase,
      maintenance,
    } = req.body;

    const newContainer = new Container({
      container_id,
      type,
      status,
      notes,
      color,
      size,
      qr_code,
      purchase,
      maintenance,
    });

    await newContainer.save();
    return res.json(newContainer); // Devolver por response al cliente el json con el nuevo contenedor
  } catch (error) {
    if (error.code === 11000 || error.code === 11001)
      return res.status(400).json({ message: "Container ID already exists" });

    console.log(error);
    
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar un contenedor

const updateContainer = async (req, res) => {
  try {
    if (req.body.number)
      return res
        .status(400)
        .json({ message: "Cannot change container's number" });

    const foundContainer = await Container.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!foundContainer)
      return res.status(404).json({ message: "Container Not Found" });

    res.json(foundContainer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Borrar un contenedor

const deleteContainer = async (req, res) => {
  try {
    const foundContainer = await Container.findByIdAndRemove(req.params.id);

    if (!foundContainer)
      return res.status(404).json({ message: "Container Not Found" });

    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Container Not Found" });
  }
};

module.exports = {
  getContainers,
  getContainer,
  createContainer,
  updateContainer,
  deleteContainer,
};
