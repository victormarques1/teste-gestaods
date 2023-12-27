import { useState } from "react";

import { ModalWrapper, Navbar } from "./ModalStyles";
import { MenuButton } from "./MenuButton";
import BasicInfoPage from "./BasicInfoPage";
import ContactPage from "./ContactPage";

type Page = "basicInfo" | "contact";

const Modal = () => {
  const [currentPage, setCurrentPage] = useState<"basicInfo" | "contact">(
    "basicInfo"
  );

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
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
      {currentPage === "basicInfo" && <BasicInfoPage />}
      {currentPage === "contact" && <ContactPage />}
    </ModalWrapper>
  );
};
export default Modal;
