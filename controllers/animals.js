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
    await Animal.create(req.body);
    showAnimals(req, res);
  } catch (err) {
    res.json(err);
  }
}

async function updateAnimal(req, res) {
  try {
    const updateTheAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(updateTheAnimal);
  } catch (err) {
    res.json(err);
  }
}

async function deleteAnimal(req, res) {
  try {
    const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
    res.json(deletedAnimal);
  } catch (err) {
    console.log(err);
  }
}
