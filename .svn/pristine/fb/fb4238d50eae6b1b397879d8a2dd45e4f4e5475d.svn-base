/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年10月9日
 * @author lqq
 * @desc
 *
 */
import request from './request';

/**
 *
 *
 * @param  {string} path  接口路径
 * @param  {object} [params]  参数
 * @param  {string} post 请求类型
 * @return {object}   返回请求值 data or err
 */

export default function networkRequest(path, params, post) {
  switch (post) {
    case 'get':
      return getRequst(path, params, post);
      break;
    case 'post':
      return postRequst(path, params, post);
      break;
    case 'post1':
      return postgetRequst(path, params, post);
      break;
    case 'login':
      return loginRequst(path, params, post);
      break;
    case 'upImage':
      return upImageRequst(path, params, post);
      break;
      return getRequst(path, params, post);
    default:
  }
}

export async function getRequst(path, params) {
  let accessToken = localStorage.getItem('cookie');
  // console.log('accessToken', accessToken);
  return request(path + dicToString(params), {
    method: 'get',
    headers: {
     // 'Cache-Control': 'no-cache',
      Accept: 'application/json',
      // Authorization: accessToken,
    },
  });
}

//getpost请求
export async function postgetRequst(path, params) {
  let accessToken = localStorage.getItem('cookie');
  // console.log('accessToken', accessToken);
  return request(path + dicToString(params), {
    method: 'post',
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      // Authorization: accessToken,
    },
  });
}

//登录请求
export async function loginRequst(path, params) {
  return request(path, {
    method: 'post',
    'Cache-Control': 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(params),
  });
}

//更新图片
export async function upImageRequst(path, params) {
  let accessToken = localStorage.getItem('cookie');
  return request(path, {
    method: 'post',
    'Cache-Control': 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: accessToken,
    },
    body: params,
  });
}

//post请求
export async function postRequst(path, params) {
  let postParams = params;
  let accessToken = localStorage.getItem('cookie');
  return request(path, {
    method: 'post',
    // 'Cache-Control': 'no-cache',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json;',
      // Authorization: accessToken,
    },
    body: JSON.stringify(params),
  });
}

export function dicToString(params) {
  if (params === undefined || params === null) {
    return '';
  }
  if (params instanceof Array) {
    return '';
  }
  let gerParam = '';
  for (let variable in params) {
    if (params.hasOwnProperty(variable)) {
      gerParam = gerParam + '&' + variable + '=' + params[variable];
    }
  }
  gerParam = gerParam.substring(1);
  return gerParam;
}
