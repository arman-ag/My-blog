import { graphql } from 'gatsby';
import React from 'react';
import ReWrapper from '../../components/layout/ReWrapper';
import Technologies from '../../components/TechnologiesSection';

const skills = () => {
  return (
    <ReWrapper>
      <Technologies />
    </ReWrapper>
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
