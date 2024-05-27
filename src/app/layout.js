import Header from "./Layout/header";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webel Webs de alto nivel para emprendedores",
  description: "Hecho con amor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />


      </body>
    </html>
  );
}
