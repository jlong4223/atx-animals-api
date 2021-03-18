const Task = require("../models/task");

module.exports = {
  showTasks,
  createTask,
  editTask,
  deleteTask,
  showTaskById,
  showPending,
  showOpenTasks,
  showCompleted,
};

/* ----- These controllers work with the data being sent from the adoption form ------ */

async function showTasks(req, res) {
  const tasks = await Task.find({});
  res.json(tasks);
}

async function showTaskById(req, res) {
  try {
    const oneTask = await Task.findById(req.params.id);
    res.json(oneTask);
  } catch (err) {
    res.json(err);
  }
}

async function createTask(req, res) {
  try {
    await Task.create(req.body);
    showTasks(req, res);
  } catch (err) {
    res.json(err);
  }
}

async function editTask(req, res) {
  try {
    console.log(req.user);
    const updateTheTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updateTheTask);
  } catch (err) {
    res.json(err);
  }
}

async function deleteTask(req, res) {
  try {
    console.log(req.user);
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.json(deletedTask);
  } catch (err) {
    res.json(err);
  }
}

async function showOpenTasks(req, res) {
  const task = await Task.find({ status: "open" });
  //   console.log(req.user);
  res.json(task);
}

async function showPending(req, res) {
  const pendingTask = await Task.find({ status: "pending" });
  //   console.log(req.user);
  res.json(pendingTask);
}

async function showCompleted(req, res) {
  const completedTask = await Task.find({ status: "completed" });
  //   console.log(req.user);
  res.json(completedTask);
}
