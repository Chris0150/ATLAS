import React  from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel {
  type: String,
  lon: Number,
  lat: Number,
  text: String,
  marker: {
    size: Number,
    color: String
  }
}

const Map:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function setChart() {
      const { chartData, chartConfig, chartLayout } = await Utils.loadData("map");

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Map;
