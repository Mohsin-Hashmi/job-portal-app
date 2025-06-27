

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DB_CONNECT = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION)
    } catch (err) {
        console.log("Error in DB connection", err);
    }
}

module.exports = DB_CONNECT;