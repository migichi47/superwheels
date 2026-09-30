import mongoose from "mongoose";

export async function connectToMongoDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database: ", mongoose.connection.db.databaseName);
    })
    .catch((err) => {
      console.error("Mongodb connection failed", err);
      throw err;
    });
}

export async function disconnectFromMongoDB() {
  await mongoose.disconnect();
}
