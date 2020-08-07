import * as PlottingSchemeService from '../services/PlottingSchemeService';
import { message } from 'antd';

export default {
    namespace: 'PlottingSchemeModel',
    state: {
        VideoconferencingVal: true,
        activeMenuItemID: null,
        showBidcommittee: false,
    },

    subscriptions: {
        setup({ dispatch, history }) { },
    },

    effects: {
        //获取重大项目总数
        *schemeList({ payload }, { call, put, select }) {
            let { params, callback } = payload;
            let res = yield call(PlottingSchemeService.schemeList, params);
            if (res.data.code === 0 && res.data.msg === '查询成功') {
                let data = res.data.res;
                if (callback) {
                    callback(data);
                }
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
        setshowBidcommittee(state, action) {
            state.showBidcommittee = action.payload;
            return { ...state };
        },
    },
};
