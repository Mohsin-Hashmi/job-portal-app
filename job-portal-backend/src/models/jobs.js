const mongoose = require("mongoose");
const { trim } = require("validator");

const jobsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        "Full-time",
        "Part-time",
        "Internship",
        "Contract",
        "Remote",
        "Hybrid",
      ],
      required: true,
    },
    department: {
      type: String,
      enum: [
        "Engineering",
        "Marketing",
        "Sales",
        "HR",
      ],
      required: true,
    },
    experience: {
      type: String,
      enum: [
        "beginner",
        "medium",
        "experienced",
        
      ],
      required: true,
    },
    skills: {
      type: [String],
      require: true
    },
    salary: {
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      currency: {
        type: String,
        default: "USD",
      },
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      default: [],
    },
    benefits:{
      type:[String],
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    Admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true
    }
  },
  { timestamps: true }
);

const Jobs = mongoose.model("Jobs", jobsSchema);
module.exports = Jobs;
