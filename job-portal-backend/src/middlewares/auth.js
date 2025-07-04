const User = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleWare = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login to access the resource",
      });
    }
    const isTokenValid = await jwt.verify(token, process.env.JWT_SECRET);
    if (!isTokenValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid token please login again",
      });
    }
    const { _id, isAdmin } = isTokenValid;
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "User authentication failed, please try again",
    });
  }
};

module.exports = { authMiddleWare };
