const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const question = new Schema({
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Question = mongoose.model("question", question);

module.exports = Question;
