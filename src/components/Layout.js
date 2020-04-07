import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/projectStyles";
import "typeface-ubuntu";
import "typeface-roboto";
import ButtonToTop from "../objects/ButtonToTop"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <>
          {children}
          <ButtonToTop />
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
