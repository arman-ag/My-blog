import React from 'react';
import { Trans } from 'react-i18next';
import Button from '../Button';
import { HamburgerMenuProps } from './types';

const HamburgerMenu = ({ open = false }: HamburgerMenuProps) => {
  return (
    <nav
      className={`transition ease-in-out duration-200 bg-cyan-300	 text-white w-full h-full fixed 	opacity-95 ${
        open ? `translate-x-0` : `translate-x-full`
      }`}>
      <div className="flex flex-col  items-center m-16	">
        <Button href={'/'} styles="text-2xl  mt-5">
          <Trans>home</Trans>
        </Button>
        <Button href={'/resume/jobs'} styles="text-2xl  mt-5">
          <Trans>header.about-me</Trans>
        </Button>
        {/* <Button styles="text-2xl mt-5 hover:text-black ">
          <Trans>header.projects</Trans>
        </Button> */}
        <Button href={'/blog'} styles="text-2xl mt-5 hover:text-black ">
          <Trans>header.blog</Trans>
        </Button>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
