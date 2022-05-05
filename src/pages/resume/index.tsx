import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';

const resume = () => {
  return (
    <div>
      <Layout>resume</Layout>
    </div>
  );
};

export default resume;
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
