import IPConfig from '@/constants/IPConfig';
export const configPath = {
  menulist: IPConfig.baseService + '/dataeye/v1/app_menu/full_menu?',
  //请求底图服务的路径
  doCloudMapPath: IPConfig.baseService + '/hubble/common/v1/search_space_common?',
  //请求下拉框数据
  meundata: IPConfig.serviceDomain + '/nantong/land/getLandPlanningList?type=1',
  //请求热点问题数据
  hotdata: IPConfig.hotService + '/nantong/complaint/history_list?',
  //请求投资额
  xmnumdata:
    IPConfig.baseService +
    '/hubble/common/v1/search?catalog=a2fb8559ab5a439f94e02e607d8abba9&features=412e8672bc6c4e23b391ffa1ec026367&max_feature=10000&search_type=2&datasource_id=049f711bc91b4653abb78a8ab2e033ed',
  //请求重大项目数据
  Zdxmdata:
    IPConfig.baseService +
    '/hubble/common/v1/search?catalog=a2fb8559ab5a439f94e02e607d8abba9&features=1dbb4daa4bf64f3ca3108e44b9bd96d5&max_feature=10000&search_type=2&datasource_id=e525c7484da2439aa3e9fd275aa2d871',
  //请求相数云项目数据
  Project: IPConfig.baseService + '/dataeye/v1/app_menu/full_menu?',

  monitoringPath:
    IPConfig.monitoringDomain +
    '/ntsyzl_gw_api/vis/warnplat/gov-warnplat-Leader-Driver/prewarningLingDaoMoudel?',

  // 获取全部的监测预警数据
  // warningPath: IPConfig.monitoringDomain + '/nt-leader/cockpit/getClassify?',

  warningPath: IPConfig.JDmonitoringDomain + '/gov-warnplat-Leader-Driver/level3-count?',

  // 获取排名数据
  cockpitDataPath: IPConfig.monitoringDomain + '/nt-leader/cockpit/getCockpitData?',
  //获取arcGIS的数据
  arcUrlPath: IPConfig.arcUrl + '/arcgis/rest/services',

  getJDWarningPath: IPConfig.JDmonitoringDomain + '/gov-warnplat-Leader-Driver/regionNumber?',

  getCardDetail: 'http://2.82.16.25:7000/nt-leader/askingBackend/searchPage',

  getConter: 'http://2.82.16.25:7000/nt-leader/askingBackend/getconter?',
};
