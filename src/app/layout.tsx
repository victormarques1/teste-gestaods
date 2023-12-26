import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

const inter = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste - Victor Marques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
