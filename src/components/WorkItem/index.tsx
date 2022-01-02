import React from "react";
import { Box, BoxProps, Img, Text, VStack } from "@chakra-ui/react";

type Props = BoxProps & {
  src: string;
  title: string;
  subtitle: string;
  link: string;
};

export const WorkItem = ({ src, title, subtitle, link, ...props }: Props) => {
  return (
    <Box
      as="a"
      href={link}
      position="relative"
      w="full"
      className="group"
      overflow="hidden"
      borderRadius="lg"
      border="1px solid"
      borderColor="whiteAlpha.400"
      {...props}
    >
      <Img w="full" src={src} />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="black"
        opacity="0"
        transition="all 0.2s"
        _groupHover={{
          opacity: "0.4",
        }}
      />
      <VStack
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        align="start"
        p="4"
        opacity="0"
        transition="all 0.2s"
        _groupHover={{
          opacity: "1",
        }}
      >
        <Text fontWeight="medium">{title}</Text>
        <Text>{subtitle}</Text>
      </VStack>
    </Box>
  );
};
