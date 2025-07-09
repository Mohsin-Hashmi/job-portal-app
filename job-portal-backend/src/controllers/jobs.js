const Jobs = require("../models/jobs");

/**
 * create Job API
 */
// ...existing code...
const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      type,
      department,
      salary,
      skills,
      description,
      experience,
      requirements,
      benefits,
      Admin,
    } = req.body;

    if (
      !title ||
      !company ||
      !location ||
      !type ||
      !salary ||
      !description ||
      !requirements ||
      !skills ||
      !benefits ||
      !department ||
      !experience
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled!",
      });
    }

    // Parse salary range string to min and max
    const salaryMapping = {
      "0-30k": { min: 0, max: 30000 },
      "30k-60k": { min: 30000, max: 60000 },
      "60k-100k": { min: 60000, max: 100000 },
    };
    const parsedSalary = salaryMapping[salary] || { min: 0, max: 0 };
    parsedSalary.currency = "USD";

    const newJob = new Jobs({
      title,
      company,
      location,
      type,
      department,
      salary: parsedSalary,
      description,
      experience,
      requirements,
      skills,
      benefits,
      Admin: Admin,
    });

    const savedJob = await newJob.save();
    res.status(200).json({
      success: true,
      message: "Job created successfully..",
      job: savedJob,
      Admin: Admin,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in creating job: " + err.message,
    });
  }
};

/**
 * Get All Job API
 */
const getJobs = async (req, res) => {
  try {
    const getJobs = await Jobs.find();
    if (getJobs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No jobs currently available.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Jobs retrieved successfully.",
      current_jobs_are: getJobs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in getting jobs" + err.message,
    });
  }
};

/**
 * Get  Job by ID API
 */

const getJobById = async (req, res) => {
  try {
    const { _id } = req.params;
    const getJobById = await Jobs.findById(_id);
    if (!getJobById) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Job retrieved successfully.",
      job: getJobById,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in getting job by id" + err.message,
    });
  }
};
/**
 * Update Job API
 */

const updateJobs = async (req, res) => {
  try {
    const { _id } = req.params;
    const {
      title,
      company,
      location,
      type,
      salary,
      department,
      experience,
    } = req.body;
    const isJobExist = await Jobs.findById(_id);
    if (!isJobExist) {
      return res.status(404).json({
        success: false,
        message: "Job Not Exist.",
      });
    }
    const updatedJob = await Jobs.findByIdAndUpdate(
      _id,
      {
        $set: {
          title: title || isJobExist.title,
          company: company || isJobExist.company,
          location: location || isJobExist.location,
          type: type || isJobExist.type,
          salary: salary || isJobExist.salary,
          department: department || isJobExist.department,
          experience: experience || isJobExist.experience,
          
        },
      },
      { new: true } // return updated document
    );

    res.status(200).json({
      success: true,
      message: "Job updated successfully.",
      updated_job_is: updatedJob,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in updating jobs" + err.message,
    });
  }
};

/**
 * Delete Job API
 */

const deleteJob = async (req, res) => {
  try {
    const { _id } = req.params;
    const isJobExist = await Jobs.findById(_id);

    if (!isJobExist) {
      return res.status(404).json({
        success: false,
        message: "Job Not Exist.",
      });
    }
    const deletedJob = await Jobs.findByIdAndDelete(_id);
    res.status(200).json({
      success: true,
      message: "Job Deleted Successfully..",
      deleted_Job_is: deletedJob,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error to delete a job" + err.message,
    });
  }
};

module.exports = { createJob, getJobs, getJobById, deleteJob, updateJobs };
