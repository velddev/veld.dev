import * as React from "react";
import {
  Box,
  GridItem,
  Heading,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { graphql } from "gatsby";
import PostCard from "../components/PostCard";
import ProjectItem from "../components/ProjectItem";
import Layout from "../components/Layout";
import { WorkItem } from "../components/WorkItem";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SimpleGrid templateColumns={["1fr", null, null, "1fr 2fr"]} spacing="24">
        <VStack minW="33%" align="flex-start" spacing="8">
          <Text size="md">
            I love building stuff that is super scalable. Engineering has been a
            large aspect of my life.
          </Text>
          <Heading fontSize="2xl">I've been a part of</Heading>
          <SimpleGrid columns={[1, null, null, 5]} spacing="4">
            <ProjectItem
              title="Top.gg"
              role={{
                full: "VP of Engineering",
                short: "VP Eng",
              }}
              iconSquare="/images/topgg.png"
              href="https://top.gg"
              description="Together with a team, we redefined what Top.gg was in a year."
            />
            <ProjectItem
              title="Uber"
              role={{
                full: "Fullstack Engineer",
                short: "Fullstack Eng",
              }}
              iconSquare="/images/uber.png"
              href="https://uber.com"
              description="on the Uber Pay team, we onboarded 12 new ways to pay in LATAM, US, and EU."
            />
            <ProjectItem
              title="Miki"
              role={{
                full: "Solo project",
                short: "Solo",
              }}
              iconSquare="/images/miki.png"
              href="https://miki.bot"
              description="One of the largest Discord bots in 2016. Over 250.000 servers use it."
            />
          </SimpleGrid>
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
          <Tabs>
            <TabList>
              <Tab>Blog ({data.allMarkdownRemark.nodes.length})</Tab>
              <Tab>My Work</Tab>
            </TabList>
            <TabPanels>
              <TabPanel px="0">
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
              </TabPanel>
              <TabPanel px="0">
                <SimpleGrid columns={[1, null, null, 2]} spacing="8">
                  <WorkItem
                    link="https://partyverse.app/"
                    src="/images/partyverse.png"
                    title="Partyverse"
                    subtitle="An online event website specifically for online games, designed and implemented by me."
                    gridColumn="span 2"
                  />
                  <WorkItem
                    link="https://stormbeatz.org/"
                    src="/images/stormbeatz.png"
                    title="StormBeatz"
                    subtitle="I worked on the redesign of the website. Both the design and implementation were done by me."
                  />
                  <WorkItem
                    link="https://miki.bot/"
                    src="/images/miki-site.png"
                    title="Miki"
                    subtitle="A website I built for my Discord Bot - Miki."
                  />
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </SimpleGrid>
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
