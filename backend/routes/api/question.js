const express = require("express");
const router = express.Router();

const {
  createQuestion,
} = require("../../controllers/api/question/createQuestion");
const { getQuestions } = require("../../controllers/api/question/getQuestions");
const { getQuestion } = require("../../controllers/api/question/getQuestion");
const {
  viewCountQuestion,
} = require("../../controllers/api/question/viewCountQuestion");
const {
  filterQuestions,
} = require("../../controllers/api/question/filterQuestions");

router.post("/createQuestion", createQuestion);
router.get("/getQuestions", getQuestions);
router.get("/getQuestion/:id", getQuestion);
router.patch("/viewCountQuestion/:id", viewCountQuestion);
router.get("/filterQuestions/:query", filterQuestions);

module.exports = router;
