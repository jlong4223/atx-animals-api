const express = require("express");
const router = express.Router();
const animalCtrl = require("../controllers/animals");

router.get("/animals", animalCtrl.showAnimals);
router.get("/animals/:id", animalCtrl.showOneAnimal);

/*---------- Protected Routes ----------*/
// added checkAuth function to posting/editing/deleting animals and check for req.user which is gathered from the decoded token
router.use(require("../config/auth"));
router.post("/animals", checkAuth, animalCtrl.createAnimal);
router.put("/animals/:id", checkAuth, animalCtrl.updateAnimal);
router.delete("/animals/:id", checkAuth, animalCtrl.deleteAnimal);

/*----- Helper Middleware Functions -----*/
function checkAuth(req, res, next) {
  if (req.user && req.user.admin === true) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
