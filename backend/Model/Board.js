const mongoose = require("mongoose");

const Board = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the BOARD titlte!"],
    maxLenght: [30, "name cannot exceed 30 character"],
    minLenght: [4, "name should have more than 4 character"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please provide the BOARD description!"],
    trim: true,
    lowercase: true,
  },
  addMember: {
    type: String,
  },
});

module.exports = mongoose.model("Board", Board);
