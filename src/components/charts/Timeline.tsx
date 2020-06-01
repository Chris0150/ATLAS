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
        async function getData() {
            const rows:[] = await fetchData("./csv/_timeline.csv")

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
        getData();
    }, []);

    return <Plot data={data} layout={layout} config={config} frames={frames}/>
};

export default Timeline;
