import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel{
  type: String,
  locationmode: String,
  locations: String,
  z: Number,
  text: String,
  zauto: Boolean,
  zmin: Number,
  zmax: Number
}

const MapAnimated:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [frames, setFrames] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {
    async function getData() {
      const rows:[IDataModel] = await Utils.fetchData("./csv/_mapAnim.csv")
      const data = await Utils.transformData(rows, "mapAnimated");
      const chartConfig = Utils.configurationJSON.config;
      const chartData = data[0];
      const chartLayout = data[1];
      const chartFrames = data[2];

      setData(chartData);
      setLayout(chartLayout);
      setFrames(chartFrames);
      setConfig(chartConfig);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} frames={frames} config={config} />
};

export default MapAnimated;