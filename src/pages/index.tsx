import { graphql } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import Button from '../components/Button';
import Seo from '../components/common/Seo';
import Layout from '../components/layout';
import Posts from '../components/PostSection';
import Technologies from '../components/TechnologiesSection';
interface blogProps {
  [key: string]: any;
}
export default function Home({ data }: blogProps) {
  return (
    <>
      <Seo title={`Arman Alighnabari`} />
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
        <div className="my-10">
          <h1 className="text-2xl my-8 font-bold ">
            <Trans>blog.posts</Trans>
          </h1>
          <div className="border-t-2 border-cyan-300 w-5/12 	" />
          <Posts />
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
