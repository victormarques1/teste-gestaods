"use client";

import { useState } from "react";

import {
  InputButtonContainer,
  SearchBarContainer,
  SearchBarText,
} from "./SearchBarStyles";
import { InputContainer, Input, SearchIcon } from "./SearchInput";
import { Button, PlusIcon } from "../Common/Button";
import Modal from "../Modal/Modal";

const SearchBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdicionarClick = () => {
    setIsModalOpen(true);
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
        <Button onClick={handleAdicionarClick}>
          <PlusIcon size={22} />
          Adicionar paciente
        </Button>
        {isModalOpen && <Modal />}
      </InputButtonContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
