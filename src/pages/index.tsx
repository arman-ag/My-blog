import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import Layout from '../components/layout';
import Technologies from '../components/TechnologiesSection';

export default function Home() {
  return (
    <>
      <Layout>
        <div className="sm:container sm:mx-auto">
          <Trans>description</Trans>
        </div>
        <div>
          <div className=" flex items-center flex-col 	md:flex-row	 ">
            <p className="max-w-xl	">
              <Trans>about.description</Trans>
            </p>
          </div>
        </div>
        <Technologies slice />
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
