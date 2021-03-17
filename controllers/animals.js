const Animal = require("../models/animal");

module.exports = {
  showAnimals,
  showOneAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};

async function showAnimals(req, res) {
  const animals = await Animal.find({});
  res.json(animals);
}

async function showOneAnimal(req, res) {
  try {
    const oneAnimal = await Animal.findById(req.params.id);
    res.json(oneAnimal);
  } catch (err) {
    res.json(err);
  }
}

async function createAnimal(req, res) {
  try {
    console.log(req.user);
    await Animal.create(req.body);
    showAnimals(req, res);
  } catch (err) {
    res.json(err);
  }
}

async function updateAnimal(req, res) {
  try {
    console.log(req.user);
    const updateTheAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(updateTheAnimal);
  } catch (err) {
    res.json(err);
  }
}

async function deleteAnimal(req, res) {
  try {
    console.log(req.user);
    const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
    res.json(deletedAnimal);
  } catch (err) {
    console.log(err);
  }
}
