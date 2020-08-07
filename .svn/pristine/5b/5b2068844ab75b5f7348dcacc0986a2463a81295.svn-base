import echarts from "echarts";
import { colorRgb } from "../colorChange";

export default function buildOption(chartOption, registerTheme) {
  var option = {
    tooltip: {
      trigger: "axis",
      formatter: function(params) {
        let res = params[0].name + "<br/>";
        for (let i = 0; i < params.length; i++) {
          let span =
            '<span style="display:inline-block;margin-right:10px;width:10px;height:10px;border-radius:50%;background:' +
            params[i].color +
            '"></span>';
          res += span;
          res += params[i].seriesName;
          res += " : " + Math.abs(params[i].data);
          res += "<br/>";
        }
        return res;
      },
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
      data: ["利润", "支出", "收入"],
      textStyle: {
        // "fontSize":"12",          //图例字体大小
        // "fontFamily": "微软雅黑"   //图例字体
      }
    },
    // barCategoryGap: '30%',//柱间距
    // barWidth:'自适应',//柱宽
    // itemStyle:{
    //     barBorderRadius:[0, 0, 0, 0],//柱子圆角
    // },
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
        },
        axisLabel: {
          //Y轴数据
          formatter: function(value) {
            return Math.abs(value); //负数取绝对值变正数
          }
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
        axisTick: { show: false },
        data: []
        // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      }
    ],
    series: [
      /*       {
               name:'收入',
               type:'bar',
               stack: '总量',
               label: {
                 normal: {
                   show: true
                 }
               },
               data:[320, 302, 341, 374, 390, 450, 420]
             },
             {
               name:'支出',
               type:'bar',
               stack: '总量',
               label: {
                 normal: {
                   show: true,
                   formatter:function(value){
                     return Math.abs(value.data);   //负数取绝对值变正数
                   },
                   position: 'left'
                 }
               },
               data:[-120, -132, -101, -134, -190, -230, -210],
             }*/
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
  option.yAxis[0].data = chartOption.xAxisData;
  option.xAxis[0] = { ...option.xAxis[0], ...registerTheme.xAxis[0] };
  option.xAxis[0].axisLabel.formatter = function(value) {
    return Math.abs(value); //负数取绝对值变正数
  };
  //构建Y轴
  option.yAxis[0] = { ...option.yAxis[0], ...registerTheme.yAxis[0] };
  // console.log(option, 'option2222222222')
  //构建series
  let buildSeries = [];
  let buildLegends = [];
  let bar1 = JSON.parse(JSON.stringify(registerTheme.bar));
  bar1.barRadius = registerTheme?.bar?.itemStyle?.normal?.barBorderRadius; //柱子圆角   提交必须带normal
  for (let i = 0; i < chartOption.series.length; i++) {
    // console.log(chartOption.series[i], 'chartOption.series[i]')
    let labelObj;
    let dataArray = chartOption.series[i].data;
    let yAxisIndex = null;
    if (i < chartOption.yAxisLengthArray[0]) {
      yAxisIndex = 0;
    } else {
      yAxisIndex = 1;
    }
    if (i === 0) {
      dataArray = [];

      let seriesObj = chartOption.series[i];
      for (let j = 0; j < seriesObj.data.length; j++) {
        dataArray.push(-seriesObj.data[j]);
      }
    }
    buildSeries.push({
      ...chartOption.series[i],
      stack: "abc",
      // label: labelObj,
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
          formatter: function(value) {
            return Math.abs(value.data); //负数取绝对值变正数
          }
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
            return "{a|" + Math.abs(data.value) + "}";
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
      data: dataArray,
      animationDelay: function(idx) {
        return idx * 50 + 100;
      }
    });
    buildLegends.push(chartOption.series[i].name);
    buildSeries[i].itemStyle = {
      normal: {
        barBorderRadius: bar1.barRadius //柱子圆角
      }
    };
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

  //柱子间距传空时默认
  option.barCategoryGap = registerTheme?.bar?.barCategoryGapAll
    ? registerTheme.bar.barCategoryGapAll
    : "30%";

  option.series.map((item, index) => {
    if (option.series.length === 2) {
      if (index === 0) {
        option.series[index].label.normal.position = "left";
        option.series[index].emphasis.label.position = "left";
      } else if (index === 1) {
        option.series[index].label.normal.position = "right";
        option.series[index].emphasis.label.position = "right";
      }
    } else {
      if (index === option.series.length - 1) {
        option.series[index].label.normal.position = "right";
        option.series[index].emphasis.label.position = "right";
      } else if (index === 0) {
        option.series[index].label.normal.position = "left";
        option.series[index].emphasis.label.position = "left";
      } else {
        option.series[index].label.normal.position = "inside";
        option.series[index].emphasis.label.position = "inside";
      }
    }
  });

  //  //颜色渐变
  //  option.series[0].itemStyle={
  //   normal: {
  //       color: registerTheme.bar.gradualChange?new echarts.graphic.LinearGradient(
  //           1, 0, 0, 0,
  //           [
  //               {offset: 0, color: 'rgba('+chartOption.color[0].colorRgb()+',1)'},                   //柱图渐变色               //柱图渐变色
  //               {offset: 1, color: 'rgba('+chartOption.color[0].colorRgb()+',0.2)'}                   //柱图渐变色
  //           ]
  //         ):''
  //   }
  // }
  // console.log(option,"23333");
  //计算长度
  // let size = registerTheme.categoryAxis.axisLabel.textStyle.fontSize;
  // let xname = option.xAxis[0].name;
  // let namePX = size * xname.length;
  // option.grid.right = namePX + 30;
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

  return option;
}
