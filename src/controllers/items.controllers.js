const Item = require("../models/items.model");

const getItems = async (req, res) => {
    try {
        const items = await Item.find();

        res.json(items);
    }
    catch (err)
    {
        return res.status(404).json({ message : "No se pudo encontrar ningun item" });
    }
};

const deleteItem = async (req, res) => {
    try {
        const items = await Item.findByIdAndRemove(req.params.id);
        if (!items) return res.status(404).json({ message: "Item Not Found" });

        return res.sendStatus(204);
    }
    catch (err)
    {
        return res.status(404).json({ message : "No se pudo encontrar ningun item" });
    }
};

const updateItem = async (req, res) => {
    try {
        const foundItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
        });
s
        if (!foundItem) return res.status(404).json({ message: "Item Not Found" });

        res.json(foundItem);
    }
    catch (err)
    {
        return res.status(404).json({ message : "No se pudo encontrar ningun item" });
    }
};

const createItem = async (req, res) => {
    try {
        const {version, name, brand, total_quantity, available_quantity} = req.body;

        const newItem = new Item({
            version,
            name,
            brand,
            total_quantity,
            available_quantity
        });

        const savedItem = await new newItem.save();
        res.json(savedItem);
    }
    catch (err)
    {
        return res.status(404).json({ message : "No se pudo encontrar ningun item" });
    }
};


module.exports = {
    getItems,
    deleteItem,
    updateItem,
    createItem
};