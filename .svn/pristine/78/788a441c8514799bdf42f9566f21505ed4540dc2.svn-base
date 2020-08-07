import networkRequest from '@/utils/network/XSRquest';
import { configPath } from './servicePath';
// import { params2 } from '@/pages/WenBrigade/publicpages';

/**
 * 用户登录、注册、忘记密码、短信验证等
 */

/**
 * 用户权限相关
 */

// 查询用户菜单权限
export function getMenuList(params) {
  return networkRequest(configPath.menulist, params, 'get');
}

//请求相数云底图数据
export function getDoCloudMapServer(params) {
  return networkRequest(configPath.doCloudMapPath, params, 'post');
}

//请求下拉框数据

export function getmeundata(params) {
  return networkRequest(configPath.meundata, params, 'get');
}
// 请求热点问题数据
export function gethotdata(params) {
  return networkRequest(configPath.hotdata, params, 'get');
}
//请求投资额数据
export function getXmnumdata(params) {
  return networkRequest(configPath.xmnumdata, params, 'get');
}
//获取重大项目数据
export function getZdxmdata(params) {
  return networkRequest(configPath.Zdxmdata, params, 'get');
}
//请求相数云项目数据
export function getproject(params) {
  return networkRequest(configPath.Project, params, 'get');
}

//   ------------------------------------首页--------------------------------------

// 城市管理 公共安全 经济运行  城市服务
export function getMonitoring(params) {
  return networkRequest(configPath.monitoringPath, params, 'get');
}

//   ------------------------------------监测预警--------------------------------------

// 城市管理
export function getWarning(params) {
  return networkRequest(configPath.warningPath, params, 'get');
}

// 排名数据
export function getCockpitData(params) {
  return networkRequest(configPath.cockpitDataPath, params, 'get');
}

//arcGIS的数据获取地址
export function getArcGis(params, url) {
  return networkRequest(configPath.arcUrlPath + url, params, 'get');
}

export function getJDWarning(params) {
  return networkRequest(configPath.getJDWarningPath, params, 'get');
}

export function getCardDetail(params) {
  return networkRequest(configPath.getCardDetail, params, 'post');
}

export function getConter(params) {
  return networkRequest(configPath.getConter, params, 'get');
}
