// export default {
//   container: '2775',
//   title: null,
//   type: 'chart',
//   echartTheme: {
//     grid: { left: 10, right: 10, bottom: 10, top: 60, containLabel: true },
//     legend: {
//       show: true,
//       textStyle: { color: 'gray' },
//       padding: [10, 10, 10, 10],
//       icon: 'rectangle',
//     },
//     xAxis: [
//       {
//         name: '',
//         nameTextStyle: { nameGap: 15, align: 'center', fontSize: 12, color: 'gray' },
//         axisLabel: { rotate: 0, textStyle: { color: 'gray', fontSize: 12 } },
//       },
//       {
//         name: '',
//         nameTextStyle: { nameGap: 15, align: 'center', fontSize: 12, color: 'gray' },
//         axisLabel: { rotate: 0, textStyle: { color: 'gray', fontSize: 12 } },
//       },
//     ],
//     yAxis: [
//       {
//         name: '',
//         nameTextStyle: { nameGap: 15, align: 'center', fontSize: 12, color: 'gray' },
//         axisLabel: { rotate: 0, textStyle: { color: 'gray', fontSize: 12 } },
//       },
//       {
//         name: '',
//         nameTextStyle: { nameGap: 15, align: 'center', fontSize: 12, color: 'gray' },
//         axisLabel: { rotate: 0, textStyle: { color: 'gray', fontSize: 12 } },
//       },
//     ],
//     style: { barStyle: {} },
//   },
//   skin: 'xiangshu60',
//   style: 'dbubble',
//   yAxisLengthArray: [1, 0],
//   series: [{ type: 'line', name: 'sumkuoyang', xAxisName: '', yAxisName: '' }],
// };



function dBubbleSet(d){
  let valueFont={
    color:d.echartTheme.xAxis.nameTextStyle.color,
    size:d.echartTheme.xAxis.nameTextStyle.fontSize,
    transform:'rotate('+d.echartTheme.xAxis.axisLabel.rotate +'deg)',
    // family:
  }
  let labelFont={
    color:d.echartTheme.yAxis.nameTextStyle.color,
    size:d.echartTheme.yAxis.nameTextStyle.fontSize,
    transform:'rotate('+d.echartTheme.yAxis.axisLabel.rotate +'deg)',
    // family:
  }
  return {
    id:d.container,
    valueFont,
    labelFont
  }
}

export default dBubbleSet