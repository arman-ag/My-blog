import React from 'react';
import { useTranslation } from 'react-i18next';
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import { layoutProps } from './types';

const Layout = ({ children }: layoutProps) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="theme-dark bg-primary text-text-main ">
      <Header />
      <div className="flex">
        <Aside />
        <main className=" min-h-screen 	 px-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
