/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-lets */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import 'ol/ol.css';
import $ from 'jquery'
import { Input, Button, List, message, Collapse } from 'antd'
import * as POL from './plottingol'
import Socket from '@/components/WebSocket/Socket';

import search1 from '@/assets/VoiceDispatching/search1.png';
import PlotPoint from '@/assets/CollaborativePlotting/点.png';
import ARC from '@/assets/CollaborativePlotting/弧形.png';
import CURVE from '@/assets/CollaborativePlotting/曲线.png';
import POLYLINE from '@/assets/CollaborativePlotting/折线.png';
import FREEHAND_LINE from '@/assets/CollaborativePlotting/自由线.png';
import CIRCLE from '@/assets/CollaborativePlotting/圆.png';
import ELLIPSE from '@/assets/CollaborativePlotting/椭圆.png';
import LUNE from '@/assets/CollaborativePlotting/弓形.png';
import SECTOR from '@/assets/CollaborativePlotting/扇形.png';
import CLOSED_CURVE from '@/assets/CollaborativePlotting/曲面线.png';
import POLYGON from '@/assets/CollaborativePlotting/多边形.png';
import RECTANGLE from '@/assets/CollaborativePlotting/矩形.png';
import FREEHAND_POLYGON from '@/assets/CollaborativePlotting/自由面.png';
import GATHERING_PLACE from '@/assets/CollaborativePlotting/聚集地.png';
import DOUBLE_ARROW from '@/assets/CollaborativePlotting/钳击箭头.png';
import STRAIGHT_ARROW from '@/assets/CollaborativePlotting/直箭头.png';
import FINE_ARROW from '@/assets/CollaborativePlotting/细直箭头.png';
import ASSAULT_DIRECTION from '@/assets/CollaborativePlotting/突击方向.png';
import ATTACK_ARROW from '@/assets/CollaborativePlotting/进攻方向.png';
import TAILED_ATTACK_ARROW from '@/assets/CollaborativePlotting/进攻方向（尾）.png';
import SQUAD_COMBAT from '@/assets/CollaborativePlotting/进攻方向.png';
import TAILED_SQUAD_COMBAT from '@/assets/CollaborativePlotting/进攻方向（尾）.png';
import imgStart from '@/assets/CollaborativePlotting/marker-begin.png';
import draw from '@/assets/CollaborativePlotting/draw.png'
import closeImg from '@/assets/CollaborativePlotting/close.png'

function mapStateToProps({ GisModel }) {
    return {
        GisModel: GisModel
    };
}

let ol = POL.POL().OL;
let polObj = POL.POL();
let g_op_feature = null;
let groupID, programmeId, programmeGroupId;
@connect(mapStateToProps)
class CollaborativePlotting extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.detailsInfo = true
        this.state = {
            createShow: true,
            opacityShow: true,
            menuDivShow: false,
            theFirstIn: true,
            data: [],
            SchemeIds: [],
            PlotPointData: [
                { type: 'DOUBLE_ARROW', coordinates: [[13158567.536893351, 4815341.689395384], [13159145.591919757, 4814959.504253958], [13159236.360890847, 4813750.843744199], [13159112.150719883, 4813698.293287253], [13158856.564406555, 4815150.596824671]] }
            ]
        };
    }

    //渲染前调用
    componentWillMount() {
        this.GetQueryValue('groupID')
        this.GetQueryValue('programmeId')
        this.GetQueryValue('programmeGroupId')
        sessionStorage.setItem("pointsIdlist", "");
        sessionStorage.setItem("meetingGroupID", groupID);
        sessionStorage.setItem("groupId", programmeGroupId);
        sessionStorage.setItem("SchemeId", programmeId);
        this.socket = new Socket("wss://192.168.0.102/ws/push/ok/yjzhhy/" + groupID, "")
        this.socket.onmessage(this.processingData.bind(this));
    }

    //渲染后调用
    componentDidMount() {
        this.mapInit()
        // this.queryScheme()
        if (sessionStorage.getItem("selfDraw") || sessionStorage.getItem("selfDraw") === "true") {
            this.openPlotHistory(programmeId)
        }
        this.socketPostFunc("打开方案", programmeId)
    }
    //卸载时调用
    componentWillUnmount() {
        // this.socket.onclose();
        sessionStorage.clear()
    }

    //改变时调用
    componentWillReceiveProps() {

    }

    processingData = dataSource => {
        let res = dataSource.res
        if (sessionStorage.getItem("selfDraw") || sessionStorage.getItem("selfDraw") === "true") {
        } else {
            // if (JSON.parse(data.res)?.type) {
            //     let PlotPointData = []
            //     let j = { type: JSON.parse(data.res).type, coordinates: JSON.parse(JSON.parse(data.res).point) }
            //     PlotPointData.push(j)
            //     this.callBackDraw(PlotPointData)
            // }

            let data = sessionStorage.getItem("SchemeId");
            // if (JSON.parse(res)[0]?.msg === '打开方案') {
            //     data = JSON.parse(res)[0].data;
            // }
            if (data) {
                if (JSON.parse(res)[0]?.msg === '打开方案') {
                    // this.openPlotHistory(JSON.parse(res)[0].data)
                    this.openPlotHistory(JSON.parse(data))
                }
                if (!this.state.theFirstIn) {
                    this.map.removeLayer(this.showLayer);
                    if (JSON.parse(res)[0]?.msg !== '打开方案') {
                        this.openPlotHistory(JSON.parse(data))
                    }
                }
            }

        }
    }

    mapInit = () => {
        let that = this
        // console.log('ssssssssss', ol)
        // console.log('ddddddddddds', polObj)
        // 初始化地图，底图使用openstreetmap在线地图
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
    //从url中截取groupid
    GetQueryValue = (queryName) => {
        var query = decodeURI(window.location.hash.substring(1));
        let newQuery = query.split("?")[1];
        if (newQuery !== undefined) {
            var vars = newQuery.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] === queryName && queryName === 'groupID') {
                    groupID = pair[1];
                    return pair[1];
                } else if (pair[0] === queryName && queryName === 'programmeId') {
                    programmeId = pair[1];
                    return pair[1];
                }
                else if (pair[0] === queryName && queryName === 'programmeGroupId') {
                    programmeGroupId = pair[1];
                    return pair[1];
                }
            }
        }
        return null;
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
            // console.log(new POL.POL().FeatureEvent('draw_end', this.polygonfeature),'aaaaaaaaaaaaa');

            // POL.POL().Target.prototype.dispatchEvent()
            // new polObj.FeatureOperator(this.polygonfeature, this.showLayer, 1)
            // POL.POL().PlottingLayer.prototype._onDrawEnd(event)
            // POL.POL().PlottingLayer.prototype._addFeature(this.polygonfeature, 1, this.showLayer)
            // this.featureSource.addFeature(this.polygonfeature)
        }

        this.showLayer = POL.POL().PlottingLayer.prototype._createShowLayer();
        this.showLayer.setSource(this.featureSource);
        this.map.addLayer(this.showLayer);
    }

    // 指定标绘类型，开始绘制。
    activate = (type) => {
        this.g_pol_layer.addFeature(type);
    };
    //删除按钮事件
    DelBtnClick = () => {
        let that = this
        let pointsIdlist = JSON.parse(sessionStorage.getItem("pointsIdlist"));
        let pointsId = "";
        for (let i in pointsIdlist) {
            if (pointsIdlist[i].data.toString() === g_op_feature.feature.values_.geometry.points.toString()) {
                pointsId = pointsIdlist[i].id;
                pointsIdlist.splice(i, 1);
                break
            }
        }
        $.ajax({
            type: "POST",
            url: "https://192.168.0.102/yjzh/plot/del",
            data: {
                "id": pointsId
            },
            dataType: "JSON",
            success: function (result) {
                sessionStorage.setItem("pointsIdlist", JSON.stringify(pointsIdlist));
                that.socketPostFunc("同步绘画")
            }
        })
        this.g_pol_layer.removeFeature(g_op_feature);
        g_op_feature = null;
    }
    //推送websocket
    socketPostFunc = (msg, data) => {
        let meetingGroupID = JSON.parse(sessionStorage.getItem("meetingGroupID"));
        // //判断绘画人是否添加图层标识
        // sessionStorage.setItem("selfDraw", true);
        $.ajax({
            type: "POST",
            url: "https://192.168.0.102/push/ws/send",
            dataType: "JSON",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                "msg": JSON.stringify([{ msg: msg, data: data === null || data === undefined ? '' : data }]),
                "sendToDto":
                {
                    "id": 0,
                    "kind": "",
                    "topic": "",
                    "url": ""
                },
                "type": "same_kind",
                "userInfoDto":
                {
                    "id": 0,
                    "kind": meetingGroupID,
                    "topic": "yjzhhy"
                }
            }),
            success: function (result) {

            }
        })
    }

    //标绘方法等
    activeDelBtn = () => {
        this.get('btn-delete').style.display = 'inline-block';
    }

    deactiveDelBtn = () => {
        this.get('btn-delete').style.display = 'none';
    }
    get = (domId) => {
        return document.getElementById(domId);
    }
    //查询方案
    queryScheme = () => {
        let that = this;
        let data = [];
        let SchemeIds = [];
        $.ajax({
            type: "POST",
            url: "https://192.168.0.102/yjzh/scheme/list",
            data: {
            },
            dataType: "JSON",
            success: function (result) {
                for (let i in result.res.list) {
                    data.push("方案名：" + result.res.list[i].name);
                    SchemeIds.push(result.res.list[i].id)
                    that.setState({
                        data: data,
                        SchemeIds: SchemeIds
                    })
                }
            },
            error: function () {
                message.error('接口请求失败，请与系统管理员联系！')
            }
        })
    }

    //方案列表打开时隐藏弹框
    openPlotHistory = (data) => {
        this.setState({
            theFirstIn: false
        })
        let that = this;
        let PlotPointData = []
        sessionStorage.setItem("pointsIdlist", "");
        $.ajax({
            type: "POST",
            url: "https://192.168.0.102/yjzh/scheme/getAllInfo",
            data: {
                "id": data
            },
            dataType: "JSON",
            success: function (result) {
                sessionStorage.setItem("groupId", JSON.stringify(result.res.group.id));
                sessionStorage.setItem("SchemeId", JSON.stringify(data));
                for (let i in result.res.group.plotVOS) {
                    let j = { type: result.res.group.plotVOS[i].type, coordinates: JSON.parse(result.res.group.plotVOS[i].point) }
                    PlotPointData.push(j)
                }
                that.setState({
                    opacityShow: false,
                })
                // if (data1 === 'firstOpen') {
                //     that.socketPostFunc("打开方案", data)
                // }
                that.callBackDraw(PlotPointData)
            },
            error: function () {
                message.error('接口请求失败，请与系统管理员联系！')
            }
        })
    }
    //创建新方案完成时隐藏弹框
    CompleteCreation = () => {
        let that = this;
        let name = document.getElementById("programmeName").value;
        let id;
        if (name === '') {
            message.error("请输入方案名称！");
            return;
        }
        sessionStorage.setItem("pointsIdlist", "");
        $.ajax({
            type: "POST",
            url: "https://192.168.0.102/yjzh/scheme/addOrUpdata",
            data: {
                "code": "",
                "id": 0,
                "name": name,
                "remake": "",
                "type": "",
                "userId": 0
            },
            dataType: "JSON",
            success: function (result) {
                if (result.code !== 0) {
                    message.error(result.msg);
                    return;
                }
                that.setState({
                    opacityShow: false
                })
                id = result.res
                //创建完方案后，利用生成的方案id查询分组id
                $.ajax({
                    type: "POST",
                    url: "https://192.168.0.102/yjzh/scheme/getAllInfo",
                    data: {
                        "id": id
                    },
                    dataType: "JSON",
                    success: function (result) {
                        sessionStorage.setItem("groupId", JSON.stringify(result.res.group.id));
                        sessionStorage.setItem("SchemeId", JSON.stringify(id));
                        // that.groupId = result.res.group.id 
                        that.socketPostFunc("打开方案", id)
                    }
                })
            },
            error: function () {
                message.error('接口请求失败，请与系统管理员联系！')
            }
        })
    }
    //显示创建新方案
    createShowClick = () => {
        this.setState({
            createShow: false
        })
    }
    //返回方案列表
    createShowBack = () => {
        this.setState({
            createShow: true
        })
    }
    DivShowClick = () => {
        this.setState({
            menuDivShow: !this.state.menuDivShow
        })
    }

    //创建弹框DOM节点
    PopupDom = () => {
        let { createShow, opacityShow } = this.state;
        let Dom;
        if (createShow) {
            Dom = (
                <div className={styles.info}>
                    {/* <div className={styles.helpPower}>
                        <span style={{ fontSize: '20px' }}>方案列表</span>
                    </div> */}
                    <div className={styles.search}>
                        <Input className={styles.inputSearch} placeholder="搜索" prefix={<img src={search1}></img>} />
                    </div>
                    <div className={styles.listStyle}>
                        <List
                            // bordered
                            dataSource={this.state.data}
                            renderItem={(item, index) => (
                                <List.Item>
                                    {item}<button className={styles.openButton} onClick={this.openPlotHistory.bind(this, this.state.SchemeIds[index], 'firstOpen')} >打开</button>
                                </List.Item>
                            )}
                        />
                    </div>
                    <Button type="primary" shape="round" size='large' className={styles.programmeButton} onClick={this.createShowClick.bind(this)}>新建方案</Button>
                </div>
            );
        } else {
            Dom = (
                <div className={styles.info}>
                    <img onClick={this.createShowBack.bind(this)} className={styles.gobackButton} src={closeImg} />
                    <div className={styles.helpPower}>
                        <span style={{ fontSize: '20px' }}>方案名称</span>
                    </div>
                    <div className={styles.inputDiv}>
                        <Input id="programmeName" className={styles.inputSearch1} />
                    </div>
                    <Button type="primary" shape="round" size='large' className={styles.programmeButton1} onClick={this.CompleteCreation.bind(this)}>完成</Button>
                </div>
            );
        }
        return Dom;
    };

    render() {
        let { opacityShow } = this.state;
        return (<React.Fragment>
            <div>
                <div onClick={this.DivShowClick.bind(this)} className={styles.showButton}><img src={draw} /><span>标绘</span></div>
                <div id="menu" className={styles.menuDiv} style={{ display: this.state.menuDivShow ? 'block' : 'none' }}>
                    <div>
                        <div className={styles.PlotWord}><span>点标</span></div>
                        <div className={styles.PlotButtonPointDiv}>
                            <img src={PlotPoint} onClick={this.activate.bind(this, 'MARKER')} className={styles.PlotButton} />
                        </div>
                    </div>
                    <div>
                        <span className={styles.PlotWord}>线标</span>
                        <div className={styles.PlotButtonDiv}>
                            <img src={ARC} onClick={this.activate.bind(this, 'ARC')} className={styles.PlotButton} />
                            <span className={styles.PlotSpan}>线条</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={CURVE} className={styles.PlotButton} onClick={this.activate.bind(this, 'CURVE')} />
                            <span className={styles.PlotSpan}>曲线</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={POLYLINE} className={styles.PlotButton} onClick={this.activate.bind(this, 'POLYLINE')} />
                            <span className={styles.PlotSpan}>折线</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={FREEHAND_LINE} className={styles.PlotButton} onClick={this.activate.bind(this, 'FREEHAND_LINE')} />
                            <span className={styles.PlotSpan}>自由线</span>
                        </div>
                    </div>
                    <div>
                        <span className={styles.PlotWord}>面标</span>

                        <div className={styles.PlotButtonDiv}>
                            <img src={CIRCLE} className={styles.PlotButton} onClick={this.activate.bind(this, 'CIRCLE')} />
                            <span className={styles.PlotSpan}>圆</span>
                        </div>

                        <div className={styles.PlotButtonDiv}>
                            <img src={ELLIPSE} className={styles.PlotButton} onClick={this.activate.bind(this, 'ELLIPSE')} />
                            <span className={styles.PlotSpan}>椭圆</span>
                        </div>

                        <div className={styles.PlotButtonDiv}>
                            <img src={LUNE} className={styles.PlotButton} onClick={this.activate.bind(this, 'LUNE')} />
                            <span className={styles.PlotSpan}>弓形</span>
                        </div>

                        <div className={styles.PlotButtonDiv}>
                            <img src={SECTOR} className={styles.PlotButton} onClick={this.activate.bind(this, 'SECTOR')} />
                            <span className={styles.PlotSpan}>扇形</span>
                        </div>

                        <div className={styles.PlotButtonDiv}>
                            <img src={CLOSED_CURVE} className={styles.PlotButton} onClick={this.activate.bind(this, 'CLOSED_CURVE')} />
                            <span className={styles.PlotSpan}>曲面线</span>
                        </div>

                        <div className={styles.PlotButtonDiv}>
                            <img src={POLYGON} className={styles.PlotButton} onClick={this.activate.bind(this, 'POLYGON')} />
                            <span className={styles.PlotSpan}>多边形</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={RECTANGLE} className={styles.PlotButton} onClick={this.activate.bind(this, 'RECTANGLE')} />
                            <span className={styles.PlotSpan}>矩形</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={FREEHAND_POLYGON} className={styles.PlotButton} onClick={this.activate.bind(this, 'FREEHAND_POLYGON')} />
                            <span className={styles.PlotSpan}>自由面</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={GATHERING_PLACE} className={styles.PlotButton} onClick={this.activate.bind(this, 'GATHERING_PLACE')} />
                            <span className={styles.PlotSpan}>聚集地</span>
                        </div>
                    </div>
                    <div>
                        <span className={styles.PlotWord}>箭头</span>
                        <div className={styles.PlotButtonDiv}>
                            <img src={DOUBLE_ARROW} className={styles.PlotButton} onClick={this.activate.bind(this, 'DOUBLE_ARROW')} />
                            <span className={styles.PlotSpan}>钳击</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={STRAIGHT_ARROW} className={styles.PlotButton} onClick={this.activate.bind(this, 'STRAIGHT_ARROW')} />
                            <span className={styles.PlotSpan}>直箭头</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={FINE_ARROW} className={styles.PlotButton} onClick={this.activate.bind(this, 'FINE_ARROW')} />
                            <span className={styles.PlotSpan}>细直箭头</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={ASSAULT_DIRECTION} className={styles.PlotButton} onClick={this.activate.bind(this, 'ASSAULT_DIRECTION')} />
                            <span className={styles.PlotSpan}>突击方向</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={ATTACK_ARROW} className={styles.PlotButton} onClick={this.activate.bind(this, 'ATTACK_ARROW')} />
                            <span className={styles.PlotSpan}>进攻方向</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={TAILED_ATTACK_ARROW} className={styles.PlotButton} onClick={this.activate.bind(this, 'TAILED_ATTACK_ARROW')} />
                            <span className={styles.PlotSpan}>进攻方向(尾)</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={SQUAD_COMBAT} className={styles.PlotButton} onClick={this.activate.bind(this, 'SQUAD_COMBAT')} />
                            <span className={styles.PlotSpan}>分队战斗行动</span>
                        </div>
                        <div className={styles.PlotButtonDiv}>
                            <img src={TAILED_SQUAD_COMBAT} className={styles.PlotButton} onClick={this.activate.bind(this, 'TAILED_SQUAD_COMBAT')} />
                            <span className={styles.PlotSpan}>分队战斗行动(尾)</span>
                        </div>
                    </div>
                </div>
                <div id="delete-wrapper">
                    <div id="btn-delete" className={styles.btnDelete} style={{ display: 'none' }} onClick={this.DelBtnClick.bind(this)}>删 除</div>
                </div>
                <div id="plotmap" className={styles.mapStyle}> </div>
            </div>
            {/* {opacityShow ? this.PopupDom() : null} */}
        </React.Fragment >)
    }
}
export default CollaborativePlotting;
