import { graphql } from 'gatsby';
import React from 'react';
import GroupButtons from '../../components/GroupButton';
import Layout from '../../components/layout';
import Technologies from '../../components/TechnologiesSection';

const skills = () => {
  return (
    <Layout>
      <Technologies />
      <GroupButtons />
    </Layout>
  );
};

export default skills;
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
