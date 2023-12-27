import styled from "styled-components";
import theme from "@/styles/theme";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${theme.colors.white};
  width: 80%;
  max-width: 792px;
  height: auto;
  max-height: 80vh;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 600px) {
    width: 90%;
    max-width: none;
  }
`;

export const Navbar = styled.div`
  padding-top: 10px;
  display: flex;
  padding-bottom: 10px;
  border-bottom: 2px solid ${theme.colors.gray};
`;
