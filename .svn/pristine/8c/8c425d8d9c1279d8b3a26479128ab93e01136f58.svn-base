export default function buildOption(chartOption, registerTheme) {
  // console.log(chartOption,"chartXData",registerTheme)
  // console.log('sadfaf', registerTheme);
  let option = {
    title: {
      text: "某站点用户访问来源",
      subtext: "纯属虚构",
      x: "center"
    },
    tooltip: {
      show: true,
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      right: "right",
      data: ["物理", "化学", "生物", "政治", "历史", "地理"],
      textStyle: {
        rich: {
          title: {
            fontSize: 14,
            color: "rgba(255,255,255,1)"
          }
        }
      }
    },
    series: [
      // {
      //     name: '单科',
      //     type: 'pie',
      //     radius : ['5%', '10%'],
      //     label: {
      //         normal: {
      //             position: 'inner'
      //         }
      //     },
      //     data:[
      //         {
      //             value:'967',
      //             name:'物理',
      //             itemStyle: {
      //                 emphasis: {
      //                     shadowBlur: 10,
      //                     shadowOffsetX: 0,
      //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
      //                     normal: {
      //                         color: '#dc1439'
      //                     }
      //                 }
      //             }
      //         },
      //         {
      //             value:'2800',
      //             itemStyle: {
      //                 normal: {
      //                     color: 'transparent'
      //                 }
      //             }
      //         }
      //     ]
      // },  {
      //     name: '化学',
      //     type: 'pie',
      //     radius : ['15%', '20%'],
      //     data:[
      //         {
      //             value:'825',
      //             name:'化学',
      //             itemStyle: {
      //                 emphasis: {
      //                     shadowBlur: 10,
      //                     shadowOffsetX: 0,
      //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
      //                     normal: {
      //                         color: '#dc1439'
      //                     }
      //                 }
      //             }
      //         },
      //         {
      //             value:'500',
      //             itemStyle: {
      //                 normal: {
      //                     color: 'transparent'
      //                 }
      //             }
      //         }
      //     ]
      // },  {
      //     name: '生物',
      //     type: 'pie',
      //     radius : ['25%', '30%'],
      //     data:[
      //         // {value:1078, name:'生物'}
      //         {
      //             value:'1078',
      //             name:'生物',
      //             itemStyle: {
      //                 emphasis: {
      //                     shadowBlur: 10,
      //                     shadowOffsetX: 0,
      //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
      //                     normal: {
      //                         color: '#dc1439'
      //                     }
      //                 }
      //             }
      //         },
      //         {
      //             value:'800',
      //             itemStyle: {
      //                 normal: {
      //                     color: 'transparent'
      //                 }
      //             }
      //         }
      //     ]
      // },  {
      //     name: '政治',
      //     type: 'pie',
      //     radius : ['35%', '40%'],
      //     data:[
      //         // {value:981, name:'政治'}
      //         {
      //             value:'981',
      //             name:'政治',
      //             itemStyle: {
      //                 emphasis: {
      //                     shadowBlur: 10,
      //                     shadowOffsetX: 0,
      //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
      //                     normal: {
      //                         color: '#dc1439'
      //                     }
      //                 }
      //             }
      //         },
      //         {
      //             value:'900',
      //             itemStyle: {
      //                 normal: {
      //                     color: 'transparent'
      //                 }
      //             }
      //         }
      //     ]
      // },  {
      //     name: '历史',
      //     type: 'pie',
      //     radius : ['45%', '50%'],
      //     data:[
      //         // {value:877, name:'历史'}
      //         {
      //             value:'877',
      //             name:'历史',
      //             itemStyle: {
      //                 emphasis: {
      //                     shadowBlur: 10,
      //                     shadowOffsetX: 0,
      //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
      //                     normal: {
      //                         color: '#dc1439'
      //                     }
      //                 }
      //             }
      //         },
      //         {
      //             value:'500',
      //             itemStyle: {
      //                 normal: {
      //                     color: 'transparent'
      //                 }
      //             }
      //         }
      //     ]
      // },  {
      //     name: '地理',
      //     type: 'pie',
      //     radius : ['55%', '60%'],
      //     data:[
      //         // {value:939, name:'地理'}
      //         {
      //             value:'939',
      //             name:'地理',
      //             itemStyle: {
      //                 emphasis: {
      //                     shadowBlur: 10,
      //                     shadowOffsetX: 0,
      //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
      //                     normal: {
      //                         color: '#dc1439'
      //                     }
      //                 }
      //             }
      //         },
      //         {
      //             value:'200',
      //             itemStyle: {
      //                 normal: {
      //                     color: 'transparent'
      //                 }
      //             }
      //         }
      //     ]
      // },
    ]
  };

  var chartYData = chartOption.series[chartOption.series.length - 1].data;
  var chartXData = chartOption.xAxisData;
  // alert(JSON.stringify(chartYData))
  // console.log(chartYData,"isishjhhnd",chartXData)
  //构建颜色
  option.color = chartOption.color;
  // 构建series
  let buildSeriesData = [];
  // console.log(chartOption,"udududu")
  let obj = {},
    seriesArr = [],
    // let www = 100 / chartYData.length;
    radius = [95, 100],
    maxValue = "";

  // for (let i = 0; i < chartYData.length; i++) {
  //   buildSeriesData.push({ value: chartYData[i], name: chartXData[i] });
  //   add+=JSON.parse(chartYData[i])
  //   // add+='+'
  // }
  // option.series[0].data = buildSeriesData;

  // console.log(add,"add")
  // chartYData.sort((num1, num2) => {
  //   return num2 - num1;
  // });
  // maxValue = chartYData[0];
  maxValue = Math.max(...chartYData);
  // alert(maxValue);

  // console.log(chartYData[0],"fsfsfsf")
  chartXData.map((val, key) => {
    radius = [radius[0] - 10, radius[1] - 10];
    obj = {
      name: val,
      type: "pie",
      radius: [radius[0] + "%", radius[1] + "%"],
      center: ["50%", "50%"],
      label: {
        // show:false,
        normal: {
          show: false,
          position: "inner"
        }
      },
      data: [
        // {value:939, name:'地理'}
        {
          value: chartYData[key],
          name: val,
          hoverAnimation: false, //鼠标移入变大
          itemStyle: {
            emphasis: {
              normal: {
                color: "#dc1439"
              }
            }
          }
        },
        {
          value: maxValue - chartYData[key],
          itemStyle: {
            normal: {
              color: "transparent"
            }
          }
        }
      ]
    };
    seriesArr.push(obj);
  });
  // console.log(seriesArr,"seriesArr",registerTheme)
  option.series = seriesArr;
  option.legend.data = chartXData;
  option.legend.show = registerTheme.legend.show;
  option.legend.left = registerTheme.legend.left;
  option.legend.top = registerTheme.legend.top;

  return option;
}
