

const express = require('express');
const applyJobRouter = express.Router();
const sendJobApplication = require('../controllers/jobApplication');
const upload = require('../middlewares/upload');
const {authMiddleWare} = require("../middlewares/auth")
applyJobRouter.post('/apply', upload.single('resumeFile'), authMiddleWare,  sendJobApplication)

module.exports = applyJobRouter;