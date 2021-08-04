import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import GlobalStyleProvider from './styles/global';

import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <GlobalStyleProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </GlobalStyleProvider>
  );
};

export default App;
