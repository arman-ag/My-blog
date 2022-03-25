import { SunIcon } from '@heroicons/react/solid';
import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Button from '../common/Button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="flex ">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
