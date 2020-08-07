export default function buildOption(chartOption, registerTheme) {
  let option = {
        title: {
            text: '基础漏斗图',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
        },
        toolbox: {
            // feature: {
            //     dataView: {readOnly: false},
            //     restore: {},
            //     saveAsImage: {}
            // }
        },
        legend: {
            type: "scroll",
            padding: [10, 10, 10, 10],
            // data: ['展现','点击','访问','咨询','订单']
        },
        calculable: true,
        series: [
            {
                // name:'漏斗图',
                 type:'funnel',
                //left: '10%',
                //top: 60,
                //x2: 80,
                //bottom: 60,
                //width: '80%',
                // height: {totalHeight} - y - y2,
                //min: 0,
                //max: 100,
                //minSize: '0%',
                //maxSize: '100%',
                // sort: 'descending',
                // gap: 2,
                // label: {
                //     show: true,
                //     position: 'inside'
                // },
                labelLine: {
                  normal: {
                      show: false
                  }
              },
                // itemStyle: {
                //     borderColor: '#fff',
                //     borderWidth: 1
                // },
                // emphasis: {
                //     label: {
                //         fontSize: 20
                //     }
                // },
                 data: [
                    // {value: 60, name: '访问'},
                    // {value: 40, name: '咨询'},
                    // {value: 20, name: '订单'},
                    // {value: 80, name: '点击'},
                    // {value: 100, name: '展现'}
                ]
            }
        ]
    };

    var chartYData = chartOption.series[chartOption.series.length - 1].data;
    var chartXData = chartOption.xAxisData;
    let legendData = [];
    var compare = function (prop) {
        return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
         val1 = Number(val1);
         val2 = Number(val2);
        }
        if (val1 < val2) {
         return -1;
        } else if (val1 > val2) {
         return 1;
        } else {
         return 0;
        }  
        } 
       }

    //构建series
    let buildSeries = [];
    let dic=new Map();
    for(let name in chartXData)
    {
       legendData.push(chartXData[name]);
    }

    for (let j = 0; j < chartOption.series.length; j++) {
        let yAxisIndex = null;
        if (j < chartOption.yAxisLengthArray[0]) {
          yAxisIndex = 0;
        } else {
          yAxisIndex = 1;
        }
        let seriesData = [];
      for (let i = 0; i < chartOption.series[j].data.length; i++) {
        seriesData.push({ value: chartOption.series[j].data[i], name: chartXData[i],
            emphasis: {
                itemStyle: {
                  color: chartOption.color[i],
                  borderColor: chartOption.color[i],
                  borderWidth: 20,
                  opacity: 1
                },
                label: {
                  //position: "top",
                  formatter: function(data) {
                    return "{a|" + data.name + "}";
                  },
                  rich: {
                    a: {
                      color: chartOption.color[i],
                      fontSize: 20
                    }
                  }
                }
              },
              animationDelay: function (idx) {
                return idx * 50 + 100;
              }});
      } 
      dic.set(j,seriesData);
      buildSeries.push({
        name: chartOption.series[j].name ,
        left:registerTheme?.grid?.left?registerTheme.grid.left:10,
        right: registerTheme?.grid?.right?registerTheme.grid.right:10,
        bottom: registerTheme?.grid?.bottom?registerTheme.grid.bottom:10,
        top: registerTheme?.grid?.top?registerTheme.grid.top:10,
        sort: 'none',
        ...chartOption.series[j],
        data:dic.get(j),
        label: j===0?{
         normal: {
             show:registerTheme?.valueLabel?.show?registerTheme.valueLabel.show:false,//值标签显示/隐藏
             formatter: '{b}',
             textStyle: {
               color:yAxisIndex===0&&registerTheme?.valueLabel?.color?.y0?registerTheme.valueLabel.color.y0:yAxisIndex===1&&registerTheme?.valueLabel?.color?.y1?registerTheme.valueLabel.color.y1:'#D1D1D3',
               fontSize:yAxisIndex===0&&registerTheme?.valueLabel?.fontSize?.y0?registerTheme.valueLabel.fontSize.y0:yAxisIndex===1&&registerTheme?.valueLabel?.fontSize?.y1?registerTheme.valueLabel.fontSize.y1:12,//值标签 字体大小
             }
         },
         emphasis: {
             position:'inside',
             formatter: '{b}: {c}'
         }
     }:  {
        normal: {
            show:registerTheme?.valueLabel?.show?registerTheme.valueLabel.show:false,//值标签显示/隐藏
            position: 'inside',
            formatter: '{c}',
            textStyle: {
                color:yAxisIndex===0&&registerTheme?.valueLabel?.color?.y0?registerTheme.valueLabel.color.y0:yAxisIndex===1&&registerTheme?.valueLabel?.color?.y1?registerTheme.valueLabel.color.y1:'#D1D1D3',
                fontSize:yAxisIndex===0&&registerTheme?.valueLabel?.fontSize?.y0?registerTheme.valueLabel.fontSize.y0:yAxisIndex===1&&registerTheme?.valueLabel?.fontSize?.y1?registerTheme.valueLabel.fontSize.y1:12,//值标签 字体大小
            }
        },
        emphasis: {
            position:'inside',
            formatter: '{b}: {c}'
        }
    },
     labelLine: {
       normal: {
           show: false
       }
   },
     itemStyle: {
       normal: {
           opacity: 0.7
       }
   },
       });
    
   

    }
   

    
    option.series = buildSeries;
    //构建颜色
    option.color = chartOption.color;

    option.legend.data = legendData;
    option.legend.show = registerTheme.legend.show;
  
//console.log(option)
    return option;
}