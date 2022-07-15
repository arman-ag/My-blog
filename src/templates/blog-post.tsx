import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
const blogPosts = ({ data }: any) => {
  const post = data.markdownRemark;
  console.log(post);
  let featuredImgFluid = post?.frontmatter.featuredImage.childImageSharp.fluid;

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
