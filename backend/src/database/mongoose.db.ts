import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://teste-database:gestaods@testegestaodscluster.b8kk862.mongodb.net/";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to MongoDB!");
    });

    connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    connection.on("disconnected", () => {
      console.log("Disconnected from MongoDB");
    });
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
};
