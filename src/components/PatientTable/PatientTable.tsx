import { useState, useEffect } from "react";

import { Patient } from "@/types/types";
import {
  ActionButton,
  StyledTable,
  TableContainer,
  TableData,
  TableHeader,
} from "./PatientTableStyles";
import { MdMoreHoriz } from "react-icons/md";
import theme from "@/styles/theme";
import ActionModal from "../ActionsModal/ActionModal";

const PatientTable = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    // Receber os pacientes do localStorage
    const getPatientsFromLocalStorage = () => {
      const storedPatients = localStorage.getItem("patients");
      if (storedPatients) {
        const parsedPatients: Patient[] = JSON.parse(storedPatients);
        setPatients(parsedPatients);
      }
    };

    getPatientsFromLocalStorage();
  }, []);

  //Formatar data para o padrão brasileiro
  const formatDate = (date: Date | string) => {
    date = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  };

  // Abrir o modal de ações para o paciente selecionado
  const handleOpenModal = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  // Fechar o modal
  const handleCloseModal = () => {
    setSelectedPatient(null);
  };

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Nome</TableHeader>
            <TableHeader>CPF</TableHeader>
            <TableHeader>Data de nascimento</TableHeader>
            <TableHeader>E-mail</TableHeader>
            <TableHeader>Cidade</TableHeader>
            <TableHeader>Ações</TableHeader>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <TableData color={theme.colors.blue}>
                {patient.basicInfo.name}
              </TableData>
              <TableData>{patient.basicInfo.cpf}</TableData>
              <TableData>{formatDate(patient.basicInfo.birthDate)}</TableData>
              <TableData>teste@gestaods.com.br</TableData>
              <TableData>{patient.contact.city}</TableData>
              <TableData>
                <ActionButton onClick={() => handleOpenModal(patient)}>
                  <MdMoreHoriz size={24} />
                </ActionButton>
              </TableData>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {selectedPatient && (
        <ActionModal
          isOpen={true}
          onClose={handleCloseModal}
          patient={selectedPatient}
        />
      )}
    </TableContainer>
  );
};

export default PatientTable;
