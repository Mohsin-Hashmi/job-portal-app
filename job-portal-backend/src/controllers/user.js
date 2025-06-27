const User = require("../models/user");
const ContactUs = require("../models/contactus");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateUser } = require("../utils/validate");
const { validateContactUs } = require("../utils/validate");
const Validator = require("validator");
/**
 * Signup API
 */
const Signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;
    const validationError = validateUser(req);
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        success: false,
        message: "Email Already Exist.",
      });
    }
    if (password != confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password do not match.",
      });
    }
    const HASHED_PASSWORD = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: HASHED_PASSWORD,
      role
    });
    const newUser = await user.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in user signup: " + err.message,
    });
  }
};

/**
 * Login API
 */
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((!email, !password)) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields.",
      });
    }
    if (!Validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email Format.",
      });
    }
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserExist.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials.",
      });
    }
    const token = jwt.sign({ _id: isUserExist._id , role: isUserExist.role}, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true
    });
    const { _id: userId, name, email: userEmail, role } = isUserExist;
    res.status(200).json({
      success: true,
      token,
      role: isUserExist.role,
      message: "User logged in successfully",
      user: { _id: userId, name, email: userEmail, role },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in user login: " + err.message,
    });
  }
};

/**
 * Logout API
 */
const Logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });
    res.json({
      message: "user logged out successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in user logout: " + err.message,
    });
  }
};


/**
 * Contact Us  API
 */

const contactUs = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    validateContactUs(req);

    const contactUs = new ContactUs({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });

    await contactUs.save();
    res.status(200).json({
      message: "Contact Us form submitted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in contact us: " + err.message,
    });
  }
};
module.exports = {
  Signup,
  Login,
  Logout,
  contactUs,
};
