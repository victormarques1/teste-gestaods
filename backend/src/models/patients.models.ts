import mongoose, { Document, Schema } from "mongoose";

// Interface para as informações básicas
interface BasicInfo {
  name: string;
  nickname: string;
  nationality: string;
  birthDate: Date;
  cpf: string;
  rg: number;
  gender: string;
  maritalStatus: string;
  addObservations: string;
}

// Interface para as informações de contato
interface Contact {
  cep: string;
  city: string;
  uf: string;
  address: string;
  number: number;
  neighborhood: string;
  complement: string;
}

// Interface para o modelo do paciente
interface PatientModel extends Document {
  basicInfo: BasicInfo;
  contact: Contact;
}

// Schema para o modelo do paciente
const patientSchema = new Schema<PatientModel>({
  basicInfo: {
    type: {
      name: String,
      nickname: String,
      nationality: String,
      birthDate: Date,
      cpf: String,
      rg: Number,
      gender: String,
      maritalStatus: String,
      addObservations: String,
    },
  },
  contact: {
    type: {
      cep: String,
      city: String,
      uf: String,
      address: String,
      number: Number,
      neighborhood: String,
      complement: String,
    },
  },
});

// Criar o modelo do paciente
const Patient = mongoose.model<PatientModel>("Patient", patientSchema);

export default Patient;
