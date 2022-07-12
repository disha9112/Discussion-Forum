const express = require("express");
const router = express.Router();

const {
  createQuestion,
} = require("../../controllers/api/question/createQuestion");
const { getQuestions } = require("../../controllers/api/question/getQuestions");
const { getQuestion } = require("../../controllers/api/question/getQuestion");

router.post("/createQuestion", createQuestion);
router.get("/getQuestions", getQuestions);
router.get("/getQuestion/:id", getQuestion);

module.exports = router;
