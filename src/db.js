const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/EspaciosMovilesDB");
    console.log(">>> DB is connnected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
