import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel {
  name: String,
  x: Number,
  y: Number,
  id: Number,
  text: String,
  mode: String,
  marker: {
    size: Number,
    sizemode: String,
    sizeref: Number,
    color: String
  }
}

const Bubbles:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [frames, setFrames] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function setChart() {
      const { chartData, chartConfig, chartLayout } = await Utils.loadData("bubbles");
      const chartData2 = chartData[0];
      const chartFrames = chartData[1];

      setData(chartData2);
      setFrames(chartFrames);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} frames={frames} />
};

export default Bubbles;