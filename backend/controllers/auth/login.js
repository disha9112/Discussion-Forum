const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/userModel");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    const isPasswordValid = await bcrypt.compare(password, userExists.password);

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
};
