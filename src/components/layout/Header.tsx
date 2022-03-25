import { SunIcon } from '@heroicons/react/solid';
import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Button from '../common/Button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { languages, originalPath } = useI18next();
  console.log({ originalPath });
  return (
    <header>
      <nav>
        <div className="flex justify-around ">
          <ThemeToggle />
          <Button>
            <SunIcon />
          </Button>
          <Button>
            <Trans>about me</Trans>
          </Button>
          <Button>
            <Trans>projects</Trans>
          </Button>
          <Button>
            <Trans>blog</Trans>
          </Button>
          <ul>
            {languages.map((lng: string) => (
              <li key={lng}>
                <Link to={originalPath} language={lng}>
                  {lng}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
