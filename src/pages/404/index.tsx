import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';

const NotFound = () => {
  return (
    <Layout>
      <h1>404</h1>
    </Layout>
  );
};
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
export default NotFound;
