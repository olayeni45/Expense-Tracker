import React from "react";
import "./css/Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
