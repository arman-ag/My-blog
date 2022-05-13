import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Button from '../Button';
export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any) => {
        if (theme == null) return null;
        return theme === 'dark' ? (
          <Button onClick={() => toggleTheme('light')}>
            <BsFillMoonFill className="h-5 w-5 " />
          </Button>
        ) : (
          <Button onClick={() => toggleTheme('dark')}>
            <BsFillSunFill className="h-6 w-6 " />
          </Button>
        );
      }}
    </ThemeToggler>
  );
}
