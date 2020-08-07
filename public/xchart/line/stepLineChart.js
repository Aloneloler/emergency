export default function buildOption(chartOption, registerTheme) {
    //console.log("registerTheme222", chartOption, registerTheme);
    let option = {
      legend: {
        // "top":'top',          //距离容器上侧的距离 （number || 百分比 || 'top', 'middle', 'bottom'）
        // "left":'right',       //距离容器左侧的距离 （number || 百分比 || 'left', 'center', 'right'）
        // "right":'auto',       //距离容器右侧的距离 （number || 百分比）
        // "bottom":'auto',      //距离容器下侧的距离 （number || 百分比）
        // "orient": "vertical",  //图例列表的布局朝向（"vertical"和"horizontal"）
        padding: [10, 10, 10, 10],
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        textStyle: {
          // "fontSize":"12",          //图例字体大小
          // "fontFamily": "微软雅黑"   //图例字体
        }
      },
    //   dataZoom: [
    //     {
    //       type: "inside"
    //     }
    //   ],
      xAxis: [
        {
          type: "category",
          name: "",
          // nameLocation:'end',
          boundaryGap: false,
          nameRotate: 0,
          nameTextStyle: {
            nameGap: 15,
            align: "center",
            // backgroundColor:"red",
            fontSize: 12,
            color: "gray"
          },
          //X轴
          data: []
        }
      ],
      grid: {
        left: 10,
        right: 10,
        bottom: 10,
        top: 60,
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
      tooltip: {
        // show:true,   //提示框显隐
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      series: [
        // {
        //     name:'邮件营销',
        //     type:'line',
        //     stack: '总量',
        //     data:[120, 132, 101, 134, 90, 230, 210]
        // }
      ]
      //    animationEasing: 'elasticOut',
      //    animationDelayUpdate: function (idx) {
      //     return idx * 5;
      // }
    };
    //构建颜色
    option.color = chartOption.color;
    //构建边距
    option.grid = registerTheme.grid;
    //构建X轴
    option.xAxis[0].data = chartOption.xAxisData;
    option.xAxis[0] = { ...option.xAxis[0], ...registerTheme.xAxis[0] };
    //构建Y轴
    option.yAxis[0] = { ...option.yAxis[0], ...registerTheme.yAxis[0] };
    option.yAxis[1] = { ...option.yAxis[1], ...registerTheme.yAxis[1] };
    //构建series
    let buildSeries = [];
    let buildLegends = [];
     //console.log(chartOption,"hshshsbd333",registerTheme)
  
    for (let i = 0; i < chartOption.series.length; i++) {
      let yAxisIndex = null;
      if (i < chartOption.yAxisLengthArray[0]) {
        yAxisIndex = 0;
      } else {
        yAxisIndex = 1;
      }
      let steptype=null;
      if(i===0)
      {
        steptype='start';
      }else if(i===1)
      {
        steptype='middle';
      }else{
        steptype='end';
      }
      buildSeries.push({
        ...chartOption.series[i],
        step: steptype,
        yAxisIndex: yAxisIndex,
        animationDuration: 1000,
        symbol: "circle", //设定为实心点
        symbolSize: registerTheme?.line?.symbolSize
          ? registerTheme?.line?.symbolSize
          : 1, //设定实心点的大小
        label: {
          normal: {
            //值标签 双y轴颜色设置
            color:
              yAxisIndex === 0 && registerTheme?.valueLabel?.color?.y0
                ? registerTheme.valueLabel.color.y0
                : yAxisIndex === 1 && registerTheme?.valueLabel?.color?.y1
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
        lineStyle: registerTheme?.line?.lineStyle,
        // markLine: {
        //   silent: true,
        //   symbol: ['none', 'none'],
        //   lineStyle: {
        //     width: 2,
        //     color: 'darkgreen',
        //     opacity:registerTheme?.markLine?.show ? 1 : 0,　//线条透明度设置为0
        //     type:"solid"
        //   },
        //   data: [{
        //     yAxis: registerTheme?.markLine?.show ? registerTheme?.markLine?.val1 : "",
        //     label: {
        //       formatter: '{c}'
        //     },
        //   }]
        // }
        // "smooth": false,   //连线类型  (fasle直线  true曲线)
        // "lineStyle": {
        //   "normal": {
        //     "width":"2",    //线的粗细
        //     "type":'solid' //实线(solid) 虚线(dashed)
        //   }
        // }
        // animationDelay: function (idx) {
        //       return idx * 10;
        //   }
        emphasis: {
          itemStyle: {
            color: chartOption.color[i],
            borderColor: chartOption.color[i],
            borderWidth: registerTheme?.line?.emphasis?.borderWidth
              ? registerTheme?.line?.emphasis?.borderWidth
              : 5, //鼠标悬浮显示点的大小
            opacity: 1
          },
          label: {
            show: registerTheme?.line?.emphasis?.show
              ? registerTheme?.line?.emphasis?.show
              : false,
            position: "top",
            symbolSize: 3,
            // color: chartOption.color[i],
            // fontSize: 20
            formatter: function(data) {
              // console.log("yshhh", buildSeries[i].emphasis);
              return "{a|" + data.value + "}";
            },
            rich: {
              a: {
                color:
                  registerTheme?.line?.emphasis?.show &&
                  registerTheme?.line?.emphasis?.labelStyle?.fontColor
                    ? registerTheme?.line?.emphasis?.labelStyle?.fontColor
                    : "#fff",
                fontSize:
                  registerTheme?.line?.emphasis?.show &&
                  registerTheme?.line?.emphasis?.labelStyle?.fontSize
                    ? registerTheme?.line?.emphasis?.labelStyle?.fontSize
                    : "20",
                height:
                  registerTheme?.line?.emphasis?.show &&
                  registerTheme?.line?.emphasis?.labelStyle?.height
                    ? registerTheme?.line?.emphasis?.labelStyle?.height
                    : "auto",
                width:
                  registerTheme?.line?.emphasis?.show &&
                  registerTheme?.line?.emphasis?.labelStyle?.width
                    ? registerTheme?.line?.emphasis?.labelStyle?.width
                    : "auto",
                align: "center",
                verticalAlign: "middle",
                lineHeight:
                  registerTheme?.line?.emphasis?.show &&
                  registerTheme?.line?.emphasis?.labelStyle?.height
                    ? registerTheme?.line?.emphasis?.labelStyle?.height
                    : "auto",
                backgroundColor: {
                  image:
                    registerTheme?.line?.emphasis?.show &&
                    registerTheme?.line?.emphasis?.labelStyle?.backgroundImg
                      ? registerTheme?.line?.emphasis?.labelStyle?.backgroundImg
                      : ""
                }
              }
            }
          }
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
    // option.xAxis[0].name = registerTheme.xAxis[0].name;
    option.xAxis[0].nameTextStyle.fontSize =
      registerTheme.xAxis[0].axisLabel.textStyle.fontSize;
    option.xAxis[0].nameTextStyle.color =
      registerTheme.xAxis[0].axisLabel.textStyle.color;
  
    // -------------------------------- 预警线设置 --------------------------------
    let markLineStyle = {
      silent: true,
      symbol: ["none", "none"],
      lineStyle: {
        normal: {
          width:
            registerTheme?.markLine &&
            registerTheme?.markLine[0]?.lineStyle?.lineWidth
              ? registerTheme?.markLine[0]?.lineStyle?.lineWidth
              : 2, //线宽,
          color:
            registerTheme?.markLine &&
            registerTheme?.markLine[0]?.lineStyle?.lineColor
              ? registerTheme?.markLine[0]?.lineStyle?.lineColor
              : "#F12B09", //线颜色,
          opacity:
            registerTheme?.markLine && registerTheme?.markLine[0]?.show ? 1 : 0, //线条透明度设置为0
          type:
            registerTheme?.markLine &&
            registerTheme?.markLine[0]?.lineStyle?.lineType === 1
              ? "solid"
              : "dashed" //实虚线
        }
      }
    };
  
    if (registerTheme?.markLine?.length === 1) {
      registerTheme?.markLine[0]?.show && registerTheme?.markLine
        ? (option.visualMap = {
            show: false,
            pieces: [
              {
                gt: 0,
                lte: Number(registerTheme?.markLine[0]?.num),
                color: chartOption.color[0]
              },
              {
                gt: Number(registerTheme?.markLine[0]?.num),
                color: registerTheme?.markLine[0]?.markBarColor || "red"
              }
            ]
          })
        : (option.visualMap = null);
    } else if (registerTheme?.markLine?.length === 2) {
      registerTheme?.markLine[1]?.show && registerTheme?.markLine
        ? (option.visualMap = {
            show: false,
            pieces: [
              {
                gt: 0,
                lte: Number(registerTheme?.markLine[0]?.num),
                color: chartOption.color[0]
              },
              {
                gt: Number(registerTheme?.markLine[0]?.num),
                lte: Number(registerTheme?.markLine[1]?.num),
                color: registerTheme?.markLine[1]?.markBarColor || "red"
              },
              {
                gt: Number(registerTheme?.markLine[1]?.num),
                color: chartOption.color[0]
              }
            ]
          })
        : (option.visualMap = null);
    }
  
    let datas = [];
    for (let k = 0; k < registerTheme?.markLine?.length; k++) {
      let obj = {
        yAxis:
          registerTheme?.markLine[k]?.show && registerTheme?.markLine
            ? registerTheme?.markLine[k]?.num
            : "",
        label: {
          normal: {
            formatter: registerTheme?.markLine[k]?.show
              ? registerTheme?.markLine[k]?.ValTag?.isValTag
                ? registerTheme?.markLine[k]?.ValTag?.tipTxt
                  ? "{style|" +
                    registerTheme?.markLine[k]?.ValTag?.tipTxt +
                    "\n{c}}"
                  : "{style|{c}}"
                : " "
              : "",
            rich: {
              style: {
                color: registerTheme?.markLine[k]?.ValTag?.tipTxtStyle.fontColor
                  ? registerTheme?.markLine[k]?.ValTag?.tipTxtStyle.fontColor
                  : "#F12B09",
                fontSize: registerTheme?.markLine[k]?.ValTag?.tipTxtStyle.fontSize
                  ? registerTheme?.markLine[k]?.ValTag?.tipTxtStyle.fontSize
                  : 12
              }
            }
          }
        }
      };
      datas.push(obj);
    }
    markLineStyle.data = datas;
    option.series[0].markLine = markLineStyle;
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
  
    // option.yAxis[0].name = registerTheme.yAxis[0].name;
    option.yAxis[0].nameTextStyle.fontSize =
      registerTheme.yAxis[0].axisLabel.textStyle.fontSize;
    option.yAxis[0].nameTextStyle.color =
      registerTheme.yAxis[0].axisLabel.textStyle.color;
  
    // option.yAxis[1].name = registerTheme.yAxis[1].name;
    // console.log(registerTheme,"hshshsbd")
    option.yAxis[1].nameTextStyle.fontSize =
      registerTheme.yAxis[1].axisLabel.textStyle.fontSize;
    option.yAxis[1].nameTextStyle.color =
      registerTheme.yAxis[1].axisLabel.textStyle.color;
    //计算长度
    // let size = registerTheme.categoryAxis.axisLabel.textStyle.fontSize;
    // let xname =  option.xAxis[0].name;
    // let namePX = size * xname.length;
    // option.grid.right = namePX + 30;
    // console.log(option, "67565");
    return option;
  }
  
  function buildTheme() {
    var theme = {};
  }
  