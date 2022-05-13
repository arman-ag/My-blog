import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Trans } from 'react-i18next';
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
            className="rounded-3xl mt-2 w-48  "
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
                <TwitterIcon className="ml-2" />
              </Link>
              <Link to="mailto:arman.alighanbary@gmail.com" className=" hover:text-blue">
                <EmailOutlinedIcon className="ml-2" />
              </Link>
              <Link to="https://t.me/ag_arman" target="_blank" className=" hover:text-blue">
                <TelegramIcon className="ml-2" />
              </Link>
              <Link to="https://github.com/arman-ag" target="_blank" className=" hover:text-blue">
                <GitHubIcon className="ml-2" />
              </Link>
              <Link to="tel:+989365725645" className=" hover:text-blue">
                <PhoneEnabledIcon className="ml-2" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/arman-alighanbary-5b5090150/?original_referer="
                target="_blank"
                className=" hover:text-blue">
                <LinkedInIcon className="ml-2" />
              </Link>
            </div>
            <span className="flex mt-2">
              <CalendarMonthOutlinedIcon className="mx-2" />
              <Trans>about.birth-date</Trans>
            </span>
            <span className="flex mt-2">
              <LocationOnOutlinedIcon className="mx-2" />
              <Trans>about.location</Trans>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
