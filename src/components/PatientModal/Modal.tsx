import { useState } from "react";

import BasicInfoPage from "./BasicInfoPage";
import ContactPage from "./ContactPage";
import { ModalWrapper, Navbar } from "./ModalStyles";
import { MenuButton } from "./MenuButton";

import { BasicInfo, Contact, Patient } from "@/types/types";

type Page = "basicInfo" | "contact";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [currentPage, setCurrentPage] = useState<"basicInfo" | "contact">(
    "basicInfo"
  );
  const [currentStep, setCurrentStep] = useState(1);
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    name: "",
    nickname: "",
    nationality: "",
    birthDate: new Date(""),
    cpf: "",
    rg: Number(""),
    gender: "",
    maritalStatus: "",
    addObservations: "",
  });
  const [contact, setContact] = useState<Contact>({
    cep: "",
    city: "",
    uf: "",
    address: "",
    number: Number(""),
    neighborhood: "",
    complement: "",
  });

  //Lidar com a mudança de página no modal
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  //Salvar as informações básicas e avançar para os dados de contato
  const handleSaveBasicInfo = (basicInfo: BasicInfo) => {
    setBasicInfo(basicInfo);
    handleNext();
  };

  //Mudar para página "Contato" após salvar dados básicos
  const goToContactPage = () => {
    setCurrentPage("contact");
  };

  //Salvar informações de contato e limpar tela
  const handleSaveContact = (contact: Contact) => {
    const newPatient: Patient = {
      id: new Date().toISOString(),
      basicInfo,
      contact,
    };

    console.log(newPatient);

    setCurrentStep(1);
    setBasicInfo({
      name: "",
      nickname: "",
      nationality: "",
      birthDate: new Date(""),
      cpf: "",
      rg: Number(""),
      gender: "",
      maritalStatus: "",
      addObservations: "",
    });
    setContact({
      cep: "",
      city: "",
      uf: "",
      address: "",
      number: Number(""),
      neighborhood: "",
      complement: "",
    });
  };

  return (
    <ModalWrapper>
      <Navbar>
        <MenuButton
          isActive={currentPage === "basicInfo"}
          onClick={() => setCurrentPage("basicInfo")}
        >
          Informações Básicas
        </MenuButton>

        <MenuButton
          isActive={currentPage === "contact"}
          onClick={() => setCurrentPage("contact")}
        >
          Contato
        </MenuButton>
      </Navbar>
      {currentPage === "basicInfo" && (
        <BasicInfoPage onSave={handleSaveBasicInfo} onNext={goToContactPage} />
      )}
      {currentPage === "contact" && (
        <ContactPage
          onSave={(data) => {
            handleSaveContact(data.contact);
          }}
          basicInfo={basicInfo}
          onClose={onClose}
        />
      )}
    </ModalWrapper>
  );
};
export default Modal;
