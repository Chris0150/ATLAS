

// This function receives the data rows loaded from the .csv file, 
// and creates with them the necessary structure needed for the corresponding chart.
async function transformData(rows, chart) {
    let chartData;
    let dataRow;
    let data;
    let frames;
    let colors;
    let x;
    let y;
    let i;
    let z;
    let n;

    switch (chart) {
        //////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////// BARS //////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "bars":
            data = [];
            for (i = 0; i < rows.length - 1; i++) {
                dataRow = {
                    name: rows[i].name,
                    type: rows[i].type,
                    mode: rows[i].mode,
                    x: [rows[i].x__001, rows[i].x__002, rows[i].x__003],
                    y: [rows[i].y__001, rows[i].y__002, rows[i].y__003],
                    marker: { color: rows[i].marker__color },
                }
                data.push(dataRow);
            }
            return data;

        //////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////// BOXES /////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "boxes":
            data = [];
            for (i = 0; i < rows.length; i++) {
                dataRow = {
                    type: "box",
                    name: rows[i].name,
                    boxpoints: "all",
                    jitter: 0.5,
                    whiskerwidth: 0.2,
                    fillcolor: rows[i].fillcolor,
                    marker: { size: 2 },
                    line: { width: 1, color: rows[i].fillcolor },
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

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////// BUBBLES /////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "bubbles":
            var traces = [];
            frames = [];
            var lookup = {};
            const getData = (year, continent) => {
                var byYear, trace;
                if (!(byYear = lookup[year])) {
                    byYear = lookup[year] = {};
                }
                if (!(trace = byYear[continent])) {
                    trace = byYear[continent] = {
                        x: [],
                        y: [],
                        id: [],
                        text: [],
                        marker: { size: [] },
                    };
                }
                return trace;
            }

            for (i = 0; i < rows.length; i++) {
                var datum = rows[i];
                var trace = getData(datum.year, datum.continent);
                trace.text.push(datum.country);
                trace.id.push(datum.country);
                trace.x.push(datum.lifeExp);
                trace.y.push(datum.gdpPercap);
                trace.marker.size.push(datum.pop);
            }

            var years = Object.keys(lookup);
            var firstYear = lookup[years[0]];
            var continents = Object.keys(firstYear);
            colors = [
                "#b71522",
                "#ff9800",
                "#f4c336",
                "#5c77ec",
                "#1924bb"]

            for (i = 0; i < continents.length; i++) {
                data = firstYear[continents[i]];
                dataRow = {
                    name: continents[i],
                    x: data.x.slice(),
                    y: data.y.slice(),
                    id: data.id.slice(),
                    text: data.text.slice(),
                    mode: "markers",
                    marker: {
                        size: data.marker.size.slice(),
                        sizemode: "area",
                        sizeref: 200000,
                        color: colors[i]
                    }
                }
                traces.push(dataRow);
            }

            for (i = 0; i < years.length; i++) {
                frames.push({
                    name: years[i],
                    // eslint-disable-next-line
                    data: continents.map(function (continent) {
                        return getData(years[i], continent);
                    }),
                });
            }

            return [traces, frames]

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////// HISTOGRAM ///////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "histogram":
            x = [];
            y = [];
            for (i = 0; i < 500; i++) {
                x[i] = Math.random();
                y[i] = Math.random() + 1;
            }

            data = [{
                    x: x,
                    y: y,
                    bgcolor: "transparent",
                    plot_bgcolor: "transparent",
                    paper_bgcolor: "transparent",
                    colorscale: 'Reds',
                    type: 'histogram2dcontour',
                    contours: {
                        showlabels: true,
                        labelfont: {
                            family: 'Raleway',
                            color: 'white'
                        }
                    },
                    hoverlabel: {
                        bgcolor: 'white',
                        bordercolor: 'black',
                        font: {
                            family: 'Raleway',
                            color: 'black'
                        }
                    }
                }];

            return data;

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////// MAP GEO /////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "map":

            const unpack2 = (rows, key) => {
                return rows.map(function (row) {
                    return row[key];
                });
            }

            chartData = [
                {
                    type: "scattermapbox",
                    lon: unpack2(rows, "Lon"),
                    lat: unpack2(rows, "Lat"),
                    text: unpack2(rows, "Globvalue"),
                    marker: { color: "#b71522", size: 5 }
                },
            ];

            return chartData;

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////// MAP ANIMATED ////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "mapAnim":

            const filter_and_unpack = (rows, key, year) => {
                // eslint-disable-next-line
                return rows.filter((row) => row["year"] == year).map((row) => row[key]);
            }

            frames = [];
            var slider_steps = [];

            n = 11;
            var num = 1952;
            for (i = 0; i <= n; i++) {
                z = filter_and_unpack(rows, "lifeExp", num);
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

            chartData = [
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

            return [chartData, chartLayout, frames]

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////// MAP BUBBLES /////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "mapBub":
            const unpack3 = (rows, key) => {
                return rows.map(function (row) { return row[key]; });
            }

            var cityName = unpack3(rows, 'name'),
                cityPop = unpack3(rows, 'pop'),
                cityLat = unpack3(rows, 'lat'),
                cityLon = unpack3(rows, 'lon'),
                citySize: number[] = [],
                hoverText: string[] = [],
                scale = 50000;

            for (i = 0; i < cityPop.length; i++) {
                var currentSize: number = cityPop[i] / scale || 0;
                var currentText: string = cityName[i] + " pop: " + cityPop[i];
                citySize.push(currentSize);
                hoverText.push(currentText);
            }

            chartData = [{
                type: 'scattergeo',
                locationmode: 'USA-states',
                lat: cityLat,
                lon: cityLon,
                hoverinfo: 'text',
                text: hoverText,
                marker: {
                    size: citySize,
                    color: [10, 20, 40, 50],
                    cmin: 0,
                    cmax: 50,
                    colorscale: 'Reds',
                    colorbar: {
                        title: 'Concentration',
                        ticksuffix: '%',
                        showticksuffix: 'last'
                    },
                    line: {
                        color: 'black'
                    }
                }
            }];

            return chartData;

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////// REGRESSION //////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "regression":
            data = [];
            for (i = 0; i < rows.length; i++) {
                dataRow = {
                    type: "line",
                    name: rows[i].name,
                    x: [rows[i].x__0, rows[i].x__1, rows[i].x__2, rows[i].x__3, rows[i].x__4, rows[i].x__5, rows[i].x__6],
                    y: [rows[i].y__0, rows[i].y__1, rows[i].y__2, rows[i].y__3, rows[i].y__4, rows[i].y__5, rows[i].y__6],
                    line: { color: rows[i].line__color },
                }
                data.push(dataRow);
            }
            return data

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////// SPLOM ///////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "splom":

            const unpack4 = (rows, key) => {
                return rows.map(function (row) { return row[key.replace('.', ' ')]; });
            }

            colors = []

            for (i = 0; i < unpack4(rows, 'class').length; i++) {
                if (unpack4(rows, 'class')[i] === "SiO2") {
                    colors.push(0)
                } else if (unpack4(rows, 'class')[i] === "Al2O3") {
                    colors.push(0.5)
                } else if (unpack4(rows, 'class')[i] === "Fe2O3") {
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

            data = [{
                type: 'splom',
                dimensions: [
                    { label: 'Molecular charge', values: unpack4(rows, 'Molecular charge') },
                    { label: 'Molecular mass', values: unpack4(rows, 'Molecular mass') },
                    { label: 'Absolute molar mass', values: unpack4(rows, 'Absolute molar mass') },
                    { label: 'Relative isotopic mass', values: unpack4(rows, 'Relative isotopic mass') }
                ],
                text: unpack4(rows, 'class'),
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

            return data;

        //////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////// SURFACE 3D ////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "surface3D":
            data = [];
            z = [];
            for (i = 0; i < rows.length; i++) {
                z.push(Object.values(rows[i]))
            }
            dataRow = {
                type: "surface",
                masterGraph: {
                    title: "Surface3D",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    zAxis: "zAxis"
                },
                z: z,
            }
            data.push(dataRow);

            return data

        //////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////// TIMELINE ////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        case "timeline":

            const unpack5 = (rows, key) => {
                return rows.map(function (row) { return row[key]; });
            }

            frames = []
            x = unpack5(rows, 'Date')
            y = unpack5(rows, 'High')
            var x2 = unpack5(rows, 'Date')
            var y2 = unpack5(rows, 'Low')

            n = 100;
            for (i = 0; i < n; i++) {
                frames[i] = { data: [{ x: [], y: [] }, { x: [], y: [] }] }
                frames[i].data[1].x = x.slice(0, i + 1);
                frames[i].data[1].y = y.slice(0, i + 1);
                frames[i].data[0].x = x2.slice(0, i + 1);
                frames[i].data[0].y = y2.slice(0, i + 1);
            }

            var trace2 = {
                type: "scatter",
                mode: "lines",
                name: 'High',
                fill: 'tonexty',
                x: frames[5].data[1].x,
                y: frames[5].data[1].y,
                line: { color: '#b71522' }
            }

            var trace1 = {
                type: "scatter",
                mode: "lines",
                name: 'Low',
                fill: '',
                x: frames[5].data[0].x,
                y: frames[5].data[0].y,
                line: { color: 'orange' }
            }

            return [[trace1, trace2], frames];

        default:
            break;
    }
}

export default transformData;
