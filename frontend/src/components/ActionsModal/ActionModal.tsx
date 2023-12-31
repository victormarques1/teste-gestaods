import { Patient } from "@/types/types";
import { useState } from "react";
import { ActionButton, ModalContainer } from "./ActionModalStyles";
import DeleteModal from "./DeleteModal";
import Modal from "../PatientModal/Modal";
import axios from "axios";

interface ActionModalProps {
  patient?: Patient | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const ActionModal = ({
  isOpen,
  onClose,
  onDelete,
  patient,
}: ActionModalProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [patientToEdit, setPatientToEdit] = useState<Patient | undefined>(
    undefined
  );

  if (!isOpen || !patient) {
    return null;
  }

  //Recebe os dados do paciente
  const getPatientData = async (patientId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/patients/${patientId}`
      );
      const patientData = response.data;

      return patientData;
    } catch (error) {
      console.error("Erro ao buscar dados do paciente:", error);
      throw error;
    }
  };

  const handleEditModalOpen = async () => {
    try {
      if (!patient || !patient._id) {
        console.error("ID do paciente não encontrado.");
        return;
      }

      //Recupera os dados do paciente
      const patientId = patient._id;
      const data = await getPatientData(patientId);

      // Abre o modal de edição
      setIsEditMode(true);
      setIsEditModalOpen(true);
      setPatientToEdit(data);
    } catch (error) {
      console.error("Erro ao buscar dados do paciente:", error);
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteModalConfirm = () => {
    setIsDeleteModalOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && !isDeleteModalOpen && (
        <ModalContainer>
          <ActionButton onClick={handleEditModalOpen}>Editar</ActionButton>
          <ActionButton onClick={handleDeleteClick}>Excluir</ActionButton>
        </ModalContainer>
      )}

      {isEditModalOpen && (
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          patient={patientToEdit}
          isEditMode={true}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onCancel={handleDeleteModalCancel}
          onConfirm={() => {
            onDelete();
            handleDeleteModalConfirm();
          }}
        />
      )}
    </>
  );
};

export default ActionModal;
