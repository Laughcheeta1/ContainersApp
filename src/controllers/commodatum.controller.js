const Commodatum = require("../models/commodatum.model.js");

// Obtener un comodato en particular por id (en params)

const getCommodatums = async (req, res) => {
	const commodatums = await Commodatum.find({
		$or: [
			{ _id: { $regex: new RegExp(`^${req.params.search_value}`, 'i') } },
			{ company: { $regex: new RegExp(`^${req.params.search_value}`, 'i') } }
		]
	}); // Todos los comodatos donde el id o el nombre de la compañia es similar a el valor dado
	res.json(commodatums);
};

const getSpecificCommodatum = async (req, res) => {
	try {
		const commodatum = await Commodatum.findById(req.params.search_value);
		res.json();
	}
	catch (error) {
		return res.status(404).json({ message: "Commodatum Not Found" });
	}
};

const deleteCommodatum = async (req, res) => {
	try {
		const foundCommodatum = Commodatum.findByIdAndRemove(req.params.id);
		if (!foundCommodatum) return res.status(404).json({ message: "Task Not Found" });

		return res.sendStatus(404);
	}
	catch (error) {
		return res.status(404).json({ message: "Task not found" });
	}
};

const createCommodatum = async (req, res) => {
	try {
		const { version, commodatum_id, container, receiver, company, date, duration, signature
			, number, action, price, transport_price } = req.body;

		console.log(req.body)

		const newCommodatum = new Commodatum({
			version,
			commodatum_id,
			container,
			receiver,
			company,
			date,
			duration,
			signature,
			number,
			action,
			price,
			transport_price,
			created_by: req.user.id
		});

		const savedCommodatum = await newCommodatum.save();
		res.json(savedCommodatum);
	}
	catch (error) {
		console.log(error)
		return res.status(400).json({ message: "Failed to create commodatum" });
	}
};


module.exports = {
	getCommodatums,
	getSpecificCommodatum,
	deleteCommodatum,
	createCommodatum
};