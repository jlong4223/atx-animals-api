const Task = require("../models/task");

module.exports = {
  showTasks,
  createTask,
  showPending,
  showOpenTasks,
  showCompleted,
  //   TODO :
  // (these will need req.user.admin === true and check auth from config ), update, delete, etc
  //   TODO add the ability to edit the pending, notPending, etc
};

/* ----- These controllers work with the data being sent from the adoption form ------ */

async function showTasks(req, res) {
  const tasks = await Task.find({});
  res.json(tasks);
}

async function createTask(req, res) {
  try {
    await Task.create(req.body);
    showTasks(req, res);
  } catch (err) {
    res.json(err);
  }
}

async function showOpenTasks(req, res) {
  const task = await Task.find({ status: "" });
  res.json(task);
}

async function showPending(req, res) {
  const pendingTask = await Task.find({ status: "pending" });
  res.json(pendingTask);
}

async function showCompleted(req, res) {
  const completedTask = await Task.find({ status: "completed" });
  res.json(completedTask);
}
