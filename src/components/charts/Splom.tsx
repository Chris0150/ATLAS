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

        async function setChart() {
            const { chartData, chartConfig, chartLayout } = await Utils.loadData("splom");

            setData(chartData);
            setConfig(chartConfig);
            setLayout(chartLayout);
        }
        setChart();
    }, []);

    return <Plot data={data} layout={layout} config={config} />
};

export default Splom;
