import React from "react";
import Plot from "react-plotly.js";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json";
import fetchData from "../../utils/data/parser";

interface IDataModel {
  name: String,
  x: Number,
  y: Number,
  id: Number,
  text: String,
  mode: String,
  marker: {
    size: Number,
    sizemode: String,
    sizeref: Number,
    color: String
  }
}

const Bubbles:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [frames, setFrames] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function getData() {
      const rows: [] = await fetchData("./csv/_bubbles.csv")

      function treatData(rows:any[]) {
        var traces = [];
        var frames = [];
        var lookup = {};
        function getData(year, continent) {
          var byYear, trace;
          if (!(byYear = lookup[year])) {
            byYear = lookup[year] = {};
          }
          if (!(trace = byYear[continent])) {
            trace = byYear[continent] = {
              x: [],
              y: [],
              id: [],
              text: [],
              marker: { size: [] },
            };
          }
          return trace;
        }

        for (var i = 0; i < rows.length; i++) {
          var datum = rows[i];
          var trace = getData(datum.year, datum.continent);
          trace.text.push(datum.country);
          trace.id.push(datum.country);
          trace.x.push(datum.lifeExp);
          trace.y.push(datum.gdpPercap);
          trace.marker.size.push(datum.pop);
        }

        var years = Object.keys(lookup);
        var firstYear = lookup[years[0]];
        var continents = Object.keys(firstYear);
        var colors = [
          "#b71522",
          "#ff9800",
          "#f4c336",
          "#5c77ec",
          "#1924bb"]

        for (i = 0; i < continents.length; i++) {
          var data = firstYear[continents[i]];
          var dataRow: IDataModel = {
            name: continents[i],
            x: data.x.slice(),
            y: data.y.slice(),
            id: data.id.slice(),
            text: data.text.slice(),
            mode: "markers",
            marker: {
              size: data.marker.size.slice(),
              sizemode: "area",
              sizeref: 200000,
              color: colors[i]
            }
          }
          traces.push(dataRow);
        }

        for (i = 0; i < years.length; i++) {
          frames.push({
            name: years[i],
            // eslint-disable-next-line
            data: continents.map(function (continent) {
              return getData(years[i], continent);
            }),
          });
        }

        return [traces, frames]
      }

      var chartConfig = configurationJSON.config;
      var chartLayout = layoutJSON.layout.bubbles;
      var data = treatData(rows);
      var chartData = data[0];
      var chartFrames = data[1];

      setData(chartData);
      setFrames(chartFrames);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} frames={frames} />
};

export default Bubbles;
