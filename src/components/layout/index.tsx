import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import Header from './Header';
import { layoutProps } from './types';

const Layout = ({ children }: layoutProps) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="theme-dark bg-primary text-text-main ">
      <Header />

      <main className="sm:container sm:mx-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
