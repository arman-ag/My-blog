import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import React from 'react';
import Button from '../Button';
export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any) => {
        if (theme == null) return null;
        return theme === 'dark' ? (
          <Button onClick={() => toggleTheme('light')}>
            <SunIcon className="h-6 w-6 " />
          </Button>
        ) : (
          <Button onClick={() => toggleTheme('dark')}>
            <MoonIcon className="h-6 w-6 " />
          </Button>
        );
      }}
    </ThemeToggler>
  );
}
