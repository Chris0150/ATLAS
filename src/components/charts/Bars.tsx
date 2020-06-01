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

    async function getData() {
      const rows:[] =  await fetchData("./csv/_bars.csv")

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
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />;
};

export default Bars;
