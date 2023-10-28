const Container = require("../models/container.model");

const getContainers = async (req, res) => {
  res.send("Containers List");
};

const getContainer = async (req, res) => {
  try {
  } catch (error) {}
};

const createContainer = async (req, res) => {
  try {
    const { number, type, status, notes } = req.body;

    const newContainer = new Container({
      number,
      type,
      status,
      notes,
    });

    const savedContainer = await newContainer.save();
    res.json(savedContainer);
  } catch (error) {
    return res.status(404).json({ message: "Container not Found" });
  }
};

const updateContainer = async (req, res) => {
  res.send("Update Container");
};

const deleteContainer = async (req, res) => {
  res.send("Delete Container");
};

module.exports = { getContainers, createContainer };
