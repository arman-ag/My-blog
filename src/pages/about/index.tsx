import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import Layout from '../../components/layout';

const about = () => {
  return (
    <>
      <Layout>
        <div className="sm:container sm:mx-auto 	">
          <Trans>about.description</Trans>
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
