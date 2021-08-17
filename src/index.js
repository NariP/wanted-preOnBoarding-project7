import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import reset from 'styles/reset';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';
import SolarApp from './SolarApp';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <ThemeProvider theme={theme}>
      <SolarApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
