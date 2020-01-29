import React from "react";
import { ThemeProvider } from "styled-components";
import "typeface-ubuntu";
import "typeface-roboto";
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/projectStyles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <>
          {children}
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
