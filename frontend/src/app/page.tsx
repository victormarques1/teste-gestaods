"use client";

import { styled } from "styled-components";

import Image from "next/image";
import logo from "../../public/logo.png";

import SearchBar from "@/components/SearchBar/SearchBar";
import PatientTable from "@/components/PatientTable/PatientTable";
import theme from "@/styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  background-color: ${theme.colors.background};
`;

const TableContainer = styled.div`
  background-color: ${theme.colors.white};
  width: 100%;
  max-width: 1032px;
  margin: 0 auto;
  overflow-x: auto;
  border-radius: 8px;
`;

const Home = () => {
  return (
    <Container>
      <div>
        <Image src={logo} alt="Logo GestãoDS" />
      </div>

      <TableContainer>
        <SearchBar />
        <PatientTable />
      </TableContainer>
    </Container>
  );
};

export default Home;
