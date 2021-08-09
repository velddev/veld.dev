import {
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import BorderStack from "./BorderStack";

type Props = {
  slug: string;
  title: string;
  description: string;
  date: Date;
  readingTime: string;
  tags: string[];
};

const PostCard = ({
  slug,
  title,
  description,
  date,
  readingTime,
  tags,
}: Props) => (
  <LinkBox>
    <BorderStack>
      <HStack spacing="4" align="flex-start" cursor="pointer">
        <VStack spacing="4" align="flex-start">
          <LinkOverlay href={slug}>
            <Heading size="md">{title}</Heading>
          </LinkOverlay>
          <Text noOfLines={2}>{description}</Text>
          <HStack>
            <Text>Posted on {date}</Text>
            <Text>{readingTime}</Text>
            <HStack>
              {tags.map((x) => (
                <Text key={x}>{x}</Text>
              ))}
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </BorderStack>
  </LinkBox>
);

export default PostCard;
