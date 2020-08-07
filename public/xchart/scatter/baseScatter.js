import echarts from "echarts";
export default function buildOption(chartOption, registerTheme) {
  // console.log("scatterddd",chartOption);

  //示例数据
  // var data = [
  //     [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
  //     [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
  // ];

  // alert(chartOption.series[0]?.data)
  var min1 = Math.min.apply(null, chartOption.series[0]?.data);
  var min2 = Math.min.apply(null, chartOption.series[1]?.data);
  var max1 = Math.max.apply(null, chartOption.series[0]?.data);
  var max2 = Math.max.apply(null, chartOption.series[1]?.data);

  // alert(max1)
  // alert(max2)

  var option = {
    // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
    //     offset: 0,
    //     color: '#f7f8fa'
    // }, {
    //     offset: 1,
    //     color: '#cdd0d5'
    // }]),
    title: {
      // text: '1990 与 2015 年各国家人均寿命与 GDP'
    },
    legend: {
      // orient: "horizontal",
      // x: "center",
      // padding:[10, 10, 10, 10],
      // orient: "vertical",
      // x: "right",
      // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'left', 'center', 'right'）
      // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
      // "right":'auto',       //距离容器右侧的距离 （number || 百分比）
      // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
      // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
      data: [],
      textStyle: {
        //   "color": "gray",          //图例字体颜色
        //   "fontSize":"12",          //图例字体大小
        //   "fontFamily": "微软雅黑"   //图例字体
      }
    },
    tooltip: {
      padding: 10,
      backgroundColor: "#222",
      borderColor: "#777",
      borderWidth: 1,
      formatter: function(obj) {
        // alert(JSON.stringify(obj))
        var value = obj.value;
        return (
          '<div style="font-size:14px;padding-bottom:5px;margin-bottom:5px">' +
          value[2] +
          "</div>" +
          chartOption.series[0]?.name +
          "：" +
          value[0] +
          "<br>" +
          chartOption.series[1]?.name +
          "：" +
          value[1] +
          "<br>"
        );
      }
    },
    xAxis: [
      {
        splitLine: {
          lineStyle: {
            type: "dashed"
          }
        }
      }
    ],
    yAxis: [
      {
        splitLine: {
          lineStyle: {
            type: "dashed"
          }
        },
        scale: true
      },
      {
        splitLine: {
          lineStyle: {
            type: "dashed"
          }
        },
        scale: true
      }
    ],
    series: [
      {
        // name: chartOption.series[0].name,
        data: [],
        type: "scatter",
        emphasis: {
          itemStyle: {
            color: chartOption.color[0],
            borderColor: chartOption.color[0],
            borderWidth: 5,
            opacity: 1
          },
          label: {
            //position: "top",
            formatter: function(data) {
              return "{a|" + data.value + "}";
            },
            rich: {
              a: {
                color: chartOption.color[0],
                fontSize: 20
              }
            }
          }
        },
        animationDelay: function (idx) {
          return idx * 50 + 100;
        }
        // symbolSize: function (data) {
        //   console.log("asfasdfasdfsad",data);
        //   // return 10;
        //     return Math.sqrt(parseFloat(data[0]));
        // },
        // label: {
        //     emphasis: {
        //         show: true,
        //         formatter: function (param) {
        //             return param.data[2];
        //         },
        //         position: 'top'
        //     }
        // },
        // itemStyle: {
        // normal: {
        //     shadowBlur: 10,
        //     shadowColor: 'rgba(120, 36, 50, 0.5)',
        //     shadowOffsetY: 5,
        //     color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        //         offset: 0,
        //         color: 'rgb(251, 118, 123)'
        //     }, {
        //         offset: 1,
        //         color: 'rgb(204, 46, 72)'
        //     }])
        // }
        // }
      }
    ],
    visualMap: [
      {
        show: false,
        left: "right",
        top: "10%",
        dimension: 0,
        min: min1,
        max: max1,
        itemWidth: 30,
        itemHeight: 120,
        calculable: false,
        precision: 0.1,
        textGap: 30,
        textStyle: {
          color: "#fff"
        },
        inRange: {
          symbolSize: [10, 60]
        },
        outOfRange: {
          symbolSize: [10, 60]
          // color: ['rgba(255,255,255,.2)']
        }
        // controller: {
        //     inRange: {
        //         color: chartOption.color
        //     }
        //     // outOfRange: {
        //     //     color: ['#444']
        //     // }
        // }
      },
      {
        show: false,
        left: "right",
        bottom: "5%",
        dimension: 1,
        min: min2,
        max: max2,
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        text: "ddd",
        textGap: 30,
        textStyle: {
          color: "#fff"
        },
        inRange: {
          colorLightness: [0.5, 0.5]
        }
        // outOfRange: {
        //     // color: ['rgba(255,255,255,.2)']
        // },
        // controller: {
        //     inRange: {
        //         color: chartOption.color
        //     }
        //     // outOfRange: {
        //     //     color: ['#444']
        //     // }
        // }
      }
    ]
  };

  //构建颜色
  option.color = chartOption.color;
  //构建边距
  option.grid = registerTheme.grid;
  //构建xy
  option.xAxis[0] = { ...option.xAxis[0], ...registerTheme.xAxis[0] };
  //构建Y轴
  option.yAxis[0] = { ...option.yAxis[0], ...registerTheme.yAxis[0] };
  // option.yAxis[1] = {...option.yAxis[1], ...registerTheme.yAxis[1]}
  // //构建series
  let buildSeries = [];
  // for (let i = 0; i < chartOption.series.length; i++) {
  for (let i = 0; i < chartOption.xAxisData.length; i++) {
    buildSeries.push([
      chartOption.series[0] && chartOption.series[0].data[i],
      chartOption.series[1] && chartOption.series[1].data[i],
      chartOption.xAxisData && chartOption.xAxisData[i]
    ]);
  }
  // }
  option.series[0].data = buildSeries;

  // let buildLegends = [];
  // for (let i = 0; i < chartOption.series.length; i++) {
  //   buildLegends.push(chartOption.series[i].name)
  // }
  // option.legend.data = buildLegends;
  // option.legend.show = registerTheme.legend.show;
  // option.legend.textStyle.color = registerTheme.xAxis[0].axisLabel.textStyle.color;

  return option;
}
