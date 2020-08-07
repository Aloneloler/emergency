import { FlyToInterpolator } from "deck.gl";
//处理对应的导航模块文件
const getSubMenuOrItem = item => {
    if (item.children && item.children.some(child => child.name)) {
        const { name } = item;
        return getNavMenuItems(item.children);
    }
    return item.linkUrl;
};

const getNavMenuItems = menuList => {
    if (!menuList) {
        return [];
    }
    return menuList.map(item => getSubMenuOrItem(item));
};
//获取当前模块对应的menu数据
const getMenuData = (data, activeMaodelName) => {
    let modelMenuData = [];
    if (data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].name === activeMaodelName) {
                modelMenuData = data[i].data;
                break;
            }
        }
    }
    return modelMenuData;
}
//获取原始对象的key值
const getDataKey = (dataArr, key) => {
    let newKey = key;
    if (dataArr) {
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i].key === key && dataArr[i].name === key) {
                newKey = dataArr[i].alias;
                break;
            }
        }
    }
    return newKey;
}
//map飞行的方法
const flyTo = (viewState, callback) => {
    viewState = {
        ...viewState,
        transitionInterpolator: new FlyToInterpolator(),
        //时间
        //transitionDuration: 3000
    };
    if (callback) {
        callback(viewState)
    }
}
const geoJsonToWkt = geojson => {
    geojson = JSON.parse(JSON.stringify(geojson));
    if (geojson) {
      let coordinates = geojson.geometry.coordinates[0];
      for (let i in coordinates) {
        if (coordinates[i] instanceof Array) {
          coordinates[i] = coordinates[i].join(' ');
        }
      }
      coordinates = coordinates.join(',');
      coordinates = `POLYGON((${coordinates}))`;
      return coordinates;
    }
  };
export { getSubMenuOrItem, getNavMenuItems, getMenuData, getDataKey, flyTo ,geoJsonToWkt}