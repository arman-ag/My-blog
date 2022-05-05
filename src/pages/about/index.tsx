import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import AboutSections from '../../components/AboutSection';
import Layout from '../../components/layout';

const about = () => {
  return (
    <>
      <Layout>
        <Trans>about.description</Trans>
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