export default function formatData(data, type) {
  let columns = [];
  let dataSource = [];
  if (data == null) {
    return [];
  }

  //table表头部分数据处理
  if (type === "columns") {
    for (let i = 0; i < data.dimension_meta.length; i++) {
      data.dimension_meta[i].dataIndex = data.dimension_meta[i].name;
      data.dimension_meta[i].title = data.dimension_meta[i].alias;
      columns.push(data.dimension_meta[i]);
    }
    for (let j = 0; j < data.metric_meta.length; j++) {
      data.metric_meta[j].dataIndex = data.metric_meta[j].name;
      data.metric_meta[j].title = data.metric_meta[j].alias;
      columns.push(data.metric_meta[j]);
    }
    return columns;
  }

  //table表格内容数据处理
  if (type === "dataSource") {
    let keyArray = [];
    for (let i = 0; i < data.dimension_meta.length; i++) {
      keyArray.push(data.dimension_meta[i].name);
    }
    for (let j = 0; j < data.metric_meta.length; j++) {
      keyArray.push(data.metric_meta[j].name);
    }

    let valueArray = [];
    valueArray.push(data.dimension);
    for (let i = 0; i < data.metric.length; i++) {
      valueArray.push(data.metric[i]);
    }

    for (let j = 0; j < data.dimension.length; j++) {
      let obja = {};
      for (let i = 0; i < keyArray.length; i++) {
        let key = keyArray[i];
        let value = valueArray[i][j];
        let obj = {
          [key]: [value]
        };
        Object.assign(obja, obj);
      }
      dataSource.push(obja);
    }
    return dataSource;
  }
}
