import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel {
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

const Splom: React.FC = (): JSX.Element => {
    const [data, setData] = React.useState([]);
    const [layout, setLayout] = React.useState({});
    const [config, setConfig] = React.useState({});

    React.useEffect(() => {

        async function getData() {
            const rows:[IDataModel] = await Utils.fetchData("./csv/_splom.csv")
            const chartData = await Utils.transformData(rows, "splom");
            const chartLayout = Utils.layoutJSON.layout.splom;
            const chartConfig = Utils.configurationJSON.config;

            setData(chartData);
            setConfig(chartConfig);
            setLayout(chartLayout);
        }
        getData();
    }, []);

    return <Plot data={data} layout={layout} config={config} />
};

export default Splom;
