/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-lets */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import 'ol/ol.css';
import $ from 'jquery'
import { message } from 'antd'
import * as POL from '../../CollaborativePlotting/plottingol'
import imgStart from '@/assets/CollaborativePlotting/marker-begin.png';
import closeImg from '@/assets/CollaborativePlotting/close.png'

let ol = POL.POL().OL;
let polObj = POL.POL();
let g_op_feature = null;
function mapStateToProps({ PlottingSchemeModel, globalMapModel }) {
    return {
        PlottingSchemeModel: PlottingSchemeModel,
        globalMapModel: globalMapModel,
    };
}

@connect(mapStateToProps)
class ViewScheme extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.detailsInfo = true
        this.state = {
            programmeId: 1,
            data: [],
        };
    }

    //渲染前调用
    componentWillMount() {

        let { valId } = this.props;
        this.setState({
            programmeId: valId
        })
    }
    goback = () => {
        let { dispatch } = this.props;
        dispatch({
            type: 'PlottingSchemeModel/setshowBidcommittee',
            payload: false,
        });
    }

    //渲染后调用
    componentDidMount() {
        this.mapInit()
        this.openPlotHistory(this.state.programmeId)
    }
    //卸载时调用
    componentWillUnmount() {
        sessionStorage.clear()
    }

    //改变时调用
    componentWillReceiveProps() {

    }

    mapInit = () => {
        let that = this
        let rasterLayer = new ol.layer.Tile({
            visible: true,
            preload: Infinity,
            source: new ol.source.XYZ({
                url: 'http://t2.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=95bb7d5de26efd8786b9eee721fd450e'
            }),
            name: 'basemap'
        });
        let rasterLayer1 = new ol.layer.Tile({
            visible: true,
            preload: Infinity,
            source: new ol.source.XYZ({
                url: 'http://t2.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=95bb7d5de26efd8786b9eee721fd450e'
            }),
            name: 'basemap1'
        });
        this.map = new ol.Map({
            target: 'plotmap',
            layers: [rasterLayer, rasterLayer1],
            view: new ol.View({
                center: ol.proj.fromLonLat([118.211517333984375, 39.638645263788256]),
                zoom: 15
            })
        });

        this.g_pol_layer = new polObj.PlottingLayer(this.map);

        this.g_pol_layer.on(POL.POL().FeatureOperatorEvent.ACTIVATE, function (e) {
            g_op_feature = e.feature_operator;
            that.activeDelBtn();
        })
        this.g_pol_layer.on(POL.POL().FeatureOperatorEvent.DEACTIVATE, function (e) {
            g_op_feature = null;
            that.deactiveDelBtn();
        })
    }

    callBackDraw = async (PlotPointData) => {
        this.featureSource = new ol.source.Vector();
        for (let i in PlotPointData) {
            let stroke = new ol.style.Stroke({ color: '#FF0000', width: 2 });
            let fill = new ol.style.Fill({ color: 'rgba(0,255,0,0.4)' });
            let image = new ol.style.Icon({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: imgStart,
            })
            let polygon = polObj.PlotFactory.createPlot(PlotPointData[i].type, PlotPointData[i].coordinates);
            this.polygonfeature = new ol.Feature(polygon)
            if (polygon.type === 'MARKER') {
                this.style = new ol.style.Style({ stroke: stroke, fill: fill, image: image });
            } else {
                this.style = new ol.style.Style({ stroke: stroke, fill: fill });
            }
            this.polygonfeature.setStyle(this.style)
            this.featureSource.addFeature(this.polygonfeature)
        }

        this.showLayer = POL.POL().PlottingLayer.prototype._createShowLayer();
        this.showLayer.setSource(this.featureSource);
        this.map.addLayer(this.showLayer);
    }

    //方案列表打开时隐藏弹框
    openPlotHistory = (data) => {
        let that = this;
        let PlotPointData = []
        $.ajax({
            type: "POST",
            url: "https://192.168.0.102/yjzh/scheme/getAllInfo",
            data: {
                "id": data
            },
            dataType: "JSON",
            success: function (result) {
                for (let i in result.res.group.plotVOS) {
                    let j = { type: result.res.group.plotVOS[i].type, coordinates: JSON.parse(result.res.group.plotVOS[i].point) }
                    PlotPointData.push(j)
                }
                that.callBackDraw(PlotPointData)
            },
            error: function () {
                message.error('接口请求失败，请与系统管理员联系！')
            }
        })
    }

    render() {
        return (<React.Fragment>
            <div id="plotmap" className={styles.mapStyle}>
                <img src={closeImg} onClick={this.goback.bind(this)} className={styles.imgStyle}/>
            </div>
        </React.Fragment >)
    }
}
export default ViewScheme;
