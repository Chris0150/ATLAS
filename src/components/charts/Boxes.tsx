import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

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

    async function getData() {
      const rows:[IDataModel] = await Utils.fetchData("./csv/_boxes.csv")
      const chartData = await Utils.transformData(rows, "boxes");
      const chartConfig = Utils.configurationJSON.config;
      const chartLayout = Utils.layoutJSON.layout.boxes;      

      setData(chartData);
      setConfig(chartConfig);
      setLayout(chartLayout);
    }

    getData();
  }, []);

  return <Plot data={data} layout={layout} config={config} />
};

export default Boxes;
