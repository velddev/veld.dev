import React, { PropsWithChildren } from "react";

import { Container as ChakraContainer } from "@chakra-ui/react";

const Container = ({ children }: PropsWithChildren<unknown>) => (
  <ChakraContainer maxW="1200px">{children}</ChakraContainer>
);

export default Container;
