import { useLocation } from '@reach/router';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet, Link } from 'gatsby-plugin-react-i18next';
import kebabCase from 'lodash/kebabCase';
import React, { useEffect } from 'react';
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PocketIcon,
  PocketShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';
import Layout from '../components/layout';
const blogPosts = ({ data }: any) => {
  const post = data.markdownRemark;
  let featuredImgFluid = post?.frontmatter.featuredImage.childImageSharp.fluid;
  const location = useLocation();
  useEffect(() => {
    let script = document.createElement('script');
    let anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', true);
    script.setAttribute('repo', 'arman-ag/blog-comments');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', `preferred-color-scheme`);
    script.setAttribute('label', 'blog-comments');
    anchor!.appendChild(script);
  }, []);
  return (
    <>
      {/* <Helmet
        title={`blog|${post.frontmatter.title}`}
        meta={[
          {
            property: `og:title`,
            content: `${post.frontmatter.title}`
          },
          {
            property: `og:description`,
            content: `${post.frontmatter.excerpt}`
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            property: `og:image`,
            content: `${featuredImgFluid}`
          }
        ]}
      /> */}
      <Helmet>
        <title>Whatever</title>
        <meta property="og:site_name" content="personal blog" />
        <meta property="og:image" content={featuredImgFluid} />
        <meta property="og:image:height" content="120" />
        <meta property="og:image:width" content="200" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Whatever" />
        <meta property="og:description" content="Description" />
        <meta property="og:url" content={`https://www.aa-ghanbari.com${location.pathname}`} />
        <meta property="og:updated_time" content="2019-01-31" />
      </Helmet>
      <Layout>
        <div>
          <h1 className="text-4xl font-bold">{post.frontmatter.title}</h1>

          <Img
            alt={`${post.frontmatter.altFeturedImage}`}
            className=" w-9/12	m-auto my-5 rounded-xl"
            fluid={featuredImgFluid}
          />
          <div
            className="prose md:prose-xl lg:prose-lg dark:prose-invert max-w-none prose-h2:font-normal	 "
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="flex justify-around md:w-3/12 m-auto my-12">
            <TelegramShareButton title={post.frontmatter.title} url={useLocation().href}>
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
            <WhatsappShareButton title={post.frontmatter.title} url={useLocation().href}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <LinkedinShareButton title={post.frontmatter.title} url={useLocation().href}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <PocketShareButton title={post.frontmatter.title} url={useLocation().href}>
              <PocketIcon size={32} round={true} />
            </PocketShareButton>
            <EmailShareButton title={post.frontmatter.title} url={useLocation().href}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>
          <div className="flex justify-around md:w-3/12 m-auto my-5">
            {data.markdownRemark.frontmatter.tags.map((item: string, key: number) => (
              <Link
                to={`/tags/${kebabCase(item)}/`}
                className="m-auto rounded-3xl	bg-gray-100 px-5 py-2 text-xs	font-bold	"
                key={key}>
                {item}
              </Link>
            ))}
          </div>

          <div id="inject-comments-for-uterances" />
        </div>
      </Layout>
    </>
  );
};

export default blogPosts;

export const query = graphql`
  query BlogQuery($slug: String!, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        tags
        title
        date
        excerpt
        altFeturedImage
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
