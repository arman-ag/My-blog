import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const blogPosts = ({ data }: any) => {
  console.log(data)
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default blogPosts;

export const query = graphql`
  query BlogQuery($slug: String!,$language: String!) {
      locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }}
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

