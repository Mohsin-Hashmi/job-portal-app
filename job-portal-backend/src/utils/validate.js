const Validator = require("validator");
const validateUser = (req) => {
  const { name, email, password, confirmPassword,  } = req.body;
  if (!name || !email || !password || !confirmPassword ) {
    return "Please fill all the fields";
  } else if (!Validator.isEmail(email)) {
    return "Invalid email address";
  } else if (!Validator.isStrongPassword(password)) {
    return "Password is weak please make it strong";
  } else if (password.length < 3 || password.length > 20) {
    return "Password length should be between 3 to 20 characters";
  }
  return null;
};

const validateContactUs = (req) => {
  const { firstName, lastName, emailId, phoneNumber, message } = req.body;
  if (!firstName || !lastName || !emailId || !phoneNumber || !message) {
  } else if (!Validator.isEmail(emailId)) {
    return "All fields are required";
  }
  return null
};

module.exports = { validateUser, validateContactUs };
