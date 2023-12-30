import { Patient } from "@/types/types";
import React from "react";
import { ActionButton, ModalContainer } from "./ActionModalStyles";

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: Patient | null;
}

const ActionModal = ({ isOpen, onClose, patient }: ActionModalProps) => {
  if (!isOpen || !patient) {
    return null;
  }

  const handleEdit = () => {
    // Lógica para editar o paciente aqui
    console.log(`Editar paciente com ID: ${patient.id}`);
  };

  const handleDelete = () => {
    // Lógica para excluir o paciente aqui
    console.log(`Excluir paciente com ID: ${patient.id}`);
  };

  return (
    <ModalContainer>
      <ActionButton onClick={handleEdit}>Editar</ActionButton>
      <ActionButton onClick={handleDelete}>Excluir</ActionButton>
    </ModalContainer>
  );
};

export default ActionModal;
