import echarts from "echarts";
import registerTheme from "../../../public/xchart/registerTheme";
//++++++++++++
import baseLineChart from "../../../public/xchart/line/baseLineChart";
import areaLineChart from "../../../public/xchart/line/areaLineChart";
import stepLineChart from "../../../public/xchart/line/stepLineChart";
import percentAreaChart from "../../../public/xchart/line/percentAreaChart";

import groupBarChart from "../../../public/xchart/bar/groupBarChart";
import histogramChart from "../../../public/xchart/bar/histogramChart";
import histogramStackChart from "../../../public/xchart/bar/histogramStackChart";
import columnChart from "../../../public/xchart/bar/columnChart";
import pyramidChart from "../../../public/xchart/bar/pyramidChart";
import pyramidStackChart from "../../../public/xchart/bar/pyramidStackChart";
import stackChart from "../../../public/xchart/bar/stackChart";
import percentBarChart from "../../../public/xchart/bar/percentBarChart";
import stackTransverseChart from "../../../public/xchart/bar/stackTransverseChart";

//弧形柱状
// import arcBarChart from "../../../public/xchart/bar/arcBarChart";

import ringPieChart from "../../../public/xchart/pie/ringPieChart";
import basePieChart from "../../../public/xchart/pie/basePieChart";
import ngChart from "../../../public/xchart/pie/ngChart";
import multiLevelPieChart from "../../../public/xchart/pie/multiLevelPieChart";

// import baseRadarChart from "../../../public/xchart/radar/baseRadarChart";

import baseScatterChart from "../../../public/xchart/scatter/baseScatter";
//树状图
import baseTreeMapChart from "../../../public/xchart/tree/baseTreeMapChart";

//混合图表
import mixLineBarChart from "../../../public/xchart/bar/mixLineBarChart";

// 漏斗图
import baseFunnelChart from "../../../public/xchart/funnel/baseFunnelChart";
// 河流图
// import themeRiverChart from "../../../public/xchart/themeRiver/themeRiverChart";
//热力图
import heatMapChart from "../../../public/xchart/heatmap/heatMapChart";
// 桑基图
import baseSankeyChart from "../../../public/xchart/sankey/baseSankeyChart";
//极坐标下柱状图
import arcColumnarChart from "../../../public/xchart/bar/arcColumnarChart";
//极坐标下柱状图
import groupArcColumnarChart from "../../../public/xchart/bar/groupArcColumnarChart";
// 地图
// import baseMapChart from "../../../public/xchart/map/baseMapChart";

// import { chartPro } from "./d3entity";
import chartColors from "./colors";

//气泡图
// import bubbleChart from "./DBubble/bubble";

import ReactDOM from "react-dom";
// import DBubble from "./DBubble";
// import DTable from "./DTable";
// import DWordCloud from "./DWordCloud";

// import formatData from "./DTable/formatData";
// import formatData2 from "./DWordCloud/formatData";

//++++++++++++
// import chartColors from "./colors";

//构造的数据格式
import { commonChartsData } from "./entity";

// let arrayChartState = [];
// let arr = [];

let arrayAnimate = [];

let baseLineChartInstance = null;
let stepLineChartInstance = null;
let groupBarChartInstance = null;
let histogramChartInstance = null;
let histogramStackChartInstance = null;
let areaLineChartInstance = null;
let percentAreaChartInstance = null;
let columnChartInstance = null;
let pyramidChartInstance = null;
let pyramidStackChartInstance = null;
let stackChartInstance = null;
let percentBarChartInstance = null;
let stackTransverseChartInstance = null;
let ringPieChartInstance = null;
let ngPieChartInstance = null;
// let baseRadarChartInstance = null;
let basePieChartInstance = null;
let multiLevelPieChartInstance = null;
let mixLineBarChartInstance = null;

let baseScatterChartInstance = null;
let baseSankeyChartInstance = null;
let arcColumnarChartInstance = null;
let groupArcColumnarChartInstance = null;
let baseFunnelChartInstance = null;
// let themeRiverChartInstance = null;
let heatMapChartInstance = null;
// 地图
// let baseMapChartInstance = null;

//树状图
let baseTreeMapChartInstance = null;
let arrayCharts = [];

export function initArrayCharts() {
  arrayCharts = [];
}

export function loadChart(obj, xseries, yseries, containers, dasLayoutPanelList, data,drilling) {
  // console.log(obj,'eeeeeeeeeeeeeee')
  let echartThemenew = obj.echartTheme;
  //颜色反序
  echartThemenew.colourReversal = echartThemenew.colourReversal;
  // 预警线
  if (echartThemenew?.markLineValType === 1) {
    echartThemenew.markLine = echartThemenew?.markLineObj?.oneVal;
  } else if (echartThemenew?.markLineValType === 2) {
    echartThemenew.markLine = echartThemenew?.markLineObj?.moreVal;
  }
  // 图例位置
  if (echartThemenew.legendOrient === 1) {
    echartThemenew.legend.orient = "horizontal";
    echartThemenew.legend.top = "top";
    echartThemenew.legend.left = "center";
    //echartThemenew.legend.textStyle.fontSize = 10;
  } else if (echartThemenew.legendOrient === 2) {
    echartThemenew.legend.orient = "horizontal";
    echartThemenew.legend.top = "bottom";
    echartThemenew.legend.left = "center";
    //echartThemenew.legend.textStyle.fontSize = 10;
  } else if (echartThemenew.legendOrient === 3) {
    echartThemenew.legend.orient = "vertical";
    echartThemenew.legend.top = "middle";
    echartThemenew.legend.left = "right";
    //echartThemenew.legend.textStyle.fontSize = 10;
  } else {
    echartThemenew.legend.textStyle.fontSize =
      echartThemenew?.legend?.textStyle?.fontSize;
  }
  // 饼图
  if (obj.style === "basePieChart") {
    if (echartThemenew.pie1) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.pie1));
      obj.radius =
        echartThemenew.pie1.radius !== "" &&
        echartThemenew.pie1.radius !== undefined &&
        echartThemenew.pie1.radius !== null
          ? echartThemenew.pie1.radius + "%"
          : "70%";
      obj.center[0] =
        echartThemenew.pie1.center[0] !== "" &&
        echartThemenew.pie1.center[0] !== undefined &&
        echartThemenew.pie1.center[0] !== null
          ? echartThemenew.pie1.center[0] + "%"
          : "50%";
      obj.center[1] =
        echartThemenew.pie1.center[1] !== "" &&
        echartThemenew.pie1.center[1] !== undefined &&
        echartThemenew.pie1.center[1] !== null
          ? echartThemenew.pie1.center[1] + "%"
          : "50%";
      echartThemenew.pie = obj;
    } else {
      echartThemenew.pie = {
        radius: "70%",
        center: ["50%", "50%"],
        animate: {
          show: false,
          interval: 1
        },
        degree: 1 //1:360  2:180
      };
    }
  }
  // 多层饼图
  if (obj.style === "multiLevelPieChart") {
    if (echartThemenew.multiLeverPie1) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.multiLeverPie1));
      obj.radius[0] =
        echartThemenew.multiLeverPie1.radius[0] !== "" &&
        echartThemenew.multiLeverPie1.radius[0] !== undefined &&
        echartThemenew.multiLeverPie1.radius[0] !== null
          ? echartThemenew.multiLeverPie1.radius[0] + "%"
          : "30%";
      obj.radius[1] =
        echartThemenew.multiLeverPie1.radius[1] !== "" &&
        echartThemenew.multiLeverPie1.radius[1] !== undefined &&
        echartThemenew.multiLeverPie1.radius[1] !== null
          ? echartThemenew.multiLeverPie1.radius[1] + "%"
          : "55%";
      obj.center[0] =
        echartThemenew.multiLeverPie1.center[0] !== "" &&
        echartThemenew.multiLeverPie1.center[0] !== undefined &&
        echartThemenew.multiLeverPie1.center[0] !== null
          ? echartThemenew.multiLeverPie1.center[0] + "%"
          : "50%";
      obj.center[1] =
        echartThemenew.multiLeverPie1.center[1] !== "" &&
        echartThemenew.multiLeverPie1.center[1] !== undefined &&
        echartThemenew.multiLeverPie1.center[1] !== null
          ? echartThemenew.multiLeverPie1.center[1] + "%"
          : "50%";
      echartThemenew.pie = obj;
    } else {
      echartThemenew.pie = {
        radius: ["30%", "55%"],
        center: ["50%", "50%"],
        animate: {
          show: false,
          interval: 1
        },
        degree: 1 //1:360  2:180
      };
    }
  }
  // 环形饼图
  if (obj.style === "ringPieChart") {
    if (echartThemenew.ringBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.ringBar));
      // 半径
      obj.radius[0] =
        echartThemenew.ringBar.radius[0] !== "" &&
        echartThemenew.ringBar.radius[0] !== undefined &&
        echartThemenew.ringBar.radius[0] !== null
          ? echartThemenew.ringBar.radius[0] + "%"
          : "60%";
      obj.radius[1] =
        echartThemenew.ringBar.radius[1] !== "" &&
        echartThemenew.ringBar.radius[1] !== undefined &&
        echartThemenew.ringBar.radius[1] !== null
          ? echartThemenew.ringBar.radius[1] + "%"
          : "70%";
      // 中心点坐标
      obj.center[0] =
        echartThemenew.ringBar.center[0] !== "" &&
        echartThemenew.ringBar.center[0] !== undefined &&
        echartThemenew.ringBar.center[0] !== null
          ? echartThemenew.ringBar.center[0] + "%"
          : "50%";
      obj.center[1] =
        echartThemenew.ringBar.center[1] !== "" &&
        echartThemenew.ringBar.center[1] !== undefined &&
        echartThemenew.ringBar.center[1] !== null
          ? echartThemenew.ringBar.center[1] + "%"
          : "50%";
      echartThemenew.pie = obj;
    } else {
      echartThemenew.pie = {
        radius: ["60%", "70%"],
        center: ["50%", "50%"],
        animate: {
          show: false,
          interval: 1
        },
        degree: 1, //1:360  2:180
        unit: "",
        unitStyle: {
          color: "gray",
          fontSize: 12
        }
      };
    }
  }
  //南丁戈尔图
  if (obj.style === "ngChart") {
    if (echartThemenew.ngChartPie) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.ngChartPie));
      // 半径
      obj.radius[0] =
        echartThemenew.ngChartPie.radius[0] !== "" &&
        echartThemenew.ngChartPie.radius[0] !== undefined &&
        echartThemenew.ngChartPie.radius[0] !== null
          ? echartThemenew.ngChartPie.radius[0] + "%"
          : "15%";
      obj.radius[1] =
        echartThemenew.ngChartPie.radius[1] !== "" &&
        echartThemenew.ngChartPie.radius[1] !== undefined &&
        echartThemenew.ngChartPie.radius[1] !== null
          ? echartThemenew.ngChartPie.radius[1] + "%"
          : "90%";
      // 中心点坐标
      obj.center[0] =
        echartThemenew.ngChartPie.center[0] !== "" &&
        echartThemenew.ngChartPie.center[0] !== undefined &&
        echartThemenew.ngChartPie.center[0] !== null
          ? echartThemenew.ngChartPie.center[0] + "%"
          : "50%";
      obj.center[1] =
        echartThemenew.ngChartPie.center[1] !== "" &&
        echartThemenew.ngChartPie.center[1] !== undefined &&
        echartThemenew.ngChartPie.center[1] !== null
          ? echartThemenew.ngChartPie.center[1] + "%"
          : "50%";
      echartThemenew.pie = obj;
    } else {
      echartThemenew.pie = {
        radius: ["15%", "90%"],
        center: ["50%", "50%"],
        animate: {
          show: false,
          interval: 1
        }
      };
    }
  }
  //雷达图
  // if (obj.style === "baseRadarChart") {
  //   if (echartThemenew.baseRadar) {
  //     let obj = JSON.parse(JSON.stringify(echartThemenew.baseRadar));
  //     obj.radius =
  //       echartThemenew.baseRadar.radius !== "" &&
  //       echartThemenew.baseRadar.radius !== undefined &&
  //       echartThemenew.baseRadar.radius !== null
  //         ? echartThemenew.baseRadar.radius + "%"
  //         : "70%";
  //     obj.center[0] =
  //       echartThemenew.baseRadar.center[0] !== "" &&
  //       echartThemenew.baseRadar.center[0] !== undefined &&
  //       echartThemenew.baseRadar.center[0] !== null
  //         ? echartThemenew.baseRadar.center[0] + "%"
  //         : "50%";
  //     obj.center[1] =
  //       echartThemenew.baseRadar.center[1] !== "" &&
  //       echartThemenew.baseRadar.center[1] !== undefined &&
  //       echartThemenew.baseRadar.center[1] !== null
  //         ? echartThemenew.baseRadar.center[1] + "%"
  //         : "50%";
  //     obj.splitNumber =
  //       echartThemenew.baseRadar.splitNumber !== "" &&
  //       echartThemenew.baseRadar.splitNumber !== undefined &&
  //       echartThemenew.baseRadar.splitNumber !== null
  //         ? echartThemenew.baseRadar.splitNumber
  //         : 6;
  //     obj.shadowOpacity =
  //       echartThemenew.baseRadar.shadowOpacity !== "" &&
  //       echartThemenew.baseRadar.shadowOpacity !== undefined &&
  //       echartThemenew.baseRadar.shadowOpacity !== null
  //         ? echartThemenew.baseRadar.shadowOpacity
  //         : 50;
  //     echartThemenew.radar = obj;
  //   } else {
  //     echartThemenew.radar = {
  //       center: ["50%", "50%"], //位置
  //       radius: "70%", //半径
  //       splitNumber: 6, //网络线设置
  //       animate: {
  //         show: false,
  //         interval: 1
  //       },
  //       x: {
  //         style: {
  //           color: "#cacaca", //x轴线颜色
  //           lineWidth: 1 //x轴线线宽
  //         }
  //       },
  //       y: {
  //         style: {
  //           color: "#cacaca", //y轴线颜色
  //           lineWidth: 1 //y轴线线宽
  //         }
  //       },
  //       shadowOpacity: 50 //阴影透明度
  //     };
  //   }
  // }
  // 折线图
  if (obj.style === "baseLineChart") {
    if (echartThemenew.baseLine) {
      echartThemenew.line = echartThemenew.baseLine;
    } else {
      echartThemenew.line = {
        lineStyle: {
          normal: {
            width: 2,
            type: "solid" //'dotted'虚线 'solid'实线
          }
        },
        animate: {
          show: false,
          interval: 1
        },
        smooth: true, // 线连接样式
        symbolSize: 1,
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          borderWidth: 5, //鼠标悬浮显示点的大小
          labelStyle: {
            fontColor: "gray",
            fontSize: "20",
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 阶梯折线图
  if (obj.style === "stepLineChart") {
    if (echartThemenew.stepLine) {
      echartThemenew.line = echartThemenew.stepLine;
    } else {
      echartThemenew.line = {
        lineStyle: {
          normal: {
            width: 2,
            type: "solid" //'dotted'虚线 'solid'实线
          }
        },
        animate: {
          show: false,
          interval: 1
        },
        smooth: false, // 线连接样式
        symbolSize: 1,
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          borderWidth: 5, //鼠标悬浮显示点的大小
          labelStyle: {
            fontColor: "gray",
            fontSize: "20",
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 折线柱状混合图 line
  if (obj.style === "mixLineBarChart") {
    if (echartThemenew.mixLine) {
      echartThemenew.line = echartThemenew.mixLine;
    } else {
      echartThemenew.line = {
        lineStyle: {
          normal: {
            width: 2,
            type: "solid" //'dotted'虚线 'solid'实线
          }
        },
        animate: {
          show: false,
          interval: 1
        },
        smooth: true, // 线连接样式
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          borderWidth: 5, //鼠标悬浮显示点的大小
          labelStyle: {
            fontColor: "gray",
            fontSize: "20",
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 面积图
  if (obj.style === "areaLineChart") {
    if (echartThemenew.areaLine) {
      echartThemenew.line = echartThemenew.areaLine;
    } else {
      echartThemenew.line = {
        lineStyle: {
          normal: {
            width: 2,
            type: "solid" //'dotted'虚线 'solid'实线
          }
        },
        animate: {
          show: false,
          interval: 1
        },
        smooth: true, // 线连接样式
        symbolSize: 1,
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          borderWidth: 5, //鼠标悬浮显示点的大小
          labelStyle: {
            fontColor: "gray",
            fontSize: "20",
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 百分比面积图
  if (obj.style === "percentAreaChart") {
    if (echartThemenew.percentArea) {
      echartThemenew.line = echartThemenew.percentArea;
    } else {
      echartThemenew.line = {
        lineStyle: {
          normal: {
            width: 2,
            type: "solid" //'dotted'虚线 'solid'实线
          }
        },
        animate: {
          show: false,
          interval: 1
        },
        smooth: true, // 线连接样式
        symbolSize: 1,
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          borderWidth: 5, //鼠标悬浮显示点的大小
          labelStyle: {
            fontColor: "gray",
            fontSize: "20",
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 桑基图
  if (obj.style === "baseSankeyChart") {
    if (echartThemenew.sankey) {
      echartThemenew.sankey = echartThemenew.sankey;
    } else {
      echartThemenew.sankey = {
        animate: {
          show: false,
          interval: 1
        }
      };
    }
  }
  // 热力图
  if (obj.style === "heatMapChart") {
    if (echartThemenew.heatMap) {
      echartThemenew.heatMap = echartThemenew.heatMap;
    } else {
      echartThemenew.heatMap = {
        height: 30,
        marginTop: 6,
        nameGap: 20,
        nameRotate: 0,
        xtextShow: false,
        xtextStyle: {
          color: "gray",
          fontSize: 12
        }
      };
    }
  }
  // 柱状图
  if (obj.style === "groupBarChart") {
    if (echartThemenew.groupBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.groupBar));
      //console.log(obj,'obj')
      // console.log(echartThemenew.groupBar.barCategoryGapAll,'echartThemenew.groupBar.barCategoryGapAll');
      obj.barCategoryGapAll = echartThemenew.groupBar.barCategoryGapAll
        ? echartThemenew.groupBar.barCategoryGapAll + "%"
        : "";
      // console.log(obj.barCategoryGapAll,'obj.barCategoryGapAll');
      obj.barWidth = echartThemenew.groupBar.barWidth
        ? echartThemenew.groupBar.barWidth + "%"
        : "";
      if (obj?.type !== 3) {
        obj.itemStyle.normal.barBorderRadius = [0, 0, 0, 0];
      }
      echartThemenew.bar = obj;
      if (!obj?.itemStyle?.normal?.barBorderRadius[0]) {
        obj.itemStyle.normal.barBorderRadius = [0, 0, 0, 0];
      }
      // obj.itemStyle.normal.barBorderRadius=''
      // console.log(echartThemenew.bar,'echartThemenew.bar');
    } else {
      echartThemenew.bar = {
        type: 1, //斑马线   1是柱状图  2斑马线
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        gradualChange: false, //渐变
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          labelStyle: {
            fontColor: "gray",
            fontSize: 12,
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
    // console.log(echartThemenew.bar,'echartThemenew.bar');
  }
  // 直方图
  if (obj.style === "histogramChart") {
    if (echartThemenew.histogram) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.histogram));
      //console.log(obj,'obj')
      // console.log(echartThemenew.groupBar.barCategoryGapAll,'echartThemenew.groupBar.barCategoryGapAll');
      // obj.barCategoryGapAll = echartThemenew.groupBar.barCategoryGapAll
      //   ? echartThemenew.groupBar.barCategoryGapAll + "%"
      //   : "";
      // console.log(obj.barCategoryGapAll,'obj.barCategoryGapAll');
      obj.barWidth = echartThemenew.histogram.barWidth
        ? echartThemenew.histogram.barWidth + "%"
        : "";
      obj.barNumber = echartThemenew.histogram.barNumber
        ? echartThemenew.histogram.barNumber
        : 3;

      // if (obj?.type !== 3) {
      //   obj.itemStyle.normal.barBorderRadius = [0, 0, 0, 0];
      // }
      echartThemenew.bar = obj;
      if (!obj?.itemStyle?.normal?.barBorderRadius[0]) {
        obj.itemStyle.normal.barBorderRadius = [0, 0, 0, 0];
      }
      // obj.itemStyle.normal.barBorderRadius=''
      // console.log(echartThemenew.bar,'echartThemenew.bar');
    } else {
      echartThemenew.bar = {
        type: 1, //斑马线   1是柱状图  2斑马线
        //barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        barNumber: 3,
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        gradualChange: false, //渐变
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          labelStyle: {
            fontColor: "gray",
            fontSize: 12,
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
    // console.log(echartThemenew.bar,'echartThemenew.bar');
  }
  // 堆叠直方图
  if (obj.style === "histogramStackChart") {
    if (echartThemenew.histogramStack) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.histogramStack));
      //console.log(obj,'obj')
      // console.log(echartThemenew.groupBar.barCategoryGapAll,'echartThemenew.groupBar.barCategoryGapAll');
      // obj.barCategoryGapAll = echartThemenew.groupBar.barCategoryGapAll
      //   ? echartThemenew.groupBar.barCategoryGapAll + "%"
      //   : "";
      // console.log(obj.barCategoryGapAll,'obj.barCategoryGapAll');
      obj.barWidth = echartThemenew.histogramStack.barWidth
        ? echartThemenew.histogramStack.barWidth + "%"
        : "";
      obj.barNumber = echartThemenew.histogramStack.barNumber
        ? echartThemenew.histogramStack.barNumber
        : 3;
      // if (obj?.type !== 3) {
      //   obj.itemStyle.normal.barBorderRadius = [0, 0, 0, 0];
      // }
      echartThemenew.bar = obj;
      if (!obj?.itemStyle?.normal?.barBorderRadius[0]) {
        obj.itemStyle.normal.barBorderRadius = [0, 0, 0, 0];
      }
      // obj.itemStyle.normal.barBorderRadius=''
      // console.log(echartThemenew.bar,'echartThemenew.bar');
    } else {
      echartThemenew.bar = {
        type: 1, //斑马线   1是柱状图  2斑马线
        //barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        barNumber: 3,
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        gradualChange: false, //渐变
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          labelStyle: {
            fontColor: "gray",
            fontSize: 12,
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 折线柱状混合图 bar
  if (obj.style === "mixLineBarChart") {
    if (echartThemenew.mixBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.mixBar));
      obj.barCategoryGapAll = echartThemenew.mixBar.barCategoryGapAll
        ? echartThemenew.mixBar.barCategoryGapAll + "%"
        : "";
      obj.barWidth = echartThemenew.mixBar.barWidth
        ? echartThemenew.mixBar.barWidth + "%"
        : "";
      echartThemenew.bar = obj;
    } else {
      echartThemenew.bar = {
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        gradualChange: false, //渐变
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          //borderWidth:5,            //鼠标悬浮显示点的大小
          labelStyle: {
            fontColor: "gray",
            fontSize: "20",
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 条形图
  if (obj.style === "columnChart") {
    if (echartThemenew.columnBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.columnBar));
      obj.barCategoryGapAll = echartThemenew.columnBar.barCategoryGapAll
        ? echartThemenew.columnBar.barCategoryGapAll + "%"
        : "";
      obj.barWidth = echartThemenew.columnBar.barWidth
        ? echartThemenew.columnBar.barWidth + "%"
        : "";
      if (obj?.type !== 3) {
        obj.itemStyle.normal.barBorderRadius = [0, 0, 0, 0];
      }
      echartThemenew.bar = obj;
    } else {
      echartThemenew.bar = {
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        animate: {
          show: false,
          interval: 1
        },
        gradualChange: false, //渐变
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          labelStyle: {
            fontColor: "gray",
            fontSize: 12,
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 堆叠柱状图
  if (obj.style === "stackChart") {
    // console.log("echartThemenew", echartThemenew)
    if (echartThemenew.stackBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.stackBar));
      obj.barCategoryGapAll = echartThemenew.stackBar.barCategoryGapAll
        ? echartThemenew.stackBar.barCategoryGapAll + "%"
        : "";
      obj.barWidth = echartThemenew.stackBar.barWidth
        ? echartThemenew.stackBar.barWidth + "%"
        : "";
      echartThemenew.bar = obj;
    } else {
      echartThemenew.bar = {
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          labelStyle: {
            fontColor: "gray",
            fontSize: 12,
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 百分比柱状图
  if (obj.style === "percentBarChart") {
    // console.log("echartThemenew", echartThemenew)
    if (echartThemenew.percentBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.percentBar));
      obj.barCategoryGapAll = echartThemenew.percentBar.barCategoryGapAll
        ? echartThemenew.percentBar.barCategoryGapAll + "%"
        : "";
      obj.barWidth = echartThemenew.percentBar.barWidth
        ? echartThemenew.percentBar.barWidth + "%"
        : "";
      echartThemenew.bar = obj;
    } else {
      echartThemenew.bar = {
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          labelStyle: {
            fontColor: "gray",
            fontSize: 12,
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 极坐标堆叠柱状图
  if (obj.style === "arcColumnarChart") {
    if (echartThemenew.arcColumnarStackBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.arcColumnarStackBar));
      obj.barCategoryGapAll = echartThemenew.arcColumnarStackBar
        .barCategoryGapAll
        ? echartThemenew.arcColumnarStackBar.barCategoryGapAll + "%"
        : "";
      obj.barWidth = echartThemenew.arcColumnarStackBar.barWidth
        ? echartThemenew.arcColumnarStackBar.barWidth + "%"
        : "";
      echartThemenew.bar = obj;
    } else {
      echartThemenew.bar = {
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        }
      };
    }
  }
  // 极坐标柱状图
  if (obj.style === "groupArcColumnarChart") {
    if (echartThemenew.arcColumnarBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.arcColumnarBar));
      obj.barCategoryGapAll = echartThemenew.arcColumnarBar.barCategoryGapAll
        ? echartThemenew.arcColumnarBar.barCategoryGapAll + "%"
        : "";
      obj.barWidth = echartThemenew.arcColumnarBar.barWidth
        ? echartThemenew.arcColumnarBar.barWidth + "%"
        : "";
      echartThemenew.bar = obj;
    } else {
      echartThemenew.bar = {
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        }
      };
    }
  }
  // 横向堆叠柱状图
  if (obj.style === "stackTransverseChart") {
    if (echartThemenew.stackTransverseBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.stackTransverseBar));
      obj.barCategoryGapAll = echartThemenew.stackTransverseBar
        .barCategoryGapAll
        ? echartThemenew.stackTransverseBar.barCategoryGapAll + "%"
        : "";
      obj.barWidth = echartThemenew.stackTransverseBar.barWidth
        ? echartThemenew.stackTransverseBar.barWidth + "%"
        : "";
      echartThemenew.bar = obj;
    } else {
      echartThemenew.bar = {
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          labelStyle: {
            fontColor: "gray",
            fontSize: 12,
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 正负条形图
  if (obj.style === "pyramidChart") {
    if (echartThemenew.pyramidBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.pyramidBar));
      obj.barCategoryGapAll = echartThemenew.pyramidBar.barCategoryGapAll
        ? echartThemenew.pyramidBar.barCategoryGapAll + "%"
        : "";
      obj.barWidth = echartThemenew.pyramidBar.barWidth
        ? echartThemenew.pyramidBar.barWidth + "%"
        : "";
      echartThemenew.bar = obj;
    } else {
      echartThemenew.bar = {
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          labelStyle: {
            fontColor: "gray",
            fontSize: 12,
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 正负堆叠条形图
  if (obj.style === "pyramidStackChart") {
    if (echartThemenew.pyramidStackBar) {
      let obj = JSON.parse(JSON.stringify(echartThemenew.pyramidStackBar));
      obj.barCategoryGapAll = echartThemenew.pyramidStackBar.barCategoryGapAll
        ? echartThemenew.pyramidStackBar.barCategoryGapAll + "%"
        : "";
      obj.barWidth = echartThemenew.pyramidStackBar.barWidth
        ? echartThemenew.pyramidStackBar.barWidth + "%"
        : "";
      echartThemenew.bar = obj;
    } else {
      echartThemenew.bar = {
        barCategoryGapAll: "", //柱间距
        barWidth: "", //柱宽
        itemStyle: {
          normal: {
            barBorderRadius: [0, 0, 0, 0] //柱子圆角
          }
        },
        emphasis: {
          //值标签添加背景图片  设置宽高
          show: true,
          labelStyle: {
            fontColor: "gray",
            fontSize: 12,
            width: 115,
            height: 50,
            backgroundImg: ""
          }
        }
      };
    }
  }
  // 地图
  // if (obj.style === "baseMapChart") {
  //   if (echartThemenew.baseMap) {
  //     echartThemenew.map = echartThemenew.baseMap;
  //   } else {
  //     echartThemenew.map = {
  //       mapStyleId: 1,
  //       mapTypeId: "china",
  //       mapType: "normal",
  //       backgroundColor: "",
  //       label: {
  //         normal: {
  //           show: true,
  //           textStyle: {
  //             color: "",
  //             fontSize: 12
  //           }
  //         },
  //         emphasis: {
  //           show: true,
  //           textStyle: {
  //             color: "",
  //             fontSize: 12
  //           }
  //         }
  //       },
  //       itemStyle: {
  //         normal: {
  //           areaColor: "",
  //           borderColor: "",
  //           borderWidth: 1
  //         },
  //         emphasis: {
  //           areaColor: ""
  //         }
  //       }
  //     };
  //   }
  // }
  // alert(3333);
  // alert(1111);
  // console.log("dddddd", obj);
  // alert(JSON.stringify(obj));
  if (dasLayoutPanelList) {
  }

  // console.log("arrayCharts", arrayCharts);
  // initArrayCharts();
  window.onresize = function() {
    // console.log("asdfasdfasd");
    for (let i = 0; i < arrayCharts.length; i++) {
      arrayCharts[i].resize();
    }
  };
  // alert(JSON.stringify(obj));

  // alert(JSON.stringify(obj))
  var chartType = obj?.style;
  // if (chartView) {
  //   ReactDOM.unmountComponentAtNode(chartView);
  // }
  var chartViewDom =typeof(containers) === 'string'? document.getElementById(containers):containers;
  // let childs = chartViewDom.childNodes;
  // for (let i = 0; i < childs.length; i++) {

  //   chartViewDom.removeChild(childs[i]);
  // }
  var chartView = document.createElement("div");
  chartView.style.position = "relative";
  chartView.style.width = "100%";
  chartView.style.height = "100%";
  if (chartViewDom) {
    chartViewDom.appendChild(chartView);
  }
  

  // var chartView = chartView11.childeNodes[0];
  var skin = obj.skin;
  // chartView.removeAttr("_echarts_instance_");

  // alert(skin)
  //当div下还存在子节点时
  // while (chartView.hasChildNodes()) {
  //   chartView.removeChild(chartView.firstChild);
  // }
  // alert(chartType);
  let register = obj.echartTheme;
  // console.log(register,'register')
  echarts.registerTheme(chartView + "ojo", registerTheme(register, skin));
  let commonChartsDataOption = null;
  // console.log(register,'register','6666666666')
  switch (chartType) {
    //折线图分类
    case "baseLineChart":
      {
        if (xseries == "" && yseries == "") {
          baseLineChartInstance.clear();
        }
        // console.log("999999",  yseries)
        let option = baseLineChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        // alert(222);
        // baseLineChartInstance && baseLineChartInstance.clear();
        baseLineChartInstance = echarts.init(chartView, chartView + "ojo");
        baseLineChartInstance.setOption(option, true);
        baseLineChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.baseLine?.animate;
        arrayAnimate.push({
          chartInstance: baseLineChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(baseLineChartInstance);
      }
      break;
    //阶梯折线图分类
    case "stepLineChart":
      {
        if (xseries == "" && yseries == "") {
          stepLineChartInstance.clear();
        }
        let option = stepLineChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        stepLineChartInstance = echarts.init(chartView, chartView + "ojo");
        stepLineChartInstance.setOption(option, true);
        stepLineChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.stepLine?.animate;
        arrayAnimate.push({
          chartInstance: stepLineChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(stepLineChartInstance);
      }
      break;
    case "areaLineChart":
      {
        if (xseries == "" && yseries == "") {
          areaLineChartInstance.clear();
        }
        let option = areaLineChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        areaLineChartInstance = echarts.init(chartView, chartView + "ojo");
        areaLineChartInstance.setOption(option, true);
        areaLineChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.areaLine?.animate;
        arrayAnimate.push({
          chartInstance: areaLineChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(areaLineChartInstance);
      }
      break;
    case "percentAreaChart":
      {
        if (xseries == "" && yseries == "") {
          percentAreaChartInstance.clear();
        }
        let option = percentAreaChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        percentAreaChartInstance = echarts.init(chartView, chartView + "ojo");
        percentAreaChartInstance.setOption(option, true);
        percentAreaChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.percentArea?.animate;
        arrayAnimate.push({
          chartInstance: percentAreaChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(percentAreaChartInstance);
      }
      break;
    //柱状图表展示
    case "groupBarChart":
      {
        if (xseries == "" && yseries == "") {
          groupBarChartInstance.clear();
        }
        let option = groupBarChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        groupBarChartInstance = echarts.init(chartView, chartView + "ojo");
        groupBarChartInstance.setOption(option, true);
        groupBarChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.groupBar?.animate;
        arrayAnimate.push({
          chartInstance: groupBarChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(groupBarChartInstance);
      }
      break;
    //直方图表展示
    case "histogramChart":
      {
        if (xseries == "" && yseries == "") {
          histogramChartInstance.clear();
        }
        if (xseries === null) {
          histogramChartInstance.clear();
          break;
        }
        //console.log(xseries,'xseries')
        let option = histogramChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        histogramChartInstance = echarts.init(chartView, chartView + "ojo");
        histogramChartInstance.setOption(option, true);
        histogramChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.histogram?.animate;
        arrayAnimate.push({
          chartInstance: histogramChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(histogramChartInstance);
      }
      break;
    //堆叠直方图表
    case "histogramStackChart":
      {
        if (xseries == "" && yseries == "") {
          histogramStackChartInstance.clear();
        }
        let option = histogramStackChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        histogramStackChartInstance = echarts.init(
          chartView,
          chartView + "ojo"
        );
        histogramStackChartInstance.setOption(option, true);
        histogramStackChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.histogramStack?.animate;
        arrayAnimate.push({
          chartInstance: histogramStackChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(histogramStackChartInstance);
      }
      break;
    //条形图
    case "columnChart":
      {
        if (xseries == "" && yseries == "") {
          columnChartInstance.clear();
        }
        let option = columnChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        columnChartInstance = echarts.init(chartView, chartView + "ojo");
        columnChartInstance.setOption(option, true);
        columnChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.columnBar?.animate;
        arrayAnimate.push({
          chartInstance: columnChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(columnChartInstance);
      }
      break;
    // 正负条形图
    case "pyramidChart":
      {
        if (xseries == "" && yseries == "") {
          pyramidChartInstance.clear();
        }
        let option = pyramidChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        pyramidChartInstance = echarts.init(chartView, chartView + "ojo");
        pyramidChartInstance.setOption(option, true);
        pyramidChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.pyramidBar?.animate;
        arrayAnimate.push({
          chartInstance: pyramidChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(pyramidChartInstance);
      }
      break;
    // 正负堆叠条形图
    case "pyramidStackChart":
      {
        if (xseries == "" && yseries == "") {
          pyramidStackChartInstance.clear();
        }
        let option = pyramidStackChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        pyramidStackChartInstance = echarts.init(chartView, chartView + "ojo");
        pyramidStackChartInstance.setOption(option, true);
        pyramidStackChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.pyramidStackBar?.animate;
        arrayAnimate.push({
          chartInstance: pyramidStackChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(pyramidStackChartInstance);
      }
      break;
    // 堆叠柱状图
    case "stackChart":
      {
        if (xseries == "" && yseries == "") {
          stackChartInstance.clear();
        }
        let option = stackChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        stackChartInstance = echarts.init(chartView, chartView + "ojo");
        stackChartInstance.setOption(option, true);
        stackChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.stackBar?.animate;
        arrayAnimate.push({
          chartInstance: stackChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(stackChartInstance);
      }
      break;
    // 百分比柱状图
    case "percentBarChart":
      {
        if (xseries == "" && yseries == "") {
          percentBarChartInstance.clear();
        }
        let option = percentBarChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        percentBarChartInstance = echarts.init(chartView, chartView + "ojo");
        percentBarChartInstance.setOption(option, true);
        percentBarChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.percentBar?.animate;
        arrayAnimate.push({
          chartInstance: percentBarChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(percentBarChartInstance);
      }
      break;
    // 横向堆叠柱状图
    case "stackTransverseChart":
      {
        if (xseries == "" && yseries == "") {
          stackTransverseChartInstance.clear();
        }
        let option = stackTransverseChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        stackTransverseChartInstance = echarts.init(
          chartView,
          chartView + "ojo"
        );
        stackTransverseChartInstance.setOption(option, true);
        stackTransverseChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.stackTransverseBar?.animate;
        arrayAnimate.push({
          chartInstance: stackTransverseChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(stackTransverseChartInstance);
      }
      break;
    // 折线柱状混合图
    case "mixLineBarChart":
      {
        if (xseries == "" && yseries == "") {
          mixLineBarChartInstance.clear();
        }
        let option = mixLineBarChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        mixLineBarChartInstance = echarts.init(chartView, chartView + "ojo");
        mixLineBarChartInstance.setOption(option, true);
        mixLineBarChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.mixLine?.animate;
        arrayAnimate.push({
          chartInstance: mixLineBarChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(mixLineBarChartInstance);
      }
      break;
    // 漏斗图
    case "baseFunnelChart":
      {
        if (xseries == "" && yseries == "") {
          baseFunnelChartInstance.clear();
        }
        let option = baseFunnelChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        baseFunnelChartInstance = echarts.init(chartView, chartView + "ojo");
        baseFunnelChartInstance.setOption(option, true);
        baseFunnelChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.baseFunnel?.animate;
        arrayAnimate.push({
          chartInstance: baseFunnelChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(baseFunnelChartInstance);
      }
      break;
    // 河流图
    // case "themeRiverChart":
    //   {
    //     if (xseries == "" && yseries == "") {
    //       themeRiverChartInstance.clear();
    //     }
    //     let option = themeRiverChart(
    //       commonChartsData(xseries, yseries, obj),
    //       register
    //     );
    //     themeRiverChartInstance = echarts.init(chartView, chartView + "ojo");
    //     themeRiverChartInstance.setOption(option, true);
    //     themeRiverChartInstance.resize();
    //     let count = 0;
    //     obj.echartTheme.animate = obj.echartTheme?.themeRiver?.animate;
    //     arrayAnimate.push({
    //       chartInstance: themeRiverChartInstance,
    //       xseries,
    //       yseries,
    //       obj,
    //       count
    //     });
    //     arrayCharts.push(themeRiverChartInstance);
    //   }
    //   break;
    // 热力图
    case "heatMapChart":
      {
        if (xseries == "" && yseries == "") {
          heatMapChartInstance.clear();
        }
        let option = heatMapChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        heatMapChartInstance = echarts.init(chartView, chartView + "ojo");
        heatMapChartInstance.setOption(option, true);
        heatMapChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.themeRiver?.animate;
        arrayAnimate.push({
          chartInstance: heatMapChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(heatMapChartInstance);
      }
      break;
    // 桑基图
    case "baseSankeyChart":
      {
        if (xseries == "" && yseries == "") {
          baseSankeyChartInstance.clear();
        }
        let option = baseSankeyChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        baseSankeyChartInstance = echarts.init(chartView, chartView + "ojo");
        baseSankeyChartInstance.setOption(option, true);
        baseSankeyChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.sankey?.animate;
        arrayAnimate.push({
          chartInstance: baseSankeyChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(baseSankeyChartInstance);
      }
      break;
    // 极坐标下柱状图
    case "arcColumnarChart":
      {
        if (xseries == "" && yseries == "") {
          arcColumnarChartInstance.clear();
        }
        let option = arcColumnarChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        arcColumnarChartInstance = echarts.init(chartView, chartView + "ojo");
        arcColumnarChartInstance.setOption(option, true);
        arcColumnarChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.arcColumnarStackBar?.animate;
        arrayAnimate.push({
          chartInstance: arcColumnarChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(arcColumnarChartInstance);
      }
      break;
    // 极坐标下柱状图
    case "groupArcColumnarChart":
      {
        if (xseries == "" && yseries == "") {
          groupArcColumnarChartInstance.clear();
        }
        let option = groupArcColumnarChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        groupArcColumnarChartInstance = echarts.init(
          chartView,
          chartView + "ojo"
        );
        groupArcColumnarChartInstance.setOption(option, true);
        groupArcColumnarChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.arcColumnarBar?.animate;
        arrayAnimate.push({
          chartInstance: groupArcColumnarChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(groupArcColumnarChartInstance);
      }
      break;
    //饼图相关
    case "basePieChart":
      {
        if (xseries == "" && yseries == "") {
          basePieChartInstance.clear();
        }
        let option = basePieChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        basePieChartInstance = echarts.init(chartView, chartView + "ojo");
        basePieChartInstance.setOption(option, true);
        basePieChartInstance.resize();
        // alert(obj.echartTheme?.pie1?.animate?.show);
        // if (obj.echartTheme?.pie1?.animate?.show) {
        //   startAnimate(
        //     basePieChartInstance,
        //     xseries,
        //     obj.echartTheme?.pie1?.animate?.interval
        //   );
        // }
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.pie1?.animate;
        arrayAnimate.push({
          chartInstance: basePieChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(basePieChartInstance);
      }
      break;
    // 多层饼图
    case "multiLevelPieChart":
      {
        if (xseries == "" && yseries == "") {
          multiLevelPieChartInstance.clear();
        }
        // console.log("xseries", xseries, yseries, obj)
        let option = multiLevelPieChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        multiLevelPieChartInstance = echarts.init(chartView, chartView + "ojo");
        multiLevelPieChartInstance.setOption(option, true);
        multiLevelPieChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.multiLeverPie1?.animate;
        arrayAnimate.push({
          chartInstance: multiLevelPieChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(multiLevelPieChartInstance);
      }
      break;

    case "ringPieChart":
      {
        if (xseries == "" && yseries == "") {
          ringPieChartInstance.clear();
        }
        let option = ringPieChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        ringPieChartInstance = echarts.init(chartView, chartView + "ojo");
        ringPieChartInstance.setOption(option, true);
        if (obj.echartTheme?.ringBar?.animate.show) {
          let count = 0;
          obj.echartTheme.animate = obj.echartTheme?.ringBar?.animate;
          arrayAnimate.push({
            chartInstance: ringPieChartInstance,
            xseries,
            yseries,
            obj,
            count
          });
          arrayCharts.push(ringPieChartInstance);
        } else {
          let max = Number(option.series[0].data[0].value);
          let maxId = "";
          let index01 = "";
          option.series[0].data.map((item, index) => {
            if (Number(item.value) > max) {
              max = Number(item.value);
              maxId = item.name;
              // index=index
            } else {
              max = max;
            }
          });
          option.series[0].data.map((item, index) => {
            if (max === Number(item.value)) {
              index01 = index;
            }
          });
          setTimeout(function() {
            ringPieChartInstance.dispatchAction({
              type: "highlight",
              seriesIndex: 0,
              dataIndex: index01
            });
            ringPieChartInstance.on("mouseover", function(params) {
              // if (params.name == ydata[0].name) {
              if (params.name == maxId) {
                ringPieChartInstance.dispatchAction({
                  type: "highlight",
                  seriesIndex: 0,
                  dataIndex: index01
                });
              } else {
                ringPieChartInstance.dispatchAction({
                  type: "downplay",
                  seriesIndex: 0,
                  dataIndex: index01
                });
              }
            });

            ringPieChartInstance.on("mouseout", function(params) {
              ringPieChartInstance.dispatchAction({
                type: "highlight",
                seriesIndex: 0,
                dataIndex: index01
              });
            });
          }, 100);
          ringPieChartInstance.resize();
        }
      }
      break;

    case "ngChart":
      {
        if (xseries == "" && yseries == "") {
          ngPieChartInstance.clear();
        }
        let option = ngChart(commonChartsData(xseries, yseries, obj), register);
        ngPieChartInstance = echarts.init(chartView, chartView + "ojo");
        ngPieChartInstance.setOption(option, true);
        // chartView.removeAttribute("_echarts_instance_");
        ngPieChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.ngChartPie?.animate;
        arrayAnimate.push({
          chartInstance: ngPieChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(ngPieChartInstance);
      }
      break;
    // case "baseRadarChart":
    //   {
    //     if (xseries == "" && yseries == "") {
    //       baseRadarChartInstance.clear();
    //     }
    //     let option = baseRadarChart(
    //       commonChartsData(xseries, yseries, obj),
    //       register
    //     );

    //     baseRadarChartInstance = echarts.init(chartView, chartView + "ojo");
    //     baseRadarChartInstance.setOption(option, true);
    //     baseRadarChartInstance.resize();
    //     let count = 0;
    //     obj.echartTheme.animate = obj.echartTheme?.baseRadar?.animate;
    //     arrayAnimate.push({
    //       chartInstance: baseRadarChartInstance,
    //       xseries,
    //       yseries,
    //       obj,
    //       count
    //     });
    //     arrayCharts.push(baseRadarChartInstance);
    //   }
    //   break;

    //散点图
    case "baseScatterChart":
      {
        if (xseries == "" && yseries == "") {
          baseScatterChartInstance.clear();
        }
        let option = baseScatterChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        baseScatterChartInstance = echarts.init(chartView, chartView + "ojo");
        baseScatterChartInstance.setOption(option, true);
        baseScatterChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.baseScatter?.animate;
        arrayAnimate.push({
          chartInstance: baseScatterChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(baseScatterChartInstance);
      }
      break;
    //树状图
    case "baseTreeMapChart":
      {
        if (xseries == "" && yseries == "") {
          baseTreeMapChartInstance.clear();
        }
        let option = baseTreeMapChart(
          commonChartsData(xseries, yseries, obj),
          register
        );
        baseTreeMapChartInstance = echarts.init(chartView, chartView + "ojo");
        baseTreeMapChartInstance.setOption(option, true);
        baseTreeMapChartInstance.resize();
        let count = 0;
        obj.echartTheme.animate = obj.echartTheme?.baseTree?.animate;
        arrayAnimate.push({
          chartInstance: baseTreeMapChartInstance,
          xseries,
          yseries,
          obj,
          count
        });
        arrayCharts.push(baseTreeMapChartInstance);
      }
      break;

    //地图
    // case "baseMapChart":
    //   {
    //     if (xseries == "" && yseries == "") {
    //       baseMapChartInstance.clear();
    //     }
    //     baseMapChartInstance = echarts.init(chartView, chartView + "ojo");
    //     let option = baseMapChart(
    //       commonChartsData(xseries, yseries, obj),
    //       register,
    //       baseMapChartInstance,
    //       chartView,
    //       drilling
    //     );
    //     baseMapChartInstance.setOption(option, true);
    //     baseMapChartInstance.resize();
    //     let count = 0;
    //     obj.echartTheme.animate = obj.echartTheme?.baseMap?.animate;
    //     arrayAnimate.push({
    //       chartInstance: baseMapChartInstance,
    //       xseries,
    //       yseries,
    //       obj,
    //       count
    //     });
    //     arrayCharts.push(baseMapChartInstance);
    //   }
    //   break;
    //树状图
    // case "dbubble":
    //   {
    //     ReactDOM.render(
    //       <DBubble
    //         container={obj.container + "dbubble"}
    //         warpStyle={{
    //           paddingLeft: Number(obj.echartTheme.grid.left),
    //           paddingRight: Number(obj.echartTheme.grid.right),
    //           paddingTop: Number(obj.echartTheme.grid.top),
    //           paddingBottom: Number(obj.echartTheme.grid.bottom)
    //         }}
    //         colorArr={chartColors(obj.skin, obj?.echartTheme?.colourReversal)}
    //         valueFont={{
    //           color: obj.echartTheme?.yAxis[0]?.axisLabel?.textStyle?.color,
    //           size: obj.echartTheme?.yAxis[0]?.axisLabel?.textStyle?.fontSize
    //         }}
    //         labelFont={{
    //           color: obj.echartTheme?.xAxis[0]?.axisLabel?.textStyle?.color,
    //           size: obj.echartTheme?.xAxis[0]?.axisLabel?.textStyle?.fontSize
    //         }}
    //         data={data}
    //         gridPadding={obj.echartTheme?.dbubbleBar?.gridPadding}
    //       />,
    //       chartView
    //     );
    //   }
    //   break;
    // // 词云
    // case "DWordCloud":
    //   // console.log(data,'data==========')
    //   {
    //     ReactDOM.render(
    //       <DWordCloud
    //         /*  marginStyle={[
    //           obj.echartTheme.grid.top,
    //           obj.echartTheme.grid.right,
    //           obj.echartTheme.grid.bottom,
    //           obj.echartTheme.grid.left
    //         ]}
    //         color={chartColors(obj.skin, obj?.echartTheme?.colourReversal)}
    //         data={data}*/
    //         dataSource={formatData2(
    //           data,
    //           chartColors(obj.skin, obj?.echartTheme?.colourReversal)
    //         )}
    //         colorArr={chartColors(obj.skin, obj?.echartTheme?.colourReversal)}
    //         sequence={obj.echartTheme?.dWordCloudObj?.sequence}
    //         imageUrl={obj.echartTheme?.dWordCloudObj?.imageUrl}
    //       />,
    //       chartView
    //     );
    //   }
    //   break;

    //树状图
    // case "listChart":
    //   {
    //     /*  console.log(obj,
    //       obj?.echartTheme?.listChartObj?.rowHeight,
    //       obj?.echartTheme?.listChartObj?.rowHeight ? obj?.echartTheme?.listChartObj?.rowHeight + 'px' : '60px',
    //       'obj==============');*/
    //     ReactDOM.render(
    //       <DTable
    //         // width="100%"
    //         // height="100%"
    //         dataSource={formatData(data, "dataSource")}
    //         columns={formatData(data, "columns")}
    //         // align="center"
    //         rowHeight={
    //           obj?.echartTheme?.listChartObj?.rowHeight
    //             ? obj?.echartTheme?.listChartObj?.rowHeight + "px"
    //             : "60px"
    //         }
    //         padding="10px 0"
    //         headerStyle={{
    //           fontSize: Number(
    //             obj.echartTheme?.xAxis[0]?.axisLabel?.textStyle?.fontSize
    //           ),
    //           color: obj.echartTheme?.xAxis[0]?.axisLabel?.textStyle?.color,
    //           background:
    //             obj?.echartTheme?.listChartObj?.headerStyle?.background
    //         }}
    //         contentStyle={{
    //           fontSize: Number(
    //             obj.echartTheme?.yAxis[0]?.axisLabel?.textStyle?.fontSize
    //           ),
    //           color: obj.echartTheme?.yAxis[0]?.axisLabel?.textStyle?.color,
    //           backgroundColor: "transparent"
    //         }}
    //         hoverStyle={
    //           {
    //             // color:'#0079ff',
    //             // fontWeight:'bold'
    //           }
    //         }
    //         autoPlay={obj?.echartTheme?.listChartObj?.autoPlay}
    //       />,
    //       chartView
    //     );
    //   }
    //   break;
    default:
  }

  function unmountComponent(name, chartView) {
    ReactDOM.unmountComponentAtNode(chartView.firstChild);
  }
}

let interval = null;
let count = 0;
let count1 = 0;
let count2 = 0;
let selectIndex = 0;
//启动一个定时器
export function setIntervalChart() {
  interval = setInterval(() => {
    if (arrayAnimate) {
      for (let i = 0; i < arrayAnimate.length; i++) {
        if (count % arrayAnimate[i].obj.echartTheme?.animate?.interval === 0) {
          if (arrayAnimate[i].obj.echartTheme?.animate?.show) {
            startAnimate(
              arrayAnimate[i].chartInstance,
              arrayAnimate[i].xseries,
              arrayAnimate[i].obj.echartTheme?.animate?.interval,
              arrayAnimate[i].count,
              arrayAnimate[i].obj.style
            );
            arrayAnimate[i].count++;
          }
        }
      }
    }
    count++;
  }, 1000);
}
//清除一个定时器
export function clearIntervalChart() {
  if (interval) {
    clearInterval(interval);
    arrayAnimate = [];
  }
}

export function startAnimate(chart, xseries, interval, index, style) {
  animateChart(chart, xseries, interval, index, style);
}

function animateChart(chart, xseries, interval, index, style) {
  if (xseries === null || xseries === undefined) {
    return;
  }
  let ondIndex = index % xseries.length;
  let dx = Math.ceil(index / xseries.length);
  // console.log("&&&*******", dx);
  if (index === xseries.length * dx) {
    ondIndex = xseries.length;
  }

  chart.dispatchAction({
    // type: "pieUnSelect",
    type: style === "basePieChart" ? "pieUnSelect" : "downplay",
    dataIndex: ondIndex - 1
  });
  // if (selectIndex >= xseries.length - 1) {
  //   selectIndex = -1;
  // }
  chart.dispatchAction({
    // type: "pieSelect",
    type: style === "basePieChart" ? "pieSelect" : "highlight",
    dataIndex: index % xseries.length
  });
}

export function resizeWindowChart() {
  if (arrayCharts) {
    for (let i = 0; i < arrayCharts.length; i++) {
      arrayCharts[i].resize();
    }
  }
}
