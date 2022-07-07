import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
interface blogProps {
  [key: string]: any;
}
const Posts = () => {
  const {
    blog: { posts }
  } = useStaticQuery(graphql`
    {
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
    }
  `);
  return (
    <div>
      {posts.map((post: blogProps) => (
        <article className="  hover:bg-hover rounded  " key={post.id}>
          <div className="p-2 cursor-pointer">
            <Link to={post.fields.slug}>
              <h2 className="text-l font-bold mb-3 ">{post.frontmatter.title}</h2>
            </Link>
            <div className="my-2">
              <small>
                {post.frontmatter.author} , {post.frontmatter.date}
              </small>
            </div>
            <p className="text-sm">{post.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Posts;
