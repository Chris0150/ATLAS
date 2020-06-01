import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel {
  y: String[]
  type: String,
  name: String,
  jitter: Number,
  fillcolor: String,
  boxpoints: String,
  whiskerwidth: Number,
  marker: { size: Number },
  line: { width: Number, color: String },
}

const Boxes: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function setChart() {
      const { chartData, chartConfig, chartLayout } = await Utils.loadData("boxes");

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }

    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Boxes;
