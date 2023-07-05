import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

/*
 const hourlyData = []
for(i<arr.size()){
hourlyData.{time[i],arr[i]}
}
*/

function LineCharts({ count }) {
  const hourlyData = [
    // { time: "0", in: 10},
    // { time: "1", in: 12},
    // { time: "2", in: 8},
    // { time: "3", in: 6},
    // { time: "4", in: 6},
    // { time: "5", in: 6},
    // { time: "6", in: 6},
    // { time: "7", in: 6},
    // { time: "8", in: 6},
    // { time: "9", in: 6},
    // { time: "10", in: 10},
    // { time: "11", in: 16},
    // { time: "12", in: 12 },
    // { time: "13", in: 10},
    // { time: "14", in: 12},
    // { time: "15", in: 8},
    // { time: "16", in: 6},
    // { time: "17", in: 6},
    // { time: "18", in: 6},
    // { time: "19", in: 6},
    // { time: "20", in: 6},
    // { time: "21", in: 6},
    // { time: "22", in: 6},
    // { time: "23", in: 10},
    // { time: "24", in: 16},
  ];
  console.log(count.length);
  console.log(count);
  for (let i = 0; i < count.length; i++) {
    let obj = { time: i.toString(), totalCount: count[i] };
    hourlyData.push(obj);
  }

  const totalData = hourlyData.map((hour) => {
    const total = hour.totalCount;
    return { time: hour.time, total };
  });

  return (
    <>
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={totalData}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            interval={0}
            tickFormatter={(value) => `${value}`}
          />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="blue"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineCharts;
