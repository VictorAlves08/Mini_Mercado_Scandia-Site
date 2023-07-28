import Head from "next/head.js";
import StyledComponentsRegistry from "../lib/registry.js";
import { GlobalStyles } from "./globalStyle";
import logo_ico from "@/public/logo/ico_bg_blue.ico";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>Mini Mercado Scandia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href='./logo/ico_bg_blue.ico' />
      </Head>

      <StyledComponentsRegistry>
        <GlobalStyles />
        {children}
      </StyledComponentsRegistry>
    </html>
  );
}
