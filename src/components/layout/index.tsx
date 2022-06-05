import { Helmet } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Aside from './Aside';
import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';
import Header from './Header';
import { layoutProps } from './types';
const Layout = ({ children }: layoutProps) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const [open, setOpen] = useState(false);

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="theme-dark bg-primary text-text-main ">
      <Helmet>
        <body className={`${open ? 'overflow-hidden' : 'overflow-auto'}`} />
      </Helmet>
      <Header openMenu={open} setOpenMenu={setOpen} />
      <div className="flex flex-col md:flex-row">
        <Aside />

        <HamburgerMenu open={open} />
        <main className=" min-h-screen p-6 grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
