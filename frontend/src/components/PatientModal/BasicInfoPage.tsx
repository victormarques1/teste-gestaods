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
import Swal from "sweetalert2";

interface BasicInfoPageProps {
  onSave: (basicInfo: BasicInfo) => void;
  onNext: () => void;
  isEditMode: boolean;
  initialValues?: BasicInfo;
}

const BasicInfoPage = ({
  onSave,
  onNext,
  isEditMode,
  initialValues,
}: BasicInfoPageProps) => {
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
    rg: Number(""),
    gender: "",
    maritalStatus: "",
    addObservations: "",
  });

  useEffect(() => {
    // Preencher os campos com os valores do paciente selecionado em caso de edição
    if (isEditMode && initialValues) {
      setBasicInfo({
        ...initialValues,
        birthDate: new Date(initialValues.birthDate)
          .toISOString()
          .split("T")[0],
      });
    }
  }, [isEditMode, initialValues]);

  //Salvar os dados básicos e avançar para próxima página
  const handleNext = () => {
    if (!basicInfo.name || !basicInfo.birthDate || !basicInfo.cpf) {
      Swal.fire({
        title: "Error ao salvar paciente!",
        text: "Campos obrigatórios não preenchidos.",
        icon: "warning",
      });
      return;
    }

    if (basicInfo.cpf.length !== 11) {
      Swal.fire({
        title: "Error ao salvar paciente!",
        text: "O campo CPF deve ter 11 dígitos.",
        icon: "warning",
      });
      return;
    }
    onSave({
      ...basicInfo,
      birthDate: new Date(basicInfo.birthDate), //Convertendo para o tipo Date
      rg: Number(basicInfo.rg), // Convertendo para o tipo number
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
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, rg: Number(e.target.value) })
            }
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
