import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"
import fetchData from "../../utils/_data";

interface dataModel {
  x: Number[],
  y: Number[],
  name: String,
  type: String,
  line: {
    color: String
  }
}

const Regression: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});
  const [config, setConfig] = useState({});

  useEffect(() => {

    async function getData() {
      const rows: [] = await fetchData("./csv/_regression.csv")

      function treatData(rows) {
        var data = [];
        for (var i = 0; i < rows.length; i++) {
          var dataRow: dataModel = {
            type: "line",
            name: rows[i].name,
            x: [rows[i].x__0, rows[i].x__1, rows[i].x__2, rows[i].x__3, rows[i].x__4, rows[i].x__5, rows[i].x__6],
            y: [rows[i].y__0, rows[i].y__1, rows[i].y__2, rows[i].y__3, rows[i].y__4, rows[i].y__5, rows[i].y__6],
            line: { color: rows[i].line__color },
          }
          data.push(dataRow);
        }
        return data
      }

      var chartConfig = configurationJSON.config;
      var chartLayout = layoutJSON.layout.regression;
      var chartData = treatData(rows);

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Regression;

