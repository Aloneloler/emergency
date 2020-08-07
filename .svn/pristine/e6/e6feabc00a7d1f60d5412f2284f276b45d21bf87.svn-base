//纵向堆叠柱状图
import echarts from "echarts";

export default function buildOption(chartOption, registerTheme) {
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
      // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'left', 'center', 'right'）
      // "right":'auto',       //距离容器右侧的距离 （number || 百分比）
      // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
      // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
      data: [
        "直接访问",
        "邮件营销",
        "联盟广告",
        "视频广告",
        "搜索引擎",
        "百度",
        "谷歌",
        "必应",
        "其他"
      ],
      textStyle: {
        // "fontSize":"12",          //图例字体大小
        // "fontFamily": "微软雅黑"   //图例字体
      }
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        nameRotate: 0,
        nameTextStyle: {
          nameGap: 15,
          align: "center",
          // backgroundColor:"red",
          fontSize: 12,
          color: "gray"
        },
        // data : ['周一','周二','周三','周四','周五','周六','周日']
        data: []
      }
    ],
    yAxis: [
      {
        type: "value",
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
      /* {
         name:'邮件营销',
         type:'bar',
         stack: 'abc',
         data:[120, 132, 101, 134, 90, 230, 210]
       },
       {
         name:'联盟广告',
         type:'bar',
         stack: 'abc',
         data:[220, 182, 191, 234, 290, 330, 310]
       },
       {
         name:'视频广告',
         type:'bar',
         stack: 'abc',
         data:[150, 232, 201, 154, 190, 330, 410]
       },*/
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
  //   console.log(chartOption.xAxisData,'chartOption.xAxisData')
  //构建X轴
  option.xAxis[0].data = chartOption.xAxisData;
  option.xAxis[0] = { ...option.xAxis[0], ...registerTheme.xAxis[0] };
  //构建Y轴
  option.yAxis[0] = { ...option.yAxis[0], ...registerTheme.yAxis[0] };
  option.yAxis[1] = { ...option.yAxis[1], ...registerTheme.yAxis[1] };
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
      yAxisIndex: yAxisIndex,
      stack: "abc",
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
      animationDelay: function(idx) {
        return idx * 50 + 100;
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
  // console.log(registerTheme,"registerTheme",chartOption.color)

  //柱子间距传空时默认
  option.barCategoryGap = registerTheme?.bar?.barCategoryGapAll
    ? registerTheme.bar.barCategoryGapAll
    : "30%";
  let bar1 = JSON.parse(JSON.stringify(registerTheme.bar));
  // bar1.barRadius=registerTheme?.bar?.itemStyle?.normal?.barBorderRadius?registerTheme.bar.itemStyle.normal.barBorderRadius:[0,0,0,0];
  bar1.barRadius = registerTheme?.bar?.itemStyle?.normal?.barBorderRadius
    ? registerTheme.bar.itemStyle.normal.barBorderRadius
    : [0, 0, 0, 0];
  for (let k = 0; k < option.series.length; k++) {
    // console.log(k===0,"3422");
    if (option.series.length === 1) {
      option.series[0].itemStyle = {
        normal: {
          barBorderRadius: [
            Number(bar1.barRadius[0]),
            Number(bar1.barRadius[1]),
            Number(bar1.barRadius[2]),
            Number(bar1.barRadius[3])
          ] //柱子圆角
        }
      };
      option.series[0].label.normal.position = "top";
      option.series[0].emphasis.label.position = "top";
    } else {
      if (k === 0) {
        option.series[k].itemStyle = {
          normal: {
            barBorderRadius: [
              0,
              0,
              Number(bar1.barRadius[2]),
              Number(bar1.barRadius[3])
            ] //柱子圆角
          }
        };
        option.series[k].label.normal.position = "inside";
        option.series[k].emphasis.label.position = "inside";
      } else if (k === option.series.length - 1) {
        option.series[k].itemStyle = {
          normal: {
            barBorderRadius: [
              Number(bar1.barRadius[0]),
              Number(bar1.barRadius[1]),
              0,
              0
            ] //柱子圆角
          }
        };
        option.series[k].label.normal.position = "inside";
        option.series[k].emphasis.label.position = "inside";
      } else {
        option.series[k].itemStyle = {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        };
        option.series[k].label.normal.position = "inside";
        option.series[k].emphasis.label.position = "inside";
      }
    }
  }
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
  //   console.log(option,'option======== 堆叠')
  return option;
}
