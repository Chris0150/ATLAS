
import * as Utils from "../../utils/utils";

async function fetchData (type:string) {
    const rows = await Utils.fetchData("./csv/" + type + ".csv")
    const chartData = await Utils.transformData(rows, type);
    const chartConfig = Utils.configurationJSON.config;
    const chartLayout = Utils.layoutJSON.layout[type];

    return {chartData, chartConfig, chartLayout}
}

export default fetchData;
