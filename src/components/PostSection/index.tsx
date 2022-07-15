import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
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
            excerpt
            altFeturedImage
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
        <div key={post.id} className="">
          <Link to={post.fields.slug}>
            <div className="rounded-2xl   flex items-center	flex-col m-10 max-w-4xl	  hover:bg-hover  cursor-pointer 	md:flex-row">
              <Img
                fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                alt={`${post.frontmatter.altFeturedImage}`}
                className="w-40 rounded-2xl"
              />

              <div className="mx-5 flex flex-col">
                <h2 className="text-xl font-bold my-3 ">{post.frontmatter.title}</h2>
                <small className="text-blue">{post.frontmatter.date}</small>
                <p className="mt-3 text-sm">{post.frontmatter.excerpt}</p>
              </div>
            </div>
            <div className="border-t-2 border-cyan-300 w-8/12 m-auto	" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
