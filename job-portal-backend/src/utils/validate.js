const Validator = require("validator");
const validateUser = (req) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all the fields",
    });
  } else if (!Validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address",
    });
  } else if (!Validator.isStrongPassword(password)) {
    return res.status(400).json({
      success: false,
      message: "Password is weak please make it strong",
    });
  } else if (password.length < 3 || password.length > 20) {
    return res.status(400).json({
      success: false,
      message: "Password length should be between 3 to 20 characters",
    });
  }
};

module.exports = validateUser;
