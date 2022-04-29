import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import AboutSections from '../../components/AboutSection';
import Layout from '../../components/layout';
import Technologies from '../../components/TechnologiesSection';

const about = () => {
  return (
    <>
      <Layout>
        <div className="sm:container sm:mx-auto 	">
          <Trans>about.description</Trans>
          <Technologies />
          <AboutSections />
        </div>
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
