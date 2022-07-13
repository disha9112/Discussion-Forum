const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
const User = require("../../models/userModel");

exports.signup = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (!name || !email || !password) {
      res.json({
        status: false,
        message: "All fields are mandatory",
      });
    } else if (!validator.isStrongPassword(password)) {
      res.json({
        status: false,
        message:
          "Password is weak, it must have: min 8 characters, min 1 uppercase character, min 1 number, min 1 symbol",
      });
    } else if (!validator.isEmail(email)) {
      res.json({
        status: false,
        message: "Invalid email address",
      });
    } else {
      const userExists = await User.findOne({ email: email });

      if (userExists) {
        res.json({
          status: false,
          message: "Email already exists in the database",
          userExists: userExists,
        });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
          name: name,
          email: email,
          password: hashedPassword,
        });

        const token = jwt.sign(
          {
            name: name,
            email: email,
          },
          process.env.JWT_TOKEN
        );

        res.json({
          status: true,
          message: "User successfully signed up",
          token: token,
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
