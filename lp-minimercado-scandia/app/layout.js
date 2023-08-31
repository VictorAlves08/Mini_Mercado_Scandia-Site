import { Montserrat } from "next/font/google";
import Logo_ico from "@/public/logo/ico_bg_blue.ico";
import Logo_bg_blue from "@/public/logo/logo_bg_blue.webp";

import StyledComponentsRegistry from "../lib/registry.js";
import { GlobalStyles } from "./globalStyle";

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Minimercado Scandia",
  description:
    "O melhor de Taboão da Serra na região Jd.Scandia! Aqui você encontra os melhores produtos da região!",
  keywords: [
    "minimercado",
    "mini Mercado",
    "scandia",
    "padaria",
    "taboão da serra",
    "mercadinho",
  ],
  icons: [{ rel: "icon", url: Logo_ico.src }],
  author: "Victor Alves de Oliveira",
  authorUrl: "https://www.linkedin.com/in/victor-alves-de-oliveira/",
  images: [
    {
      url: Logo_bg_blue.src,
      alt: "Logo Minimercado Scandia",
      type: "image/webp",
    },
  ],
  openGraph: {
    images: [
      {
        url: Logo_bg_blue.src,
        alt: "Logo Minimercado Scandia",
        type: "image/webp",
      },
    ],
    icons: [{ rel: "icon", url: Logo_ico.src }],
    type: "website",
    title:
      "Mini Mercado Scandia | O melhor de Taboão da Serra na região Jd.Scandia!",
    description:
      "O melhor de Taboão da Serra na região Jd.Scandia! Aqui você encontra os melhores produtos da região!",
    url: "https://minimercado-scandia.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <StyledComponentsRegistry>
        <GlobalStyles />
        {children}
      </StyledComponentsRegistry>
    </html>
  );
}
