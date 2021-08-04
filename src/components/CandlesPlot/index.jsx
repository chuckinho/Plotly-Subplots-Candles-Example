/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js-cartesian-dist-min';
import {
  colorIncreasing,
  colorDecreasing,
  chartHeight,
  colorPaperBG,
  colorPlotBG,
  data,
  barUnitWidth,
} from './constants';
import useStyles from './styles';

const CandlesPlot = () => {
  // -- styles --
  const classes = useStyles();

  const [myRef, setMyRef] = useState();
  // -- Chart Logic --

  // -- Plotly Helper Functions -- Data Manipulation/Unpacking --

  const getTime = stepsize => {
    const myData = data[stepsize - 1];
    return myData.map(val => {
      return val.timestamp;
    });
  };

  const getOpen = stepsize => {
    const myData = data[stepsize - 1];
    return myData.map(val => {
      return val.open;
    });
  };

  const getClose = stepsize => {
    const myData = data[stepsize - 1];
    return myData.map(val => {
      return val.close;
    });
  };

  const getHigh = stepsize => {
    const myData = data[stepsize - 1];
    return myData.map(val => {
      return val.high;
    });
  };

  const getLow = stepsize => {
    const myData = data[stepsize - 1];
    return myData.map(val => {
      return val.low;
    });
  };

  const getVolume = stepsize => {
    const myData = data[stepsize - 1];
    return myData.map(val => {
      return val.volume;
    });
  };

  const getVolumeColors = stepsize => {
    const myData = data[stepsize - 1];
    const colors = [];
    for (let i = 0; i < myData.length; i += 1) {
      if (i !== 0) {
        if (myData[i].close > myData[i - 1].close) {
          colors.push(colorIncreasing);
        } else {
          colors.push(colorDecreasing);
        }
      } else {
        colors.push(colorDecreasing);
      }
    }
    return colors;
  };

  const getTitle = stepsize => {
    return stepsize < 2 ? `${stepsize} minute` : `${stepsize} minutes`;
  };

  // -- Plotly Data / Traces --
  const numSubplots = 3;

  const candle = stepsize => {
    return {
      decreasing: {
        line: { color: colorDecreasing },
        fillcolor: colorDecreasing,
      },
      increasing: {
        line: { color: colorIncreasing },
        fillcolor: colorIncreasing,
      },
      x: getTime(stepsize),
      close: getClose(stepsize),
      high: getHigh(stepsize),
      low: getLow(stepsize),
      open: getOpen(stepsize),
      type: 'candlestick',
      // offset: 0,
      // width: barUnitWidth * stepsize,
      name: getTitle(stepsize),
      yaxis: `y${stepsize === 1 ? '' : stepsize}`,
    };
  };

  const volume = stepsize => {
    return {
      x: getTime(stepsize),
      y: getVolume(stepsize),
      marker: {
        color: getVolumeColors(stepsize),
      },
      opacity: 0.2,
      type: 'bar',
      offset: 0,
      width: barUnitWidth * stepsize,
      name: getTitle(stepsize),
      yaxis: `y${stepsize + numSubplots}`,
    };
  };

  // -- Plotly Data --
  const [chartData, setChartData] = useState([
    candle(1),
    volume(1),
    candle(2),
    volume(2),
    candle(3),
    volume(3),
  ]);

  // -- Plotly Options / Layout --
  const chartLayout = {
    xaxis: { anchor: 'y3', showgrid: true },
    yaxis: { title: 'candles', domain: [0.67, 1] },
    yaxis4: {
      title: 'volume',
      domain: [0.67, 1],
      overlaying: 'y',
      side: 'right',
      showgrid: false,
    },
    yaxis2: { title: 'candles', domain: [0.34, 0.65] },
    yaxis5: {
      title: 'volume',
      domain: [0.34, 0.65],
      overlaying: 'y2',
      side: 'right',
      showgrid: false,
    },
    yaxis3: { title: 'candles', domain: [0, 0.32] },
    yaxis6: {
      title: 'volume',
      domain: [0, 0.32],
      overlaying: 'y3',
      side: 'right',
      showgrid: false,
    },
    legend: {
      x: 1.05,
    },
    hovermode: 'x',
    autosize: true,
    paper_bgcolor: colorPaperBG,
    plot_bgcolor: colorPlotBG,
    margin: {
      t: 50,
    },
    height: chartHeight,
    title: 'Plotly Multiple Candles Subplots Example',
  };

  const config = { displaylogo: false };

  // -- plotly hover handler --
  const handleHover = eventdata => {
    if (eventdata.xvals) {
      Plotly.Fx.hover(
        myRef.el,
        {
          xval: eventdata.xvals[0],
        },
        ['xy', 'xy2', 'xy3', 'xy4', 'xy5', 'xy6'],
      );
    }
  };

  // -- Div Object --
  return (
    <div className={classes.root}>
      <Plot
        ref={node => {
          setMyRef(node);
        }}
        data={chartData}
        layout={chartLayout}
        config={config}
        onHover={handleHover}
        className={classes.plot}
        useResizeHandler
      />
    </div>
  );
};

export default CandlesPlot;
