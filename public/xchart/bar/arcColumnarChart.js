export default function buildOption(chartOption, registerTheme) {
  // console.log(chartOption,'buildoption',registerTheme);
  let option = {
    tooltip: {
      show: true,
      trigger: "item",
      formatter: "{a} : {c}"
    },
    angleAxis: {
      //y轴
      axisLine: {
        show: true,
        lineStyle: {
          color: "#D1D1D3",
          width: 1,
          type: "solid"
        }
      },
      axisLabel: {
        interval: 0,
        show: true,
        //color: "#00c7ff",
        margin: 5
        //fontSize: 12
      }
    },
    radiusAxis: {
      //x轴
      //show: true,
      type: "category",
      axisLine: {
        show: true,
        lineStyle: {
          //color: "#00c7ff",
          width: 1,
          type: "solid"
        }
      },
      axisLabel: {
        show: true,
        // padding: [0, 0, 20, 0],
        interval: 0
        //color: "#00c7ff",
        // fontSize: 12
      },
      // splitLine: {
      //     lineStyle: {
      //         color: "#00c7ff",
      //         width: 1,
      //         type: "solid"
      //     }
      // },
      //data: ['周一', '周二', '周三', '周四'],
      z: 10
    },
    polar: {
      shape: "circle",
      //radius: 350,
      center: ["50%", "50%"]
    },
    // series: [{
    //     type: 'bar',
    //     data: [1, 2, 3, 4],
    //     coordinateSystem: 'polar',
    //     name: '周一',
    //     stack: 'a'
    // }, {
    //     type: 'bar',
    //     data: [2, 4, 6, 8],
    //     coordinateSystem: 'polar',
    //     name: '周二',
    //     stack: 'a'
    // }, {
    //     type: 'bar',
    //     data: [1, 2, 3, 4],
    //     coordinateSystem: 'polar',
    //     name: '周三',
    //     stack: 'a'
    // }, {
    //     type: 'bar',
    //     data: [1, 2, 3, 4],
    //     coordinateSystem: 'polar',
    //     name: '周四',
    //     stack: 'a'
    // }],
    legend: {
      //show: true,
      //data: ['周一', '周二', '周三', '周四']
    }
  };

  let buildSeriesData = [];
  let legendData = [];
  let radiusAxisData = [];

  if (chartOption.series.length) {
    var chartYData = chartOption.series;
    var chartXData = chartOption.xAxisData;
    for (let j = 0; j < chartXData.length; j++) {
      radiusAxisData.push(chartXData[j]);
    }
    for (let i = 0; i < chartYData.length; i++) {
      legendData.push(chartYData[i].name);
      buildSeriesData.push({
        name: chartYData[i].name,
        type: "bar",
        data: chartYData[i].data,
        barWidth: registerTheme?.arcColumnarStackBar?.barWidth,
        coordinateSystem: "polar",
        stack: "a",
        emphasis: {
          itemStyle: {
            color: chartOption.color[i],
            borderColor: chartOption.color[i],
            borderWidth: 5,
            opacity: 1
          }
        }
      });
    }

    // console.log(chartXData[0])
  }

  option.series = buildSeriesData;
  option.color = chartOption.color;
  option.radiusAxis.data = radiusAxisData;
  option.grid = registerTheme.grid;
  //option.radiusAxis.show= registerTheme.legend.show;
  option.legend.data = legendData;
  option.legend.show = registerTheme.legend.show;
  option.barCategoryGap = registerTheme?.arcColumnarStackBar?.barCategoryGapAll
    ? registerTheme.arcColumnarStackBar.barCategoryGapAll
    : "30%";
  //     let bar1 = JSON.parse(JSON.stringify(registerTheme.arcColumnarStackBar));
  //      console.log(bar1,"bar1");
  //    bar1.barRadius = registerTheme?.arcColumnarStackBar?.itemStyle?.normal?.barBorderRadius ? registerTheme.arcColumnarStackBar.itemStyle.normal.barBorderRadius : [0, 0, 0, 0];
  //    console.log(bar1.barRadius,"bar1.barRadius");
  //    for (let k = 0; k < option.series.length; k++) {
  //      if (option.series.length === 1) {
  //        option.series[0].itemStyle = {
  //          normal: {
  //            barBorderRadius: [Number(bar1.barRadius[0]), Number(bar1.barRadius[1]), Number(bar1.barRadius[2]), Number(bar1.barRadius[3])]    //柱子圆角
  //          }
  //        };
  //        //option.series[0].label.normal.position = "top";
  //      } else {
  //        if (k === 0) {
  //          option.series[k].itemStyle = {
  //            normal: {
  //              barBorderRadius: [0, 0, Number(bar1.barRadius[2]), Number(bar1.barRadius[3])]    //柱子圆角
  //            }
  //          };
  //          //option.series[k].label.normal.position = "inside";
  //        } else if (k === option.series.length - 1) {
  //          option.series[k].itemStyle = {
  //            normal: {
  //              barBorderRadius: [Number(bar1.barRadius[0]), Number(bar1.barRadius[1]), 0, 0]    //柱子圆角
  //            }
  //          };
  //          //option.series[k].label.normal.position = "inside";
  //        } else {
  //          option.series[k].itemStyle = {
  //            normal: {
  //              barBorderRadius: [0, 0, 0, 0]    //柱子圆角
  //            }
  //          };
  //          //option.series[k].label.normal.position = "inside";
  //        }
  //      }
  //    }
  option.radiusAxis.lineStyle = {
    color: registerTheme.xAxis[0].axisLabel.textStyle.color
  };
  option.radiusAxis.axisLabel = {
    color: registerTheme?.valueLabel?.color?.y0
      ? registerTheme.valueLabel.color.y0
      : "#D1D1D3",
    fontSize: registerTheme?.valueLabel?.fontSize?.y0
      ? registerTheme.valueLabel.fontSize.y0
      : 12,
    interval: 0,
    margin: 5
  };
  //    option.angleAxis.lineStyle={
  //        color:'#D1D1D3',
  //    }
  option.angleAxis.axisLabel = {
    color: registerTheme?.valueLabel?.color?.y1
      ? registerTheme.valueLabel.color.y1
      : "#D1D1D3",
    fontSize: registerTheme?.valueLabel?.fontSize?.y1
      ? registerTheme.valueLabel.fontSize.y1
      : 12,
    show: registerTheme.valueLabel.show,
    margin: 5
  };

  //console.log(option,"option")
  return option;
}
