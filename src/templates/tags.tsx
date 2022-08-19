import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import { BsTag } from 'react-icons/bs';
import Button from '../components/Button';
import Layout from '../components/layout';
const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <div>
      <Helmet>
        <title>aa-ghanbari| </title>
      </Helmet>
      <Layout>
        <div>
          <div className="flex items-center">
            <BsTag
              //style={{ transform: 'rotate(90deg)' }}
              className="h-20 w-20 ml-10 -rotate-45	  "
            />
            <h1 className="text-3xl  font-bold ">{tag}</h1>
          </div>
          <div className="my-4 border-t-2 border-cyan-300 w-6/12 " />
        </div>
        <div className="flex flex-col align-center md:flex-row justify-between flex-wrap">
          {edges.map(({ node }, key) => {
            const { slug } = node.fields;
            const post = node.frontmatter;
            return (
              <div className="w-4/12  my-0 m-auto max-h-52	max-h-96 " key={key}>
                <Link to={slug}>
                  <div className=" p-10 flex  items-center	flex-col ">
                    <Img
                      fluid={post.featuredImage.childImageSharp.fluid}
                      alt={`${post.altFeturedImage}`}
                      className="w-56 rounded-2xl"
                    />
                    <span>
                      <small className="text-blue">{post.date}</small>
                    </span>
                    <div className="mx-5 flex flex-col">
                      <h2 className="text-3xl font-bold my-3 ">{post.title}</h2>
                      <p className="mt-3">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-16 flex justify-center">
          <Button href="/blog" solid>
            تمام پست ها
          </Button>
        </div>
      </Layout>
    </div>
  );
};
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};
export default Tags;
export const pageQuery = graphql`
  query ($tag: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            excerpt
            title
            date(fromNow: true)
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
    }
  }
`;
