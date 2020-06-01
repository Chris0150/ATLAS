import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel {
  x: String[],
  y: String[],
  name: String,
  type: String,
  mode: String,
  marker: { color: String }
}

const Bars: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function getData() {
      const rows:[IDataModel] = await Utils.fetchData("./csv/_bars.csv")
      const chartData = await Utils.transformData(rows, "bars");
      const chartConfig = Utils.configurationJSON.config;
      const chartLayout = Utils.layoutJSON.layout.bars;

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />;
};

export default Bars;
