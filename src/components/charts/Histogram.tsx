import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel {
  x?: Number[],
  y?: Number[],
  name: String,
  mode?: String,
  ncontours?: Number,
  colorscale?: String,
  reversescale?: Boolean,
  showscale?: Boolean,
  type: String,
  yaxis?: Number,
  xaxis?: Number,
  marker?: {
    size?: Number,
    opacity?: Number,
    color?: String
  }
}

const Histogram: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function getData() {
      const rows:[IDataModel] = await Utils.fetchData("./csv/_histogram.csv")
      const chartData = await Utils.transformData(rows, "histogram");
      const chartConfig = Utils.configurationJSON.config;
      const chartLayout = Utils.layoutJSON.layout.histogram;

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Histogram;
