import React from "react";
import Plot from "react-plotly.js";
import fetchData from "../../utils/data/parser";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface IDataModel {
  x?: Number[],
  y?: Number[],
  name: String,
  mode?: String,
  ncontours?: Number,
  colorscale?: String,
  reversescale?: Boolean,
  showscale?: Boolean,
  type: String,
  yaxis?: Number,
  xaxis?: Number,
  marker?: {
    size?: Number,
    opacity?: Number,
    color?: String
  }
}

const Histogram: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function getData() {
      const rows: [] = await fetchData("./csv/_histogram.csv")

      function treatData(rows: any[]) {
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
            if (keys[j].indexOf("y_") > -1) {
              var value2 = values[j];
              var parsedValue2 = parseFloat(value2);
              y.push(parsedValue2);
            }
          }

          var dataRow1: IDataModel = {
            x: x,
            y: y,
            mode: 'markers',
            name: rows[i].name,
            type: rows[i].type,
            marker: {
              color: rows[i].marker__color,
              size: rows[i].marker__size,
              opacity: rows[i].marker__opacity
            }
          }

          var dataRow2: IDataModel = {
            x: x,
            y: y,
            name: rows[i].name,
            ncontours: rows[i].ncontours,
            colorscale: rows[i].colorscale,
            reversescale: true,
            showscale: rows[i].showscale,
            type: rows[i].type,
          }

          var dataRow3: IDataModel = {
            x: x,
            name: rows[i].name,
            type: rows[i].type,
            marker: {
              color: rows[i].marker__color
            },
            yaxis: rows[i].yaxis,
          }

          var dataRow4: IDataModel = {
            y: y,
            name: rows[i].name,
            type: rows[i].type,
            marker: {
              color: rows[i].marker__color
            },
            xaxis: rows[i].xaxis
          }

          data.push([dataRow1, dataRow2, dataRow3, dataRow4]);
        }
        return data[0]
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
