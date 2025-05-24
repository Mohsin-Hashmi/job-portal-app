const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateUser = require("../utils/validate");
const Validator = require('validator');
/**
 * Signup API
 */
const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        validateUser(req);
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: "Email Already Exist."
            })
        }
        const HASHED_PASSWORD = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: HASHED_PASSWORD,
        });
        const newUser = await user.save();
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newUser,
        });
    } catch (err) {
        throw new Error("Error in user signup: " + err.message);
    }
};

/**
 * Login API
 */
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email, !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields."
            })
        }
        if (!Validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Email Format."
            });
        }
        const isUserExist = await User.findOne({ email });
        if (!isUserExist) {
            return res.status(400).json({
                success: false,
                message: "User not found."
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, isUserExist.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials."
            })
        }
        const token = jwt.sign({ _id: isUserExist._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("token", token);
        res.status(200).json({
            success: true,
            token,
            message: "User logged in successfully",
            user: isUserExist
        })

    } catch (err) {
        throw new Error("Error in user signup: " + err.message);
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
        throw new Error("Error in user signup: " + err.message);
    }
};

module.exports = {
    Signup,
    Login,
    Logout,
};
