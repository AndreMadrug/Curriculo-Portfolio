import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { perfil } from "@/data/curriculo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${perfil.nome} | Portfólio`,
  description: "Currículo e portfólio desenvolvido com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="container">{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()} {perfil.nome}
        </footer>
      </body>
    </html>
  );
}
