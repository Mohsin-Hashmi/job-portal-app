
const express = require('express');
const jobsRoutes = express.Router();
const { createJob, getJobs, getJobById, deleteJob, updateJobs } = require('../controllers/jobs');

const {authMiddleWare, isAdmin} = require("../middlewares/auth")

jobsRoutes.post('/create-job', authMiddleWare, isAdmin,  createJob);
jobsRoutes.get('/read-jobs', authMiddleWare, getJobs);
jobsRoutes.get('/get-job/:_id', authMiddleWare, getJobById);
jobsRoutes.delete('/delete-job/:_id', authMiddleWare, isAdmin, deleteJob);
jobsRoutes.put('/update-job/:_id', authMiddleWare, isAdmin,  updateJobs);

module.exports = jobsRoutes;