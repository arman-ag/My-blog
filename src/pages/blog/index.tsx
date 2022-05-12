import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';
interface blogProps {
  [key: string]: any;
}
const blog = ({ data }: blogProps) => {
  const { posts } = data.blog;
  return (
    <Layout>
      <div>
        <h1>blog</h1>
        {posts.map((post: blogProps) => (
          <article key={post.id}>
            <Link to={post.fields.slug}>
              <h2 className="text-3xl font-bold underline">{post.frontmatter.title}</h2>
            </Link>
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </Layout>
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
