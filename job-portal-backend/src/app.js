const express = require("express");
const app = express();
const dotenv = require("dotenv");
const DB_CONNECT = require("./config/db-connection");
const authRouter = require("./routes/auth");
const jobsRoutes = require("./routes/jobs");
const applyJobRouter= require("./routes/jobApplication");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// CORS options
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
  
//   optionsSuccessStatus: 200,
// };
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
// Middleware
// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// Routes
app.use("/api/auth", authRouter);
app.use("/api/jobs", jobsRoutes);
app.use("/api/jobs", applyJobRouter);

// DB connection
DB_CONNECT()
  .then(() => {
    console.log(`DB connected successfully: ${PORT}`);
  })
  .catch((err) => {
    console.log("Error in DB connection", err);
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
