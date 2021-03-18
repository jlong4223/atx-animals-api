const express = require("express");
const router = express.Router();
const tasksCtrl = require("../controllers/tasks");

router.get("/tasks", tasksCtrl.showTasks);
router.get("/tasks/pending", tasksCtrl.showPending);
router.get("/tasks/open", tasksCtrl.showOpenTasks);
router.get("/tasks/completed", tasksCtrl.showCompleted);
router.post("/tasks", tasksCtrl.createTask);

module.exports = router;
