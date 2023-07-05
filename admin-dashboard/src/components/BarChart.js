import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  LineSeries,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";

import { scaleBand } from "@devexpress/dx-chart-core";
import { ArgumentScale } from "@devexpress/dx-react-chart";
import { Animation } from "@devexpress/dx-react-chart";
import { EventTracker } from "@devexpress/dx-react-chart";

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({
      splineValue: Math.sin(i) / i,
      lineValue: (i / 15) ** 2.718 - 0.2,
      argument: i,
    });
  }

  return data;
};

const data = /* generateData(2.5, 12, 0.5); */ [
  { year: "sunday", population: 35, a: 20 },
  { year: "1960", population: 3.018, a: 20 },
  { year: "1970", population: 3.682, a: 20 },
  { year: "1980", population: 4.44, a: 20 },
  { year: "1990", population: 5.31, a: 20 },
  { year: "2000", population: 6.127, a: 20 },
  { year: "2010", population: 6.93, a: 20 },
];

export default function BarChart() {
  return (
    <Paper>
      <Chart data={data}>
        {/* <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis /> */}
        <BarSeries valueField="population" argumentField="year" />
        <EventTracker />
        <Tooltip />
        <Animation />
      </Chart>
    </Paper>
  );
}
