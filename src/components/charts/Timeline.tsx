import React from "react";
import Plot from "react-plotly.js";
import * as Utils from "../../utils/utils";

interface IDataModel {
    y: String[],
    x: String[],
    type: String,
    mode: String,
    name: String,
    fill: String,
    line: { color: String }
}

const Timeline: React.FC = (): JSX.Element => {
    const [data, setData] = React.useState([]);
    const [frames, setFrames] = React.useState([]);
    const [layout, setLayout] = React.useState({});
    const [config, setConfig] = React.useState({});

    React.useEffect(() => {

        async function setChart() {
            const { chartData, chartConfig, chartLayout } = await Utils.loadData("timeline");

            setData(chartData[0]);
            setFrames(chartData[1]);
            setConfig(chartConfig);
            setLayout(chartLayout);
        }
        setChart();
    }, []);

    return <Plot data={data} layout={layout} config={config} frames={frames} />
};

export default Timeline;