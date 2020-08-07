export default function buildOption(chartOption, registerTheme) {
  // console.log("sadfaf1111111",chartOption, registerTheme);
  var option = {
    tooltip: {
      trigger: "item",
      // formatter: "{b}: {c} ({d}%)",
      formatter: function (params) {
        let removeNode = params.dataIndex;
        let lg = chartOption.series[chartOption.series.length - 1].data.length;
        ///console.log(lg,"5656656");
        if (removeNode === lg) {
          //剔除总数据，避免鼠标移上的bug
          return ''
        } else {
          //  '{b}:{c}({d})%'
          let str = params.data.name + ":" + params.data.value + "";
          return str
        }
      },
    },
    legend: {
      type: "scroll",
      // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
      // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'left', 'center', 'right'）
      // "right":'auto',       //距离容器右侧的距离 （number || 百分比）
      // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
      // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
      textStyle: {
        //color: "gray",          //图例字体颜色
        //fontSize:12,          //图例字体大小
        //"fontFamily": "微软雅黑"   //图例字体
        fontSize: registerTheme?.legend?.textStyle?.fontSize,
        color: registerTheme?.legend?.textStyle?.color,
      },
      padding: [10, 10, 10, 10],
      data: []
      // data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    // toolbox: {
    //   y:'bottom',
    //   feature: {
    //       saveAsImage: {}
    //   }
    // },
    series: [
      {
        // name:'访问来源',
        // radius:"60%", //外圈半径
        // center: ["50%", "50%"],//中心点设置
        type: "pie",
        avoidLabelOverlap: false,
        startAngle: 180,
        // label: {
        //   normal: {
        //     formatter:['{b}' + '\n' + '{c}'].join('\n'),
        //     show:true,
        //     // show: false,
        //     // position: "center"
        //   },
        //   // emphasis: {
        //   //   show: false,
        //   //   textStyle: {
        //   //     fontSize: "30",
        //   //     fontWeight: "bold"
        //   //   }
        //   // }
        // },
        // labelLine: {
        //   normal: {
        // //     // show: true,
        // //     // length: 30,
        // //     // length2: 55,
        //     lineStyle: {
        //       color: "#D1D1D3"
        //     }
        //   },
        //   emphasis: {
        //     // show: false,
        //   lineStyle: {
        //     color: "#D1D1D3"
        //   }
        //   },
        // },
        data: [
          // {value:335, name:'直接访问'},
          // {value:310, name:'邮件营销'},
          // {value:234, name:'联盟广告'},
          // {value:135, name:'视频广告'},
          // {value:1548, name:'搜索引擎'}
        ]
      }
    ]
  };
  if (chartOption.series.length) {
    var chartYData = chartOption.series[chartOption.series.length - 1].data;
    var chartXData = chartOption.xAxisData;
    // alert(JSON.stringify(chartYData))

    //构建颜色
    option.color = chartOption.color;
    // 构建series
    let buildSeriesData = [];
    // let buildLegends = [];
    let countData = null;
    for (let i = 0; i < chartYData.length; i++) {
      buildSeriesData.push({
        value: chartYData[i],
        name: chartXData[i],
      });
      if (Number(chartYData[i])) {
        countData += Number(chartYData[i]);
      }
    }
    if (registerTheme?.pie?.degree === 2) {
      buildSeriesData.push({
        value: countData,
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
          }
        }
      });
    }
    option.series[0].data = buildSeriesData;

//----------------------------值标签开始----------------------------------------------
    let valueArr = []
    option.series[0].data.map((val, key) => {
      valueArr.push(val.value)
    })

    // 比较数组的值
    function maxarr(arr, len) {
      var max = [];
      arr.sort(function (a, b) {
        return a - b;
      });
      for (var i = 0; i < len; i++) {
        max.push(arr.pop());
      }
      return max.reverse();
    }

    let maxArr = '';
    if (option.series[0].data.length > 9) {
      maxArr = maxarr(valueArr, 10)//获取数组里的最大值得前10个值
    }

    option.series[0].data.map((val, key) => {
      // 所有的值标签默认为false
      option.series[0].data[key].label = {
        normal: {
          show: false,
        }

      };
      option.series[0].data[key].labelLine = {
        normal: {
          show: false,
          opacity: 0,
        },
        emphasis: {
          show: false,
          opacity: 0,
        }
      };
      let lg = chartOption.series[chartOption.series.length - 1].data.length;
      if (maxArr) {
        if (maxArr.indexOf(val.value) >= 0) {

          option.series[0].data[key].label = {
            normal: {
              show: registerTheme?.valueLabel?.show ? registerTheme.valueLabel.show : false,
              rich: {
                b: {
                  fontSize: registerTheme?.valueLabel?.fontSize?.y0 ? registerTheme.valueLabel.fontSize.y0 : 12,
                  color: registerTheme?.valueLabel?.color?.y0 ? registerTheme.valueLabel.color.y0 : '#D1D1D3'
                },
                a: {
                  color: registerTheme?.valueLabel?.color?.y1 ? registerTheme.valueLabel.color.y1 : '#D1D1D3',
                  align: 'center',
                  fontSize: registerTheme?.valueLabel?.fontSize?.y1 ? registerTheme.valueLabel.fontSize.y1 : 12,
                  padding: [0, 0, 10, 0],
                  background: '#fff'
                },
                c: {
                  color: registerTheme?.valueLabel?.unitStyle?.color ? registerTheme.valueLabel.unitStyle.color : 'gray',
                  align: 'center',
                  fontSize: registerTheme?.valueLabel?.unitStyle?.fontSize ? registerTheme?.valueLabel?.unitStyle?.fontSize : 12,
                  padding: [0, 0, 10, 0],
                  background: '#fff'
                }

              },
              // formatter:['{b|{b}}' + '\n' + '{c|{c}}'].join('\n'),
              formatter: function (params) {
                let name = params.data.name;
                let value = params.data.value;
                let removeNode = params.dataIndex;
                if (removeNode === lg) {
                  //剔除总数据，避免鼠标移上的bug
                  return ''
                } else {
                  // let unit = registerTheme?.pie?.unit;
                  let unit = registerTheme?.valueLabel?.unit ?
                    registerTheme?.valueLabel?.unit :
                    registerTheme?.pie?.unit ? registerTheme?.pie?.unit : '';
                  if (unit) {
                    return ['{b|' + name + '}' + '\n' + '{a|' + value + '}' + '{c|' + unit + '}']
                  } else {
                    return ['{b|' + name + '}' + '\n' + '{a|' + value + '}']
                  }
                }
              },
            },
          }
          option.series[0].data[key].labelLine = {
            normal: {
              show: registerTheme?.valueLabel?.show ? key === lg ? false : registerTheme.valueLabel.show : false,
              lineStyle: {
                color: "#D1D1D3"
              }
            }, emphasis: {
              show: registerTheme?.valueLabel?.show ? key === lg ? false : registerTheme.valueLabel.show : false,
              lineStyle: {
                color: "#D1D1D3"
              }
            }
          }
        }
      } else {
        option.series[0].data[key].label = {
          normal: {
            show: registerTheme?.valueLabel?.show ? registerTheme.valueLabel.show : false,
            rich: {
              b: {
                fontSize: registerTheme?.valueLabel?.fontSize?.y0 ? registerTheme.valueLabel.fontSize.y0 : 12,
                color: registerTheme?.valueLabel?.color?.y0 ? registerTheme.valueLabel.color.y0 : '#D1D1D3'
              },

              a: {
                color: registerTheme?.valueLabel?.color?.y1 ? registerTheme.valueLabel.color.y1 : '#D1D1D3',
                align: 'center',
                fontSize: registerTheme?.valueLabel?.fontSize?.y1 ? registerTheme.valueLabel.fontSize.y1 : 12,
                padding: [0, 0, 10, 0],
                background: '#fff'
              },
              c: {
                color: registerTheme?.valueLabel?.unitStyle?.color ? registerTheme.valueLabel.unitStyle.color : 'gray',
                align: 'center',
                fontSize: registerTheme?.valueLabel?.unitStyle?.fontSize ? registerTheme?.valueLabel?.unitStyle?.fontSize : 12,
                padding: [0, 0, 10, 0],
                background: '#fff'
              }

            },
            // formatter:['{b|{b}}' + '\n' + '{c|{c}}'].join('\n'),
            formatter: function (params) {
              let name = params.data.name;
              let value = params.data.value;
              let removeNode = params.dataIndex;
              if (removeNode === lg) {
                //剔除总数据，避免鼠标移上的bug
                return ''
              } else {
                // let unit = registerTheme?.pie?.unit;
                let unit = registerTheme?.valueLabel?.unit ?
                  registerTheme?.valueLabel?.unit :
                  registerTheme?.pie?.unit ? registerTheme?.pie?.unit : '';
                if (unit) {
                  return ['{b|' + name + '}' + '\n' + '{a|' + value + '}' + '{c|' + unit + '}']
                } else {
                  return ['{b|' + name + '}' + '\n' + '{a|' + value + '}']
                }
              }
            },
          },
        }
        option.series[0].data[key].labelLine = {
          normal: {
            show: registerTheme?.valueLabel?.show ? key === lg ? false : registerTheme.valueLabel.show : false,
            lineStyle: {
              color: "#D1D1D3"
            }
          }, emphasis: {
            show: registerTheme?.valueLabel?.show ? key === lg ? false : registerTheme.valueLabel.show : false,
            lineStyle: {
              color: "#D1D1D3"
            }
          }
        }
      }
    })
//----------------------------值标签结束----------------------------------------------


    option.legend.data = chartXData;
    option.legend.show = registerTheme.legend.show;
    // option.legend.textStyle ={
    //   fontSize: registerTheme?.legend?.textStyle?.fontSize,
    //   color:registerTheme?.legend?.textStyle?.color,
    // };
  }
  // console.log(option,'option1111');
  return option;
}
