import echarts from "echarts";
import { colorRgb } from "../colorChange";

export default function buildOption(chartOption, registerTheme) {
  // console.log("chartOption", chartOption)
  // console.log("registerTheme", registerTheme)
  var option = {
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     }
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
    // barCategoryGap: '30%',//柱间距
    // barWidth:'自适应',//柱宽
    // itemStyle:{
    //     barBorderRadius:[0, 0, 0, 0],//柱子圆角
    // },
    legend: {
      // orient: 'horizontal',
      // x: 'center',
      // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
      // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'left', 'center', 'right'）
      // "right":'auto',       //距离容器右侧的距离 （number || 百分比）
      // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
      // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
      padding: [10, 10, 10, 10],
      data: ["2011年", "2012年"],
      textStyle: {
        // "fontSize":"12",          //图例字体大小
        // "fontFamily": "微软雅黑"   //图例字体
      }
    },
    // toolbox: {
    //   y:'bottom',
    //   feature: {
    //       saveAsImage: {}
    //   }
    // },

    grid: {
      left: "3%",
      right: 54,
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "value",
        boundaryGap: [0, 0.01],
        name: "",
        // nameLocation:'end',
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
      },
      {
        type: "value",
        boundaryGap: [0, 0.01],
        name: "",
        // nameLocation:'end',
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
        type: "category",
        data: [],
        name: "",
        nameTextStyle: {
          nameGap: 15,
          align: "center",
          // backgroundColor:"red",
          fontSize: 12,
          color: "gray"
        }
        // data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
      }
    ],
    series: [
      // {
      //     name: '2011年',
      //     type: 'bar',
      //     data: [18203, 23489, 29034, 104970, 131744, 630230]
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
  option.yAxis[0].data = chartOption.xAxisData;
  option.yAxis[0] = { ...option.yAxis[0], ...registerTheme.xAxis[0] };
  //构建Y轴
  option.xAxis[0] = { ...option.xAxis[0], ...registerTheme.yAxis[0] };
  option.xAxis[1] = { ...option.xAxis[1], ...registerTheme.yAxis[1] };

  //构建series
  let buildSeries = [];
  let buildLegends = [];
  let widthBar = registerTheme?.bar?.barWidth;
  let widthVal = widthBar.split("%");
  // console.log(registerTheme.valueLabel.color.y0,"sjdksj")
  for (let i = 0; i < chartOption.series.length; i++) {
    let xAxisIndex = null;
    if (i < chartOption.yAxisLengthArray[0]) {
      xAxisIndex = 0;
    } else {
      xAxisIndex = 1;
    }
    buildSeries.push({
      ...chartOption.series[i],
      xAxisIndex: xAxisIndex,
      label: {
        normal: {
          position: "right",
          //值标签 双y轴颜色设置
          color:
            xAxisIndex === 0 && registerTheme?.valueLabel?.color?.y0
              ? registerTheme.valueLabel.color.y0
              : xAxisIndex === 1 && registerTheme.valueLabel?.color?.y1
              ? registerTheme.valueLabel.color.y1
              : "#D1D1D3",
          show: registerTheme?.valueLabel?.show
            ? registerTheme.valueLabel.show
            : false, //值标签显示/隐藏
          fontSize:
            xAxisIndex === 0 && registerTheme?.valueLabel?.fontSize?.y0
              ? registerTheme.valueLabel.fontSize.y0
              : xAxisIndex === 1 && registerTheme?.valueLabel?.fontSize?.y1
              ? registerTheme.valueLabel.fontSize.y1
              : 12 //值标签 字体大小
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
          position: "right",
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
      //斑马线设置   直接更改type值为"pictorialBar"即可
      symbolRepeat: "true",
      symbolMargin: ["2px", 0, 0, 0],
      symbol: "rect",
      symbolOffset: [0, 0],
      symbolSize: [
        "30px",
        Number(widthVal[0]) !== 0 ? Number(widthVal[0]) * 1.4 + "%" : "100%"
      ],
      animationDelay: function(idx) {
        return idx * 50 + 100;
      },
      type:
        registerTheme?.bar?.type === 2
          ? "pictorialBar"
          : registerTheme?.bar?.type === 1
          ? "bar"
          : "bar" //斑马线设置  1柱状图  2为斑马线   默认柱状图
    });
    let color = [];
    if (i === 0) {
      buildSeries[i].barGap = "-100%";
    } else {
      buildSeries[i].barGap = "100%";
    }
    let bar1 = JSON.parse(JSON.stringify(registerTheme.bar));
    bar1.barRadius = registerTheme?.bar?.itemStyle?.normal?.barBorderRadius; //柱子圆角   提交必须带normal
    //判断color数组的形式#或者rgb 根据不同形式进行组合
    chartOption.color.map(function(val, ind) {
      if (val.indexOf("rgb") === -1) {
        color = chartOption.color;
        buildSeries[i].itemStyle = {
          normal: {
            barBorderRadius: bar1.barRadius, //柱子圆角
            color: registerTheme?.bar?.gradualChange
              ? new echarts.graphic.LinearGradient(1, 0, 0, 0, [
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
        buildSeries[i].itemStyle = {
          normal: {
            barBorderRadius: bar1.barRadius, //柱子圆角
            color: registerTheme?.bar?.gradualChange
              ? new echarts.graphic.LinearGradient(1, 0, 0, 0, [
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
    registerTheme.yAxis[0].axisLabel.textStyle.color;
  //构建单位
  // option.yAxis[0].name = chartOption.unit.xname[0];
  option.yAxis[0].nameTextStyle.fontSize =
    registerTheme.xAxis[0].axisLabel.textStyle.fontSize;
  option.yAxis[0].nameTextStyle.color =
    registerTheme.xAxis[0].axisLabel.textStyle.color;

  // option.xAxis[0].name = chartOption.unit.yname[0];
  option.xAxis[0].nameTextStyle.fontSize =
    registerTheme.yAxis[0].axisLabel.textStyle.fontSize;
  option.xAxis[0].nameTextStyle.color =
    registerTheme.yAxis[0].axisLabel.textStyle.color;

  // option.xAxis[1].name = chartOption.unit.yname[1];
  option.xAxis[1].nameTextStyle.fontSize =
    registerTheme.yAxis[1].axisLabel.textStyle.fontSize;
  option.xAxis[1].nameTextStyle.color =
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

  // console.log(option,"5555555");
  //计算长度
  // let size = registerTheme.categoryAxis.axisLabel.textStyle.fontSize;
  // let xname =  option.xAxis.name;
  // let namePX = size * xname.length;
  // option.grid.right = namePX + 30;
  return option;
}
