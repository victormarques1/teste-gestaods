import { useState } from "react";
import BasicInfoPage from "./BasicInfoPage";
import ContactPage from "./ContactPage";
import { ModalWrapper, Navbar } from "./ModalStyles";
import { MenuButton } from "./MenuButton";
import { BasicInfo, Patient } from "@/types/types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEditMode: boolean;
  patient?: Patient;
}

const Modal = ({ onClose, isEditMode, patient, isOpen }: ModalProps) => {
  const [currentPage, setCurrentPage] = useState<"basicInfo" | "contact">(
    "basicInfo"
  );
  const [editMode, setEditMode] = useState(isEditMode);
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
    setEditMode(isEditMode);
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
        <BasicInfoPage
          onSave={handleSaveBasicInfo}
          onNext={goToContactPage}
          isEditMode={editMode}
          initialValues={editMode ? patient?.basicInfo : undefined}
        />
      )}
      {currentPage === "contact" && (
        <ContactPage
          onSave={() => onClose}
          basicInfo={basicInfo}
          onClose={onClose}
          isEditMode={editMode}
          initialValues={editMode ? patient : undefined}
        />
      )}
    </ModalWrapper>
  );
};

export default Modal;
