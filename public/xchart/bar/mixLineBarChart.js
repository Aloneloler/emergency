/*
 *  折线柱状图
 * @param 使用规则
 */
import echarts from "echarts";

export default function buildOption(chartOption, registerTheme) {
  let option = {
    tooltip: {
      // show:true,   //提示框显隐
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    // toolbox: {
    //     // feature: {
    //     //     dataView: {show: true, readOnly: false},
    //     //     magicType: {show: true, type: ['line', 'bar']},
    //     //     restore: {show: true},
    //     //     saveAsImage: {show: true}
    //     // },
    //     y:'bottom',
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    legend: {
      // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
      // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'left', 'center', 'right'）
      // "right":'auto',       //距离容器右侧的距离 （number || 百分比）
      // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
      // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
      data: ["蒸发量", "降水量", "平均温度"],
      textStyle: {
        // "fontSize":"12",          //图例字体大小
        // "fontFamily": "微软雅黑"   //图例字体
      }
    },
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
    series: [
      // {
      //     name:'蒸发量',
      //     type:'bar',
      //     data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      // },
      // {
      //     name:'降水量',
      //     type:'bar',
      //     data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      // },
      // {
      //     name:'平均温度',
      //     type:'line',
      //     yAxisIndex: 1,
      //     data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      // }
    ]
  };

  //构建颜色
  option.color = chartOption.color;
  option.grid = registerTheme.grid;
  //构建X轴

  option.xAxis[0] = { ...option.xAxis[0], ...registerTheme.xAxis[0] };
  option.xAxis[0].data = chartOption.xAxisData;
  // console.log(chartOption.xAxisData,"ususjdj",option.xAxis[0].data)
  //构建Y轴
  option.yAxis[0] = { ...option.yAxis[0], ...registerTheme.yAxis[0] };
  option.yAxis[1] = { ...option.yAxis[1], ...registerTheme.yAxis[1] };
  //构建series
  let buildSeries = [];
  let buildLegends = [];
  for (let i = 0; i < chartOption.series.length; i++) {
    let yAxisIndex = null;
    let type = null;
    if (i < chartOption.yAxisLengthArray[0]) {
      type = "line";
      yAxisIndex = 0;
    } else {
      type = "bar";
      yAxisIndex = 1;
    }
    // console.log(registerTheme?.valueLabel?.color?.y0,"jhsjd",registerTheme?.valueLabel?.color?.y1)
    buildSeries.push({
      ...chartOption.series[i],
      yAxisIndex: yAxisIndex,
      type: type,
      label: {
        normal: {
          //值标签 双y轴颜色设置
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
              : 12, //值标签 字体大小
          position: "top"
        }
      },
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
          formatter: function(data) {
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
      lineStyle: registerTheme?.line?.lineStyle
      // "smooth": true,   //连线类型  (fasle直线  true曲线)
      // "lineStyle": {
      //   "normal": {
      //     "width":"2",    //线的粗细
      //     "type":'solid' //实线(solid) 虚线(dashed)
      //   }
      // },
    });
    let color = [];
    let bar1 = JSON.parse(JSON.stringify(registerTheme.bar));
    bar1.barRadius = registerTheme?.bar?.itemStyle?.normal?.barBorderRadius; //柱子圆角   提交必须带normal
    // console.log(bar1, registerTheme?.bar?.itemStyle?.normal?.barBorderRadius, bar1.barRadius, "343434");
    //判断color数组的形式#或者rgb 根据不同形式进行组合
    chartOption.color.map(function(val, ind) {
      // console.log(registerTheme?.bar?.barRadius,"343434");
      if (val.indexOf("rgb") === -1) {
        color = chartOption.color;
        buildSeries[i].itemStyle =
          yAxisIndex === 1
            ? {
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
                    : chartOption.color[i]
                }
              }
            : {
                normal: {
                  color: chartOption.color[i]
                }
              };
      } else {
        //颜色渐变
        let colors = val.split("(");
        let rgb = colors[1].split(")");
        color.push(rgb[0]);
        buildSeries[i].itemStyle =
          yAxisIndex === 1
            ? {
                normal: {
                  barBorderRadius: bar1.barRadius, //柱子圆角
                  color: registerTheme?.bar?.gradualChange
                    ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "rgba(" + color[i] + ",1)" }, //柱图渐变色               //柱图渐变色
                        { offset: 1, color: "rgba(" + color[i] + ",0.2)" } //柱图渐变色
                      ])
                    : chartOption.color[i]
                }
              }
            : {
                normal: {
                  color: chartOption.color[i]
                }
              };
      }
    });
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
  option.barCategoryGap = registerTheme?.bar?.barCategoryGapAll
    ? registerTheme.bar.barCategoryGapAll
    : "30%";
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

  //计算长度
  // let size = registerTheme.categoryAxis.axisLabel.textStyle.fontSize;
  // let xname =  option.xAxis.name;
  // let namePX = size * xname.length;
  // option.grid.right = namePX + 30;
  //   console.log(option, 'option======== mix')
  return option;
}
