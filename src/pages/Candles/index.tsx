/* eslint-disable camelcase */
import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import CandlesPlot from '../../components/CandlesPlot/index.jsx';

const Candles: React.FC = () => {
  // -- Styles --
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.appContainer}>
        <div className={classes.chart}>
          <CandlesPlot />
        </div>
        <Typography className={classes.minorText}>
          * Plotly.js Candle Example.
        </Typography>
      </div>
    </div>
  );
};

export default Candles;
