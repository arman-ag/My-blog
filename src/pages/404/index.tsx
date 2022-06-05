import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import Layout from '../../components/layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center flex-col grow 		">
        <img src="/images/404.svg" className="w-56 " />
        <h2 className="text-5xl mt-16 ">
          <Trans>404.message</Trans>
        </h2>
      </div>
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
