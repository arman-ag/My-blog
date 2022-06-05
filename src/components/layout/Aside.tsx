import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Trans } from 'react-i18next';
import { AiFillCalendar, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillTelephoneFill, BsTelegram, BsTwitter } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
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
        <div className="">
          <Img
            fluid={pageQuery.file.childrenImageSharp[0].fluid}
            className="rounded-2xl mt-2 w-48 border  "
          />
          <div className="mt-2 flex flex-col  items-start text-base">
            <span className="flex text-xl font-semibold self-center">
              <Trans>about.name</Trans>
            </span>
            <span className="self-center text-lg"> Front-end Developer</span>
            <div className="flex my-4 ">
              <Link
                to="https://twitter.com/armanAg49?s=09"
                target="_blank"
                className=" hover:text-blue">
                <BsTwitter className="ml-2 h-5 w-5 " />
              </Link>
              <Link to="mailto:arman.alighanbary@gmail.com" className=" hover:text-blue">
                <MdEmail className="ml-2 h-5 w-5 " />
              </Link>
              <Link to="https://t.me/ag_arman" target="_blank" className=" hover:text-blue">
                <BsTelegram className="ml-2 h-5 w-5 " />
              </Link>
              <Link to="https://github.com/arman-ag" target="_blank" className=" hover:text-blue">
                <AiFillGithub className="ml-2 h-6 w-6 " />
              </Link>
              <Link to="tel:+989365725645" className=" hover:text-blue">
                <BsFillTelephoneFill className="ml-2 h-5 w-5 " />
              </Link>
              <Link
                to="https://www.linkedin.com/in/arman-alighanbary-5b5090150/?original_referer="
                target="_blank"
                className=" hover:text-blue">
                <AiFillLinkedin className="ml-2 h-6 w-6 " />
              </Link>
            </div>
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
