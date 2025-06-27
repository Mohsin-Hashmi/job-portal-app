

const express = require('express');
const applyJobRouter = express.Router();
const sendJobApplication = require('../controllers/jobApplication');
const upload = require('../middlewares/upload');
applyJobRouter.post('/apply', upload.single('resumeFile'), sendJobApplication)

module.exports = applyJobRouter;