const express = require("express");
const router = express.Router();
const tasksCtrl = require("../controllers/tasks");

//post does not need a user as this refers to the adoption form data
router.post("/tasks", tasksCtrl.createTask);

/* ------- protected routes -------- */
router.use(require("../config/auth"));
router.get("/tasks", checkAuth, tasksCtrl.showTasks);
router.get("/tasks/pending", checkAuth, tasksCtrl.showPending);
router.get("/tasks/open", checkAuth, tasksCtrl.showOpenTasks);
router.get("/tasks/completed", checkAuth, tasksCtrl.showCompleted);
router.get("/tasks/:id", checkAuth, tasksCtrl.showTaskById);
router.put("/tasks/:id", checkAuth, tasksCtrl.editTask);
router.delete("/tasks/:id", checkAuth, tasksCtrl.deleteTask);

/*----- Helper Middleware Functions -----*/
function checkAuth(req, res, next) {
  if (req.user && req.user.admin === true) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
