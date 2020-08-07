export default function buildOption(chartOption, registerTheme) {
// console.log(chartOption,'桑基')
let option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'

    },
        series: [{
            type: 'sankey',
            layout:'none',
            focusNodeAdjacency: 'allEdges',
            draggable: false,//禁止拖拽
            // label:{
            //     color:'red',
            //     fontWeight:'bold',
            //     fontFamily:'Arial',
            //     fontSize:14
            // },
            //data:citylist,
           // links:data,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#fff'
            },
            lineStyle: {
                curveness: 0.5,
                opacity: 0.5
            },
           data: [],
           links: [],
           animationEasing: 'elasticOut',
           animationDelayUpdate: function (idx) {
             return idx * 50;
           }
        }]
    };
    let buildSeriesData = [];
  
    if (chartOption.series.length) {
        let yAxisIndex = null;
        if (chartOption.yAxisLengthArray[0]) {
            yAxisIndex = 0;
          }else
          {
            yAxisIndex = 1;
          }
          var chartYData = chartOption.series;
          var chartXData = chartOption.xAxisData;
          let nameList=[];
          let namearr=[];
          let linkList=[];
          for(let i=0;i<chartXData.length;i++)
          {
              for(let j=0;j<chartXData[i].length;j++)
              {
                     let nameobj= {
                          name:chartXData[i][j],
                          label:{
                            normal: {
                          //color:chartOption.color[j],
                          color:yAxisIndex===0&&registerTheme?.valueLabel?.color?.y0?registerTheme.valueLabel.color.y0:yAxisIndex===1&&registerTheme?.valueLabel?.color?.y1?registerTheme.valueLabel.color.y1:'#D1D1D3',
                          fontSize:yAxisIndex===0&&registerTheme?.valueLabel?.fontSize?.y0?registerTheme.valueLabel.fontSize.y0:yAxisIndex===1&&registerTheme?.valueLabel?.fontSize?.y1?registerTheme.valueLabel.fontSize.y1:12,//值标签 字体大小
                                show:registerTheme?.valueLabel?.show?registerTheme.valueLabel.show:false,//值标签显示/隐藏
                              }
                            },
                          itemStyle: {
                            normal: {
                              color: chartOption.color[j],
                                  }
                                },
                                // emphasis: {
                                //     itemStyle: {
                                //       color: chartOption.color[j],
                                //       borderColor: chartOption.color[j],
                                //       borderWidth: 5,
                                //       opacity: 1
                                //     },
                                //     label: {
                                //       //position: "top",
                                //       formatter: function(data) {
                                //         return "{a|" + data.name + "}";
                                //       },
                                //       rich: {
                                //         a: {
                                //           color: chartOption.color[j],
                                //           fontSize: 20
                                //         }
                                //       }
                                //     }
                                //   },
                                //   animationDelay: function (idx) {
                                //     return idx * 50 + 100;
                                //   }
                          } //构造节点对象，包括name和itemStyle
                  if(namearr.indexOf(chartXData[i][j]) === -1)
                  {
                      namearr.push(chartXData[i][j]);
                      nameList.push(nameobj);
                  }    
              }
              if((i+1)!==chartXData.length)
              {
                     for(let j=0;j<chartXData[i].length;j++)
                     {
                         linkList.push({
                             source: chartXData[i][j],
                             target: chartXData[i+1][j],
                             value: chartYData[0].data[j],
                             lineStyle: { //添加样式配置
                                normal: {
                                 color: 'source',
                                 opacity:registerTheme?.sankey?.opacity?registerTheme.sankey.opacity:0.5,
                                     //shadowColor: 'rgba(0, 0, 0, 0.5)',
                                     // shadowBlur: 10
                             }},
                            //  emphasis: {
                            //     lineStyle: {
                            //         normal: { 
                            //             color: chartOption.color[j],
                            //             //curveness: 0.7
                            //         }
                            //     }
                            //   },
                         })
                     }
             }

          }
     if(chartYData.length)
     {
          for(let i=0;i<chartOption.series.length;i++)
          {
              buildSeriesData.push({
                  name: chartOption.series[i].name ,
                  left:registerTheme?.grid?.left?registerTheme.grid.left:10,
                  right: registerTheme?.grid?.right?registerTheme.grid.right:10,
                  bottom: registerTheme?.grid?.bottom?registerTheme.grid.bottom:10,
                  top: registerTheme?.grid?.top?registerTheme.grid.top:10,
                  ...chartOption.series[i],
                  focusNodeAdjacency: 'allEdges',
                  layout:'none',
                  draggable: false,//禁止拖拽
                  data:nameList,
                  links:linkList,
                  itemStyle: {
                      borderWidth: 1,
                      borderColor: '#fff'
                  },
                   lineStyle: {
                    normal: { 
                        color: 'source',
                        //curveness: 0.7
                    }
                },
              })
          }
      }
          option.series= buildSeriesData;
      }
  
  //console.log(option,'option')
  
      return option;
  }