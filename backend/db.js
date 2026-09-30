import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database: ", mongoose.connection.db.databaseName);
  } catch (err) {
    res.status(500).json({
      msg: "Could not fetch products",
      error: err.message,
    });
  }
}

export async function disconnectFromMongoDB() {
  await mongoose.disconnect();
}
