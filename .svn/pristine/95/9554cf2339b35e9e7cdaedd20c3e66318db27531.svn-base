import * as globalService from '@/services/globalService';
import { message } from 'antd';
import { getNavMenuItems } from '@/utils/commonFun';
export default {
  namespace: 'globalModel',
  state: {
    //导航信息
    menuList: [],
    //导航显示隐藏
    menuShow: false,
    //当前选中的对应模块的id和标题
    activeMenuItemName: null,
    activeMenuItemID: null,
    //设置当前主题的ID
    modelID: null,
    //设置当前不需要定制化开发的模块
    noDevelopment: [],
    //设置当前需要完全定制话开发的模块
    activeDevelopment: [],
    layername: '旅游资源',
    eventDetails: null,
    Xmnumdata: null, //投资额
    Zdxmdata: null, //重大项目总数
    menudataList: [], //导航内容
    //左导航栏项
    leftMenuState: 'GisDispatching',
    EmergencyNum: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {},
  },

  effects: {
    //设置对应的导航列表
    *getMenuListEffects({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.globalModel);
      let { modelID } = thisModel;
      if (modelID) {
        yield put({
          type: 'checkEffects',
        });
        alert(1);
        // console.log(modelID, 'modelID');
        let params = { appId: modelID };
        let res = yield call(globalService.getMenuList, params);
        let arrID = getNavMenuItems(res.data.data);
        if (res.data.code === 0 && res.data.message === 'ok') {
          let { data } = res.data;
          yield put({
            type: 'setMenuList',
            payload: res.data.data,
          });
          // console.log(res.data.data, 'zzzzzzz');
          yield put({
            type: 'setActiveMenuItemID',
            payload: arrID[0],
          });
          if (!data[0].children) {
            yield put({
              type: 'setActiveMenuItemName',
              payload: data[0].name,
            });
          }
        } else {
          message.error(res.data.message);
        }
      }
    },
    //获取对应相数云对应的数据
    *getDoCloudEffects({ payload }, { call, put, select }) {
      let { callback, params } = payload;
      let res = yield call(globalService.getDoCloudMapServer, params);
      if (res.data.code === 0 && res.data.message === 'ok') {
        let data = res.data.data;
        if (callback) {
          callback(data);
        }
      }
    },
    //获取投资额数据
    *getXmnumdata({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.globalModel);
      let params = null;
      let res = yield call(globalService.getXmnumdata, params);
      if (res.data.code === 0 && res.data.message === 'ok') {
        yield put({
          type: 'setxmnumdata',
          payload: res.data.data[0].f0000,
        });
      }
    },
    //获取重大项目总数
    *getZdxmdata({ payload }, { call, put, select }) {
      let thisModel = yield select(state => state.globalModel);
      let params = null;
      let res = yield call(globalService.getZdxmdata, params);
      // console.log(res, 'res111')
      if (res.data.code === 0 && res.data.message === 'ok') {
        yield put({
          type: 'setZdxmdata',
          payload: res.data.data[0].f0000,
        });
      }
    },
  },
  reducers: {
    //设计对应导航的列表
    setMenuList(state, action) {
      state.menuList = action.payload;
      return { ...state };
    },
    //设置对应导航的显示隐藏
    setMenuShow(state, action) {
      state.menuShow = action.payload;
      return { ...state };
    },
    //设置当前选中导航的id
    setActiveMenuItemName(state, action) {
      state.activeMenuItemName = action.payload;
      return { ...state };
    },
    //设置当前选中导航的id
    setActiveMenuItemID(state, action) {
      state.activeMenuItemID = action.payload;
      return { ...state };
    },
    //设置对应的模块的id
    setModelID(state, action) {
      state.modelID = action.payload;
      return { ...state };
    },
    //设置当前不用定制化开发的模块
    setNoDevelopment(state, action) {
      state.noDevelopment = action.payload;
      return { ...state };
    },
    //设置当前需要完全定制化开发的模块
    setActiveDevelopment(state, action) {
      state.activeDevelopment = action.payload;
      return { ...state };
    },
    setlayername(state, action) {
      state.layername = action.payload;
      return { ...state };
    },
    seteventDetails(state, action) {
      state.eventDetails = action.payload;
      return { ...state };
    },
    setxmnumdata(state, action) {
      state.Xmnumdata = action.payload;
      return { ...state };
    },
    setZdxmdata(state, action) {
      state.Zdxmdata = action.payload;
      return { ...state };
    },
    //menudataList
    setMenudataList(state, action) {
      state.menudataList = action.payload;
      return { ...state };
    },
    //设置左导航栏数据
    setLeftMenuState(state, action) {
      state.leftMenuState = action.payload;
      return { ...state };
    },
    //获取重大突发事件数量
    setEmergencyNum(state, action) {
      state.EmergencyNum = action.payload;
      return { ...state };
    },
  },
};
