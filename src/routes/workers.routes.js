const { Router } = require('express')
const router = Router()

const {
    getWorkers,
    getWorker,
    deleteWorker
} = require("../controllers/workers.controllers")