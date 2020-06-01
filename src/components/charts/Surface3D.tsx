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
    async function getData() {

      const rows:[] = await fetchData("./csv/_surface3D.csv")

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
    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />;
};

export default Surface3D;
