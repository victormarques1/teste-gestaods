import { useEffect, useState } from "react";
import Image from "next/image";

import photo from "../../../public/photo.png";
import { Input } from "../Common/Input";
import {
  BasicInfoContainer,
  FlexContainer,
  ImageContainer,
  TextArea,
} from "./BasicInfoPageStyles";
import { ButtonContainer } from "../Common/Button";
import { LabelInput } from "../Common/Label";
import { Select } from "../Common/Select";
import { Button } from "../Common/Button";
import { BasicInfo } from "@/types/types";

interface BasicInfoPageProps {
  onSave: (basicInfo: BasicInfo) => void;
  onNext: () => void;
}

const BasicInfoPage = ({ onSave, onNext }: BasicInfoPageProps) => {
  const genderOptions = ["Sem Filtro", "Masculino", "Feminino", "Outro"];
  const maritalStatusOptions = [
    "Sem Filtro",
    "Solteiro(a)",
    "Casado(a)",
    "Divorciado(a)",
    "Viúvo(a)",
  ];

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    nickname: "",
    nationality: "",
    birthDate: "",
    cpf: "",
    rg: "",
    gender: "",
    maritalStatus: "",
    addObservations: "",
  });

  //Salvar os dados básicos e avançar para próxima página
  const handleNext = () => {
    onSave({
      ...basicInfo,
      birthDate: new Date(basicInfo.birthDate), //Convertendo para o tipo Date
      rg: parseInt(basicInfo.rg), // Convertendo para o tipo number
    });

    onNext();
  };

  return (
    <BasicInfoContainer>
      <ImageContainer>
        <Image src={photo} alt="Foto" />
      </ImageContainer>

      <FlexContainer>
        <BasicInfoContainer>
          <LabelInput>Paciente</LabelInput>
          <Input
            placeholder="Digite"
            value={basicInfo.name}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, name: e.target.value })
            }
          />
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>Apelido</LabelInput>
          <Input
            placeholder="Digite"
            value={basicInfo.nickname}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, nickname: e.target.value })
            }
          />
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>Nacionalidade</LabelInput>
          <Input
            placeholder="Digite"
            value={basicInfo.nationality}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, nationality: e.target.value })
            }
          />
        </BasicInfoContainer>
      </FlexContainer>

      <FlexContainer>
        <BasicInfoContainer>
          <LabelInput>Nascimento</LabelInput>
          <Input
            type="date"
            value={basicInfo.birthDate}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, birthDate: e.target.value })
            }
          />
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>CPF</LabelInput>
          <Input
            placeholder="Digite"
            value={basicInfo.cpf}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, cpf: e.target.value })
            }
          />
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>RG</LabelInput>
          <Input
            placeholder="Digite"
            value={basicInfo.rg}
            onChange={(e) => setBasicInfo({ ...basicInfo, rg: e.target.value })}
          />
        </BasicInfoContainer>
      </FlexContainer>

      <FlexContainer>
        <BasicInfoContainer>
          <LabelInput>Gênero</LabelInput>
          <Select
            value={basicInfo.gender}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, gender: e.target.value })
            }
          >
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </BasicInfoContainer>

        <BasicInfoContainer>
          <LabelInput>Estado civil</LabelInput>
          <Select
            value={basicInfo.maritalStatus}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, maritalStatus: e.target.value })
            }
          >
            {maritalStatusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </BasicInfoContainer>
      </FlexContainer>

      <LabelInput>Observações adicionais</LabelInput>
      <TextArea
        placeholder="Digite"
        value={basicInfo.addObservations}
        onChange={(e) =>
          setBasicInfo({ ...basicInfo, addObservations: e.target.value })
        }
      />

      <ButtonContainer>
        <Button padding="10px 40px" marginTop="30px" onClick={handleNext}>
          Próximo
        </Button>
      </ButtonContainer>
    </BasicInfoContainer>
  );
};

export default BasicInfoPage;
