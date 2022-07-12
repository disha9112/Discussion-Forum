const express = require("express");
const router = express.Router();

const {
  createQuestion,
} = require("../../controllers/api/question/createQuestion");

router.post("/createQuestion", createQuestion);

module.exports = router;
