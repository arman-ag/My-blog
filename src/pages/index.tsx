import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Layout>
        <div>innn</div>
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
