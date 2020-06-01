import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel {
  z: Number[],
  type: String,
  masterGraph: {
    title: String,
    xAxis: String,
    yAxis: String,
    zAxis: String
  }
}

const Surface3D:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function setChart() {
      const { chartData, chartConfig, chartLayout } = await Utils.loadData("surface3D");

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />;
};

export default Surface3D;
