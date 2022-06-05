import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Button from '../Button';
import ThemeToggle from './ThemeToggle';
const Header = ({ openMenu, setOpenMenu }: any) => {
  const { language, originalPath, languages } = useI18next();
  const menuStatus = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };
  return (
    <header>
      <nav>
        <div className="flex justify-between p-3 md:p-0">
          <div className=" justify-around basis-56 md:flex hidden">
            <Button href={'/'}>
              <Trans>header.home</Trans>
            </Button>
            <Button href={'/resume/jobs'}>
              <Trans>header.about-me</Trans>
            </Button>
            {/* <Button>
              <Trans>header.projects</Trans>
            </Button> */}
            <Button href={'/blog'}>
              <Trans>header.blog</Trans>
            </Button>
          </div>
          <div className="flex  basis-full items-center	 md:basis-28 md:justify-around">
            <Button onClick={menuStatus} styles=" md:hidden z-10 mx-2 ">
              {openMenu ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </Button>
            <div className="flex items-center ">
              <span className="mx-2">
                {language === 'en' ? (
                  <Link to={originalPath} language={'fa'}>
                    فارسی
                  </Link>
                ) : (
                  <Link to={originalPath} language={'en'}>
                    English
                  </Link>
                )}
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
