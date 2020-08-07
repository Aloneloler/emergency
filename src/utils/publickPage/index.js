import blue from '@/../public/mapStyle/blue.json';
//默认视角
const INITIAL_VIEW_STATE = {
  width: 3680,
  height: 1680,
  latitude: 32.216,
  longitude: 120.8317,
  zoom: 9,
  bearing: 0,
  maxZoom: 16,
  pitch: 30,
};
// 突发事件
const homeEmergencies = { "catalog": "3f24f2f77840410081991cd240eb05c2", "sourceType": 7, "features": "002df4ffd8814fefac6b7c7afe2b2190", "dimension": [{ "index": 0, "alias": "field_0", "key": "f0000", "name": "f0000", "type": "String" }, { "index": 1, "alias": "field_1", "key": "f0001", "name": "f0001", "type": "Double" }, { "index": 2, "alias": "field_2", "key": "f0002", "name": "f0002", "type": "Double" }, { "index": 3, "alias": "field_3", "key": "f0003", "name": "f0003", "type": "String" }, { "index": 4, "alias": "field_4", "key": "f0004", "name": "f0004", "type": "String" }, { "index": 5, "alias": "field_5", "key": "f0005", "name": "f0005", "type": "String" }, { "index": 6, "alias": "field_6", "key": "f0006", "name": "f0006", "type": "String" }, { "index": 7, "alias": "geom", "key": "geom", "name": "geom", "type": "Point" }], "where": { "mode": 1, "conditions": [] }, "search_type": 1 }

//地图的密钥
const MAPBOX_TOKEN =
  'pk.eyJ1Ijoid2VpemhpbWluMjAwNyIsImEiOiJjajkzeHRhcWkyaWtsMzNucmZkZHBsbWtsIn0.Roa71zaPUY1M00OQ0X1WzA';
//地图样式
// const MAP_STYLE = blue;
// const MAP_STYLE = 'http://114.255.136.222:8800/styles/jiangsu_nantong_blue/style.json';
const MAP_STYLE = 'http://2.82.16.25:7000/styles/jiangsu_nantong_blue/style.json';
//文旅的二级菜单
const WenBrigadeMenuData = [
  {
    name: '文旅态势总览',
    data: [
      {
        name: '重大项目',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '广电资源',
        key: '2',
        icon: '',
        children: null,
      },
      {
        name: '文物文化',
        key: '3',
        icon: '',
        children: null,
      },
    ],
  },
  {
    name: '旅游专题',
    data: [
      {
        name: '旅游GDP',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '风景名胜',
        key: '2',
        icon: '',
        children: null,
      },
    ],
  },
  {
    name: '客流量监测预警',
    data: [],
  },
];
//应急的二级菜单
const ContingencyMenuData = [
  {
    name: '应急总体态势',
    data: [
      {
        name: '突发事件',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '风险企业危险源',
        key: '2',
        icon: '',
        children: null,
      },
      {
        name: '应急资源',
        key: '3',
        icon: '',
        children: null,
      },
    ],
  },
  {
    name: '安全生产监管预警',
    data: [
      {
        name: '监管企业',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '危险源/二道门',
        key: '2',
        icon: '',
        children: null,
      },
      {
        name: '危化品运输车辆',
        key: '3',
        icon: '',
        children: null,
      },
      {
        name: '动火作业',
        key: '4',
        icon: '',
        children: null,
      },
    ],
  },
  {
    name: '建筑工程安全生产监督管理',
    data: [
      {
        name: '建筑工程',
        key: '1',
        icon: '',
        children: null,
      },
    ],
  },
  {
    name: '自然灾害监测预警',
    data: [
      {
        name: '气象灾害',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '地震灾害',
        key: '2',
        icon: '',
        children: null,
      },
    ],
  },
  {
    name: '城市公共设施安全管理',
    data: [
      {
        name: '天网视频',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '特种设备',
        key: '2',
        icon: '',
        children: null,
      },
      {
        name: '重要基础设施',
        key: '3',
        icon: '',
        children: null,
      },
      {
        name: '消防资源',
        key: '4',
        icon: '',
        children: null,
      },
    ],
  },
];
//自然资源的二级菜单
const NaturalResourcesMenuData = [
  {
    name: '自然资源现状',
    data: [
      {
        name: '行政划分',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '遥感影像',
        key: '2',
        icon: '',
        children: null,
      },
      {
        name: '慧眼守土',
        key: '3',
        icon: '',
        children: null,
      },
    ],
  },

  {
    name: '资源规划',
    data: [
      {
        name: '海洋资源规划',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '土地资源规划',
        key: '2',
        icon: '',
        children: null,
      },
      {
        name: '城乡规划',
        key: '3',
        icon: '',
        children: null,
      },
    ],
  },
  {
    name: '资源利用',
    data: [
      {
        name: '海洋资源利用',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '土地资源利用',
        key: '2',
        icon: '',
        children: null,
      },
      {
        name: '林业开发利用',
        key: '3',
        icon: '',
        children: null,
      },
    ],
  },
  {
    name: '资源分析',
    data: [
      {
        name: '土地资源分析',
        key: '1',
        icon: '',
        children: null,
      },
      {
        name: '不动产登记分析',
        key: '2',
        icon: '',
        children: null,
      },
    ],
  },
];
export {
  INITIAL_VIEW_STATE,
  MAPBOX_TOKEN,
  MAP_STYLE,
  WenBrigadeMenuData,
  ContingencyMenuData,
  NaturalResourcesMenuData,
  homeEmergencies
};
