export default function buildOption(chartOption, registerTheme) {
 //console.log(chartOption,'buildoption',registerTheme);
   let option = {
    visualMap: [{
        show: false,
        seriesIndex: [0, 1, 2, 3, 4],
        min: 0,
        max: 300000,
        calculable: true,
        left: 'center',
        //top:'10',
        //bottom: '10',
        orient: 'vertical',
        color: ['#eaf117', '#43cc61']    }
    ],
    grid: [
        { top: '0.0%', height: '7%' },
        { top: '11.11%', height: '7%' },
        { top: '22.22%', height: '7%' },
        { top: '33.33%', height: '7%' },
        { top: '44.44%', height: '7%' },
        { top: '55.55%', height: '7%' },
        { top: '66.66%', height: '7%' },
        { top: '77.77%', height: '7%' },
        { top: '88.88%', height: '7%' }
    ],
    tooltip: {
        show: true
    },
    xAxis: [
        // { type: 'category', gridIndex: 0, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        // { type: 'category', gridIndex: 1, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        // { type: 'category', gridIndex: 2, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        // { type: 'category', gridIndex: 3, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        // { type: 'category', gridIndex: 4, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        // { type: 'category', gridIndex: 5, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        // { type: 'category', gridIndex: 6, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        // { type: 'category', gridIndex: 7, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
        // { type: 'category', gridIndex: 8, data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
    ],
    yAxis: [
        // {
        //     type: 'category',
        //     gridIndex: 0,
        //     splitNumber: 1,
        //     name: 'B1',
        //     nameLocation: 'middle',
        //     nameGap: 20,
        //     nameRotate: 0,
        //     nameTextStyle: {
        //         fontWeight: 'bold'
        //     },
        //     axisLabel: {
        //         show: false
        //     },
        //     axisLine: {
        //     show: false
        //     }
        // },
    ],
    series: [
        // {
        //     type: "heatmap",
        //     label: {
        //         show: true,
        //         formatter: function (params) {
        //             return parseInt(params.value[2])
        //         }
        //     },
        //     xAxisIndex: '0',
        //     yAxisIndex: '0',
        //     data: [
        //         [0, 0, 46.74],
        //         [1, 0, 46.7],
        //         [2, 0, 43.87],
        //         [3, 0, 44.3],
        //         [4, 0, 43.21],
        //         [5, 0, 43.88],
        //         [6, 0, 43.96],
        //         [7, 0, 45.74],
        //         [8, 0, 46.23],
        //         [9, 0, 44.13],
        //         [10, 0, 50.91],
        //         [11, 0, 47.86]
        //     ]
        // },
    ]
   };
   let hours = ['0', '1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10', '11',
            '12', '13', '14', '15', '16', '17',
            '18', '19', '20', '21', '22', '23'
        ];
   let datayAxis = [];
   let dataxAxis = [];
   let dataSeries = [];
   let dataGrid = [];
   let  alldata=[];
   let  Index=0;
   let seriesIndex=[];
   if (chartOption.series.length&&chartOption.xAxisData.length===2) {
     let chartYData = chartOption.series;
     let chartXData = chartOption.xAxisData;
     //所有数据
     for (let m = 0; m < chartYData[0].data.length; m++) {
        alldata.push(chartYData[0].data[m]);  
        // if((i+1)%chartXData[1].length===0)
        // {
 
 
        //  nameIndex++;
        // }
    }

  let nameArray=Array.from(new Set(chartXData[0]));
 // console.log(nameArray)
     for (let i = 0; i < nameArray.length; i++) {
        seriesIndex.push(i);
       var yinfo = {
        type: 'category',
        gridIndex: i,
        splitNumber: 1,
        name: nameArray[i],
        nameLocation: 'middle',
        nameGap: registerTheme?.heatMap?.nameGap,
        nameRotate: registerTheme?.heatMap?.nameRotate,
        nameTextStyle: {
            fontWeight: 'bold',
            color:registerTheme?.valueLabel?.color?.y1,
            fontSize: registerTheme?.valueLabel?.fontSize?.y1,
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
    };
    datayAxis.push(yinfo);
 
    var datavalue = [];

    let hourArray=Array.from(new Set(chartXData[1]));
    for (var m = 0; m < hourArray.length; m++) {
        datavalue.push([m, 0,alldata[Index]]);
        Index++;
    }
    var xinfo = {
        type: 'category',
        gridIndex: i,
        data: hourArray,
        axisLabel:{
            show:registerTheme?.heatMap?.xtextShow,
            color:registerTheme?.heatMap?.xtextStyle?.color,
            fontSize:registerTheme?.heatMap?.xtextStyle?.fontSize
        }
    };

    dataxAxis.push(xinfo);
    var seriesinfo = {
        type: "heatmap",
        label: {
            color:registerTheme?.valueLabel?.color?.y0,
            fontSize: registerTheme?.valueLabel?.fontSize?.y0,
            show: registerTheme?.valueLabel?.show,
            formatter: function (params) {
                return parseInt(params.value[2])
            }
        },
        xAxisIndex: i,
        yAxisIndex: i,
        data: datavalue
    }
    dataSeries.push(seriesinfo);

    var gridinfo = {
        //top:(i *5+registerTheme?.grid?.top) ,
        top:(i *registerTheme?.heatMap?.marginTop)+'%',
        height:registerTheme?.heatMap?.height,
        left:Number(registerTheme?.grid?.left)+40,
        right:registerTheme?.grid?.right,
        //bottom:registerTheme?.grid?.bottom,
    };

    dataGrid.push(gridinfo);
  }
}
   //console.log(dataxAxis,datayAxis,dataSeries,seriesIndex)
   if(registerTheme?.legendOrient)
   {
     if(registerTheme?.legendOrient===1)
     {
        option.visualMap[0].orient='horizontal';
     }else if(registerTheme?.legendOrient===2)
     {
        option.visualMap[0].orient='vertical';
     }
   }else{
    option.visualMap[0].orient='horizontal';
 }
   let color=[];
   for (var m = 0; m < chartOption.color.length; m++) {
    color.push(chartOption.color[m]);
    }
  
  option.visualMap[0].show= registerTheme?.legend?.show;
  option.visualMap[0].seriesIndex=seriesIndex;
  option.visualMap[0].min=Number(Math.min.apply(null, alldata).toFixed(0))
  option.visualMap[0].max=Number(Math.max.apply(null, alldata).toFixed(0))
  option.visualMap[0].color=color.reverse();
  option.grid=dataGrid;
  option.xAxis=dataxAxis;
  option.yAxis= datayAxis;
  option.series = dataSeries;
//    option.singleAxis.left=registerTheme?.grid?.left?registerTheme.grid.left:10,
//    option.singleAxis.right= registerTheme?.grid?.right?registerTheme.grid.right:10,
//    option.singleAxis.bottom=registerTheme?.grid?.bottom?registerTheme.grid.bottom:10,
//    option.singleAxis.top=registerTheme?.grid?.top?registerTheme.grid.top:10,

//    option.singleAxis.axisLabel = {
//      show:registerTheme?.valueLabel?.show,
//      color: registerTheme?.valueLabel?.color?.y0
//        ? registerTheme.valueLabel.color.y0
//        : "#D1D1D3",
//      fontSize: registerTheme?.valueLabel?.fontSize?.y0
//        ? registerTheme.valueLabel.fontSize.y0
//        : 12,
//      // interval: 0,
//      // margin: 5
//    };

  // option.color = chartOption.color;
//    option.legend.data = legendData;
//    option.legend.show = registerTheme?.legend?.show;
   //console.log(option,"option")
   return option;
 }
 