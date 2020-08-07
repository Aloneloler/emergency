import echarts from "echarts";
export default function buildOption(chartOption, registerTheme) {
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
    //堆叠
    // buildSeries.push({...chartOption.series[i],stack: '总量'})
    // 分组
    buildSeries.push({
      ...chartOption.series[i],
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
      // symbolMargin: [1,0,0,0],
      symbol: "arrow",
      symbolOffset: [0, 0],
      symbolBoundingData: 2000,
      symbolSize: [
        Number(widthVal[0]) !== 0 ? Number(widthVal[0]) * 1.8 + "%" : "100%",
        "40%"
      ],
      emphasis: {
        normal: {
          barBorderRadius: [30, 30, 30, 30]
        }
      },
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
      type:
        registerTheme?.bar?.type === 2
          ? "pictorialBar"
          : registerTheme?.bar?.type === 1
          ? "bar"
          : "bar" //斑马线设置  1柱状图  2为斑马线   默认柱状图
    });
    // console.log(registerTheme.fontSize,"yshhh",buildSeries)
    let color = [];
    let bar1 = JSON.parse(JSON.stringify(registerTheme.bar));
    bar1.barRadius = registerTheme?.bar?.itemStyle?.normal?.barBorderRadius; //柱子圆角   提交必须带normal
    if (i === 0) {
      buildSeries[i].barGap = "-100%";
    } else {
      buildSeries[i].barGap = "100%";
    }
    //判断color数组的形式#或者rgb 根据不同形式进行组合
    chartOption.color.map(function(val, ind) {
      // console.log(registerTheme?.bar?.barRadius,"343434");
      if (val.indexOf("rgb") === -1) {
        color = chartOption.color;
        buildSeries[i].itemStyle = {
          normal: {
            color: registerTheme?.bar?.gradualChange
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
        buildSeries[i].itemStyle = {
          normal: {
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
  //计算长度
  // let size = registerTheme.categoryAxis.axisLabel.textStyle.fontSize;
  // let xname =  option.xAxis.name;
  // let namePX = size * xname.length;
  // option.grid.right = namePX + 30;
  // console.log(option,"4454")
  //处理操作 构建
  return option;
}
function buildTheme() {
  var theme = {};
}
