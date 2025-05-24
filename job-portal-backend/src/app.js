const express = require("express");
const app = express();
const dotenv = require("dotenv");
const DB_CONNECT = require("./config/db-connection");
const authRouter = require("./routes/auth");
const cookieParser = require('cookie-parser');
dotenv.config();
const PORT = process.env.PORT || 4000;

app.get("/", (req,res)=>{
    res.send("Working")
    console.log("Server is running on port 5000");
})
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRouter);
/**DB Connecting */
DB_CONNECT()
  .then(() => {
    console.log(`DB connected successfully: ${PORT}`);
  })
  .catch((err) => {
    console.log("Error in DB connection", err);
  });

/**App Listening */
app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
