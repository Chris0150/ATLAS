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
    async function getData() {
      const rows: [] = await fetchData("./csv/_mapAnim.csv")

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
    getData();
  }, []);

  return <Plot data={data} layout={layout} frames={frames} config={config} />
};

export default MapAnimated;
