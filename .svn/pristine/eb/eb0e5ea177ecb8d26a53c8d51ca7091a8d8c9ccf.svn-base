//主要是统一标准
import chartColors from "./colors";
export function commonChartsData(xseries, yseries, chartStyle) {
  // console.log(xseries, yseries, chartStyle,'chartStyle======')
  let series = [];
  for (let i = 0; i < yseries.length; i++) {
    // let yAxisIndex = null;
    // if (i < chartStyle.yAxisLengthArray[0]) {
    //   yAxisIndex = 0;
    // }else{
    //   yAxisIndex = 1;
    // }
    let serise1 = {
      name: chartStyle?.series[i]?.name,
      type: chartStyle?.series[i]?.type,
      data: yseries[i]
      // yAxisIndex:yAxisIndex,
    };
    series.push(serise1);
  }
  // alert(66666);
  let option = {
    color: chartColors(chartStyle?.skin,chartStyle?.echartTheme?.colourReversal),
    style: chartStyle?.style,
    legend: chartStyle?.legend,
    xAxisData: xseries,
    series: series,
    // unit:chartStyle.unit,
    yAxisLengthArray: chartStyle.yAxisLengthArray
  };

  return option;
}
