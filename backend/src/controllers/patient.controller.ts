import { Request, Response } from "express";
import Patient from "../models/patients.models";
import mongoose from "mongoose";

export const patientController = {
  getAllPatients: async (req: Request, res: Response) => {
    try {
      const patients = await Patient.find({});
      res.status(200).json(patients);
    } catch (error) {
      console.error("Erro ao obter pacientes:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  getPatientById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const patient = await Patient.findById(id);

      if (!patient) {
        return res.status(404).json({ error: "Paciente não encontrado" });
      }

      res.status(200).json(patient);
    } catch (error) {
      console.error("Erro ao obter paciente pelo ID:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  addPatient: async (req: Request, res: Response) => {
    try {
      const { basicInfo, contact } = req.body;
      const newPatient = new Patient({
        basicInfo,
        contact,
      });
      await newPatient.save();

      res.status(201).json(newPatient);
    } catch (error) {
      console.error("Erro ao adicionar paciente:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  updatePatient: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { basicInfo, contact } = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "ID do paciente inválido" });
      }

      const updatedPatient = await Patient.findByIdAndUpdate(
        id,
        { basicInfo, contact },
        { new: true }
      );

      if (!updatedPatient) {
        return res.status(404).json({ error: "Paciente não encontrado" });
      }

      res.status(200).json(updatedPatient);
    } catch (error) {
      console.error("Erro ao atualizar paciente:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  deletePatient: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "ID do paciente inválido" });
      }

      const deletedPatient = await Patient.findByIdAndDelete(id);

      if (!deletedPatient) {
        return res.status(404).json({ error: "Paciente não encontrado" });
      }

      res.status(200).json(deletedPatient);
    } catch (error) {
      console.error("Erro ao deletar paciente:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },
};
