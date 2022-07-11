require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const auth = require("./routes/auth");

const app = express();

const port = process.env.PORT || 8000;
const url = process.env.ATLAS_URL;

mongoose.connect(url, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established successfully");
});

app.use(express.json());
app.use(cors());

app.use("/auth", auth);

app.get("/", (req, res) => {
  res.send("Server is listening for requests");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
