import { graphql, Link } from 'gatsby';
import { Helmet } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { Trans } from 'react-i18next';
import Layout from '../../components/layout';

interface blogProps {
  [key: string]: any;
}
const blog = ({ data }: blogProps) => {
  const { posts } = data.blog;
  return (
    <>
      <Helmet>
        <title>Blog-aa-ghanbari</title>
      </Helmet>
      <Layout>
        <div className="p-10  ">
          <h1 className="text-3xl text-center font-bold ">
            <Trans>blog.posts</Trans>
          </h1>
        </div>
        <div>
          {posts.map((post: blogProps) => (
            <article className="p-10 border-t-2 border-cyan-300" key={post.id}>
              <Link to={post.fields.slug}>
                <h2 className="text-3xl font-bold my-3 ">{post.frontmatter.title}</h2>
              </Link>
              <div className="my-2">
                <small>
                  {post.frontmatter.author} , {post.frontmatter.date}
                </small>
              </div>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default blog;
export const pageQuery = graphql`
  query MyQuery($language: String!) {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }

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
