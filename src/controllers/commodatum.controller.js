const Commodatum = require("../models/commodatum.model.js");

// Obtener un comodato en particular por id (en params)

const getCommodatum = async (req, res) => {
  try {
    const foundCommodatum = await Commodatum.findById(req.params.id);
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
    const commodatums = await Commodatum.find();
    res.json(commodatums);
  } catch (error) {
    return res.status(404).json({ message: "Commodatums Not Found" });
  }
};

// const getCommodatum

// TODO: make the commodatum contoller
