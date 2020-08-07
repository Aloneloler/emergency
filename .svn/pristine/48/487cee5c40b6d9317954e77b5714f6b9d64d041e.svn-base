import echarts from "echarts";
import { red } from "ansi-colors";

export default function buildOption(chartOption, registerTheme) {
  // console.log(chartOption, registerTheme,'chartOption, registerTheme')
  var option = {
    legend: {
      // orient: "horizontal",
      // x: "center",
      // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
      // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'left', 'center', 'right'）
      // "right":'auto',       //距离容器右侧的距离 （number || 百分比）
      // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
      // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
      padding: [10, 10, 10, 10],
      data: ["邮件营销", "联盟广告"],
      textStyle: {
        // "color": "gray",          //图例字体颜色
        // "fontSize":"12",          //图例字体大小
        // "fontFamily": "微软雅黑"   //图例字体
      }
    },
    //   barCategoryGap: '30%',//柱间距
    // barWidth:'自适应',//柱宽
    // itemStyle:{
    //   normal:{
    //     barBorderRadius:[10, 0, 0, 0],//柱子圆角
    //   }
    // },
    dataZoom: [
      {
        type: "inside"
      }
    ],
    xAxis: [
      {
        type: "category",
        name: "",
        // nameLocation:'end',
        // boundaryGap: false,
        nameRotate: 0,
        nameTextStyle: {
          nameGap: 15,
          align: "center",
          // backgroundColor:"red",
          fontSize: 12,
          color: "gray"
        },
        data: []
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    grid: {
      left: "3%",
      right: 54,
      bottom: "3%",
      containLabel: true
    },
    yAxis: [
      {
        type: "value",
        name: "",
        nameTextStyle: {
          nameGap: 15,
          align: "center",
          // backgroundColor:"red",
          fontSize: 12,
          color: "gray"
        }
      },
      {
        type: "value",
        name: "",
        nameTextStyle: {
          nameGap: 15,
          align: "center",
          // backgroundColor:"red",
          fontSize: 12,
          color: "gray"
        }
      }
    ],
    // toolbox: {
    //   y:'bottom',
    //   feature: {
    //       saveAsImage: {}
    //   }
    // },
    // tooltip : {
    //   trigger: 'axis',
    //   axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //       type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //   }
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    label: {
      normal: {
        // show: true,
        position: "top"
        // color: '#ff0000',
        // fontSize:'33'
      }
    },
    series: [
      // {
      //   name:"邮件营销",
      //   data: [120, 200, 150, 80, 70, 110, 130],
      //   type: 'bar'
      // }
    ],
    animationEasing: "elasticOut",
    animationDelayUpdate: function(idx) {
      return idx * 50;
    }
  };
  //构建颜色
  option.color = chartOption.color;
  option.grid = registerTheme.grid;
  //构建X轴
  option.xAxis[0].data = chartOption.xAxisData;
  option.xAxis[0] = { ...option.xAxis[0], ...registerTheme.xAxis[0] };
  //构建Y轴
  // console.log(option.yAxis[0],"hshhsh",chartOption.yAxisLengthArray)
  option.yAxis[0] = { ...option.yAxis[0], ...registerTheme.yAxis[0] };
  option.yAxis[1] = { ...option.yAxis[1], ...registerTheme.yAxis[1] };

  //构建series
  let buildSeries = [];
  let buildLegends = [];
  let widthBar = registerTheme?.bar?.barWidth;
  let widthVal = widthBar.split("%");
  // console.log(widthBar,Number(widthVal[0]),"55555");
  for (let i = 0; i < chartOption.series.length; i++) {
    let yAxisIndex = null;
    if (i < chartOption.yAxisLengthArray[0]) {
      yAxisIndex = 0;
    } else {
      yAxisIndex = 1;
    }
    let buildData = [];
    for (let k = 0; k < chartOption.series[i].data.length; k++) {
      // if (k === 1) {
      //   chartOption.series[i].data[k].itemStyle.color = "#000"
      // }
      buildData.push({ name: "", value: chartOption.series[i].data[k] });
    }
    // if (buildData) {
    //   buildData[1].itemStyle = {
    //     color: "#D2BB4C"
    //   }
    //   // console.log("buildData1", buildData[1])
    // }
    // console.log("buildData", buildData)
    //堆叠
    // buildSeries.push({...chartOption.series[i],stack: '总量'})
    // 分组
    buildSeries.push({
      //...chartOption.series[i],
      name: chartOption.series[i].name,
      type: chartOption.series[i].type,
      data: buildData,
      yAxisIndex: yAxisIndex,

      label: {
        normal: {
          //值标签 双y轴颜色设置
          position: "top",
          color:
            yAxisIndex === 0 && registerTheme?.valueLabel?.color?.y0
              ? registerTheme.valueLabel.color.y0
              : yAxisIndex === 1 && registerTheme.valueLabel?.color?.y1
              ? registerTheme.valueLabel.color.y1
              : "#D1D1D3",
          show: registerTheme?.valueLabel?.show
            ? registerTheme.valueLabel.show
            : false, //值标签显示/隐藏
          fontSize:
            yAxisIndex === 0 && registerTheme?.valueLabel?.fontSize?.y0
              ? registerTheme.valueLabel.fontSize.y0
              : yAxisIndex === 1 && registerTheme?.valueLabel?.fontSize?.y1
              ? registerTheme.valueLabel.fontSize.y1
              : 12 //值标签 字体大小
        }
      },
      //斑马线设置   直接更改type值为"pictorialBar"即可
      symbolRepeat: "true",
      symbolMargin: ["2px", 0, 0, 0],
      symbol: "rect",
      symbolOffset: [0, 0],
      symbolSize: [
        Number(widthVal[0]) !== 0 ? Number(widthVal[0]) * 1.2 + "%" : "100%",
        "30px"
      ],
      // barWidth:"40%",
      // "barCategoryGap":30,
      // itemStyle: {
      //     normal: {
      //       barBorderRadius: 10,
      // color: new echarts.graphic.LinearGradient(
      //     0, 0, 0, 1,
      //     [
      //         {offset: 0, color: 'rgba(0,0,205,1)'},
      //         {offset: 0.5, color: 'rgba(0,0,205,0.8)'},
      //         {offset: 1, color: 'rgba(0,0,205,0.5)'}
      //     ]
      // )
      //     },
      //     emphasis: {
      //       barBorderRadius: 10
      //     },
      // }
      animationDelay: function(idx) {
        return idx * 50 + 100;
      },
      // animationType: "scale",
      // animationEasin: "elasticOut",
      emphasis: {
        itemStyle: {
          color: chartOption.color[i],
          borderColor: chartOption.color[i],
          borderWidth: 5,
          opacity: 1
        },
        label: {
          show: registerTheme?.bar?.emphasis?.show
            ? registerTheme?.bar?.emphasis?.show
            : false,
          position: "top",
          // color: chartOption.color[i],
          // fontSize: 20
          formatter: function(data) {
            // console.log("yshhh", buildSeries[i].emphasis);
            return "{a|" + data.value + "}";
          },
          rich: {
            a: {
              color:
                registerTheme?.bar?.emphasis?.show &&
                registerTheme?.bar?.emphasis?.labelStyle?.fontColor
                  ? registerTheme?.bar?.emphasis?.labelStyle?.fontColor
                  : "#fff",
              fontSize:
                registerTheme?.bar?.emphasis?.show &&
                registerTheme?.bar?.emphasis?.labelStyle?.fontSize
                  ? registerTheme?.bar?.emphasis?.labelStyle?.fontSize
                  : "20",
              height:
                registerTheme?.bar?.emphasis?.show &&
                registerTheme?.bar?.emphasis?.labelStyle?.height
                  ? registerTheme?.bar?.emphasis?.labelStyle?.height
                  : "auto",
              width:
                registerTheme?.bar?.emphasis?.show &&
                registerTheme?.bar?.emphasis?.labelStyle?.width
                  ? registerTheme?.bar?.emphasis?.labelStyle?.width
                  : "auto",
              align: "center",
              verticalAlign: "middle",
              lineHeight:
                registerTheme?.bar?.emphasis?.show &&
                registerTheme?.bar?.emphasis?.labelStyle?.height
                  ? registerTheme?.bar?.emphasis?.labelStyle?.height
                  : "auto",
              backgroundColor: {
                image:
                  registerTheme?.bar?.emphasis?.show &&
                  registerTheme?.bar?.emphasis?.labelStyle?.backgroundImg
                    ? registerTheme?.bar?.emphasis?.labelStyle?.backgroundImg
                    : ""
              }
            }
          }
        }
      },
      type:
        registerTheme?.bar?.type === 2
          ? "pictorialBar"
          : registerTheme?.bar?.type === 1
          ? "bar"
          : "bar" //斑马线设置  1柱状图  2为斑马线   默认柱状图
    });

    // console.log("yshhh", buildSeries[i].emphasis);
    let color = [];
    let bar1 = JSON.parse(JSON.stringify(registerTheme.bar));
    bar1.barRadius = registerTheme?.bar?.itemStyle?.normal?.barBorderRadius; //柱子圆角   提交必须带normal
    if (i === 0) {
      buildSeries[i].barGap = "-100%";
    } else {
      buildSeries[i].barGap = "100%";
    }

    //判断数据大于等于预警值
    if (
      registerTheme?.markLine &&
      registerTheme?.markLine[0]?.show &&
      registerTheme?.markLine[0]?.num
    ) {
      if (chartOption.series[i].data.length > 0) {
        for (let j = 0; j < chartOption.series[i].data.length; j++) {
          if (registerTheme?.markLine.length === 1) {
            if (
              Number(chartOption.series[i].data[j]) >=
              registerTheme?.markLine[0]?.num
            ) {
              buildSeries[i].data[j].itemStyle = {
                normal: {
                  barBorderRadius: bar1.barRadius, //柱子圆角
                  color: registerTheme?.markLine[0]?.markBarColor || "red"
                }
              };
            } else {
              // buildSeries[i].data[j].itemStyle = {
              //   normal: {
              //     barBorderRadius: bar1.barRadius, //柱子圆角
              //     //color: registerTheme?.markLine[0]?.markBarColor||'red',
              //   }
              //  }
              //判断color数组的形式#或者rgb 根据不同形式进行组合
              chartOption.color.map(function(val, ind) {
                // console.log(registerTheme?.bar?.itemStyle?.normal?.barBorderRadius, bar1.barRadius, "343434");
                if (val.indexOf("rgb") === -1) {
                  color = chartOption.color;
                  buildSeries[i].data[j].itemStyle = {
                    normal: {
                      barBorderRadius: bar1.barRadius, //柱子圆角
                      color: registerTheme?.bar?.gradualChange
                        ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                              offset: 0,
                              color: "rgba(" + color[i].colorRgb() + ",1)"
                            }, //柱图渐变色               //柱图渐变色
                            {
                              offset: 1,
                              color: "rgba(" + color[i].colorRgb() + ",0.2)"
                            } //柱图渐变色
                          ])
                        : null
                    }
                  };
                } else {
                  //颜色渐变
                  let colors = val.split("(");
                  let rgb = colors[1].split(")");
                  color.push(rgb[0]);
                  buildSeries[i].data[j].itemStyle = {
                    normal: {
                      barBorderRadius: bar1.barRadius, //柱子圆角
                      color: registerTheme?.bar?.gradualChange
                        ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "rgba(" + color[i] + ",1)" }, //柱图渐变色               //柱图渐变色
                            { offset: 1, color: "rgba(" + color[i] + ",0.2)" } //柱图渐变色
                          ])
                        : null
                    }
                  };
                }
              });
            }
          } else {
            if (
              registerTheme?.markLine[0]?.num <=
                Number(chartOption.series[i].data[j]) &&
              Number(chartOption.series[i].data[j]) <=
                registerTheme?.markLine[1]?.num
            ) {
              buildSeries[i].data[j].itemStyle = {
                normal: {
                  barBorderRadius: bar1.barRadius, //柱子圆角
                  color: registerTheme?.markLine[0]?.markBarColor || "red"
                }
              };
            } else {
              // buildSeries[i].data[j].itemStyle = {
              //   normal: {
              //     barBorderRadius: bar1.barRadius, //柱子圆角
              //     //color: registerTheme?.markLine[0]?.markBarColor||'red',
              //   }
              //  }
              chartOption.color.map(function(val, ind) {
                // console.log(registerTheme?.bar?.itemStyle?.normal?.barBorderRadius, bar1.barRadius, "343434");
                if (val.indexOf("rgb") === -1) {
                  color = chartOption.color;
                  buildSeries[i].data[j].itemStyle = {
                    normal: {
                      barBorderRadius: bar1.barRadius, //柱子圆角
                      color: registerTheme?.bar?.gradualChange
                        ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                              offset: 0,
                              color: "rgba(" + color[i].colorRgb() + ",1)"
                            }, //柱图渐变色               //柱图渐变色
                            {
                              offset: 1,
                              color: "rgba(" + color[i].colorRgb() + ",0.2)"
                            } //柱图渐变色
                          ])
                        : null
                    }
                  };
                } else {
                  //颜色渐变
                  let colors = val.split("(");
                  let rgb = colors[1].split(")");
                  color.push(rgb[0]);
                  buildSeries[i].data[j].itemStyle = {
                    normal: {
                      barBorderRadius: bar1.barRadius, //柱子圆角
                      color: registerTheme?.bar?.gradualChange
                        ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "rgba(" + color[i] + ",1)" }, //柱图渐变色               //柱图渐变色
                            { offset: 1, color: "rgba(" + color[i] + ",0.2)" } //柱图渐变色
                          ])
                        : null
                    }
                  };
                }
              });
            }
          }
        }
      }
    } else {
      //判断color数组的形式#或者rgb 根据不同形式进行组合
      chartOption.color.map(function(val, ind) {
        // console.log(registerTheme?.bar?.itemStyle?.normal?.barBorderRadius, bar1.barRadius, "343434");
        if (val.indexOf("rgb") === -1) {
          color = chartOption.color;
          buildSeries[i].itemStyle = {
            normal: {
              barBorderRadius: bar1.barRadius, //柱子圆角
              color: registerTheme?.bar?.gradualChange
                ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(" + color[i].colorRgb() + ",1)" }, //柱图渐变色               //柱图渐变色
                    {
                      offset: 1,
                      color: "rgba(" + color[i].colorRgb() + ",0.2)"
                    } //柱图渐变色
                  ])
                : null
            }
          };
        } else {
          //颜色渐变
          let colors = val.split("(");
          let rgb = colors[1].split(")");
          color.push(rgb[0]);
          buildSeries[i].itemStyle = {
            normal: {
              barBorderRadius: bar1.barRadius, //柱子圆角
              color: registerTheme?.bar?.gradualChange
                ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(" + color[i] + ",1)" }, //柱图渐变色               //柱图渐变色
                    { offset: 1, color: "rgba(" + color[i] + ",0.2)" } //柱图渐变色
                  ])
                : null
            }
          };
        }
      });
    }
    buildLegends.push(chartOption.series[i].name);
  }
  option.series = buildSeries;
  option.legend.data = buildLegends;
  option.legend.show = registerTheme.legend.show;
  option.legend.textStyle.color =
    registerTheme.xAxis[0].axisLabel.textStyle.color;
  //构建单位
  // option.xAxis[0].name = chartOption.unit.xname[0];
  option.xAxis[0].nameTextStyle.fontSize =
    registerTheme.xAxis[0].axisLabel.textStyle.fontSize;
  option.xAxis[0].nameTextStyle.color =
    registerTheme.xAxis[0].axisLabel.textStyle.color;

  // option.yAxis[0].name = chartOption.unit.yname[0];
  option.yAxis[0].nameTextStyle.fontSize =
    registerTheme.yAxis[0].axisLabel.textStyle.fontSize;
  option.yAxis[0].nameTextStyle.color =
    registerTheme.yAxis[0].axisLabel.textStyle.color;

  // option.yAxis[1].name = chartOption.unit.yname[1];
  option.yAxis[1].nameTextStyle.fontSize =
    registerTheme.yAxis[1].axisLabel.textStyle.fontSize;
  option.yAxis[1].nameTextStyle.color =
    registerTheme.yAxis[1].axisLabel.textStyle.color;
  //柱子间距传空时默认
  // console.log('111111111111111111111111')
  // console.log(registerTheme?.bar?.barCategoryGapAll,'registerTheme?.bar?.barCategoryGapAll')
  option.barCategoryGap = registerTheme?.bar?.barCategoryGapAll
    ? registerTheme.bar.barCategoryGapAll
    : "30%";
  // console.log(option,'option')
  //计算长度
  // let size = registerTheme.categoryAxis.axisLabel.textStyle.fontSize;
  // let xname =  option.xAxis.name;
  // let namePX = size * xname.length;
  // option.grid.right = namePX + 30;
  // console.log(option,"4454")
  // -------------------------------- 预警线设置 --------------------------------
  let markLineStyle = {
    silent: true,
    symbol: ["none", "none"],
    lineStyle: {
      normal: {
        width:
          registerTheme?.markLine &&
          registerTheme?.markLine[0]?.lineStyle?.lineWidth
            ? registerTheme?.markLine[0]?.lineStyle?.lineWidth
            : 2, //线宽,
        // width: 8,　//线宽,
        color:
          registerTheme?.markLine &&
          registerTheme?.markLine[0]?.lineStyle?.lineColor
            ? registerTheme?.markLine[0]?.lineStyle?.lineColor
            : "#F12B09", //线颜色,
        // color: "red",　//线颜色,
        opacity:
          registerTheme?.markLine && registerTheme?.markLine[0]?.show ? 1 : 0, //线条透明度设置为0
        type:
          registerTheme?.markLine &&
          registerTheme?.markLine[0]?.lineStyle?.lineType === 1
            ? "solid"
            : "dashed" //实虚线
      }
    }
  };
  let datas = [];
  for (let k = 0; k < registerTheme?.markLine?.length; k++) {
    let obj = {
      yAxis:
        registerTheme?.markLine[k]?.show && registerTheme?.markLine
          ? registerTheme?.markLine[k]?.num
          : "",
      label: {
        normal: {
          formatter: registerTheme?.markLine[k]?.show
            ? registerTheme?.markLine[k]?.ValTag?.isValTag
              ? registerTheme?.markLine[k]?.ValTag?.tipTxt
                ? "{style|" +
                  registerTheme?.markLine[k]?.ValTag?.tipTxt +
                  "\n{c}}"
                : "{style|{c}}"
              : " "
            : "",
          rich: {
            style: {
              color: registerTheme?.markLine[k]?.ValTag?.tipTxtStyle.fontColor
                ? registerTheme?.markLine[k]?.ValTag?.tipTxtStyle.fontColor
                : "#F12B09",
              fontSize: registerTheme?.markLine[k]?.ValTag?.tipTxtStyle.fontSize
                ? registerTheme?.markLine[k]?.ValTag?.tipTxtStyle.fontSize
                : 12
            }
          }
        }
      }
    };
    datas.push(obj);
  }
  markLineStyle.data = datas;
  option.series[0].markLine = markLineStyle;
  // -------------------------------- xy轴线设置 --------------------------------
  //x轴线设置
  option.xAxis[0].axisLine = {
    show:
      registerTheme?.xyAxis?.show && registerTheme?.xyAxis?.x?.show
        ? registerTheme?.xyAxis?.x.show
        : false,
    lineStyle: {
      color:
        registerTheme?.xyAxis?.x?.style?.color &&
        registerTheme?.xyAxis?.y?.style?.color
          ? registerTheme?.xyAxis?.x?.style?.color
          : "darkgreen", // 颜色
      width:
        registerTheme?.xyAxis?.x?.style?.lineWidth &&
        registerTheme?.xyAxis?.y?.style?.lineWidth
          ? registerTheme?.xyAxis?.x?.style?.lineWidth
          : 2 // 粗细
    }
  };
  //y轴线设置
  option.yAxis[0].axisLine = {
    show:
      registerTheme?.xyAxis?.show && registerTheme?.xyAxis?.y?.show
        ? registerTheme?.xyAxis?.y.show
        : false,
    lineStyle: {
      color:
        registerTheme?.xyAxis?.x?.style?.color &&
        registerTheme?.xyAxis?.y?.style?.color
          ? registerTheme?.xyAxis?.y?.style?.color
          : "darkgreen", // 颜色
      width:
        registerTheme?.xyAxis?.x?.style?.lineWidth &&
        registerTheme?.xyAxis?.y?.style?.lineWidth
          ? registerTheme?.xyAxis?.y?.style?.lineWidth
          : 2 // 粗细
    }
  };
  // -------------------------------- 网格线 --------------------------------
  //X轴网格线设置
  option.xAxis[0].splitLine = {
    show:
      registerTheme?.xySplitLine?.show && registerTheme?.xySplitLine?.x?.show
        ? registerTheme?.xySplitLine?.x.show
        : false,
    lineStyle: {
      color:
        registerTheme?.xySplitLine?.x?.style?.color &&
        registerTheme?.xySplitLine?.x?.style?.color
          ? registerTheme?.xySplitLine?.x?.style?.color
          : "darkgreen", // 颜色
      width:
        registerTheme?.xySplitLine?.x?.style?.lineWidth &&
        registerTheme?.xySplitLine?.x?.style?.lineWidth
          ? registerTheme?.xySplitLine?.x?.style?.lineWidth
          : 2, // 粗细
      type: registerTheme?.xySplitLine?.x?.style.type === 1 ? "solid" : "dashed" //实虚线
    }
  };
  //y轴网格线设置
  option.yAxis[0].splitLine = {
    show:
      registerTheme?.xySplitLine?.show && registerTheme?.xySplitLine?.y?.show
        ? registerTheme?.xySplitLine?.y.show
        : false,
    lineStyle: {
      color:
        registerTheme?.xySplitLine?.x?.style?.color &&
        registerTheme?.xySplitLine?.y?.style?.color
          ? registerTheme?.xySplitLine?.y?.style?.color
          : "darkgreen", // 颜色
      width:
        registerTheme?.xySplitLine?.x?.style?.lineWidth &&
        registerTheme?.xySplitLine?.y?.style?.lineWidth
          ? registerTheme?.xySplitLine?.y?.style?.lineWidth
          : 2, // 粗细
      type: registerTheme?.xySplitLine?.x?.style.type === 1 ? "solid" : "dashed" //实虚线
    }
  };

  //console.log(option, 'option========')
  //处理操作 构建
  return option;
}

function buildTheme() {
  var theme = {};
}
