import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Candles from '../pages/Candles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Candles} exact path="/" />
    </Switch>
  );
};

export default Routes;
