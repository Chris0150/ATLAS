import React  from "react";
import Plot from "react-plotly.js";
import fetchData from "../../utils/data/parser";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

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

function unpack(rows, key) {
  return rows.map(function (row) {
    return row[key];
  });
}

const Map:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {
    async function getData() {
      const rows:[] = await fetchData("./csv/_map.csv")

      var chartData:[IDataModel] = [
        {
          type: "scattermapbox",
          lon: unpack(rows, "Lon"),
          lat: unpack(rows, "Lat"),
          text: unpack(rows, "Globvalue"),
          marker: { color: "#b71522", size: 5 }
        },
      ];

      var chartConfig =  configurationJSON.config;
      var chartLayout = layoutJSON.layout.map;

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Map;
