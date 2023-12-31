import styled from "styled-components";

import theme from "@/styles/theme";

export const MenuButton = styled.button<{ isActive: boolean }>`
  border: none;
  background-color: ${theme.colors.white};
  color: ${({ isActive }) =>
    isActive ? `${theme.colors.purple}` : `${theme.colors.dark_gray}`};
  font-size: 16px;
  margin-right: 24px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};

  &:hover {
    cursor: pointer;
  }
`;
