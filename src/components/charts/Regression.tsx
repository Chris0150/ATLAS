import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel {
  x: Number[],
  y: Number[],
  name: String,
  type: String,
  line: {
    color: String
  }
}

const Regression:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function getData() {
      const rows:[IDataModel] = await Utils.fetchData("./csv/_regression.csv")
      const chartData = await Utils.transformData(rows, "regression");
      const chartConfig = Utils.configurationJSON.config;
      const chartLayout = Utils.layoutJSON.layout.regression;

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Regression;
