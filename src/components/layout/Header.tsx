import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Button from '../common/Button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { language, originalPath, languages } = useI18next();
  console.log({ language });
  return (
    <header>
      <nav>
        <div className="flex justify-around ">
          <ThemeToggle />

          <Button href={'/'}>
            <Trans>home</Trans>
          </Button>
          <Button>
            <Trans>about me</Trans>
          </Button>
          <Button>
            <Trans>projects</Trans>
          </Button>
          <Button href={'/blog'}>
            <Trans>blog</Trans>
          </Button>
          {language === 'en' ? (
            <Link to={originalPath} language={'fa'}>
              Farsi
            </Link>
          ) : (
            <Link to={originalPath} language={'en'}>
              English
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
