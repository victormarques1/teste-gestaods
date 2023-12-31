import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectToDatabase } from "./database/mongoose.db";
import patientRouter from "./routes/patient.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/patients", patientRouter);

const PORT = 3333;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
