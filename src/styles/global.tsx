import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';

const GlobalStyleProvider: React.FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      {children}
    </StylesProvider>
  );
};

GlobalStyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyleProvider;
