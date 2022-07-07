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
    <header className={`${openMenu && `sticky top-0 bg-primary z-10`}`}>
      <nav>
        <div className="  p-3 md:p-0  relative">
          <div className=" basis-96  flex  p-2 ">
            <div className="hidden justify-between basis-44 md:flex ">
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
            <div className="flex items-center order-2 md:order-1 mx-2">
              <span className="mx-5">
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
            <div className="flex items-center	 md:basis-28 md:justify-around order-1 md:order-2">
              <Button onClick={menuStatus} styles=" md:hidden z-10 mx-2 ">
                {openMenu ? (
                  <AiOutlineClose className="h-6 w-6" />
                ) : (
                  <AiOutlineMenu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
          <img
            style={{ top: '-5rem' }}
            alt="main-logo"
            className={`absolute w-80  ${language === 'en' ? 'right-4' : 'left-4'}`}
            src="/logo/logo3.png"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
