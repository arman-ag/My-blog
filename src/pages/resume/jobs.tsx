import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import Seo from '../../components/common/Seo';
import ReWrapper from '../../components/layout/ReWrapper';

const jobs = () => {
  return (
    <>
      <Seo title={`Arman Alighnabari|Jobs`} />
      <ReWrapper>
        <div className="my-8">
          <div className="flex my-4">
            <img src={'/images/army.webp'} alt="Iran army logo" className="mx-4 w-16 " />
            <div className="flex flex-col">
              <span className="text-xl  ">
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
            <img src={'/images/jihaat.webp'} alt="Jihaat company logo" className="mx-4 w-16 " />
            <div className="flex flex-col">
              <span className="text-xl">
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
            <img src={'/images/eniac.webp'} alt="Eniac company logo" className="mx-4 w-20 " />
            <div className="flex flex-col">
              <span className="text-xl">
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
            <img src={'/images/Novin.webp'} alt="Novin.dev company logo" className=" w-24 " />
            <div className="flex flex-col">
              <span className="text-xl">
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

          <div>
            <h2 className="my-10 ">
              <span className="text-xl font-bold  ">
                <Trans>jobs.community</Trans>
              </span>
            </h2>
            <div className="flex my-4 items-center">
              <img
                src={'/images/shirazlug.svg'}
                alt="Shirazlug open source community logo"
                className="mx-4  "
              />
              <div className="flex flex-col">
                <span className="text-xl">
                  <Trans>jobs.shirazLug</Trans>
                </span>
                <span>
                  <Trans>jobs.shirazLug.position</Trans>
                </span>
                <span>
                  <Trans>jobs.shirazLug.year</Trans>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ReWrapper>
    </>
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
