import styled from "styled-components";

import theme from "@/styles/theme";

export const Input = styled.input`
  border: 1px solid ${theme.colors.gray};
  border-radius: 5px;
  padding: 10px 15px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }

  &:focus {
    outline: none;
  }
`;
