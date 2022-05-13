import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { buttonProps } from './types';

const Button = ({ children, href, onClick = null, solid = false, styles }: buttonProps) => {
  return (
    <>
      {solid ? (
        <button
          className={`${styles} min-w-[18%] py-2  px-5	text-lg text-white bg-cyan-300 focus:bg-blue rounded`}
          onClick={onClick!}>
          {href ? <Link to={href!}>{children}</Link> : children}
        </button>
      ) : (
        <button className={`${styles} text-base py-2`} onClick={onClick!}>
          {href ? <Link to={href!}>{children}</Link> : children}
        </button>
      )}
    </>
  );
};

export default Button;
