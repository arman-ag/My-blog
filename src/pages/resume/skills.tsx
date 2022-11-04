import { graphql } from 'gatsby';
import React from 'react';
import Seo from '../../components/common/Seo';
import ReWrapper from '../../components/layout/ReWrapper';
import Technologies from '../../components/TechnologiesSection';

const skills = () => {
  return (
    <>
      <Seo title={`Arman Alighnabari|Skills`} />
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
