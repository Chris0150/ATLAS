import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import fetchData from "../../utils/_data";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface dataModel{
  name: String,
  type: String,
  mode: String,
  x: String[],
  y: String[],
  marker: { color: String }
}

const Bars: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});
  const [config, setConfig] = useState({});

  useEffect(() => {

    async function getData() {
      const rows:[] =  await fetchData("./csv/_bars.csv")

      function treatData(rows) {
        var data = [];
        for (var i = 0; i < rows.length - 1; i++) {
          var dataRow:dataModel = {
            name: rows[i].name,
            type: rows[i].type,
            mode: rows[i].mode,
            x: [rows[i].x__001, rows[i].x__002, rows[i].x__003],
            y: [rows[i].y__001, rows[i].y__002, rows[i].y__003],
            marker: { color: rows[i].marker__color },
          }
          data.push(dataRow);
        }
        return data
      }

      var chartConfig = configurationJSON.config;
      var chartLayout = layoutJSON.layout.bars;
      var chartData = treatData(rows);

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />;
};

export default Bars;
