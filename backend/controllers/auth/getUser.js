const User = require("../../models/userModel");

exports.getUser = async (req, res) => {
  const email = req.email;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.json({
      status: true,
      message: "User retrieval from database successful",
      name: userExists.name,
    });
  } else {
    return res.json({
      status: false,
      message: "Database error",
      userExists: userExists,
    });
  }
};
