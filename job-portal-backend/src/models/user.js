const mongoose = require("mongoose");
const Validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!Validator.isEmail(value)) {
          throw new Error("Invalid Email address...");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: { type: String, enum: ["jobseeker", "company"], required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
