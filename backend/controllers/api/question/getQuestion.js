const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Question = require("../../../models/questionModel");

exports.getQuestion = async (req, res) => {
  const id = req.params.id;

  try {
    const question = await Question.findOne({ _id: id });

    res.json({
      status: true,
      message: "Question retrieved succesfully",
      question: question,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal server error",
    });
  }
};
