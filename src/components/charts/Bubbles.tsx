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

    async function getData() {
      const rows:[IDataModel] = await Utils.fetchData("./csv/_bubbles.csv")
      const data = await Utils.transformData(rows, "bubbles");
      const chartConfig = Utils.configurationJSON.config;
      const chartLayout = Utils.layoutJSON.layout.bubbles;
      const chartData = data[0];
      const chartFrames = data[1];

      setData(chartData);
      setFrames(chartFrames);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} frames={frames} />
};

export default Bubbles;