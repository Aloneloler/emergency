import { INITIAL_VIEW_STATE } from '@/utils/publickPage';
import esri2geo from 'esri2geo'
import * as globalService from '@/services/globalService';
export default {
    namespace: 'globalMapModel',
    state: {
        //当前地图视角
        viewState: INITIAL_VIEW_STATE,
        //当前deck.gl拥有的所有图层
        deckLayerArr: [],
        //当前的绘画图层
        trackingLayerArr: [],
        //底图对象
        mapObj: null,
        //选中要素的数据
        activeLayerObj: {
            lngLat: [0, 0],
            x: null,
            y: null,
            object: null
        }
    },

    subscriptions: {
        setup({ dispatch, history }) {

        },
    },

    effects: {
        //获取相数云的数据
        *getDoCloudEffects({ payload }, { call, put, select }) {
            let { callback, params } = payload;
            let res = yield call(globalService.getDoCloudMapServer, params);
            // console.log(res,'res')
            if (res.data.code === 0 && res.data.message === 'ok') {
                let data = res.data.data;
                let geoJson = {
                    type: 'FeatureCollection',
                    features: [],
                };
                for (let i in data) {
                    let dataItem = { geometry: JSON.parse(data[i].geojson) };
                    dataItem.properties = {};
                    for (let j in data[i]) {
                        if (j !== 'geojson') {
                            dataItem.properties[j] = data[i][j];
                        }
                    }
                    geoJson.features.push(dataItem);
                }
                if (callback) {
                    callback(geoJson);
                }
            }
        },
        //获取对应arcGIS发布的数据
        *getArcGisEffects({ payload }, { call, put, select }) {
            let { callback, params, url, obj } = payload;
         
            let res = yield call(globalService.getArcGis, params, url + `?where=1%3D1&outFields=*&outRecords=300000000&text=&objectIds=&time=&inSR=4490&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4490&returnIdsOnly=true&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson${params ? '&' : ''}`);

            if (res.data) {
                let objectIds = res.data.objectIds || [];
                yield put({ type: 'getArcGisByIDEffects', payload: { callback: callback, params: params, url: url, objectIds: objectIds, obj: obj } })
            }
        },
         //根据OBJECTID获取对应的数据
         *getArcGisByIDEffects({ payload }, { call, put, select }) {
            let { callback, params, url, objectIds } = payload;
            let globalModel = yield select(state => state.globalModel);
            let oldlayername = globalModel.layername;
            let objectLength = objectIds.length;
            let geoJson = null;
            let i = Math.ceil(objectLength / 8000)
            for (let j = 0; j < i; j++) {
                let res = yield call(globalService.getArcGis, params, url + `?where=1%3D1&outFields=*&outRecords=300000000&text=&objectIds=${objectIds.slice(j * 8000, (j + 1) * 8000 - 1).toString()}&time=&inSR=4490&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4490&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson${params ? '&' : ''}`);
                if (res.data) {
                    let globalModel = yield select(state => state.globalModel);
                    let newlayername = globalModel.layername;
                    let features = res.data;
                    if (newlayername !== oldlayername) {
                        return;
                    }
                    esri2geo(features, (err, data) => {
                        if (!geoJson) {
                            geoJson = data;
                            geoJson.url = url;
                        } else {
                            geoJson.features.push.apply(geoJson.features, data.features)
                        }
                        // if (geoJson.features.length > objectLength - 100) {
                        if (callback) {
                            callback(geoJson)
                        }
                        // }
                    })
                }
            }
        },
    },
    reducers: {
        //设计对应导航的列表
        setViewState(state, action) {
            state.viewState = action.payload;
            return { ...state };
        },
        //设置当前deckgl的对应图层
        setDeckLayerArr(state, action) {
            state.deckLayerArr = action.payload;
            return { ...state };
        },
        //设置底图对象
        setMapObj(state, action) {
            state.mapObj = action.payload;
            return { ...state };
        },
        //设置对应的数据
        setActiveLayerObj(state, action) {
            state.activeLayerObj = action.payload;
            return { ...state };
        },
        //设置对应的追踪数据
        setTrackingLayerArr(state, action) {
            state.trackingLayerArr = action.payload;
            return { ...state };
        },
    },
};
