const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connection string
    const con = await mongoose.connect("mongodb+srv://tanushgupta41:hsunat.41@cluster0.2oboout.mongodb.net/ome?retryWrites=true&w=majority");
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
