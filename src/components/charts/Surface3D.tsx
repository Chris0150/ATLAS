import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import fetchData from "../../utils/_data";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface dataModel {
  z: Number[],
  type: String,
  masterGraph: {
    title: String,
    xAxis: String,
    yAxis: String,
    zAxis: String
  }
}

const Surface3D: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});
  const [config, setConfig] = useState({});

  useEffect(() => {
    async function getData() {

      const rows: [] = await fetchData("./csv/_surface3D.csv")

      function treatData(rows: []) {
        var data = [];
        var z = [];
        for (var i = 0; i < rows.length; i++) {
          z.push(Object.values(rows[i]))
        }
        var dataRow:dataModel = {
          type: "surface",
          masterGraph: {
            title: "Surface3D Title",
            xAxis: "xAxis",
            yAxis: "yAxis",
            zAxis: "zAxis"
          },
          z: z,
        }
        data.push(dataRow);
        return data
      }

      var chartData = treatData(rows);
      var chartConfig = configurationJSON.config;
      var chartLayout = layoutJSON.layout.surface3D;

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />;
};

export default Surface3D;
