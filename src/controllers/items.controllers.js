const Item = require("../models/items.model");

const getItemsByName = async (req, res) =>
{
  try 
  {
    const foundItems = await Item.find({ name : { $regex : `${req.params.name}`} });
    res.json(foundItems);
  }
  catch (error)
  {
    return res.status(500).json({ message: error.message });
  }
}

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getItem = async (req, res) => {
  try {
    const foundItem = Item.findById(req.params.id);

    if (!foundItem)
      return res.status(404).json({ message: "No se encontró el ítem" });

    res.json(foundItem);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const items = await Item.findByIdAndRemove(req.params.id);
    if (!items) return res.status(404).json({ message: "Item Not Found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: [error.message] });
  }
};

const updateItem = async (req, res) => {
  try {
    const foundItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    s;
    if (!foundItem) return res.status(404).json({ message: "Item Not Found" });

    res.json(foundItem);
  } catch (error) {
    return res.status(500).json({ message: [error.message] });
  }
};

const createItem = async (req, res) => {
  try {
    const { version, name, brand, total_quantity, available_quantity } =
      req.body;

    const newItem = new Item({
      version,
      name,
      brand,
      total_quantity,
      available_quantity,
    });

    await newItem.save();
    res.json(newItem);
  } catch (error) {
    console.log(error);
    if (error.code === 11000 || error.code === 11001)
      return res.status(400).json({
        message: ["El ítem ya existe"],
      });

    return res.status(500).json({ message: [error.message] });
  }
};

module.exports = {
  getItemsByName,
  getItems,
  getItem,
  deleteItem,
  updateItem,
  createItem,
};
