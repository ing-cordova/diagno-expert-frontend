import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import { themeLight, themeDark } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { AppThemeProvider, useAppTheme } from './context/AppTheme';
import Home from './pages/home';

const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Home />
    </ThemeProvider >
  );
});

const App = () => {
  return (
    <AppThemeProvider>
      <AppRenderTheme />
    </AppThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
