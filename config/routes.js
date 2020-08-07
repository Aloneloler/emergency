//配置路由
import { homePageRoutes } from './routes/HomePage';
import { User } from './routes/User';
export default [
  //无边框页面


  {
    //用户登录注册忘记密码等
    path: '/User',
    component: '../layouts/User',
    routes: [

      { path: '/User/Login', name: '登录', component: './Login/index' },
      { path: '/User/CollaborativePlotting', name: '协同标绘', component: './CollaborativePlotting/index' },
    ],
  },
  {
    //用户登录注册忘记密码等
    path: '/cs',
    component: '../layouts/Commandsystem',
    routes: [
      {
        path: '/cs/HomePage',
        name: '首页',
        component: './HomePage/index',
      },
      {
        path: '/cs/VoiceDispatching',
        name: '语音调度',
        component: './VoiceDispatching/index',
      },
      {
        path: '/cs/VideoSurveillance',
        name: '视频调度',
        component: './VideoSurveillance/index',
      },
      {
        path: '/cs/GisDispatching',
        name: '一张图调度',
        component: './GisDispatching/index',
      },
      {
        path: '/cs/TaskManagement',
        name: '任务管理',
        component: './TaskManagement/index',
      },
      {
        path: '/cs/ShortMessage',
        name: '短信调度',
        component: './ShortMessage/index',
      },
      {
        path: '/cs/Fax',
        name: '传真调度',
        component: './Fax/index',
      },
      // { path: '/cs/Login', name: '登录', component: './Login/index' },
      // { path: '/User/CollaborativePlotting', name: '协同标绘', component: './CollaborativePlotting/index' },
    ],
  },
  {
    path: '/',
    component: '../layouts/Home',
    routes: [...homePageRoutes,],
  }
  // {
  //   path: '/user',
  //   component: '../layouts/User',
  //   routes: [
  //     // { path: '/user', redirect: '/user/login' },
  //     // { path: '/user/sign', name: '注册', component: './Admin/Users/sign' },
  //     { path: '/user/Login', name: '登录', component: './Login/index' },
  //     {
  //       path: '/user/CollaborativePlotting',
  //       name: '协同标绘',
  //       component: './CollaborativePlotting/index',
  //     }
  //   ],
  // },


];
