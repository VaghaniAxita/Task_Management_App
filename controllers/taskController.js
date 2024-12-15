const Task = require('../models/Task');
const User = require('../models/User');

exports.createTask = async (req, res) => {
  try {
    const taskCount = await Task.countDocuments({ user: req.user.id });
    if (req.user.role === 'User' && taskCount >= 10) {
      return res.status(403).json({ message: 'Task limit reached' });
    }
    const task = await Task.create({ ...req.body, user: req.user.id });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error creating task', error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error updating task', error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task', error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  const { status, sortBy } = req.query;
  const query = {};
  if (status) query.status = status;

  const tasks = await Task.find(query)
    .sort(sortBy ? { [sortBy]: 1 } : {})
    .where('user')
    .equals(req.user.id);

  res.json(tasks);
};
