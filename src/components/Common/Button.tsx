import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { GoPlus } from "react-icons/go";

import theme from "../../styles/theme";

interface ButtonProps extends SpaceProps {}

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  padding: 6px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;

  ${space}

  &:hover {
    cursor: pointer;
    color: ${theme.colors.light_blue};
  }
`;

export const PlusIcon = styled(GoPlus)`
  margin-right: 8px;
`;
