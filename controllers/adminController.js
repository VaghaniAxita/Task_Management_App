const Task = require("../models/Task");
const User = require("../models/User");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("user", "name email");
    res.json(tasks);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: err.message });
  }
};

exports.updateAnyTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating task", error: err.message });
  }
};

exports.deleteAnyTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: err.message });
  }
};
