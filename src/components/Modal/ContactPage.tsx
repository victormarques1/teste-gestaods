import { useState, useEffect } from "react";

import { Button, ButtonContainer } from "../Common/Button";
import { Input } from "../Common/Input";
import { LabelInput } from "../Common/Label";
import { ContactContainer, ContactFlexContainer } from "./ContactPageStyles";
import axios from "axios";
import { BasicInfo, Contact, Patient } from "@/types/types";

interface ContactPageProps {
  onSave: (data: { basicInfo: BasicInfo; contact: Contact }) => void;
  onClose: () => void;
  basicInfo: BasicInfo;
}

const ContactPage = ({ onSave, basicInfo, onClose }: ContactPageProps) => {
  const [contact, setContact] = useState<Contact>({
    cep: "",
    city: "",
    uf: "",
    address: "",
    number: Number(""),
    neighborhood: "",
    complement: "",
  });

  //Lidar com a busca de CEP pela API ViaCEP
  const handleCepChange = async (newCep: string) => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${newCep}/json/`
      );

      const { localidade, uf, logradouro, bairro } = response.data;

      setContact((prevContact) => ({
        ...prevContact,
        city: localidade,
        uf,
        address: logradouro,
        neighborhood: bairro,
      }));
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  //Salvar dados de Contato e fechar o Modal
  const handleSave = () => {
    const newPatient: Patient = {
      id: new Date().toISOString(),
      basicInfo: {
        ...basicInfo,
      },
      contact: {
        ...contact,
        number: Number(contact.number),
      },
    };

    onSave({ basicInfo, contact: newPatient.contact });
    onClose();
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
