import { Box, Flex, Heading, HStack, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import Container from "./Container";

type Props = {
  location: string;
};

const NavBar = ({ location }: Props) => (
  <Box
    w="full"
    borderBottom="1px solid"
    borderColor="whiteAlpha.300"
    py="4"
    mb="40px"
  >
    <Flex justify="space-between">
      <Link href="/">
        <HStack align="center" spacing="4">
          <Img src="/logo.svg" w="10" />
          <Heading size="lg">Veld</Heading>
        </HStack>
      </Link>
      <HStack spacing="8">
        <Link href="/">Home</Link>
        <Link href="https://discord.gg/wbn7WxWeb2">Discord</Link>
      </HStack>
    </Flex>
  </Box>
);

export default NavBar;
