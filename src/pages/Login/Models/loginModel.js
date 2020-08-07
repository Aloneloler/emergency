import * as LoginSerivices from '../Services/LoginSerivices';


export default {
    namespace: 'loginModel',
    state: {
        //导航信息
        menuList: [],

    },

    subscriptions: {
        setup({ dispatch, history }) { },
    },

    effects: {
        //获取登录信息
        *getLoginData({ payload }, { call, put, select }) {
            let { params, callback } = payload;
            // console.log(params, 'getLoginData');
            let res = yield call(LoginSerivices.getLoginData, params);

            // console.log('res', res);
            if (res.data.code == 'success') {
                let data = res.data.data;
                if (callback) {
                    callback(data)
                }
            }
        },


    },

    reducers: {
        //设计对应导航的列表
        setMenuList(state, action) {
            state.menuList = action.payload;
            return { ...state, ...action.payload };
        },

    },
};
