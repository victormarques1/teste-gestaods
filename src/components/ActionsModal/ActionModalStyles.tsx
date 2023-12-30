import styled from "styled-components";
import theme from "@/styles/theme";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 75%;
`;

export const ActionButton = styled.button`
  text-align: left;
  width: 155px;
  background-color: ${theme.colors.white};
  padding: 10px 16px;
  border: 1px solid ${theme.colors.gray};
  box-shadow: 0px 1px 15px 0px rgba(14, 30, 47, 0.03);

  &:hover {
    background-color: ${theme.colors.light_blue};
    color: ${theme.colors.blue};
    cursor: pointer;
  }
`;
