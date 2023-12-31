import { useState, useEffect } from "react";
import axios from "axios";
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    // Receber os pacientes da API
    const getPatientsFromAPI = async () => {
      try {
        const response = await axios.get("http://localhost:3333/patients");
        setPatients(response.data);
      } catch (error) {
        console.error("Erro ao obter pacientes:", error);
      }
    };

    getPatientsFromAPI();
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
    setIsDeleteModalOpen(true);
  };

  // Excluir o paciente da API e da tabela
  const handleDeleteModalConfirm = async () => {
    console.log("Selected Patient:", selectedPatient);

    if (!selectedPatient) {
      console.error("Nenhum paciente selecionado para exclusão.");
      return;
    }

    try {
      await axios.delete(
        `http://localhost:3333/patients/${selectedPatient._id}`
      );

      // Atualizar a lista de pacientes após a exclusão
      const updatedPatients = patients.filter(
        (p) => p._id !== selectedPatient._id
      );
      setPatients(updatedPatients);
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao deletar paciente:", error);
    }
  };

  // Fechar o modal
  const handleCloseModal = () => {
    setSelectedPatient(null);
    setIsDeleteModalOpen(false);
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
            <tr key={patient._id}>
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
          onDelete={handleDeleteModalConfirm}
        />
      )}
    </TableContainer>
  );
};

export default PatientTable;
