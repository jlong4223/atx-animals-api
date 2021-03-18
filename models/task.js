const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const statusSchema = new Schema(
//   {
//     status: {
//       type: String,
//     },
//     employee: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const taskSchema = new Schema(
  {
    animalType: {
      type: String,
    },
    animalName: {
      type: String,
    },
    personName: {
      type: String,
    },
    address: {
      type: String,
    },
    currentPets: {
      type: Number,
    },
    anyChildren: {
      type: Number,
    },
    typeOfResidence: {
      type: String,
    },
    contactInfo: {
      type: String,
    },
    status: {
      type: String,
    },
    employee: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
