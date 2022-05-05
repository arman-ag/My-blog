import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import Button from '../Button';

const GroupButtons = () => {
  return (
    <div className="flex justify-center mx-4">
      <Button solid styles="mx-2">
        <Trans>technologies.skills</Trans>
      </Button>
      <Button solid styles="mx-2">
        <Trans>resume.jobs</Trans>
      </Button>
      <Button solid styles="mx-2">
        <Trans>resume.education</Trans>
      </Button>
    </div>
  );
};

export default GroupButtons;
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
