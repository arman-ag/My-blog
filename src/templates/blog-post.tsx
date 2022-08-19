import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useEffect } from 'react';
import Layout from '../components/layout';
const blogPosts = ({ data }: any) => {
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
    anchor.appendChild(script);
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
