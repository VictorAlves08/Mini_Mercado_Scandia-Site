import Head from "next/head.js";
import { Montserrat } from 'next/font/google'

import StyledComponentsRegistry from "../lib/registry.js";
import { GlobalStyles } from "./globalStyle";
 
const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <Head>
        <title>Minimercado Scandia</title>
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
