import styled from "styled-components";
import { GoPlus } from "react-icons/go";

import theme from "../../styles/theme";

export const Button = styled.button`
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  padding: 6px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    padding: 8px;
    cursor: pointer;
  }
`;

export const PlusIcon = styled(GoPlus)`
  margin-right: 8px;
`;
