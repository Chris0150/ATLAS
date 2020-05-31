import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import  fetchData   from "../../utils/_data";
import configurationJSON from "../../utils/config.json"
import layoutJSON from "../../utils/layout.json"

interface dataModel{
  type: String,
  name: String,
  boxpoints: String,
  jitter: Number,
  whiskerwidth: Number,
  fillcolor: String,
  marker: { size: Number },
  line: { width: Number, color: String },
  y: String[]
}

const Boxes: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});
  const [config, setConfig] = useState({});

  useEffect(() => {

    async function getData() {
      const rows:[] = await fetchData("./csv/_boxes.csv")

      function treatData(rows) {
        var data = [];
        for (var i = 0; i < rows.length; i++) {
          var dataRow:dataModel = {
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

    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Boxes;
