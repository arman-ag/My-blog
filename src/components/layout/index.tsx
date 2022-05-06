import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import Aside from './Aside';
import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';
import Header from './Header';
import { layoutProps } from './types';
const Layout = ({ children }: layoutProps) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const [open, setOpen] = useState(false);
  const menuStatus = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="theme-dark bg-primary text-text-main ">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Aside />
        <Button onClick={menuStatus} styles="fixed right-10  md:hidden z-10">
          {open ? <MenuIcon /> : <CloseIcon />}
        </Button>
        <HamburgerMenu open={open} />
        <main className=" min-h-screen p-6">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
