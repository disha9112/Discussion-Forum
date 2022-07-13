const Question = require("../../../models/questionModel");

exports.viewCountQuestion = async (req, res) => {
  const id = req.params.id;
  const viewCount = req.body.viewCount;

  try {
    const updatedQuestion = { _id: id, viewCount: viewCount };

    await Question.findByIdAndUpdate(id, updatedQuestion, { new: true });

    res.json({
      status: true,
      message: "Question view count incremented succesfully",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal server error",
    });
  }
};
