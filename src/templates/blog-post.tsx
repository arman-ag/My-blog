import { useLocation } from '@reach/router';
import kebabCase from 'lodash/kebabCase';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby-plugin-react-i18next';
import { useEffect } from 'react';
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
  console.log(data);
  const post = data.markdownRemark;
  let featuredImgFluid = post?.frontmatter.featuredImage.childImageSharp.fluid;

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
