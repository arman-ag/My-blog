import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { buttonProps } from './types';
const Button = ({ children, href, onClick = null, solid = false, styles }: buttonProps) => {
  const checkParams = () => {
    const url = location.href.split('/');
    const param = href?.split('/');
    return url.includes(param![2]);
  };

  return (
    <>
      {solid ? (
        href ? (
          <Link to={href!}>
            <button
              className={`${styles} min-w-[18%] py-2  px-5	text-lg text-gray  border-2 rounded border-cyan-300 		 ${
                checkParams() && `border-2 bg-cyan-300  shadow-2xl	`
              } `}
              onClick={onClick!}>
              {children}
            </button>
          </Link>
        ) : (
          <button
            className={`${styles} min-w-[18%] py-2  px-5	text-lg text-white bg-cyan-300 focus:bg-blue rounded`}
            onClick={onClick!}>
            children
          </button>
        )
      ) : href ? (
        <Link to={href!}>
          <button className={`${styles} text-base py-2`} onClick={onClick!}>
            {children}
          </button>
        </Link>
      ) : (
        <button className={`${styles} text-base py-2`} onClick={onClick!}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
