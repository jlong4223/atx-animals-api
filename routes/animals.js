const express = require("express");
const router = express.Router();
const animalCtrl = require("../controllers/animals");

router.get("/animals", animalCtrl.showAnimals);
router.get("/animals/:id", animalCtrl.showOneAnimal);

// add checkAuth function to posting/editing/deleting animals and check req.user.admin (decode it)
router.post("/animals", animalCtrl.createAnimal);
router.put("/animals/:id", animalCtrl.updateAnimal);
router.delete("/animals/:id", animalCtrl.deleteAnimal);

// TODO working on image upload
// const fileUpload = require("express-fileupload");
// router.use(fileUpload());

// router.post('/animals', function(req, res){

// })

module.exports = router;
