import * as React from "react";
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";

import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

const NotFoundPage = ({ data }) => {
  return (
    <Layout>
      <Stack direction={["column", null, "row"]} spacing="16">
        <VStack minW="33%" align="flex-start" spacing="8">
          <Heading>Not found</Heading>
          <Text>
            Whatever you're looking for was not found. Sorry to be the bearer of
            bad news.
          </Text>
          <Text>Instead, maybe consider reading the latest post :)</Text>
        </VStack>
        <VStack w="full" align="flex-start" spacing="8">
          <Heading fontSize="2xl">Latest Post</Heading>
          {data.allMarkdownRemark.nodes[0] && (
            <PostCard
              slug={data.allMarkdownRemark.nodes[0].fields.slug}
              title={data.allMarkdownRemark.nodes[0].frontmatter.title}
              description={data.allMarkdownRemark.nodes[0].excerpt}
              date={data.allMarkdownRemark.nodes[0].frontmatter.date}
              key={data.allMarkdownRemark.nodes[0].fields.slug}
              readingTime={
                data.allMarkdownRemark.nodes[0].fields.readingTime.text
              }
              tags={data.allMarkdownRemark.nodes[0].frontmatter.tags}
            />
          )}
        </VStack>
      </Stack>
    </Layout>
  );
};

export default NotFoundPage;

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
