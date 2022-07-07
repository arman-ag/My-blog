import { graphql } from 'gatsby';
import { Helmet } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { Trans } from 'react-i18next';
import Button from '../components/Button';
import Layout from '../components/layout';
import Technologies from '../components/TechnologiesSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home-aa-ghanbari</title>
      </Helmet>
      <Layout>
        <div>
          <div className=" flex items-center flex-col m-10 	md:flex-row	  ">
            <p>
              <Trans>main.description</Trans>
            </p>
          </div>
        </div>
        <Technologies slice />
        <div className="flex justify-center mt-10">
          <Button href="/resume/skills" solid>
            <Trans>main.more</Trans>
          </Button>
        </div>
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
