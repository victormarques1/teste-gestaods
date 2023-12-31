"use client";

import { useState } from "react";

import {
  InputButtonContainer,
  SearchBarContainer,
  SearchBarText,
} from "./SearchBarStyles";
import { InputContainer, Input, SearchIcon } from "./SearchInput";
import { Button, PlusIcon } from "../Common/Button";
import Modal from "../PatientModal/Modal";

const SearchBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abrir o modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SearchBarContainer>
      <div>
        <SearchBarText>Listagem de pacientes</SearchBarText>
      </div>

      <InputButtonContainer>
        <InputContainer>
          <Input placeholder="Pesquisar" />
          <SearchIcon size={20} />
        </InputContainer>
        <Button onClick={handleOpenModal}>
          <PlusIcon size={22} />
          Adicionar paciente
        </Button>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            isEditMode={false}
          />
        )}
      </InputButtonContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
