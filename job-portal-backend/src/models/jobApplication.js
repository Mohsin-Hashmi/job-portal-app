const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        // required: true,
    },
    resumeFile: {
        url: {
            type: String,
            required: true
        },
        public_id: {
            type: String,
            required: true
        }
    },
    coverLetter: {
        type: String,
        required: true
    },
    linkedInProfileLink: {
        type: String,
        // required: true
    },
    gitHubProfileLink: {
        type: String,
        // required: true
    },
    portfolioProfileLink: {
        type: String,
        // required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    aboutYourSelf: {
        type: String,
        required: true
    }
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);
module.exports = JobApplication;
