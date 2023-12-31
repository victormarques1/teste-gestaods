"use client";

import Image from "next/image";

import "./globals.css";
import { Container, TableContainer } from "./home-style";
import logo from "../../public/logo.png";
import SearchBar from "@/components/SearchBar/SearchBar";
import PatientTable from "@/components/PatientTable/PatientTable";

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
