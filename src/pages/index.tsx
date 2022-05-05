import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import Layout from '../components/layout';
import Technologies from '../components/TechnologiesSection';

export default function Home() {
  return (
    <>
      <Layout>
        <Trans>about.description</Trans>

        <Technologies />
      </Layout>
    </>
  );
}

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
