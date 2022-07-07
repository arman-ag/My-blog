import { graphql } from 'gatsby';
import { Helmet } from 'gatsby-plugin-react-i18next';
import React from 'react';
import ReWrapper from '../../components/layout/ReWrapper';
import Technologies from '../../components/TechnologiesSection';

const skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills-aa-ghanbari</title>
      </Helmet>
      <ReWrapper>
        <Technologies />
      </ReWrapper>
    </>
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
