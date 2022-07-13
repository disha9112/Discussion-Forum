const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
const User = require("../../models/userModel");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
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
      const isPasswordValid = await bcrypt.compare(
        password,
        userExists.password
      );

      if (isPasswordValid) {
        const token = jwt.sign(
          {
            name: userExists.name,
            email: userExists.email,
          },
          process.env.JWT_TOKEN
        );

        return res.json({
          status: true,
          message: "Validation successful",
          token: token,
          isPasswordValid: isPasswordValid,
        });
      } else {
        return res.json({
          status: false,
          message: "Validation error",
          isPasswordValid: isPasswordValid,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "This email does not exist in the database",
        userExists: userExists,
      });
    }
  }
};
