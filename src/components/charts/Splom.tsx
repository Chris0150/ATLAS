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
        async function getData() {
            const rows:[] = await fetchData("./csv/_splom.csv")

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
        getData();
    }, []);

    return <Plot data={data} layout={layout} config={config} />
};

export default Splom;
