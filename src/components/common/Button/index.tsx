import React from 'react';
import { buttonProps } from './types';

const Button = ({ children }: buttonProps) => {
  return (
    <>
      <button>{children}</button>
    </>
  );
};

export default Button;
