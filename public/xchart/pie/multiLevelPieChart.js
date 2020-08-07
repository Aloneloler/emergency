export default function buildOption(chartOption, registerTheme) {
  // console.log("sadfaf", chartOption, registerTheme);
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
      textStyle: {
        fontSize: registerTheme?.legend?.textStyle?.fontSize,
        color: registerTheme?.legend?.textStyle?.color,
      },
      padding: [10, 10, 10, 10],
      data: []
      // data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
      {
        type: "pie",
        avoidLabelOverlap: false,
        startAngle: 180,
        selectedMode: 'single',
        radius: ['0%', '30%'],

        label: {
          position: 'inner'
        },
        labelLine: {
          show: false
        },
        data: [
          // {value:335, name:'直接访问'},
          // {value:310, name:'邮件营销'},
          // {value:234, name:'联盟广告'},
          // {value:135, name:'视频广告'},
          // {value:1548, name:'搜索引擎'}
        ]
      },
      {
        type: "pie",
        avoidLabelOverlap: false,
        startAngle: 180,
        radius: ['40%', '55%'],
        data: [
          // {value:335, name:'直接访问'},
          // {value:310, name:'邮件营销'},
          // {value:234, name:'联盟广告'},
          // {value:135, name:'视频广告'},
          // {value:1548, name:'搜索引擎'}
        ]
      }
    ],
  };
  if (chartOption.series.length) {
    let chartYData = []
    let chartXData = []
    for (let i = 0; i < chartOption.series.length; i++) {
      chartYData.push(chartOption.series[i].data)
      chartXData.push(chartOption.xAxisData[i])
    }

    //构建颜色
    option.color = chartOption.color;
    // 构建series
    let buildSeriesData = [[], []];
    // let buildLegends = [];
    let countData = null;
    for (let i = 0; i < chartYData.length; i++) {
      for (let j = 0; j < chartYData[i].length; j++) {
        buildSeriesData[i].push({
          value: chartYData[i][j],
          name: chartXData[i][j],
        });
      }
    }
    if (buildSeriesData.length) {
      for (let i = 0; i < buildSeriesData.length; i++) {
        option.series[i].data = buildSeriesData[i];
        option.series[i].radius[1] = registerTheme?.multiLeverPie1?.radius[i]? registerTheme?.multiLeverPie1?.radius[i] + '%' : registerTheme?.pie?.radius[i] + '%'
      }
    }
    let lg = chartOption.series[chartOption.series.length - 1].data.length;
    if (option.series.length) {
      option.series[1].label = {
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
        }
      }
    }





    option.legend.data = [...chartXData[0], ...chartXData[1]];
    option.legend.show = registerTheme.legend.show;
  }
  // console.log(option, 'option');
  return option;
}
