"use client";

import {
  InputButtonContainer,
  SearchBarContainer,
  SearchBarText,
} from "./SearchBarStyle";
import { InputContainer, Input, SearchIcon } from "./Common/Input";
import { Button, PlusIcon } from "./Common/Button";

const SearchBar = () => {
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
        <Button>
          <PlusIcon size={22} />
          Adicionar paciente
        </Button>
      </InputButtonContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
