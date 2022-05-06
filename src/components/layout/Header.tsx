import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Button from '../Button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { language, originalPath, languages } = useI18next();
  return (
    <header className="md:block hidden">
      <nav>
        <div className="flex justify-between ">
          <div className="flex justify-around basis-56">
            {/* <Button href={'/'}>
            <Trans>home</Trans>
          </Button> */}
            <Button href={'/about'}>
              <Trans>header.about-me</Trans>
            </Button>
            <Button>
              <Trans>header.projects</Trans>
            </Button>
            <Button href={'/blog'}>
              <Trans>header.blog</Trans>
            </Button>
          </div>
          <div className="flex justify-around basis-40">
            {language === 'en' ? (
              <Link to={originalPath} language={'fa'}>
                فارسی
              </Link>
            ) : (
              <Link to={originalPath} language={'en'}>
                English
              </Link>
            )}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
