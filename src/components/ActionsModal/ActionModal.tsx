import { Patient } from "@/types/types";
import React, { useState } from "react";
import { ActionButton, ModalContainer } from "./ActionModalStyles";
import DeleteModal from "./DeleteModal";

interface ActionModalProps {
  patient: Patient | null;
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

  if (!isOpen || !patient) {
    return null;
  }

  const handleEdit = () => {
    // Lógica para editar o paciente aqui
    console.log(`Editar paciente com ID: ${patient.id}`);
  };

  //Abrir modal de exclusão
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  //Fechar modal de exclusão
  const handleDeleteModalCancel = () => {
    setIsDeleteModalOpen(false);
  };

  // Excluir o paciente do localStorage e da tabela
  const handleDeleteModalConfirm = () => {
    console.log("Excluir paciente:", patient);
    setIsDeleteModalOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && !isDeleteModalOpen && (
        <ModalContainer>
          <ActionButton onClick={handleEdit}>Editar</ActionButton>
          <ActionButton onClick={handleDeleteClick}>Excluir</ActionButton>
        </ModalContainer>
      )}

      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onCancel={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            onDelete();
            setIsDeleteModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default ActionModal;
