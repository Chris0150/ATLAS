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

    async function getData() {
      const rows:[IDataModel] = await Utils.fetchData("./csv/_surface3D.csv")
      const chartData = await Utils.transformData(rows, "surface3D");
      const chartConfig = Utils.configurationJSON.config;
      const chartLayout = Utils.layoutJSON.layout.surface3D;

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />;
};

export default Surface3D;
