import React, { PropsWithChildren } from "react";
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import theme from "../theme";
import Container from "./Container";
import "../style/defaults.css";

type Props = {
  location?: string;
};

const Layout = ({ children, location }: PropsWithChildren<Props>) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Helmet>
      <title>veld.dev</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Prompt&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <NavBar location={location} />
    <Container>{children}</Container>
  </ChakraProvider>
);

export default Layout;
