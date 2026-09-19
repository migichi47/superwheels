import mongoose from "mongoose";

export default connectDB = async () => {
  try {
    console.log("Connected to database");
  } catch (err) {
    console.error("MongoDb failed to connect: ", err.message);
    process.exit(1);
  }
};
