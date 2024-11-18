import mongoose from "mongoose";


const dbConnection=process.env.CONNECTION as string

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(dbConnection);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
