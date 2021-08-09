import * as React from "react";
import {
  Box,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { graphql } from "gatsby";
import PostCard from "../components/PostCard";
import ProjectItem from "../components/ProjectItem";
import CollapsibleStack from "../components/CollapsibleStack";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Stack direction={["column", null, "row"]} spacing="24">
        <VStack minW="33%" align="flex-start" spacing="8">
          <Heading>Veld</Heading>
          <Text size="md">
            I love building stuff that is super scalable. Engineering has been a
            large aspect of my life.
          </Text>
          <Heading fontSize="2xl">I've been a part of</Heading>
          <CollapsibleStack
            startingHeight="136px"
            direction="column"
            spacing="4"
          >
            <ProjectItem
              title="Top.gg"
              role="Chief Technical Officer"
              iconSquare="/images/topgg.png"
              href="https://top.gg"
              description="Together with a team, we redefined what Top.gg was in a year."
            />
            <ProjectItem
              title="Veld Chat"
              role="Solo project"
              iconSquare="/images/veld-chat.png"
              href="https://veld.chat"
              description="I love cloning apps, and with that I built a chat app that feels like Discord."
            />
            <ProjectItem
              title="Uber"
              role="Fullstack Engineer"
              iconSquare="/images/uber.png"
              href="https://uber.com"
              description="on the Uber Pay team, we onboarded 12 new ways to pay in LATAM, US, and EU."
            />
            <ProjectItem
              title="Miki"
              role="Solo Project"
              iconSquare="/images/miki.png"
              href="https://miki.bot"
              description="One of the largest Discord bots in 2016. Over 250.000 servers use it."
            />
          </CollapsibleStack>
          <Heading fontSize="2xl">Things I love</Heading>
          <Wrap w="full" spacing="4">
            <option value="ts">TypeScript</option>
            <option value="dotnet">Dotnet</option>
            <option value="figma">Figma</option>
            <option value="vscode">Visual Studio Code</option>
            <option value="kube">Kubernetes</option>
          </Wrap>

          <Heading fontSize="2xl">Where to find me</Heading>
          <Wrap w="full" spacing="4">
            <Link href="https://top.gg/user/3311793707316609024">Top.gg</Link>
            <Link href="https://twitter.com/velddev">Twitter</Link>
            <Link href="https://www.twitch.tv/velddev">Twitch</Link>
          </Wrap>
        </VStack>
        <Box>
          {data.allMarkdownRemark.nodes.map((node) => (
            <PostCard
              slug={node.fields.slug}
              title={node.frontmatter.title}
              description={node.excerpt}
              date={node.frontmatter.date}
              key={node.fields.slug}
              readingTime={node.fields.readingTime.text}
              tags={node.frontmatter.tags}
            />
          ))}
        </Box>
      </Stack>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 400)
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`;
