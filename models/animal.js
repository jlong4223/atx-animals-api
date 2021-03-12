const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema(
  {
    name: {
      type: String,
    },
    sex: {
      type: String,
    },
    breed: {
      type: String,
    },
    age: {
      type: Number,
    },
    size: {
      type: String,
    },
    weight: {
      type: Number,
    },
    bio: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Animal", animalSchema);
