import { useEffect, useState } from "react";

import { Button, ButtonContainer } from "../Common/Button";
import { Input } from "../Common/Input";
import { LabelInput } from "../Common/Label";
import { ContactContainer, ContactFlexContainer } from "./ContactPageStyles";
import axios from "axios";
import { BasicInfo, Contact, Patient } from "@/types/types";
import Swal from "sweetalert2";

interface ContactPageProps {
  onSave: () => void;
  onClose: () => void;
  basicInfo: BasicInfo;
  isEditMode: boolean;
  initialValues?: Patient;
}

const ContactPage = ({
  onSave,
  basicInfo,
  onClose,
  initialValues,
  isEditMode,
}: ContactPageProps) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [contact, setContact] = useState<Contact>({
    cep: "",
    city: "",
    uf: "",
    address: "",
    number: Number(""),
    neighborhood: "",
    complement: "",
  });
  const [patientToEdit, setPatientToEdit] = useState<Patient | null>(null);

  // Lidar com a busca de CEP pela API ViaCEP
  const handleCepChange = async (newCep: string) => {
    try {
      // Validar o formato do CEP antes de fazer a chamada à API
      const cepRegex = /^\d{5}-\d{3}$/;
      if (!cepRegex.test(newCep)) {
        Swal.fire({
          title: "Erro ao buscar CEP!",
          text: "Formato de CEP inválido. O CEP deve ter o formato 00000-000.",
          icon: "warning",
        });
        return;
      }

      const response = await axios.get(
        `https://viacep.com.br/ws/${newCep}/json/`
      );

      const {
        localidade: city,
        uf,
        logradouro: address,
        bairro: neighborhood,
      } = response.data;

      setContact((prevContact) => ({
        ...prevContact,
        city,
        uf,
        address,
        neighborhood,
      }));
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      Swal.fire({
        title: "Erro ao buscar CEP!",
        text: "Por favor, tente novamente.",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    // Preencher os campos com os valores do paciente selecionado em caso de edição
    if (isEditMode && initialValues) {
      setContact(initialValues.contact);
      setPatientToEdit(initialValues);
    }
  }, [isEditMode, initialValues]);

  //Salvar paciente na tabela após adicionar ou editar
  const handleSave = async () => {
    if (!contact.cep) {
      Swal.fire({
        title: "Erro ao salvar paciente!",
        text: "O campo CEP deve ser preenchido.",
        icon: "warning",
      });
      return;
    }

    const newPatient = {
      basicInfo,
      contact,
    };

    try {
      // Modo editar: Editar paciente selecionado
      if (isEditMode && patientToEdit) {
        const updatedPatient = await axios.put(
          `http://localhost:3333/patients/${patientToEdit._id}`,
          newPatient
        );

        setPatients((prevPatients) =>
          prevPatients.map((p) =>
            p._id === updatedPatient.data._id ? updatedPatient.data : p
          )
        );
        window.location.reload();

        setPatientToEdit(updatedPatient.data);
      } else {
        // Modo de criação: Criar um novo paciente
        const response = await axios.post(
          "http://localhost:3333/patients",
          newPatient
        );

        setPatients((prevPatients) =>
          prevPatients.map((p) =>
            p._id === response.data._id ? response.data : p
          )
        );
        window.location.reload();
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Erro ao salvar paciente:", error);
      Swal.fire(
        "Erro ao salvar paciente!",
        "Por favor, tente novamente.",
        "error"
      );
    }
  };

  return (
    <ContactContainer>
      <ContactFlexContainer>
        <ContactContainer>
          <LabelInput>CEP</LabelInput>
          <Input
            placeholder="Digite"
            value={contact.cep}
            onChange={(e) => setContact({ ...contact, cep: e.target.value })}
            onBlur={() => handleCepChange(contact.cep)}
            marginRight="20px"
          />
        </ContactContainer>
        <ContactContainer>
          <LabelInput>Cidade</LabelInput>
          <Input
            placeholder="Digite"
            value={contact.city}
            onChange={(e) => setContact({ ...contact, city: e.target.value })}
            marginRight="20px"
          />
        </ContactContainer>
        <ContactContainer>
          <LabelInput>UF</LabelInput>
          <Input
            placeholder="Digite"
            value={contact.uf}
            onChange={(e) => setContact({ ...contact, uf: e.target.value })}
          />
        </ContactContainer>
      </ContactFlexContainer>

      <ContactFlexContainer>
        <ContactContainer>
          <LabelInput>Endereço</LabelInput>
          <Input
            placeholder="Digite"
            value={contact.address}
            onChange={(e) =>
              setContact({ ...contact, address: e.target.value })
            }
            marginRight="20px"
          />
        </ContactContainer>
        <ContactContainer>
          <LabelInput>Número</LabelInput>
          <Input
            placeholder="Digite"
            value={Number(contact.number)}
            onChange={(e) =>
              setContact({ ...contact, number: Number(e.target.value) })
            }
            marginRight="20px"
          />
        </ContactContainer>
        <ContactContainer>
          <LabelInput>Bairro</LabelInput>
          <Input
            placeholder="Digite"
            value={contact.neighborhood}
            onChange={(e) =>
              setContact({ ...contact, neighborhood: e.target.value })
            }
          />
        </ContactContainer>
      </ContactFlexContainer>

      <ContactContainer>
        <LabelInput>Complemento</LabelInput>
        <Input
          placeholder="Digite"
          value={contact.complement}
          onChange={(e) =>
            setContact({ ...contact, complement: e.target.value })
          }
        />
      </ContactContainer>

      <ButtonContainer>
        <Button padding="10px 40px" marginTop="30px" onClick={handleSave}>
          Salvar
        </Button>
      </ButtonContainer>
    </ContactContainer>
  );
};

export default ContactPage;
