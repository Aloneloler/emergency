/*
 *   折线面积图
 * @param 使用规则
 */

import echarts from "echarts";

export default function buildOption(chartOption, registerTheme) {
  //console.log("registerTheme",registerTheme);
  var option = {
    title: {
      text: "堆叠区域图"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {
      //  itemHeight: 18,
      //  itemWidth: 18,
      // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
      // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'left', 'center', 'right'）
      // "right":'right',       //距离容器右侧的距离 （number || 百分比）
      // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
      // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
      padding: [10, 10, 10, 10],
      data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      textStyle: {
        // "fontSize":"12",          //图例字体大小
        // "fontFamily": "微软雅黑"   //图例字体
      }
    },
    // toolbox: {
    //   y: 'bottom',
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    grid: {
      left: "3%",
      right: 54,
      bottom: "3%",
      containLabel: true
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
        boundaryGap: false,
        nameRotate: 0,
        nameTextStyle: {
          nameGap: 15,
          align: "center",
          // backgroundColor:"red",
          fontSize: 12,
          color: "gray"
        },
        //X轴
        data: []
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
      //     name:'直接访问',
      //     type:'line',
      //     stack: '总量',
      //     areaStyle: {normal: {}},
      //     data:[320, 332, 301, 334, 390, 330, 320]
      // },
      // {
      //     name:'搜索引擎',
      //     type:'line',
      //     stack: '总量',
      //     label: {
      //         normal: {
      //             show: true,
      //             position: 'top'
      //         }
      //     },
      //     areaStyle: {normal: {}},
      //     data:[820, 932, 901, 934, 1290, 1330, 1320]
      // }
    ]
  };
  //构建颜色
  option.color = chartOption.color;
  option.grid = registerTheme.grid;
  //构建X轴
  option.xAxis[0].data = chartOption.xAxisData;
  option.xAxis[0] = { ...option.xAxis[0], ...registerTheme.xAxis[0] };
  //构建Y轴
  option.yAxis[0] = { ...option.yAxis[0], ...registerTheme.yAxis[0] };
  //构建series
  let buildSeries = [];
  let buildLegends = [];
  for (let i = 0; i < chartOption.series.length; i++) {
    let yAxisIndex = null;
    if (i < chartOption.yAxisLengthArray[0]) {
      yAxisIndex = 0;
    } else {
      yAxisIndex = 1;
    }
    buildSeries.push({
      ...chartOption.series[i],
      label: {
        normal: {
          //值标签 双y轴颜色设置
          color:
            yAxisIndex === 0 && registerTheme?.valueLabel?.color?.y0
              ? registerTheme.valueLabel.color.y0
              : yAxisIndex === 1 && registerTheme?.valueLabel?.color?.y1
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
      symbol: "circle", //设定为实心点
      symbolSize: registerTheme?.line?.symbolSize
        ? registerTheme?.line?.symbolSize
        : 1, //设定实心点的大小
      lineStyle: registerTheme?.line?.lineStyle,
      emphasis: {
        itemStyle: {
          color: chartOption.color[i],
          borderColor: chartOption.color[i],
          borderWidth: registerTheme?.line?.emphasis?.borderWidth
            ? registerTheme?.line?.emphasis?.borderWidth
            : 5, //鼠标悬浮显示点的大小
          opacity: 1
        },
        label: {
          show: registerTheme?.line?.emphasis?.show
            ? registerTheme?.line?.emphasis?.show
            : false,
          position: "top",
          formatter: function(data) {
            return "{a|" + data.value + "}";
          },
          rich: {
            a: {
              color:
                registerTheme?.line?.emphasis?.show &&
                registerTheme?.line?.emphasis?.labelStyle?.fontColor
                  ? registerTheme?.line?.emphasis?.labelStyle?.fontColor
                  : "#fff",
              fontSize:
                registerTheme?.line?.emphasis?.show &&
                registerTheme?.line?.emphasis?.labelStyle?.fontSize
                  ? registerTheme?.line?.emphasis?.labelStyle?.fontSize
                  : "20",
              height:
                registerTheme?.line?.emphasis?.show &&
                registerTheme?.line?.emphasis?.labelStyle?.height
                  ? registerTheme?.line?.emphasis?.labelStyle?.height
                  : "auto",
              width:
                registerTheme?.line?.emphasis?.show &&
                registerTheme?.line?.emphasis?.labelStyle?.width
                  ? registerTheme?.line?.emphasis?.labelStyle?.width
                  : "auto",
              align: "center",
              verticalAlign: "middle",
              lineHeight:
                registerTheme?.line?.emphasis?.show &&
                registerTheme?.line?.emphasis?.labelStyle?.height
                  ? registerTheme?.line?.emphasis?.labelStyle?.height
                  : "auto",
              backgroundColor: {
                image:
                  registerTheme?.line?.emphasis?.show &&
                  registerTheme?.line?.emphasis?.labelStyle?.backgroundImg
                    ? registerTheme?.line?.emphasis?.labelStyle?.backgroundImg
                    : ""
              }
            }
          }
        }
      },
      // stack: "总量",
      // "smooth": false,   //连线类型  (fasle直线  true曲线)
      // "lineStyle": {
      //   "normal": {
      //     "width":"2",    //线的粗细
      //     "type":'solid' //实线(solid) 虚线(dashed)
      //   }
      // }
      yAxisIndex: yAxisIndex
    });
    let color = [];
    //判断color数组的形式#或者rgb 根据不同形式进行组合
    chartOption.color.map(function(val, ind) {
      if (val.indexOf("rgb") === -1) {
        color = chartOption.color;
        buildSeries[i].areaStyle = {
          normal: {
            color: registerTheme?.line?.gradualChange
              ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(" + color[i].colorRgb() + ",1)" }, //柱图渐变色               //柱图渐变色
                  { offset: 1, color: "rgba(" + color[i].colorRgb() + ",0.2)" } //柱图渐变色
                ])
              : null
          }
        };
      } else {
        //颜色渐变
        let colors = val.split("(");
        let rgb = colors[1].split(")");
        color.push(rgb[0]);
        buildSeries[i].areaStyle = {
          normal: {
            color: registerTheme?.line?.gradualChange
              ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(" + color[i] + ",1)" }, //柱图渐变色               //柱图渐变色
                  { offset: 1, color: "rgba(" + color[i] + ",0.2)" } //柱图渐变色
                ])
              : null
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
  //计算长度
  // let size = registerTheme.categoryAxis.axisLabel.textStyle.fontSize;
  // let xname =  option.xAxis[0].name;
  // let namePX = size * xname.length;
  // option.grid.right = namePX + 30;
  return option;
}
