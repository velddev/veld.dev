import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Interweave from "interweave";
import Content from "../components/Content";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout>
      <VStack
        as="article"
        itemScope
        itemType="http://schema.org/Article"
        spacing="4"
        align="flex-start"
      >
        <Box as="header">
          <Heading itemProp="headline">{post.frontmatter.title}</Heading>
          <Text>Written on {post.frontmatter.date}</Text>
        </Box>

        <section itemProp="articleBody">
          <Content>
            <Interweave content={post.html} />
          </Content>
        </section>
      </VStack>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
