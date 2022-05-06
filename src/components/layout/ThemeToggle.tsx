import Brightness3SharpIcon from '@mui/icons-material/Brightness3Sharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
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
            <WbSunnySharpIcon className="h-6 w-6 " />
          </Button>
        ) : (
          <Button onClick={() => toggleTheme('dark')}>
            <Brightness3SharpIcon className="h-6 w-6 " />
          </Button>
        );
      }}
    </ThemeToggler>
  );
}
