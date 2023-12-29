"use client";

import Image from "next/image";

import "./globals.css";
import { Container, TableContainer } from "./home-style";
import logo from "../../public/logo.png";
import SearchBar from "@/components/SearchBar/SearchBar";
import PatientTable from "@/components/PatientTable/PatientTable";
import { Patient } from "@/types/types";
import { useState } from "react";

const Home = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  return (
    <Container>
      <div>
        <Image src={logo} alt="Logo GestãoDS" />
      </div>

      <TableContainer>
        <SearchBar />
        <PatientTable patients={patients} />
      </TableContainer>
    </Container>
  );
};

export default Home;
