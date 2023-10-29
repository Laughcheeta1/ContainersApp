const Workers = require('../models/workers.model')

// TODO: Obtener trabajadores por query

const getWorkersQuery = async (req, res) => {
    try {
        const foundWorkers = await Workers.find({
            $or: [

            ]
        })
    } catch (error) {
        return res.status(404).json({ message: "Workers Not Found" })
    }
}

// Crear un trabajador

const createWorker = async (req, res) => {
    const { version, id, name, username, password, permission } = req.body
    try {
        const duplicateWorker = await Worker.findOne({ id })
    } catch (error) {

    }
}

// Obtener todos los trabajadores

const getWorkers = async (req, res) => {
    try {
        const foundWorkers = await Workers.find()
        return res.json(foundWorkers)
    } catch (error) {
        return res.status(404).json({ message: "Workers Not Found" })
    }
}

// Obtener un trabajador en particular

const getWorker = async (req, res) => {
    try {
        const foundWorker = await Workers.findById(req.params.id)
        if (!foundWorker) return res.status(404).json({ message: "Worker Not Found" })
        res.json(foundWorker)
    } catch (error) {
        return res.status(404).json({ message: "Worker Not Found" })
    }
}

// Borrar un trabajador

const deleteWorker = async (req, res) => {
    try {
        const foundWorker = await Workers.findByIdAndRemove(req.params.id)
        if (!foundWorker) return res.status(404).json({ message: "Worker Not Found" })
        return res.status(201).json({ message: "Worker Deleted Succesfully" })
    } catch (error) {
        return res.status(404).json({ message: "Worker Not Found" })
    }
}

// Editar un trabajador

const updateWorker = async (req, res) => {
    try {
        if (req.body.id) return res.status(400).json({ message: "Cannot Change Worker's Number" })

    } catch (error) {

    }
}