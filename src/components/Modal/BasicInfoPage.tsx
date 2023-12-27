import { styled } from "styled-components";
import Image from "next/image";

import photo from "../../../public/photo.png";
import { Input } from "../Common/Input";
import {
  BasicInfoContainer,
  ButtonContainer,
  FlexContainer,
  LabelInput,
  TextArea,
} from "./BasicInfoPageStyles";
import { Select } from "../Common/Select";
import { Button } from "../Common/Button";

const ImageContainer = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`;

const BasicInfoPage = () => {
  const genderOptions = ["Sem Filtro", "Masculino", "Feminino", "Outro"];
  const maritalStatusOptions = [
    "Sem Filtro",
    "Solteiro(a)",
    "Casado(a)",
    "Divorciado(a)",
    "Viúvo(a)",
  ];

  return (
    <BasicInfoContainer>
      <ImageContainer>
        <Image src={photo} alt="Foto" />
      </ImageContainer>

      <FlexContainer>
        <BasicInfoContainer>
          <LabelInput>Paciente</LabelInput>
          <Input placeholder="Digite" />
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>Apelido</LabelInput>
          <Input placeholder="Digite" />
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>Nacionalidade</LabelInput>
          <Input placeholder="Digite" />
        </BasicInfoContainer>
      </FlexContainer>

      <FlexContainer>
        <BasicInfoContainer>
          <LabelInput>Nascimento</LabelInput>
          <Input type="date" />
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>CPF</LabelInput>
          <Input placeholder="Digite" />
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>RG</LabelInput>
          <Input placeholder="Digite" />
        </BasicInfoContainer>
      </FlexContainer>

      <FlexContainer>
        <BasicInfoContainer>
          <LabelInput>Gênero</LabelInput>
          <Select>
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>Estado civil</LabelInput>
          <Select>
            {maritalStatusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </BasicInfoContainer>
      </FlexContainer>

      <LabelInput>Observações adicionais</LabelInput>
      <TextArea placeholder="Digite" />

      <ButtonContainer>
        <Button padding="10px 40px" marginTop="30px">
          Próximo
        </Button>
      </ButtonContainer>
    </BasicInfoContainer>
  );
};

export default BasicInfoPage;
