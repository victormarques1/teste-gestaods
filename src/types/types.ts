export interface Patient {
  id: string;
  basicInfo: BasicInfo;
  contact: Contact;
}

export interface BasicInfo {
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

export interface Contact {
  cep: string;
  city: string;
  uf: string;
  address: string;
  number: number;
  neighborhood: string;
  complement: string;
}
