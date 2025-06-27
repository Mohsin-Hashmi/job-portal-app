
const express = require('express');
const jobsRoutes = express.Router();
const { createJob, getJobs, getJobById, deleteJob, updateJobs } = require('../controllers/jobs');



jobsRoutes.post('/create-job', createJob);
jobsRoutes.get('/read-jobs', getJobs);
jobsRoutes.get('/get-job/:_id', getJobById);
jobsRoutes.delete('/delete-job/:_id', deleteJob);
jobsRoutes.put('/update-job/:_id', updateJobs);

module.exports = jobsRoutes;