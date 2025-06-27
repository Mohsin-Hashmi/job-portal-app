// utils/upload.js (cloudinary-based upload)
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary"); // your cloudinary config

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "resumes", // your folder in Cloudinary
    resource_type: "raw",
    allowed_formats: ["jpg", "png", "jpeg", "pdf", "doc", "docx"],
  },
});

const upload = multer({ storage });
module.exports = upload;
