const Task = require("../models/task.model");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });

    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

const getTask = async (req, res) => {
  try {
    const foundTask = await Task.findById(req.params.id).populate("user");
    if (!foundTask) return res.status(404).json({ message: "Task Not Found" });
    res.json(foundTask);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const foundTask = await Task.findByIdAndRemove(req.params.id);
    if (!foundTask) return res.status(404).json({ message: "Task Not Found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

const updateTask = async (req, res) => {
  try {
    const foundTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!foundTask) return res.status(404).json({ message: "Task Not Found" });
    res.json(foundTask);
  } catch (error) {
    return res.status(404).json({ message: "Task not found" });
  }
};

module.exports = {
  getTask,
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
