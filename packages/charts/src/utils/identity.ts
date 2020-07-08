

export default (d) => d;
var id: number = 0;
// generate unqiue id for chart item
export function generateChartId(chartItem: any = undefined){
    if(chartItem !== undefined){
        if(chartItem.chartId !== undefined){
            chartItem.chartId = id++;
            return chartItem.chartId;
        }
    }
    return id++;
}