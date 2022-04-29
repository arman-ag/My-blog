import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
const AboutSections = () => {
  const pageQuery = useStaticQuery(graphql`
    query technologies {
      file(relativePath: { eq: "A-AG.jpg" }) {
        childrenImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div>
      AboutSections
      <Img fluid={pageQuery.file.childrenImageSharp[0].fluid} />
    </div>
  );
};

export default AboutSections;
