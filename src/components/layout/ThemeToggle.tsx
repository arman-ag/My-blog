import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import React from 'react';
export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any) => {
        if (theme == null) return null;
        return (
          <label>
            <input
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        );
      }}
    </ThemeToggler>
  );
}
