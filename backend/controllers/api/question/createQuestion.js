const jwt = require("jsonwebtoken");
const Question = require("../../../models/questionModel");

exports.createQuestion = async (req, res) => {
  const userEmail = jwt.verify(
    req.headers.authorization,
    process.env.JWT_TOKEN
  );

  const email = userEmail.email;
  const title = req.body.title;

  try {
    if (title.length === 0) {
      res.json({
        status: false,
        message: "Question field cannot be empty",
      });
    } else {
      const newQuestion = new Question({ email, title });

      try {
        await newQuestion.save();

        res.json({
          status: true,
          message: "Question added to database successfully",
        });
      } catch (err) {
        res.json({
          status: false,
          error: "Error while adding question to database",
        });
      }
    }
  } catch (err) {
    res.json({
      status: false,
      error: "Internal server error",
    });
  }
};
