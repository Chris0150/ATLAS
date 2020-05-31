import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import fetchData   from "../../utils/_data";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface dataModel{
  type: String,
  locationmode: String,
  lat: Number,
  lon: Number,
  hoverinfo: String,
  text: String[],
  marker: {
    size: Number[],
    cmin: Number,
    cmax: Number,
    color: Number[],
    colorscale: String,
    colorbar: {
        title: String,
        ticksuffix: String,
        showticksuffix: String
    },
    line: {
        color: String
    }}
}

function unpack(rows, key) {
  return rows.map(function (row) { return row[key]; });
}

const MapBubbles: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});
  const [config, setConfig] = useState({});

  useEffect(() => {
    async function getData() {      
      const rows:[] = await fetchData("./csv/_mapBub.csv")

      var cityName = unpack(rows, 'name'),
        cityPop = unpack(rows, 'pop'),
        cityLat = unpack(rows, 'lat'),
        cityLon = unpack(rows, 'lon'),
        citySize: number[] = [],
        hoverText: string[] = [],
        scale = 50000;

      for (var i = 0; i < cityPop.length; i++) {
        var currentSize:number = cityPop[i] / scale || 0;
        var currentText:string = cityName[i] + " pop: " + cityPop[i];
        citySize.push(currentSize);
        hoverText.push(currentText);
      }

      var chartData:[dataModel] = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: cityLat,
        lon: cityLon,
        hoverinfo: 'text',
        text: hoverText,
        marker: {
          size: citySize,
          color: [10, 20, 40, 50],
          cmin: 0,
          cmax: 50,
          colorscale: 'Reds',
          colorbar: {
              title: 'Concentration',
              ticksuffix: '%',
              showticksuffix: 'last'
          },
          line: {
              color: 'black'
          }
        }
      }];

      var chartConfig = configurationJSON.config;
      var chartLayout = layoutJSON.layout.mapBubbles;

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default MapBubbles;
