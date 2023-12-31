// DeleteConfirmationModal.tsx
import Image from "next/image";
import React from "react";
import deleteImage from "../../../public/delete-image.png";
import {
  BodyContainer,
  ButtonContainer,
  CancelButton,
  DeleteButton,
  DeleteContainer,
  StyledIcon,
  StyledText,
  Title,
  TitleContainer,
} from "./DeleteModalStyles";
import { MdClose } from "react-icons/md";
import theme from "@/styles/theme";

interface DeleteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteModal = ({ isOpen, onCancel, onConfirm }: DeleteModalProps) => {
  const handleCloseDeleteModal = () => {
    onCancel();
  };

  return (
    <DeleteContainer>
      <TitleContainer>
        <Title>Excluir paciente?</Title>
        <StyledIcon onClick={handleCloseDeleteModal}>
          <MdClose size="24px" />
        </StyledIcon>
      </TitleContainer>
      <BodyContainer>
        <Image src={deleteImage} alt="Excluir paciente?" />
        <StyledText
          color={theme.colors.dark_gray}
          marginTop="30px"
          marginBottom="20px"
        >
          Tem certeza que deseja excluir o paciente selecionado?
        </StyledText>
        <StyledText fontWeight={600} color={theme.colors.dark_gray}>
          Essa ação não poderá ser desfeita.
        </StyledText>
      </BodyContainer>
      <ButtonContainer>
        <CancelButton onClick={onCancel}>Cancelar</CancelButton>
        <DeleteButton onClick={onConfirm}>Excluir</DeleteButton>
      </ButtonContainer>
    </DeleteContainer>
  );
};

export default DeleteModal;
