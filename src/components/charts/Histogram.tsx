import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import fetchData from "../../utils/_data";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface dataModel {
  x: Number[],
  y: Number[],
  name: String,
  ncontours: Number,
  colorscale: String,
  reversescale: Boolean,
  showscale: Boolean,
  type: String,
  yaxis: Number,
  xaxis: Number,
  marker: {
    size: Number,
    opacity: Number,
    color: String
  }
}

const Histogram: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});
  const [config, setConfig] = useState({});

  useEffect(() => {

    async function getData() {
      const rows: [] = await fetchData("./csv/_histogram.csv")

      function treatData(rows) {
        var data = [];

        for (var i = 1; i < 4; i++) {
          let x = []
          let y = []
          let values: any = Object.values(rows[i]);
          let keys = Object.keys(rows[i]);

          for (var j = 0; j < values.length; j++) {
            if (keys[j].indexOf("x_") > -1) {
              var value = values[j];
              var parsedValue = parseFloat(value);
              x.push(parsedValue);
            }
          }

          for (var k = 0; k < values.length; k++) {
            if (keys[k].indexOf("y_") > -1) y.push(parseFloat(values[k]))
          }

          var dataRow: dataModel = {
            x: x,
            y: y,
            name: rows[i].name,
            ncontours: rows[i].ncontours,
            colorscale: rows[i].colorscale,
            reversescale: true,
            showscale: rows[i].showscale,
            type: rows[i].type,
            marker: {
              color: rows[i].marker__color,
              size: rows[i].marker__size,
              opacity: rows[i].marker__opacity
            },
            yaxis: rows[i].yaxis,
            xaxis: rows[i].xaxis
          }

          data.push(dataRow);
        }
        return data
      }

      var chartConfig = configurationJSON.config;
      var chartLayout = layoutJSON.layout.histogram;
      var chartData = treatData(rows);

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Histogram;
