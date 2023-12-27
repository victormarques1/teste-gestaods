// components/Common/SearchInput.tsx
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

import theme from "../../styles/theme";

//adptar ícone dentro do input
export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 12px 0px 12px 38px;
  border: 1px solid ${theme.colors.gray};
  border-radius: 5px;
  margin-right: 10px;

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.blue};
  }
`;

export const SearchIcon = styled(IoSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.blue};
`;
