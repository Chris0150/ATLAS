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
    async function setChart() {      
      const { chartData, chartConfig } = await Utils.loadData("mapAnim");
      
      const chartData2 = chartData[0];
      const chartLayout2 = chartData[1];
      const chartFrames = chartData[2];

      setData(chartData2);
      setFrames(chartFrames);
      setConfig(chartConfig);
      setLayout(chartLayout2);
    }
    setChart();
  }, []);

  return <Plot data={data} layout={layout} frames={frames} config={config} />
};

export default MapAnimated;