# ATLASWeb
> Source: Atmospheric Lagrangian dispersion model for tephra transport and deposition

https://www.sciencedirect.com/science/article/pii/S0098300418310008?dgcid=rss_sd_all

![charts](https://i.imgur.com/XnIWP0r.jpg)

## Table of Contents
* [Installation](#installation)
* [Development](#development)
* [Description](#description)
* [Features](#features)
* [Todo](#todo)
* [Charts](#charts)
  * [Bars](#bars)
  * [Boxes](#boxes)
  * [Bubbles](#bubbles)
  * [Histogram](#histogram)
  * [Geo Map](#geomap)
  * [Animated Map](#animatedmap)
  * [Bubbles Map](#bubblemap)
  * [Regression](#regression)
  * [Splom](#splom)
  * [Surface 3D](#surface)
  * [Timeline](#timeline)

## Installation
In the root directory, run the following command to install necessary dependencies:
```
npm install
```

## Development
In order to compile the code, from the repository folder, type in your terminal
```
npm install & npm start
```
This will install the dependencies required and run the start script to run the application in the browser.


## Description
React + Typescript app to display calculated results from ATLAS 1.0:Atmospheric Lagrangian dispersion model for tephra transport and deposition, with encapsulated Plotly-D3 charts as React components.

## Features
* Bars
* Boxes
* Bubbles
* Histogram
* Geographic Map
* Animated Map
* Bubbles Map
* Regression
* Splom
* Surface3D
* Timeline

## Todo
* More Charts
* More Animations
* Tests

## Charts
Collection of interactive charts:

### bars
![bars](https://imgur.com/yLWyEXM.png)
```javascript
import React from "react";
import Plot from "react-plotly.js";
import fetchData from "../../utils/data/parser";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface IDataModel{
  x: String[],
  y: String[],
  name: String,
  type: String,
  mode: String,
  marker: { color: String }
}

const Bars:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function setChart() {
      const rows:[] =  await fetchData("./csv/bars.csv")

      function treatData(rows:any[]) {
        var data = [];
        for (var i = 0; i < rows.length - 1; i++) {
          var dataRow:IDataModel = {
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
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />;
};

export default Bars;

```

### boxes
![boxes](https://imgur.com/DvrtUmf.png)
```javascript
import React from "react";
import Plot from "react-plotly.js";
import  fetchData   from "../../utils/data/parser";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface IDataModel{
  y: String[]
  type: String,
  name: String,
  jitter: Number,
  fillcolor: String,
  boxpoints: String,
  whiskerwidth: Number,
  marker: { size: Number },
  line: { width: Number, color: String },
}

const Boxes:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function setChart() {
      const rows:[] = await fetchData("./csv/boxes.csv")

      function treatData(rows:any[]) {
        var data = [];
        for (var i = 0; i < rows.length; i++) {
          var dataRow:IDataModel = {
            type: "box",
            name: rows[i].name,
            boxpoints: "all",
            jitter: 0.5,
            whiskerwidth: 0.2,
            fillcolor: rows[i].fillcolor,
            marker: { size: 2 },
            line: { width: 1, color:rows[i].fillcolor },
            y: [rows[i].y__0, rows[i].y__1, rows[i].y__2, rows[i].y__3, rows[i].y__4, rows[i].y__5,
            rows[i].y__6, rows[i].y__7, rows[i].y__8, rows[i].y__9, rows[i].y__10, rows[i].y__11,
            rows[i].y__12, rows[i].y__13, rows[i].y__14, rows[i].y__15, rows[i].y__16, rows[i].y__17,
            rows[i].y__18, rows[i].y__19, rows[i].y__20, rows[i].y__21, rows[i].y__22, rows[i].y__23,
            rows[i].y__24, rows[i].y__25, rows[i].y__26, rows[i].y__27, rows[i].y__28, rows[i].y__29,
            rows[i].y__30]
          }
          data.push(dataRow);
        }
        return data
      }

      var chartConfig = configurationJSON.config;
      var chartLayout = layoutJSON.layout.boxes;
      var chartData = treatData(rows);

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }

    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Boxes;

```

### bubbles
![bubbles](https://imgur.com/bAdtH0l.png)
```javascript
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

    async function setChart() {
      const rows: [] = await fetchData("./csv/bubbles.csv")

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
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} frames={frames} />
};

export default Bubbles;

```

### histogram
![histogram](https://imgur.com/65Lr4Sv.png)
```javascript
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

    async function setChart() {
      const rows: [] = await fetchData("./csv/histogram.csv")

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
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Histogram;

```

### geomap
![geomap](https://imgur.com/ZlUoiXq.png)
```javascript
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
    async function setChart() {
      const rows:[] = await fetchData("./csv/map.csv")

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
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Map;

```

### animatedmap
![animatedmap](https://imgur.com/hW14peX.png)
```javascript
import React from "react";
import Plot from "react-plotly.js";
import configurationJSON from "../../utils/config.json"
import fetchData from "../../utils/data/parser";

interface IDataModel{
  type: String,
  locationmode: String,
  locations: String,
  z: Number,
  text: String,
  zauto: Boolean,
  zmin: Number,
  zmax: Number
}

function filter_and_unpack(rows, key, year) {
  // eslint-disable-next-line
  return rows.filter((row) => row["year"] == year).map((row) => row[key]);
}

const MapAnimated:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [frames, setFrames] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {
    async function setChart() {
      const rows: [] = await fetchData("./csv/mapAnim.csv")

      var frames = [];
      var slider_steps = [];

      var n = 11;
      var num = 1952;
      for (var i = 0; i <= n; i++) {
        var z = filter_and_unpack(rows, "lifeExp", num);
        var locations = filter_and_unpack(rows, "iso_alpha", num);
        frames[i] = {
          data: [{ z: z, locations: locations, text: locations }],
          name: num,
        };
        slider_steps.push({
          label: num.toString(),
          method: "animate",
          args: [
            [num],
            {
              mode: "immediate",
              transition: { duration: 300 },
              frame: { duration: 300 },
            },
          ],
        });
        num = num + 5;
      }

      var chartConfig =  configurationJSON.config;
      var chartData:[IDataModel] = [
        {
          type: "choropleth",
          locationmode: "world",
          locations: frames[0].data[0].locations,
          z: frames[0].data[0].z,
          text: frames[0].data[0].locations,
          zauto: false,
          zmin: 30,
          zmax: 90,
        },
      ];

      var chartLayout = {
        title: "Evolution of air pollutants concentration (PPM) per country:", 
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        width: 1080,
        height: 760,
        geo: {
          scope: "world",
          countrycolor: "rgb(255, 255, 255)",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          showland: true,
          landcolor: "rgb(217, 217, 217)",
          showlakes: true,
          lakecolor: "rgb(255, 255, 255)",
          subunitcolor: "rgb(255, 255, 255)",
          lonaxis: {},
          lataxis: {},
        },
        updatemenus: [
          {
            x: 0.1,
            y: 1,
            yanchor: "top",
            xanchor: "right",
            showactive: false,
            direction: "left",
            type: "buttons",
            bgcolor: "#d39697",
            buttons: [
              {
                method: "animate",
                args: [
                  null,
                  {
                    fromcurrent: true,
                    transition: {
                      duration: 200,
                    },
                    frame: {
                      duration: 500,
                    },
                  },
                ],
                label: "Play",
              },
              {
                method: "animate",
                args: [
                  [null],
                  {
                    mode: "immediate",
                    transition: {
                      duration: 0,
                    },
                    frame: {
                      duration: 0,
                    },
                  },
                ],
                label: "Pause",
              },
            ],
          },
        ],
        sliders: [
          {
            active: 0,
            steps: slider_steps,
            x: 0.1,
            y: 1,
            len: 0.9,
            xanchor: "left",
            yanchor: "top",
            pad: { t: -30, b: 10, l: 20 },
            currentvalue: {
              visible: true,
              prefix: "Year:",
              xanchor: "right",
              font: {
                size: 20,
                color: "#666",
              },
            },
            transition: {
              duration: 300,
              easing: "cubic-in-out",
            },
          },
        ],
      };

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
      setFrames(frames);
    }
    setChart();
  }, []);

  return <Plot data={data} layout={layout} frames={frames} config={config} />
};

export default MapAnimated;

```

### bubblemap
![bubblemap](https://imgur.com/tqiLR33.png)
```javascript
import React from "react";
import Plot from "react-plotly.js";
import fetchData   from "../../utils/data/parser";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface IDataModel{
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

const MapBubbles:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {
    async function setChart() {      
      const rows:[] = await fetchData("./csv/mapBub.csv")

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

      var chartData:[IDataModel] = [{
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
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default MapBubbles;

```

### regression
![regression](https://imgur.com/QHA5lKm.png)
```javascript
import React from "react";
import Plot from "react-plotly.js";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"
import fetchData from "../../utils/data/parser";

interface IDataModel {
  x: Number[],
  y: Number[],
  name: String,
  type: String,
  line: {
    color: String
  }
}

const Regression:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {

    async function setChart() {
      const rows:[] = await fetchData("./csv/regression.csv")

      function treatData(rows) {
        var data = [];
        for (var i = 0; i < rows.length; i++) {
          var dataRow: IDataModel = {
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
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Regression;

```

### splom
![splom](https://imgur.com/vCJLBIV.png)
```javascript
import React from "react";
import Plot from "react-plotly.js";
import fetchData   from "../../utils/data/parser";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface IDataModel{
    type: String,
    text: String,
    dimensions: [
        { label: String, values: [] },
        { label: String, values: [] },
        { label: String, values: [] },
        { label: String, values: [] }
    ],
    marker: {
        color: String[],
        colorscale: any,
        size: Number,
        line: {
            color: String,
            width: Number
        }
    }
  }

function unpack(rows, key) {
    return rows.map(function (row) { return row[key.replace('.', ' ')]; });
}

const Splom:React.FC = ():JSX.Element => {
    const [data, setData] = React.useState([]);
    const [layout, setLayout] = React.useState({});
    const [config, setConfig] = React.useState({});

    React.useEffect(() => {
        async function setChart() {
            const rows:[] = await fetchData("./csv/splom.csv")

            let colors = []
            let i: number;

            for (i = 0; i < unpack(rows, 'class').length; i++) {
                if (unpack(rows, 'class')[i] === "SiO2") {
                    colors.push(0)
                } else if (unpack(rows, 'class')[i] === "Al2O3") {
                    colors.push(0.5)
                } else if (unpack(rows, 'class')[i] === "Fe2O3") {
                    colors.push(1)
                }
            }

            var pl_colorscale = [
                [0.0, '#f4c336'],
                [0.333, '#f4c336'],
                [0.333, '#f48e36'],
                [0.666, '#f48e36'],
                [0.666, '#f44336'],
                [1, '#f44336']
            ]

            var data:[IDataModel] = [{
                type: 'splom',
                dimensions: [
                    { label: 'Molecular charge', values: unpack(rows, 'Molecular charge') },
                    { label: 'Molecular mass', values: unpack(rows, 'Molecular mass') },
                    { label: 'Absolute molar mass', values: unpack(rows, 'Absolute molar mass') },
                    { label: 'Relative isotopic mass', values: unpack(rows, 'Relative isotopic mass') }
                ],
                text: unpack(rows, 'class'),
                marker: {
                    color: colors,
                    colorscale: pl_colorscale,
                    size: 7,
                    line: {
                        color: 'white',
                        width: 0.5
                    }
                }
            }]

            var chartLayout = layoutJSON.layout.splom;
            var chartConfig = configurationJSON.config;

            setData(data);
            setConfig(chartConfig);
            setLayout(chartLayout);
        }
        setChart();
    }, []);

    return <Plot data={data} layout={layout} config={config} />
};

export default Splom;

```

### surface
![surface](https://imgur.com/YZXAuyA.png)
```javascript
import React from "react";
import Plot from "react-plotly.js";
import fetchData from "../../utils/data/parser";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface IDataModel {
  z: Number[],
  type: String,
  masterGraph: {
    title: String,
    xAxis: String,
    yAxis: String,
    zAxis: String
  }
}

const Surface3D:React.FC = ():JSX.Element => {
  const [data, setData] = React.useState([]);
  const [layout, setLayout] = React.useState({});
  const [config, setConfig] = React.useState({});

  React.useEffect(() => {
    async function setChart() {

      const rows:[] = await fetchData("./csv/surface3D.csv")

      function treatData(rows: []) {
        var data = [];
        var z = [];
        for (var i = 0; i < rows.length; i++) {
          z.push(Object.values(rows[i]))
        }
        var dataRow:IDataModel = {
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
    setChart();
  }, []);

  return <Plot data={data} layout={layout} config={config} />;
};

export default Surface3D;

```

### timeline
![timeline](https://imgur.com/xm6nVrF.png)
```javascript
import React from "react";
import Plot from "react-plotly.js";
import fetchData from "../../utils/data/parser";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface IDataModel{
  y: String[],
  x: String[]
  type: String,
  mode: String,
  name: String,
  fill: String,
  line: { color: String },
}

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

const Timeline:React.FC = ():JSX.Element => {
    const [data, setData] = React.useState([]);
    const [frames, setFrames] = React.useState([]);
    const [layout, setLayout] = React.useState({});
    const [config, setConfig] = React.useState({});

    React.useEffect(() => {
        async function setChart() {
            const rows:[] = await fetchData("./csv/timeline.csv")

            var frames = []
            var x = unpack(rows, 'Date')
            var y = unpack(rows, 'High')
            var x2 = unpack(rows, 'Date')
            var y2 = unpack(rows, 'Low')
          
            var n = 100;
            for (var i = 0; i < n; i++) {
              frames[i] = {data: [{x: [], y: []}, {x: [], y: []}]}
              frames[i].data[1].x = x.slice(0, i+1);
              frames[i].data[1].y = y.slice(0, i+1);
              frames[i].data[0].x = x2.slice(0, i+1);
              frames[i].data[0].y = y2.slice(0, i+1);
            }
          
            var trace2:IDataModel = {
              type: "scatter",
              mode: "lines",
              name: 'High',
              fill: 'tonexty',
              x: frames[5].data[1].x,
              y: frames[5].data[1].y,
              line: {color: '#b71522'}
            }
          
            var trace1:IDataModel = {
              type: "scatter",
              mode: "lines",
              name: 'Low',
              fill: '',
              x: frames[5].data[0].x,
              y: frames[5].data[0].y,
              line: {color: 'orange'}
            }
          
            var chartData = [trace1,trace2];
            var chartLayout = layoutJSON.layout.timeline;
            var chartConfig = configurationJSON.config;

            setFrames(frames);
            setData(chartData);
            setConfig(chartConfig);
            setLayout(chartLayout);
        }
        setChart();
    }, []);

    return <Plot data={data} layout={layout} config={config} frames={frames}/>
};

export default Timeline;

```


## Credits
This library uses parts of [D3.js](https://github.com/mbostock/d3) and Plotly.js
