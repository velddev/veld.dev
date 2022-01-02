import { StackProps, Stack } from "@chakra-ui/react";
import React from "react";
type Props = StackProps & {};

const BorderStack = ({ children, ...rest }: Props) => (
  <Stack
    {...rest}
    align="flex-start"
    border="1px solid"
    p="4"
    borderRadius="lg"
    borderColor="whiteAlpha.400"
    transition="all 0.2s"
    _hover={{
      borderColor: "whiteAlpha.600",
      bg: "whiteAlpha.100",
    }}
  >
    {children}
  </Stack>
);

export default BorderStack;
