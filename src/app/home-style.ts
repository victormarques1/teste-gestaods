import styled from "styled-components";
import { space, layout } from "styled-system";
import theme from "../styles/theme";

//centralizar conteúdo da página principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  background-color: ${theme.colors.background};
`;

export const TableContainer = styled.div`
  background-color: ${theme.colors.white};
  width: 100%;
  max-width: 1032px;
  margin: 0 auto;
  overflow-x: auto;
  border-radius: 8px;
`;
