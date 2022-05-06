import { graphql } from 'gatsby';
import React from 'react';
import AboutSections from '../../components/AboutSection';
import Layout from '../../components/layout';

const about = () => {
  return (
    <>
      <Layout>
        <AboutSections />
      </Layout>
    </>
  );
};
export default about;
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
