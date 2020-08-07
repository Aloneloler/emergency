import { interquartileRange } from "simple-statistics";

//将相数云数据处理成词云需要的格式
//data   相数云数据
//colorArr  Array  渲染文字颜色的色系组不传默认显示黑色
export default function formatData(data, colorArr) {
  function IsNum(s) {
    if (s != null && s != '') {
      return !isNaN(s);
    }
    return false;
  }

  let dataSource = [];
  if (data == null) {
    return [];
  }
  let dimension = data.dimension;
  let metric = data.metric[0];
  for (let i = 0; i < dimension.length; i++) {
    let arrIndex;
    let rand;
    if(colorArr){
      arrIndex = Math.floor(Math.random() * colorArr.length);
      rand = colorArr[arrIndex];
    }
    dataSource.push({
      x: dimension[i],
      value: IsNum(Number(metric[i])) ? Number(metric[i]) : 0,
      category: rand,
    });
  }
  return dataSource;
}

// 数据格式处理，处理成词云需要的数据格式，x:value,categey