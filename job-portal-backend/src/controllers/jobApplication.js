const JobApplication = require("../models/jobApplication");

const sendJobApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      coverLetter,
      linkedInProfileLink,
      gitHubProfileLink,
      portfolioProfileLink,
      startDate,
      aboutYourSelf,
      jobId
    } = req.body;

    // const resumePath = req.file.path; // Uploaded file path

    const application = new JobApplication({
      fullName,
      email,
      phoneNumber,
      resumeFile: {
        url: req.file.path, // Cloudinary gives this directly
        public_id: req.file.filename, // Cloudinary gives this directly
      },
      coverLetter,
      linkedInProfileLink,
      gitHubProfileLink,
      portfolioProfileLink,
      startDate,
      aboutYourSelf,
      user:req.user._id,
      job: jobId,
    });

    await application.save();

    res.status(200).json({
      success: true,
      message: "Application submitted successfully!",
      user:req.user._id,
      job: jobId,
      JobApplication:application
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to submit application",
      error: err.message,
    });
  }
};

module.exports = sendJobApplication;
