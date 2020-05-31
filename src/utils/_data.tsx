
import Papa from "papaparse";

async function fetchData (path) {
    const response = await fetch(path);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder("utf-8");
    const csv = decoder.decode(result.value);
    const results = Papa.parse(csv, { header: true });
    return results.data;
}

export default fetchData
