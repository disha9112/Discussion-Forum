const jwt = require("jsonwebtoken");
const Question = require("../../../models/questionModel");

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();

    res.json({
      status: true,
      message: "All questions retrieved succesfully",
      questions: questions,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal server error",
    });
  }
};
