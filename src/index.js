import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import reset from 'styles/reset';
import SolarApp from './SolarApp';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <SolarApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
