import React from "react";
export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
      color: '#222222',
      name: 'warning'
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
      color: '#eeeeee',
      name: 'dark'
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );