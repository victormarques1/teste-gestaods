"use client";

import Image from "next/image";

import "./globals.css";
import { Container, TableContainer } from "./home-style";
import logo from "../../public/logo.png";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <Container>
      <div>
        <Image src={logo} alt="Logo GestãoDS" />
      </div>

      <TableContainer>
        <SearchBar />
      </TableContainer>
    </Container>
  );
};

export default Home;
