const express = require("express");
const applyJobRouter = express.Router();
const {
  sendJobApplication,
  getAppliedJobs,
} = require("../controllers/jobApplication");
const upload = require("../middlewares/upload");
const { authMiddleWare } = require("../middlewares/auth");
applyJobRouter.post(
  "/apply",
  upload.single("resumeFile"),
  authMiddleWare,
  sendJobApplication
);
applyJobRouter.get("/getApplyJob", authMiddleWare, getAppliedJobs);

module.exports = applyJobRouter;
