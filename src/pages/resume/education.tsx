import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import Seo from '../../components/common/Seo';
import ReWrapper from '../../components/layout/ReWrapper';

const education = () => {
  return (
    <>
      <Seo title={`Arman Alighnabari|Education`} />
      <ReWrapper>
        <div className="flex my-4 ">
          <img
            src={'/images/university.webp'}
            alt="Shahidrajayi university logo"
            className="mx-4"
          />
          <div className="flex flex-col ">
            <span>
              <Trans>education.university-name</Trans>
            </span>
            <span>
              <Trans>education.degree</Trans>
            </span>
            <span>
              <Trans>education.finish-year</Trans>
            </span>
          </div>
        </div>
      </ReWrapper>
    </>
  );
};

export default education;

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
