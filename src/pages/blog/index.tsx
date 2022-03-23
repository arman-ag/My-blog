import { graphql, Link } from "gatsby"
import React from "react"
import { blogProps } from "./type"

const blog = ({ data }: blogProps) => {
  const { posts } = data.blog
  return (
    <div>
      <h1>blog</h1>
      {posts.map((post: blogProps) => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2 className="text-3xl font-bold underline">
              {post.frontmatter.title}
            </h2>
          </Link>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

export default blog
export const pageQuery = graphql`
  query MyQuery {
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
`
