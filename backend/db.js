import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database: ", mongoose.connection.db.databaseName);
  } catch (err) {
    console.error("Mongodb connection failed", err);
    throw err;
  }
}

export async function disconnectFromMongoDB() {
  await mongoose.disconnect();
}
