import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import { themeLight, themeDark } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { AppThemeProvider, useAppTheme } from './context/AppTheme';
import Routes from './routes/routes';

const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Routes />
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
