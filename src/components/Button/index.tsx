import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { buttonProps } from './types';

const Button = ({ children, href, onClick }: buttonProps) => {
  return (
    <>
      <button onClick={onClick!}>{href ? <Link to={href!}>{children}</Link> : children}</button>
    </>
  );
};

export default Button;
