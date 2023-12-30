import { useState } from "react";
import BasicInfoPage from "./BasicInfoPage";
import ContactPage from "./ContactPage";
import { ModalWrapper, Navbar } from "./ModalStyles";
import { MenuButton } from "./MenuButton";
import { BasicInfo, Contact, Patient } from "@/types/types";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
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

  const goToContactPage = () => {
    setCurrentPage("contact");
  };

  //Salvar informações básicas e ir para a página de contato
  const handleSaveBasicInfo = (basicInfo: BasicInfo) => {
    setBasicInfo(basicInfo);
    goToContactPage();
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
          onSave={() => onClose()}
          basicInfo={basicInfo}
          onClose={onClose}
        />
      )}
    </ModalWrapper>
  );
};

export default Modal;
