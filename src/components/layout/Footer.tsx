import React from 'react';
import ContactMe from '../ContactMe';
const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col	justify-center items-center">
        <ContactMe />
        <span>
          Arman-Ag 2022
          <span>&#169;</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
