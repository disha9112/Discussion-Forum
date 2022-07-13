const jwt = require("jsonwebtoken");
const Question = require("../../../models/questionModel");

exports.filterQuestions = async (req, res) => {
  try {
    const query = req.params.query;

    const filtered = await Question.find({
      title: { $regex: query },
    });

    res.json({
      status: true,
      message: "Filtered questions retrieved succesfully",
      questions: filtered,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal server error",
    });
  }
};
