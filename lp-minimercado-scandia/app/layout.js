import StyledComponentsRegistry from "../lib/registry.js";
import { GlobalStyles } from "./globalStyle";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <StyledComponentsRegistry>
        <GlobalStyles />
        {children}
      </StyledComponentsRegistry>
    </html>
  );
}
