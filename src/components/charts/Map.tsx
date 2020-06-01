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

    async function getData() {
      const rows:[IDataModel] = await Utils.fetchData("./csv/_map.csv")
      const chartData = await Utils.transformData(rows, "map");
      const chartConfig =  Utils.configurationJSON.config;
      const chartLayout = Utils.layoutJSON.layout.map;

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Map;
