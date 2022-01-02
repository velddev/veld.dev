import React, { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
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
      <title>Veld</title>
      <meta name="title" content="Veld" />
      <meta
        name="description"
        content="Veld is a web developer and designer based in Amsterdam. On this website, you will be able to find anything related to his work."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://veld.dev/" />
      <meta property="og:title" content="Veld" />
      <meta
        property="og:description"
        content="Veld is a web developer and designer based in Amsterdam. On this website, you will be able to find anything related to his work."
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Veld" />
      <meta
        property="twitter:description"
        content="Veld is a web developer and designer based in Amsterdam. On this website, you will be able to find anything related to his work."
      />
      <meta property="twitter:image" content="/logo.png" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Mike Veldsink" />
    </Helmet>
    <Container>
      <NavBar location={location} />
      {children}
    </Container>
  </ChakraProvider>
);

export default Layout;
