import {
  Heading,
  Img,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import BorderStack from "./BorderStack";

type Props = {
  iconSquare?: string;
  title: string;
  role: string;
  description?: string;
  href: string;
};

const ProjectItem = ({ iconSquare, title, role, description, href }: Props) => (
  <LinkBox>
    <BorderStack direction="row" align="flex-start" spacing="6">
      <Img w="64px" borderRadius="lg" src={iconSquare} />
      <VStack align="flex-start" spacing="2px">
        <LinkOverlay href={href}>
          <Heading fontSize="xl">{title}</Heading>
        </LinkOverlay>
        <Text color="whiteAlpha.600">{role}</Text>
        <Text noOfLines={2}>{description}</Text>
      </VStack>
    </BorderStack>
  </LinkBox>
);

export default ProjectItem;
