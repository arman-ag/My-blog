import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { buttonProps } from './types';

const Button = ({ children, href, onClick, solid = false, styles }: buttonProps) => {
  return (
    <>
      {solid ? (
        <button
          className={`${styles} min-w-[18%] py-2 font	 text-lg bg-gray-100 focus:bg-blue rounded`}
          onClick={onClick!}>
          {href ? <Link to={href!}>{children}</Link> : children}
        </button>
      ) : (
        <button className={`${styles} text-base`} onClick={onClick!}>
          {href ? <Link to={href!}>{children}</Link> : children}
        </button>
      )}
    </>
  );
};

export default Button;
