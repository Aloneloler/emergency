import chartColors from "../../src/components/Chart/colors";
/**
legend: {
        orient: 'horizontal', // 'vertical'
        x: 'right', // 'center' | 'left' | {number},
        y: 'top', // 'center' | 'bottom' | {number}
        backgroundColor: '#fff',
        borderColor: 'rgba(178,34,34,0.8)',
        borderWidth: 4,
        padding: 10,    // [5, 10, 15, 20]
        itemGap: 20,
        textStyle: {color: 'red'},
        selected: {
            '降水量': false
        },
        data: [{
            name: '蒸发量',
            icon: 'circle',//'image://../asset/ico/favicon.png',//标志图形类型，默认自动选择（8种类型循环使用，不显示标志图形可设为'none'），默认循环选择类型有：'circle' | 'rectangle' | 'triangle' | 'diamond' |'emptyCircle' | 'emptyRectangle' | 'emptyTriangle' | 'emptyDiamond'另外，还支持五种更特别的标志图形'heart'（心形）、'droplet'（水滴）、'pin'（标注）、'arrow'（箭头）和'star'（五角星），这并不出现在常规的8类图形中，但无论是在系列级还是数据级上你都可以指定使用，同时，'star' + n（n>=3)可变化出N角星，如指定为'star6'则可以显示6角星
            textStyle: {fontWeight: 'bold', color: 'green'}
        },
            '降水量', '最高气温', '最低气温'
        ]
    }

*/
export default function registerTheme(customTheme, chartColorType) {
  // console.log(customTheme,'customTheme');
  var theme = {
    color: chartColors(chartColorType, customTheme?.colourReversal),
    backgroundColor: "rgba(0, 0, 0, 0)",
    title: {
      show: false
    },
    grid: {
      left: "3%",
      right: 54,
      bottom: "3%",
      containLabel: true
    },
    textStyle: {},
    line: {
      itemStyle: {
        normal: {
          borderWidth: 1
        }
      },
      lineStyle: {
        normal: {
          width: 2,
          type: "solid" //'dotted'虚线 'solid'实线
        }
      },
      symbolSize: 2,
      symbol: "circle",
      smooth: true
    },
    bar: {
      itemStyle: {
        normal: {
          barBorderWidth: 0,
          barBorderColor: "#ccc"
        },
        emphasis: {
          barBorderWidth: 0,
          barBorderColor: "#ccc"
        }
      },
      yuan: true
    },
    pie: {
      itemStyle: {
        normal: {
          borderWidth: 0,
          borderColor: "#ccc"
        },
        emphasis: {
          borderWidth: 0,
          borderColor: "#ccc"
        },
      }
      // radius: "70%",
      // center: ["50%", "50%"]
    },
    categoryAxis: {
      axisLine: {
        show: false,
        lineStyle: {
          color: "#333"
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#333"
        }
      },
      axisLabel: {
        rotate: 0,
        textStyle: {
          color: "gray",
          fontSize: 12
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ["#ccc"],
          type: "dashed"
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
        }
      }
    },
    valueAxis: {
      axisLine: {
        show: false,
        lineStyle: {
          color: "#333"
        }
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#333"
        }
      },
      axisLabel: {
        rotate: 0,
        textStyle: {
          color: "gray",
          fontSize: 12
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ["#ccc"]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
        }
      }
    },
    legend: {
      show: true,
      textStyle: {
        color: "gray",
        fontSize:12
      },
      padding: [10, 10, 10, 10],
      icon: "rectangle"
    },
    tooltip: {
      confine:true,
      //extraCssText:'z-index:99999',
      axisPointer: {
        lineStyle: {
          color: "gray",
          width: 1
        },
        crossStyle: {
          color: "gray",
          width: 1
        }
      }
    }
  };
  // alert(JSON.stringify(customTheme.line));
  var newTheme = copy(customTheme, theme);
  // console.log("hhhhdfsfsdfsd",newTheme);
  // alert(JSON.stringify(newTheme.line));
  return newTheme;
}

function copy(p, c) {
  var c = c || {};
  for (var i in p) {
    // console.log(typeof p[i])
    if (typeof p[i] === "object") {
      // console.log(p[i].constructor)
      // c[i] = p[i].constructor === Array ? [] : c[i];
      copy(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }
  return c;
}
