export default function buildOption(chartOption, registerTheme) {
     //console.log(chartOption,'buildoption',registerTheme);
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: 'rgba(0,0,0,0.2)',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        singleAxis: {
            max: 'dataMax',
            top: 10,
            bottom: 10,
            left:10,
            right:10,
            axisTick: {},
            axisLabel: {},
            //type: 'time',
            axisPointer: {
                animation: true,
                label: {
                    show: true
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    opacity: 0.2
                }
            }
        },
        series: [
        //   {
        //     type: 'themeRiver',
        //     data: [],
        //     label: {
        //         show: true
        //     }
        // }
      ],
      legend: {
        //show: true,
        //data: ['周一', '周二', '周三', '周四']
      }
    };
  
    let buildSeriesData = [];
    let legendData = [];
    let rawData = [];
    let data = [];
    let alldata=[];
    let  Index=0;
    if (chartOption.series.length) {
      let chartYData = chartOption.series;
      let chartXData = chartOption.xAxisData;
      let nameArray=Array.from(new Set(chartXData));//去重
     //所有数据
     for (let m = 0; m < chartYData[0].data.length; m++) {
      alldata.push(chartYData[0].data[m]);  
     }
     //重复得个数
     let num=[];
     nameArray.forEach(value=>{
       num.push(chartXData.join('').split(value).length-1)
    });
   
      for(let j=0;j<nameArray.length;j++)
      {
        legendData.push(nameArray[j]);
        var datavalue = [];
        for (var m = 0; m < num[0]; m++) {
         datavalue.push(alldata[Index]);
         Index++;
         }
         rawData.push(datavalue);
      }
     
       //console.log(rawData)
      
      // for (let m = 0; m < chartYData.length; m++) {
      //   rawData.push(chartYData[m].data);
      //   legendData.push(chartYData[m].name)
      // }
      for (let i = 0; i < rawData.length; i++) {
        for (let j = 0; j < rawData[i].length; j++) {
          let label = legendData[i];
          data.push([j, Number(rawData[i][j]), label]);
        }
    }
      buildSeriesData.push({
        type: 'themeRiver',
        data: data,
          label: {
            show: false
        },
        emphasis: {
          itemStyle: {
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.8)'
          }
      },
      });
     
    }
    //console.log(buildSeriesData)
   

    option.singleAxis.left=registerTheme?.grid?.left?registerTheme.grid.left:10,
    option.singleAxis.right= registerTheme?.grid?.right?registerTheme.grid.right:10,
    option.singleAxis.bottom=registerTheme?.grid?.bottom?registerTheme.grid.bottom:10,
    option.singleAxis.top=registerTheme?.grid?.top?registerTheme.grid.top:10,
    // option.singleAxis={
    //  left:registerTheme?.grid?.left?registerTheme.grid.left:10,
    //  right: registerTheme?.grid?.right?registerTheme.grid.right:10,
    //   bottom:registerTheme?.grid?.bottom?registerTheme.grid.bottom:10,
    //  top:registerTheme?.grid?.top?registerTheme.grid.top:10,
    // }

    option.singleAxis.axisLabel = {
      show:registerTheme?.valueLabel?.show,
      color: registerTheme?.valueLabel?.color?.y0
        ? registerTheme.valueLabel.color.y0
        : "#D1D1D3",
      fontSize: registerTheme?.valueLabel?.fontSize?.y0
        ? registerTheme.valueLabel.fontSize.y0
        : 12,
      // interval: 0,
      // margin: 5
    };
    //    option.angleAxis.lineStyle={
    //        color:'#D1D1D3',
    //    }
    // option.angleAxis.axisLabel = {
    //   color: registerTheme?.valueLabel?.color?.y1
    //     ? registerTheme.valueLabel.color.y1
    //     : "#D1D1D3",
    //   fontSize: registerTheme?.valueLabel?.fontSize?.y1
    //     ? registerTheme.valueLabel.fontSize.y1
    //     : 12,
    //   show: registerTheme.valueLabel.show,
    //   margin: 5
    // };
    option.series = buildSeriesData;
    option.color = chartOption.color;
    option.legend.data = legendData;
    option.legend.show = registerTheme?.legend?.show;
    //console.log(option,"option")
    return option;
  }
  