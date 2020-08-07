import networkRequest from '@/utils/network/XSRquest';
import { configPath } from './LoginPath';

//获取登录信息
export function getLoginData(params) {
    return networkRequest(configPath.loginData + "?username=" + params.username + "&password=" + params.password, "", 'post');
}
