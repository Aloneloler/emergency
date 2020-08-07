// mapModel
import moment from 'moment';
function getDays(day) {
    return moment()
      .subtract(day, 'days')
      .format('YYYY-MM-DD HH:mm:ss');
  }
export default {
    namespace: 'globalTimeModel',
  
    state: {
      //当前时间
      time: 0,
      //开始时间
      startTime:getDays(30),
      //结束时间
      endTime: getDays(0),
      //增加时间
      spaceParams: {
        street: '',
        category: '',
        interval: 2,
        start: getDays(30),
        end: getDays(0),
        // polygon: '103,31;104,31;104,30;103,30;103,31',
        topN: 10,
        polygon: null,
      },
      eventParams: {
        category: '',
        // polygon:'',
        street: '',
        start: '',
        end: '',
        index: '',
        count: '',
        //多边形范围  获取热力和散点时 选框的范围
      },
      timeFun:null,//更新时间轴的方法
      timeBar:null,//更新时间轴上面柱状图的方法
    },
  
    subscriptions: {
      setup({ dispatch, history }) {
        // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {
        // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      setTime(state, { payload }) {
        state.time = payload;
        return { ...state, ...payload };
      },
      setTimeStop(state, { payload }) {
        state.timeStop = payload;
        return { ...state, ...payload };
      },
      setStartTime(state, { payload }) {
        state.startTime = payload;
        return { ...state, ...payload };
      },
      setEndTime(state, { payload }) {
        state.endTime = payload;
        return { ...state, ...payload };
      },
      setAddTime(state, { payload }) {
        state.addTime = payload;
        return { ...state, ...payload };
      },
      setFunArr(state, { payload }) {
        state.funArr = payload;
        return { ...state, ...payload };
      },
      setTimeFun(state, { payload }) {
        state.timeFun = payload;
        return { ...state, ...payload };
      },
      uptimeBar(state,{payload}){
          state.timeBar=payload;
          return {...state,...payload};
      }
    },
  };
  