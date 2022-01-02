import {
  Heading,
  Img,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useBreakpoint,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import BorderStack from "./BorderStack";

type StringWithShortVariant = {
  full: string;
  short: string;
};

type Props = {
  iconSquare?: string;
  title: string;
  role: string | StringWithShortVariant;
  description?: string;
  href: string;
};

const ProjectItem = ({ iconSquare, title, role, description, href }: Props) => {
  const roleObject =
    typeof role === "string" ? { full: role, short: role } : role;
  const roleValue = useBreakpointValue({
    base: roleObject.short,
    lg: roleObject.full,
  });

  return (
    <LinkBox>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Img
            w="full"
            borderRadius="lg"
            src={iconSquare}
            border="1px solid"
            borderColor="whiteAlpha.300"
          />
        </PopoverTrigger>
        <PopoverContent p="4">
          <VStack align="flex-start" spacing="2px">
            <LinkOverlay href={href}>
              <Heading fontSize="xl">{title}</Heading>
            </LinkOverlay>
            <Text noOfLines={1} color="whiteAlpha.600">
              {roleValue}
            </Text>
            <Text noOfLines={2}>{description}</Text>
          </VStack>
        </PopoverContent>
      </Popover>
    </LinkBox>
  );
};

export default ProjectItem;
