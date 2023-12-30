import express from "express";
import { patientController } from "../controllers/patient.controller";

const patientRouter = express.Router();

patientRouter.get("/", patientController.getAllPatients);
patientRouter.get("/:id", patientController.getPatientById);
patientRouter.post("/", patientController.addPatient);
patientRouter.put("/:id", patientController.updatePatient);
patientRouter.delete("/:id", patientController.deletePatient);

export default patientRouter;
