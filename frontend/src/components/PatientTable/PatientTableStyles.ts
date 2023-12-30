import styled from "styled-components";
import { color } from "styled-system";
import theme from "@/styles/theme";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTable = styled.table`
  width: 95%;
  border-collapse: collapse;
  border-top: 1px solid ${theme.colors.gray};
  margin-bottom: 10px;

  tr:nth-child(even) {
    background-color: ${theme.colors.white}; // Cor de fundo para linhas pares
  }

  tr:nth-child(odd) {
    background-color: ${theme.colors
      .light_gray}; // Cor de fundo para linhas ímpares
  }
`;

export const TableHeader = styled.th`
  font-size: 14px;
  padding: 12px;
  text-align: left;
  background-color: ${theme.colors.light_gray};
`;

export const TableData = styled.td`
  border-bottom: 1px solid ${theme.colors.gray};
  border-top: 1px solid ${theme.colors.gray};
  padding: 12px;
  font-size: 14px;
  ${color}
`;

export const ActionButton = styled.button`
  background-color: transparent;
  padding: 4px;
  border: none;
  cursor: pointer;
`;
