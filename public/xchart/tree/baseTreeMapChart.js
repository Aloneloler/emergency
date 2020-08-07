export default function buildOption(chartOption, registerTheme) {
  // alert(JSON.stringify(chartOption))
  //   var data = [{
  //     "value": 17.6,
  //     "name": "保险"
  // }, {
  //     "value": 16.5,
  //     "name": "知识产权"
  // }, {
  //     "value": 16.5,
  //     "name": "出版"
  // }, {
  //     "value": 15.5,
  //     "name": "轻工业"
  // }]

  // alert(JSON.stringify(registerTheme.xAxis[0]))
  var option = {
    // backgroundColor: "#000",
    title: {
      show: false,
      text: "",
      subtext: "纯属虚构",
      left: "50%",
      top: "30",
      textAlign: "center",
      textStyle: {
        color: "#000",
        fontWeight: "normal"
      }
    },
    tooltip: {
      trigger: "item",
      //formatter: "{b}:{c}"
      formatter: function(params){
          let str = params.data.name.replace(/[\r\n]/g, ":");
          return str
      },
    },
    series: [
      {
        type: "treemap",
        width: "100%",
        height: "100%",
        top: "0%",
        roam: false, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false, //点击节点后的行为,false无反应
        breadcrumb: {
          show: false
        },
        label: {
          //描述了每个矩形中，文本标签的样式。
          normal: {
            show: true,
            rotate: 60,
            textStyle: {
              color: "#fff",
              fontSize: 16
            }

            // position: ['10%', '40%']
          }
        },
        itemStyle: {
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 16
            },
            borderWidth: 0,
            borderColor: "#fff"
          },

          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: []
      }
    ]
  };
  if (chartOption.series.length) {
    var chartYData = chartOption.series[chartOption.series.length - 1].data;
    var chartXData = chartOption.xAxisData;
    //构建颜色
    option.color = chartOption.color;
    // 构建series
    let buildSeriesData = [];
    // let buildLegends = [];
    for (let i = 0; i < chartYData.length; i++) {
      buildSeriesData.push({ value: chartYData[i], name: chartXData[i] });
    }
    for (var n in buildSeriesData) {
      buildSeriesData[n]["name"] =
        buildSeriesData[n]["name"] + " \n " + buildSeriesData[n]["value"];
    }
    //修改文本样式
    option.series[0].data = buildSeriesData;
    option.series[0].label.normal = registerTheme.xAxis[0].axisLabel;
  }
  return option;
}
