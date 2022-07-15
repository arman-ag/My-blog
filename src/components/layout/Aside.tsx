import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Trans } from 'react-i18next';
import { AiFillCalendar } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import ContactMe from '../ContactMe';
const Aside = () => {
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
    <aside>
      <div className="flex flex-col items-center sticky top-11 mx-5 overflow-hidden	 ">
        <div>
          <Img
            alt="arman alighanbari"
            fluid={pageQuery.file.childrenImageSharp[0].fluid}
            className="rounded-2xl mt-2 w-48 border  "
          />
          <div className="mt-2 flex flex-col  items-start text-base">
            <span className="flex text-xl font-semibold self-center">
              <Trans>about.name</Trans>
            </span>
            <span className="self-center text-lg"> Front-end Developer</span>
            <ContactMe />
            <span className="flex mt-2">
              <AiFillCalendar className="mx-2 h-6 w-6" />
              <Trans>about.birth-date</Trans>
            </span>
            <span className="flex mt-2">
              <HiLocationMarker className="mx-2 h-6 w-6" />
              <Trans>about.location</Trans>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
