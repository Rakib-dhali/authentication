const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("data connected successfully");
  } catch (err) {
    console.error("database connection error", err);
  }
}

module.exports = connectDB;
