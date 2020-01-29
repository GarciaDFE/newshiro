import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/projectStyles";
import "typeface-ubuntu";
import "typeface-roboto";

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
