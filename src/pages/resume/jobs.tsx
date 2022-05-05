import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import GroupButtons from '../../components/GroupButton';
import Layout from '../../components/layout';

const jobs = () => {
  return (
    <Layout>
      <h1 className="text-center text-2xl">
        <Trans>jobs.jobs</Trans>
      </h1>
      <div className="my-8">
        <div className="flex my-4">
          <img src={'/images/army.png'} className="mx-4 w-16 " />
          <div className="flex flex-col">
            <span>
              <Trans>jobs.ict-army</Trans>
            </span>
            <span>
              <Trans>It engineer</Trans>
            </span>
            <span>
              <Trans>jobs.ict-army-year</Trans>
            </span>
          </div>
        </div>

        <div className="flex my-4">
          <img src={'/images/jihaat.png'} className="mx-4 w-16 " />
          <div className="flex flex-col">
            <span>
              <Trans>jobs.jihaat</Trans>
            </span>
            <span>
              <Trans>Front-end Developer</Trans>
            </span>
            <span>
              <Trans>jobs.jihaat-year</Trans>
            </span>
          </div>
        </div>

        <div className="flex my-4">
          <img src={'/images/eniac.png'} className="mx-4 w-20 " />
          <div className="flex flex-col">
            <span>
              <Trans>jobs.eniac</Trans>
            </span>
            <span>
              <Trans>Front-end Developer</Trans>
            </span>
            <span>
              <Trans>jobs.eniac-year</Trans>
            </span>
          </div>
        </div>

        <div className="flex my-4">
          <img src={'/images/Novin.png'} className="mx-2 w-24 " />
          <div className="flex flex-col">
            <span>
              <Trans>jobs.novindev</Trans>
            </span>
            <span>
              <Trans>Front-end Developer</Trans>
            </span>
            <span>
              <Trans>jobs.novindev-year</Trans>
            </span>
          </div>
        </div>
      </div>
      <GroupButtons />
    </Layout>
  );
};

export default jobs;

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
