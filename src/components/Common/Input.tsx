import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface InputProps extends SpaceProps {}

import theme from "@/styles/theme";

export const Input = styled.input<InputProps>`
  border: 1px solid ${theme.colors.gray};
  border-radius: 5px;
  padding: 10px 15px;
  ${space}

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }

  &:focus {
    outline: none;
  }
`;
