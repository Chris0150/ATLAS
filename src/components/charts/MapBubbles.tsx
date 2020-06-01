import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel{
  type: String,
  locationmode: String,
  lat: Number,
  lon: Number,
  hoverinfo: String,
  text: String[],
  marker: {
    size?: String,
    color?: String,
    cmin: Number,
    cmax: Number,
    colorscale: String,
    colorbar: {
        title: String,
        ticksuffix: String,
        showticksuffix: String
    },
    line: {
        color: String
    }}
}

const MapBubbles:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function setChart() {      
      const { chartData, chartConfig, chartLayout } = await Utils.loadData("mapBub");

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default MapBubbles;
