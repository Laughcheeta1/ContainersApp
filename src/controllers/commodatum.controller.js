const Commodatum = require("../models/commodatum.model.js");
const Container = require("../models/container.model.js");

// Obtener un comodato en particular por id (en params)

const getCommodatum = async (req, res) => {
  try {
    const foundCommodatum = await Commodatum.findById(req.params.id).populate(
      "container"
    );
    if (!foundCommodatum)
      return res.status(404).json({ message: "Commodatum Not Found" });
    res.json(foundCommodatum);
  } catch (error) {
    return res.status(404).json({ message: "Commodatum Not Found" });
  }
};

// Obtener todos los comodatos

const getCommodatums = async (req, res) => {
  try {
    const commodatums = await Commodatum.find().populate("container");
    res.json(commodatums);
  } catch (error) {
    return res.status(404).json({ message: "Specified Commodatum Not Found" });
  }
};

// Actualizar un comodato

const updateCommodatum = async (req, res) => {
  if (req.body.commodatum__id)
    return res.status(400).json({ message: "Cannot Change Commodatum's Id" });
  try {
    const foundCommodatum = await Commodatum.findByIdAndUpdate(
      req.params.id,
      req.body
    );
  } catch (error) {
    return res.status(404).json({ message: "Commodatum Not Found" });
  }
};

const createCommodatum = async (req, res) => {
  const {
    version,
    commodatum_id,
    container,
    receiver,
    company,
    date,
    duration,
    signature,
    action,
    price,
    transport_price,
    created_by,
  } = req.body;

  try {
    const foundCommodatum = await Commodatum.findOne({ commodatum_id });
    if (foundCommodatum)
      return res
        .status(400)
        .json({ message: "Commodatum Number Already Exists" }); // Verificar que no exista un comodato con ese numero

    const foundContainer = await Container.findOne({ number: container });
    if (!foundContainer)
      return res
        .status(404)
        .json({ message: "Container Number Doesn't Exist" }); // Verificar que el numero del contenedor exista

    const newCommodatum = new Commodatum({
      version,
      commodatum_id,
      container: foundContainer,
      receiver,
      company,
      date,
      duration,
      signature,
      action,
      price,
      transport_price,
      created_by,
    });

    const savedCommodatum = await newCommodatum.save();

    return res.json(savedCommodatum);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "An Error Ocurred " });
  }
};

module.exports = {
  getCommodatums,
  getCommodatum,
  // deleteCommodatum,
  updateCommodatum,
  createCommodatum,
};

// const getCommodatum

// TODO: make the commodatum contoller
