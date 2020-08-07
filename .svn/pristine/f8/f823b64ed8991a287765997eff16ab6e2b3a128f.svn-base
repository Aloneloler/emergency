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
      // orient: "horizontal",
      // x: "center",
      // padding:[10, 10, 10, 10],
      // orient: "vertical",
      // x: "right",
      // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
      // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'left', 'center', 'right'）
      // "right":'auto',       //距离容器右侧的距离 （number || 百分比）
      // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
      // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
      // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      data: [],
      textStyle: {
        //   "color": "gray",          //图例字体颜色
        //   "fontSize":"12",          //图例字体大小
        //   "fontFamily": "微软雅黑"   //图例字体
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
        type: "value",
        nameRotate: 0,
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
        nameRotate: 0,
        nameTextStyle: {
          nameGap: 15,
          align: "center",
          // backgroundColor:"red",
          fontSize: 12,
          color: "gray"
        }
      }
    ],
    yAxis: [
      {
        type: "category",
        nameTextStyle: {
          nameGap: 15,
          align: "center",
          // backgroundColor:"red",
          fontSize: 12,
          color: "gray"
        },
        // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        data: []
      }
    ],
    series: [
      /*    {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
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
  option.yAxis[0].data = chartOption.xAxisData;
  option.yAxis[0] = { ...option.yAxis[0], ...registerTheme.xAxis[0] };
  //构建Y轴
  option.xAxis[0] = { ...option.xAxis[0], ...registerTheme.yAxis[0] };
  option.xAxis[1] = { ...option.xAxis[1], ...registerTheme.yAxis[1] };
  // ------------------------------------
  //构建series
  let buildSeries = [];
  let buildLegends = [];
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
      stack: "abc",
      label: {
        normal: {
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
  let bar1 = JSON.parse(JSON.stringify(registerTheme.bar));
  // bar1.barRadius=registerTheme?.bar?.itemStyle?.normal?.barBorderRadius?registerTheme.bar.itemStyle.normal.barBorderRadius:[0,0,0,0];
  bar1.barRadius = registerTheme?.bar?.itemStyle?.normal?.barBorderRadius
    ? registerTheme.bar.itemStyle.normal.barBorderRadius
    : [0, 0, 0, 0];
  for (let k = 0; k < option.series.length; k++) {
    // console.log(k===0,"3422");
    if (option.series.length === 1) {
      option.series[k].itemStyle = {
        normal: {
          barBorderRadius: [
            Number(bar1.barRadius[0]),
            Number(bar1.barRadius[1]),
            Number(bar1.barRadius[2]),
            Number(bar1.barRadius[3])
          ] //柱子圆角
        }
      };
      option.series[k].label.normal.position = "right";
      option.series[k].emphasis.label.position = "right";
    } else {
      if (k === 0) {
        option.series[k].itemStyle = {
          normal: {
            barBorderRadius: [bar1.barRadius[0], 0, 0, bar1.barRadius[3]] //柱子圆角
          }
        };
        option.series[k].label.normal.position = "inside";
        option.series[k].emphasis.label.position = "inside";
      } else if (k === option.series.length - 1) {
        option.series[k].itemStyle = {
          normal: {
            barBorderRadius: [
              0,
              Number(bar1.barRadius[1]),
              Number(bar1.barRadius[2]),
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
  //   let size = registerTheme.categoryAxis.axisLabel.textStyle.fontSize;
  // let xname = option.yAxis[0].name;
  // let namePX = size * xname.length;
  // option.grid.right = namePX + 30;
  return option;
}
