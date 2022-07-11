const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/userModel");

exports.signup = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  var mailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  try {
    if (password.length <= 5) {
      res.json({
        status: false,
        message: "Password is weak, enter 5 or more characters",
      });
    } else if (!email.match(mailFormat)) {
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
