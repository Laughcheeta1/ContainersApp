const { Router } = require("express");
const router = Router();
const authRequired = require("../middlewares/validateToken");
const {
  getTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
} = require("../controllers/task.controller");
const validateSchema = require("../middlewares/validator.middleware");
const createTaskSchema = require("../schemas/task.schema");

router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, getTask);

router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);

router.delete("/tasks/:id", authRequired, deleteTask);

router.put("/tasks/:id", authRequired, updateTask);

module.exports = router;
