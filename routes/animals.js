const express = require("express");
const router = express.Router();
const animalCtrl = require("../controllers/animals");

router.get("/animals", animalCtrl.showAnimals);
router.get("/animals/:id", animalCtrl.showOneAnimal);
router.post("/animals", animalCtrl.createAnimal);
router.put("/animals/:id", animalCtrl.updateAnimal);
router.delete("/animals/:id", animalCtrl.deleteAnimal);

module.exports = router;
