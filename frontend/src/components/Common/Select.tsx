import styled from "styled-components";

import theme from "../../styles/theme";

export const Select = styled.select`
  border: 1px solid ${theme.colors.gray};
  border-radius: 5px;
  padding: 10px 15px;
  color: ${theme.colors.dark_gray};

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }

  &:focus {
    outline: none;
  }
`;
