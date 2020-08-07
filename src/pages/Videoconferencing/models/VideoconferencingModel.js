import * as VideoconferencingService from '../services/VideoconferencingService';
import { message } from 'antd';

export default {
    namespace: 'VideoconferencingModel',
    state: {
        VideoconferencingVal: true,
        activeMenuItemID: null,
    },

    subscriptions: {
        setup({ dispatch, history }) { },
    },

    effects: {
        //获取重大项目总数
        *getZdxmdata({ payload }, { call, put, select }) {
            let thisModel = yield select(state => state.globalModel);
            let params = null;
            let res = yield call(VideoconferencingService.getZdxmdata, params);
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
        setVideoconferencingVal(state, action) {
            state.VideoconferencingVal = action.payload;
            return { ...state };
        },
        setActiveMenuItemID(state, action) {
            state.activeMenuItemID = action.payload;
            return { ...state };
        },
    },
};
