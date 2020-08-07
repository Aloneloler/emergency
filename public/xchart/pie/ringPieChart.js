import echarts from "echarts";

export default function buildOption(chartOption, registerTheme) {
  // console.log(chartOption, registerTheme,"676767");
  var option = {
    tooltip: {
      trigger: "item",
      // formatter: "{b}: {c} ({d}%)"
      formatter: function (params) {
        let removeNode = params.dataIndex;
        let lg = chartOption.series[chartOption.series.length - 1].data.length;
        //console.log(lg,"5656656");
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
      // itemHeight: 18,
      // itemWidth: 18,
      // x: "77%",
      // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
      // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'left', 'center', 'right'）
      // "right":'auto',       //距离容器右侧的距离 （number || 百分比）
      // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
      // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
      textStyle: {
        //color: "gray",          //图例字体颜色
        //fontSize:12,          //图例字体大小
        //"fontFamily": "微软雅黑"   //图例字体
        fontSize: registerTheme?.legend?.textStyle?.fontSize,
        color: registerTheme?.legend?.textStyle?.color,
      },
      padding: [10, 10, 10, 10],
      data: []
      // data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    // toolbox: {
    //   y:'bottom',
    //   feature: {
    //       saveAsImage: {}
    //   }
    // },
    series: [
      {
        // name:'访问来源',
        type: "pie",
        // "radius":["50%","60%"],//外圈半径
        // "center":['50%', '50%'],//中心点设置
        avoidLabelOverlap: false,
        startAngle: 180,
        // label: {
        //   normal: {
        //     show: false,
        //     position: "center"
        //   },
        //   emphasis: {
        //     show: true,
        //     textStyle: {
        //       fontSize: "30",
        //       fontWeight: "bold"
        //     }
        //   }
        // },
        labelLine: {
          // normal: {
          //   show: false
          // }
        },
        data: [
          // {value:335, name:'直接访问'},
          // {value:310, name:'邮件营销'},
          // {value:234, name:'联盟广告'},
          // {value:135, name:'视频广告'},
          // {value:1548, name:'搜索引擎'}
        ]
      }
    ]
  };
  var chartYData = chartOption.series[chartOption.series.length - 1].data;
  var chartXData = chartOption.xAxisData;
  // alert(JSON.stringify(chartYData))
  //构建颜色
  option.color = chartOption.color;
  // 构建series
  let buildSeriesData = [];
  let max = Number(chartYData[0]);
  let maxInd = 0;
  let countData = null;
  chartYData.map((item, index) => {
    buildSeriesData.push({
      value: chartYData[index], name: chartXData[index]
    });
    if (Number(chartYData[index])) {
      countData += Number(chartYData[index]);
    }
    if (item.value > max) {
      max = item.value;
      maxInd = index;
    } else {
      max = max;
    }
  })
  if (registerTheme?.pie?.degree === 2) {
    buildSeriesData.push({
      value: countData,
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
    });
  }
  chartYData.map((item, index) => {
    if (item.value === max) {
      maxInd = index;
    }
  });
  let lg = chartOption.series[chartOption.series.length - 1].data.length;
  // console.log(registerTheme?.valueLabel,registerTheme?.pie,'===================222222222222')
  chartYData.map((item, index) => {
    buildSeriesData[index].label = {     //值标签
      normal: {
        rich: {
          b: {
            color: registerTheme?.valueLabel?.color?.y0 ? registerTheme.valueLabel.color.y0 : '#D1D1D3',
            align: 'center',
            fontSize: registerTheme?.valueLabel?.fontSize?.y0 ? registerTheme.valueLabel.fontSize.y0 : 12,
            background: '#fff'
          },
          a: {
            color: registerTheme?.valueLabel?.color?.y1 ? registerTheme.valueLabel.color.y1 : '#D1D1D3',
            align: 'center',
            fontSize: registerTheme?.valueLabel?.fontSize?.y1 ? registerTheme.valueLabel.fontSize.y1 : 12,
            padding: [0, 0, 10, 0],
            background: '#fff'
          },
          c: {
            // color: registerTheme?.pie?.unitStyle?.color ? registerTheme.pie.unitStyle.color : '#D1D1D3',
            color: registerTheme?.valueLabel?.unitStyle?.color ?
              registerTheme?.valueLabel?.unitStyle?.color :
              registerTheme?.pie?.unitStyle?.color ? registerTheme?.pie?.unitStyle?.color : '#D1D1D3',
            align: 'center',
            // fontSize: registerTheme?.pie?.unitStyle?.fontSize ? registerTheme.pie.unitStyle.fontSize : 12,
            fontSize: registerTheme?.valueLabel?.unitStyle?.fontSize ?
              registerTheme?.valueLabel?.unitStyle?.fontSize :
              registerTheme?.pie?.unitStyle?.fontSize ? registerTheme?.pie?.unitStyle?.fontSize : 12,
            padding: [0, 0, 10, 0],
            background: '#fff'
          }
        },
        // formatter: function(params){
        //   return "{b|"+params.name+"}\n"+"{a|"+params.value+"}";
        // },
        formatter: function (params) {
          // console.log(params,'params=========')
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
            // console.log(unit,'unit=========')
            if (unit) {
              return ['{b|' + name + '}' + '\n' + '{a|' + value + '}' + '{c|' + unit + '}']
            } else {
              return ['{b|' + name + '}' + '\n' + '{a|' + value + '}']
            }
          }
        },
        position: 'center',
        show: false,
      },
      emphasis: {
        show: registerTheme?.valueLabel?.show ? index === lg ? false : registerTheme.valueLabel.show : false,
        // textStyle: {
        //   fontSize: "30",
        //   fontWeight: "bold"
        // }
      }
    }
  })

  option.series[0].data = buildSeriesData;
  option.legend.data = chartXData;
  option.legend.show = registerTheme.legend.show;
  // console.log(option,'option')
  return option;
}
