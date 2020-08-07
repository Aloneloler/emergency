export default function buildOption(chartOption, registerTheme) {
  // console.log("registerTheme222",chartOption, registerTheme);

  let option = {
    tooltip: {
      show: true,
      trigger: 'item',
    },
    legend: {
      padding: [10, 10, 10, 10],
      // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
      center: ['50%', '50%'],
      radius: '70%',
      startAngle: 90,
      splitNumber: 4,
      shape: 'react',
      splitArea: {
        areaStyle: {
          color: ['transparent'],
        },
      },
      axisLabel: {
        show: false,
        fontSize: 20,
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      name: {
        color: '#61A0E8',
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#d6d6d6',
          width:1,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: '#d6d6d6',
          width:1,
        },
      },
      // shape: 'circle',
      indicator: [],
    },

    series: [
      //   {
      //   name: "预算分配（Allocated Budget）",
      //   type: "radar",
      //   symbolSize: 0,
      //   areaStyle: {
      //     normal: {
      //       color: "rgba(86,199,60, 0.3)"
      //     }
      //   },
      //   itemStyle: {
      //     color: 'rgba(86,199,60, 1)',
      //     borderColor: 'rgba(86,199,60, 0.3)',
      //     borderWidth: 10,
      //   },
      //   lineStyle: {
      //     normal: {
      //       color: "rgba(86,199,60, 1)",
      //       width: 2
      //     }
      //   },
      //   data: [
      //     [60, 140, 28, 80, 42, 90]
      //   ]
      // }
    ],

  };
  let legendData = [];
  // 最大值数组
  let allMaxArr = [];
  // //构建series
  let buildSeries = [];
  let buildLegends = [];
  let indicator = [];
  for (let i in chartOption.series) {
    legendData.push(chartOption.series[i].name);
    allMaxArr.push(Math.max(...chartOption.series[i].data));
    buildSeries.push({
      name: chartOption.series[i].name,
      data: [chartOption.series[i].data],
      type: 'radar',
      symbol: 'circle',
      symbolSize: 1,
      areaStyle: {
        normal: {
          color: chartOption.color[i],
          opacity: registerTheme?.radar?.shadowOpacity || Number(registerTheme?.radar?.shadowOpacity) === 0 ? Number(registerTheme?.radar?.shadowOpacity) / 100 : 20 / 100,    //雷达阴影透明度设置
        },
      },
      label: {
        // normal: {
        show: registerTheme?.valueLabel?.show
          ? registerTheme.valueLabel.show
          : false, //值标签显示/隐藏
        color:
          registerTheme.valueLabel?.color?.y0
            ? registerTheme.valueLabel.color?.y0
            : '#D1D1D3',
        fontSize:
          registerTheme?.valueLabel?.fontSize?.y0
            ? registerTheme.valueLabel.fontSize?.y0
            : 12, //值标签 字体大小

        // }
      },
      emphasis: {
        itemStyle: {
          color: chartOption.color[i],
          borderColor: chartOption.color[i],
          borderWidth: 5,
          opacity: 1,
        },
        label: {
          //position: "top",
          formatter: function(data) {
            return '{a|' + data.value + '}';
          },
          rich: {
            a: {
              color: chartOption.color[i],
              fontSize: 20,
            },
          },
        },
      },
      itemStyle: {
        color: chartOption.color[i],
        // color: 'rgb(199,62,69,0.5)',
        // borderColor: 'rgba(86,199,60, 0.3)',
        borderWidth: 10,
      },
      lineStyle: {
        normal: {
          // color: "rgba(86,199,60, 1)",
          width: 2,
        },
      },
      // ...chartOption.series[i],
    });
    buildLegends.push(chartOption.series[i].name);
  }
  let maxNum = Math.max(...allMaxArr);
  for (let i in chartOption.xAxisData) {
    let obj = {
      name: chartOption.xAxisData[i],
      max: maxNum,
    };
    indicator.push(obj);
  }
  option.radar.indicator = indicator;
  option.series = buildSeries;
  option.legend.data = legendData;
  option.legend.show = registerTheme.legend.show;
  option.radar.center = registerTheme.radar.center; //雷达图的位置
  option.radar.radius = registerTheme.radar.radius; //雷达图半径大小
  option.radar.splitNumber = registerTheme.radar.splitNumber; //网络线设置
  
  option.radar.splitLine.lineStyle.color = registerTheme?.radar?.x?.style?.color ? registerTheme?.radar?.x?.style?.color : '#d6d6d6'; //雷达x轴颜色
  option.radar.splitLine.lineStyle.width = registerTheme?.radar?.x?.style?.lineWidth || Number(registerTheme?.radar?.x?.style?.lineWidth) === 0 ? registerTheme?.radar?.x?.style?.lineWidth : 1; //雷达x轴线宽

  option.radar.axisLine.lineStyle.color = registerTheme?.radar?.y?.style?.color ? registerTheme?.radar?.y?.style?.color : '#d6d6d6'; //雷达y轴颜色
  option.radar.axisLine.lineStyle.width = registerTheme?.radar?.y?.style?.lineWidth || Number(registerTheme?.radar?.x?.style?.lineWidth) === 0  ? registerTheme?.radar?.y?.style?.lineWidth : 1; //雷达y轴线宽


  option.radar.name.color = registerTheme.xAxis[0].axisLabel.textStyle.color ? registerTheme.xAxis[0].axisLabel.textStyle.color : '#61A0E8'; //雷达x轴字体颜色
  option.radar.name.fontSize = registerTheme.xAxis[0].axisLabel.textStyle.fontSize ? registerTheme.xAxis[0].axisLabel.textStyle.fontSize : 12; //雷达x轴字体大小
  // console.log(option, "wwwww");
  return option;
}
