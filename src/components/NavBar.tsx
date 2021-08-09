import { Box, Flex, Heading, HStack, Link } from "@chakra-ui/react";
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
    <Container>
      <Flex justify="space-between">
        <Link href="/">
          <Heading fontSize="2xl">{location ? "Veld" : "Portfolio"}</Heading>
        </Link>
        <HStack spacing="8">
          <Link href="/">Home</Link>
          <Link href="https://discord.gg/wbn7WxWeb2">Discord</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

export default NavBar;
