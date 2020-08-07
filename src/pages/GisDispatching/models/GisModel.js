export default {
    namespace: 'GisModel',
    state: {
        DetailsShow: false,
        DistanceRadius: 1000,
        RadiusPoint: null
    },

    subscriptions: {
        setup({ dispatch, history }) { },
    },

    effects: {

    },

    reducers: {
        //设计对应导航的列表
        setDetailsShow(state, action) {
            state.DetailsShow = action.payload;
            return { ...state };
        },
        //圆半径
        setDistanceRadius(state, action) {
            state.DistanceRadius = action.payload;
            return { ...state };
        },
        //半径改变，圆内的点
        seRadiusPoint(state, action) {
            state.RadiusPoint = action.payload;
            return { ...state };
        }
    },
};
