import React , { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import fetchData from "../../utils/_data";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface dataModel {
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

const Map: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});
  const [config, setConfig] = useState({});

  useEffect(() => {
    async function getData() {
      const rows: [] = await fetchData("./csv/_map.csv")

      var chartData:[dataModel] = [
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
