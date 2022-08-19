import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from 'gatsby-plugin-react-i18next';
import { Trans } from 'react-i18next';
import Layout from '../../components/layout';

interface blogProps {
  [key: string]: any;
}
const blog = ({ data }: blogProps) => {
  const { posts } = data.blog;
  return (
    <div>
      <Helmet>
        <title>Blog-aa-ghanbari</title>
      </Helmet>
      <Layout>
        <div>
          <h1 className="text-3xl  font-bold ">
            <Trans>blog.posts</Trans>
          </h1>
          <div className="my-4 border-t-2 border-cyan-300 w-6/12 " />
        </div>
        <div className="flex flex-col align-center md:flex-row justify-between flex-wrap">
          {posts.map((post: blogProps) => (
            <div className=" w-4/12 m-auto my-0 	max-h-96	">
              <Link to={post.fields.slug}>
                <div className=" p-10 flex items-center	flex-col 	">
                  <Img
                    fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                    alt={`${post.frontmatter.altFeturedImage}`}
                    className="w-56 rounded-2xl"
                  />

                  <div className="mx-5 flex flex-col">
                    <h2 className="text-3xl font-bold my-3 ">{post.frontmatter.title}</h2>
                    <small className="text-blue">{post.frontmatter.date}</small>
                    <p className="mt-3">{post.frontmatter.excerpt}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </div>
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
