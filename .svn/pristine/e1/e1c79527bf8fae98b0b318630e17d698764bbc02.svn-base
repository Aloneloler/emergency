/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-lets */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import XYZ from 'ol/source/XYZ';
import VectorSource from 'ol/source/Vector';
import { Icon, Style, Fill, Stroke } from 'ol/style';
import { fromLonLat, transform } from 'ol/proj'
import 'ol/ol.css';
import Circle from 'ol/geom/Circle';

import dangericon from '../../../assets/GisDispatching/dangericon.png'
import team from '../../../assets/GisDispatching/team.png'
import car from '../../../assets/GisDispatching/car.png'
import wurenji from '../../../assets/GisDispatching/wurenji.png'
import video from '../../../assets/GisDispatching/video.png'
import head from '@/assets/VoiceDispatching/head.gif';
import hangUp from '@/assets/VoiceDispatching/hangUp.png';
import silence from '@/assets/VoiceDispatching/silence.png';
import volume from '@/assets/VoiceDispatching/volume.png';
import silenceOff from '@/assets/VoiceDispatching/silenceOff.png';
import volumeOff from '@/assets/VoiceDispatching/volumeOff.png';

function mapStateToProps({ GisModel }) {
    return {
        GisModel: GisModel
    };
}
@connect(mapStateToProps)
class MapOpenlayers extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.detailsInfo = true;
        this.circlePointData = null;
        this.DistanceRadius = this.props.GisModel.DistanceRadius;
        this.state = {
            DetailsShow: false,
            call: 'none',
            silence: silence,
            volume: volume,
            liOnclickVal: false,
            pointData: [
                { name: 'dangericon', coordinates: [118.211517333984375, 39.638645263788256] },
                { name: 'video', coordinates: [118.204693794250488, 39.642511816485239] },
                { name: 'video', coordinates: [118.214349746704102, 39.639636708164801] },
                { name: 'video', coordinates: [118.208212852478027, 39.634745444683674] },
                { name: 'video', coordinates: [118.20065975189209, 39.640132425023424] },
                { name: 'video', coordinates: [118.216795921325684, 39.649087764285113] },
                { name: 'video', coordinates: [118.198127746582031, 39.646477286998653] },
                { name: 'video', coordinates: [118.199672698974609, 39.654605790607668] },
                { name: 'team', coordinates: [118.227567672729492, 39.635836094207583] },
                { name: 'team', coordinates: [118.21713924407959, 39.635621270661375] },
                { name: 'team', coordinates: [118.205208778381348, 39.650128623313201] },
                { name: 'team', coordinates: [118.204457759857178, 39.651896395595138] },
                { name: 'team', coordinates: [118.200058937072754, 39.644973739527941] },
                { name: 'team', coordinates: [118.206624984741211, 39.633059861595058] },
                { name: 'team', coordinates: [118.220572471618652, 39.650112101863712] },
                { name: 'team', coordinates: [118.206238746643066, 39.655696126925854] },
                { name: 'team', coordinates: [118.210701942443848, 39.647171220958192] },
                { name: 'team', coordinates: [118.214349746704102, 39.643800619345647] },
                { name: 'car', coordinates: [118.202118873596191, 39.644098031979283] },
                { name: 'car', coordinates: [118.200531005859375, 39.634844595350998] },
                { name: 'car', coordinates: [118.211002349853516, 39.629093621725829] },
                { name: 'wurenji', coordinates: [118.215551376342773, 39.6311428740499] },
                { name: 'wurenji', coordinates: [118.221302032470703, 39.640661185756294] },
                { name: 'dangericon', coordinates: [118.22160244, 39.63180542] },
                { name: 'dangericon', coordinates: [118.18997383, 39.61206436] },
                { name: 'dangericon', coordinates: [118.18070412, 39.65695381] },
                { name: 'video', coordinates: [118.22799683, 39.62399483] },
                { name: 'video', coordinates: [118.21271896, 39.61592674] },
                { name: 'video', coordinates: [118.20027351, 39.61944580] },
                { name: 'video', coordinates: [118.18242073, 39.62820053] },
                { name: 'team', coordinates: [118.18061829, 39.63532448] },
                { name: 'team', coordinates: [118.18593979, 39.64159012] },
                { name: 'team', coordinates: [118.21168900, 39.66708183] },
                { name: 'team', coordinates: [118.18001747, 39.65008736] },
                { name: 'team', coordinates: [118.17555428, 39.64699745] },
                { name: 'team', coordinates: [118.19512367, 39.64570999] },
                { name: 'car', coordinates: [118.19684029, 39.63026047] },
                { name: 'wurenji', coordinates: [118.23082924, 39.64776993] },
                { name: 'car', coordinates: [118.24430466, 39.64553833] },
                { name: 'team', coordinates: [118.23872566, 39.63850021] },
                { name: 'car', coordinates: [118.23666573, 39.62193489] },
                { name: 'car', coordinates: [118.23194504, 39.63163376] },
                { name: 'team', coordinates: [118.23271751, 39.63738441] },
                { name: 'car', coordinates: [118.20284843, 39.61197853] },
                { name: 'wurenji', coordinates: [118.19752693, 39.66124535] },
            ],
        };
    }

    //渲染前调用
    componentWillMount() {
        this.circlePointData = this.props.GisModel.RadiusPoint
    }

    //渲染后调用
    componentDidMount() {
        this.mapInit()
        this.callback()
        this.detailsCircle()
    }
    //卸载时调用
    componentWillUnmount() {
    }

    //改变时调用
    componentWillReceiveProps(nextprops) {
        if (nextprops.GisModel.DistanceRadius !== this.DistanceRadius) {
            let that = this
            this.DistanceRadius = nextprops.GisModel.DistanceRadius;
            //根据半径进行缩放程度判断
            this.judgeRadius(this.DistanceRadius)
            this.vectorLayerDetails.getSource().refresh({ force: true })
            this.map.removeLayer(this.vectorLayerDetails)
            this.circlePointData = nextprops.GisModel.RadiusPoint
            that.detailsCircle()
            this.map.addLayer(this.vectorLayerDetails)
        }
        if (!nextprops.GisModel.DetailsShow) {
            let view = this.map.getView()
            // 设置地图等级
            view.animate({
                zoom: 14,
                center: fromLonLat([118.211517333984375, 39.638645263788256]),
                duration: 1000
            });
            this.closeLayer();
        }
    }
    //根据半径进行缩放程度判断
    judgeRadius = (data) => {
        if (data === 1000) {
            this.map.getView().animate({
                zoom: 15,
                center: fromLonLat([118.211517333984375, 39.638645263788256]),
                duration: 1000
            });
            this.setState({

            })
        } else if (data === 3000) {
            this.map.getView().animate({
                zoom: 14,
                center: fromLonLat([118.211517333984375, 39.638645263788256]),
                duration: 1000
            });
        } else if (data === 5000) {
            this.map.getView().animate({
                zoom: 13,
                center: fromLonLat([118.211517333984375, 39.638645263788256]),
                duration: 1000
            });
        }
    }

    getIconStyle = (data) => {
        let src = null;
        if (data === "dangericon") {
            src = dangericon;
        } else if (data === "team") {
            src = team
        } else if (data === "car") {
            src = car
        } else if (data === "wurenji") {
            src = wurenji
        } else if (data === "video") {
            src = video
        }
        return new Style({
            image: new Icon(({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: src,
            }))
        });
    }

    mapInit = () => {
        let that = this
        //地图图层
        let rasterLayer = new TileLayer({
            visible: true,
            preload: Infinity,
            source: new XYZ({
                url: 'http://t2.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=95bb7d5de26efd8786b9eee721fd450e'
            }),
            name: 'basemap'
        });
        let rasterLayer1 = new TileLayer({
            visible: true,
            preload: Infinity,
            source: new XYZ({
                url: 'http://t2.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=95bb7d5de26efd8786b9eee721fd450e'
            }),
            name: 'basemap1'
        });
        this.map = new Map({
            layers: [rasterLayer, rasterLayer1],
            target: 'map',
            view: new View({
                center: fromLonLat([118.211517333984375, 39.638645263788256]),
                zoom: 14
            })
        });

    }
    closeLayer = () => {
        this.detailsInfo = true
        let layersVal = this.map.getLayers();
        if (layersVal.array_.length > 2) {
            this.map.removeLayer(this.vectorLayerDetails);
            this.map.addLayer(this.vectorLayer);
        }
    }
    //详情
    detailsCircle = () => {
        let pointArr1 = []
        //点击详情圈内的点
        for (let i in this.circlePointData) {
            let iconFeature1 = new Feature({
                geometry: new Point(fromLonLat(this.circlePointData[i].coordinates)),
                "properties": { "id": 'Point' + i, 'type': this.circlePointData[i].name },
            });
            pointArr1.push(iconFeature1)
        }
        this.vectorSourceCircle = new VectorSource({
        });
        this.vectorSourceCircle.addFeatures(pointArr1);
        //添加圆形面
        //圆心
        let centerradius = new Circle(transform([118.211517333984375, 39.638645263788256], 'EPSG:4326', 'EPSG:3857'), this.DistanceRadius, 'XY')//转为EPSG:3857坐标系显示圆。半径单位为米
        let circlefeature = new Feature({
            geometry: centerradius,
            "properties": { "id": 'Circle', 'type': 'circle' },
        });
        circlefeature.setStyle(MyStyle(circlefeature));
        this.vectorSourceCircle.addFeature(circlefeature);
        //相应的圆的样式
        function MyStyle() {
            //返回一个样式
            return new Style({
                stroke: new Stroke({
                    color: 'rgba(255,0,0,0.3)',
                    width: 2
                }),
                fill: new Fill({
                    color: 'rgba(255,0,0,0.3)'
                })
            })
        }
        this.vectorLayerDetails = new VectorLayer({
            source: this.vectorSourceCircle,
            style: this.styleFunction
        });
    }

    callback = () => {
        let { DetailsShow } = this.state;
        let { pointData } = this.state
        let pointArr = []
        //初始进入地图的点
        for (let i in pointData) {
            let iconFeature = new Feature({
                geometry: new Point(fromLonLat(pointData[i].coordinates)),
                "properties": { "id": 'Point' + i, 'type': pointData[i].name },
            });
            pointArr.push(iconFeature)
        }
        let vectorSource = new VectorSource({
        });
        vectorSource.addFeatures(pointArr);

        //点图层
        let that = this;
        this.styleFunction = function (feature) {
            let type = feature.getProperties().properties.type;
            return that.getIconStyle(type);
        };
        this.vectorLayer = new VectorLayer({
            source: vectorSource,
            style: this.styleFunction
        });
        if (!DetailsShow) {
            this.setState({
                DetailsShow: true
            })
            this.map.removeLayer(that.vectorLayerDetails);
            this.map.addLayer(that.vectorLayer);
        }
        //写popup样式
        this.addOverlayStyle()
        //地图事件点机事件
        that.map.on('click', function (e) {
            //在点击时获取像素区域
            let pixel = that.map.getEventPixel(e.originalEvent);
            that.propUpShow(that.map.getFeaturesAtPixel(pixel)[0])
        })
    }

    //定义弹框样式
    addOverlayStyle = () => {
        let { dispatch } = this.props;
        let that = this;
        //添加弹出框
        //突发事件框
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        div1.style.background = 'white';
        div1.style.width = '200px';
        div1.style.minHeight = '100px';
        div1.style.maxHeight = '600px';
        div1.style.padding = '10px';
        div1.style.position = 'absolute';
        div1.style.left = '-90px';
        div1.style.top = '-180px';
        div1.style.borderRadius = '6px';
        let div2 = document.createElement("div");
        div2.style.borderRight = ' 10px solid transparent';
        div2.style.borderLeft = '10px solid transparent';
        div2.style.borderTop = '10px solid white';
        div2.style.position = 'absolute';
        div2.style.zIndex = 1;
        div2.style.marginTop = '119px';
        div2.style.marginLeft = '70px';
        let h3 = document.createElement("h3");
        h3.innerHTML = "爆炸事故";
        let p = document.createElement("p");
        p.innerHTML = "我市XX区化工厂发生厂区爆炸，无人员伤亡";
        let a = document.createElement("a")
        a.innerHTML = "查看详情"
        a.style.cursor = 'pointer'
        a.addEventListener("click", function () {
            that.vectorLayerDetails.getSource().refresh({ force: true })
            that.map.removeLayer(that.vectorLayerDetails)
            that.detailsCircle()
            that.map.addLayer(that.vectorLayerDetails)
            that.map.removeLayer(that.vectorLayer);
            that.map.removeOverlay(that.overlay);
            that.detailsInfo = false;
            that.judgeRadius(that.DistanceRadius)
            dispatch({
                type: 'GisModel/setDetailsShow',
                payload: true,
            })
        })
        div1.appendChild(div2);
        div1.appendChild(h3);
        div1.appendChild(p);
        div1.appendChild(a)
        div.appendChild(div1);
        this.overlay = new Overlay({
            //设置弹出框的容器
            element: div,
            //是否自动平移，即假如标记在屏幕边缘，弹出时自动平移地图使弹出框完全可见
            autoPan: true
        });
        //视频框
        let videoDiv = document.createElement("div");
        videoDiv.style.background = 'white';
        videoDiv.style.width = '200px';
        videoDiv.style.minHeight = '129px';
        videoDiv.style.maxHeight = '600px';
        videoDiv.style.padding = '10px';
        videoDiv.style.position = 'absolute';
        videoDiv.style.left = '-90px';
        videoDiv.style.top = '-180px';
        videoDiv.style.borderRadius = '6px';
        let videoDiv2 = document.createElement("div");
        videoDiv2.style.borderRight = ' 10px solid transparent';
        videoDiv2.style.borderLeft = '10px solid transparent';
        videoDiv2.style.borderTop = '10px solid white';
        videoDiv2.style.position = 'absolute';
        videoDiv2.style.zIndex = 1;
        videoDiv2.style.marginTop = '119px';
        videoDiv2.style.marginLeft = '70px';
        videoDiv.appendChild(videoDiv2)
        let video = document.createElement("video");
        video.src = require('@/assets/GisDispatching/videos3.mp4');
        video.style.width = '180px';
        video.style.height = '104px';
        video.autoplay = true
        video.loop = true
        video.controls = 'controls'
        videoDiv.appendChild(video)
        this.overlayVideo = new Overlay({
            element: videoDiv,
            autoPan: true
        });
        //救援队伍框
        let teamDiv = document.createElement("div");
        teamDiv.style.background = 'black';
        teamDiv.style.opacity = 0.8;
        teamDiv.style.width = '178px';
        teamDiv.style.minHeight = '80px';
        teamDiv.style.padding = '10px';
        teamDiv.style.position = 'absolute';
        teamDiv.style.left = '-90px';
        teamDiv.style.top = '-133px';
        teamDiv.style.borderRadius = '6px';
        let teamDiv2 = document.createElement("div");
        teamDiv2.style.borderRight = ' 10px solid transparent';
        teamDiv2.style.borderLeft = '10px solid transparent';
        teamDiv2.style.borderTop = '10px solid black';
        teamDiv2.style.position = 'absolute';
        teamDiv2.style.zIndex = 1;
        teamDiv2.style.marginTop = '70px';
        teamDiv2.style.marginLeft = '70px';
        let addressDiv = document.createElement("p");
        addressDiv.innerHTML = 'XXX（第XX中队）';
        addressDiv.style.lineHeight = '15px';
        addressDiv.style.position = 'absolute';
        addressDiv.style.fontSize = '14px';
        addressDiv.style.color = 'white';
        addressDiv.style.top = '15px';
        addressDiv.style.left = '40px';
        let zhuanyeduiImg = document.createElement('img');
        zhuanyeduiImg.src = require('@/assets/GisDispatching/zhuanyedui.png');
        zhuanyeduiImg.style.width = '15px';
        zhuanyeduiImg.style.position = 'absolute';
        zhuanyeduiImg.style.float = 'left';
        zhuanyeduiImg.style.top = '15px';
        zhuanyeduiImg.style.left = '15px';
        let telImg = document.createElement('img');
        telImg.src = require('@/assets/GisDispatching/call.png');
        // telImg.onClick = this.toCall.bind(this)
        telImg.style.width = '18px';
        telImg.style.height = '18px';
        telImg.style.top = '45px';
        telImg.style.left = '40px';
        telImg.style.position = 'absolute'
        telImg.style.cursor = 'pointer'
        telImg.addEventListener('click', () => this.toCall(), false);
        let videoImg = document.createElement('img');
        videoImg.src = require('@/assets/GisDispatching/shipin.png');
        videoImg.style.width = '18px';
        videoImg.style.height = '18px';
        videoImg.style.top = '45px';
        videoImg.style.left = '80px';
        videoImg.style.position = 'absolute'
        videoImg.style.cursor = 'pointer'
        videoImg.addEventListener('click', () => this.toCall(), false);
        let issueImg = document.createElement("img");
        issueImg.src = require('@/assets/GisDispatching/note.png');
        issueImg.style.width = '18px';
        issueImg.style.height = '18px';
        issueImg.style.top = '45px';
        issueImg.style.left = '120px';
        issueImg.style.position = 'absolute'
        teamDiv.appendChild(zhuanyeduiImg)
        teamDiv.appendChild(addressDiv);
        teamDiv.appendChild(telImg);
        teamDiv.appendChild(videoImg);
        teamDiv.appendChild(issueImg);
        teamDiv.appendChild(teamDiv2)
        this.overlayTeam = new Overlay({
            element: teamDiv,
            autoPan: true
        });
    }
    //增加弹框图层
    propUpShow = (feature) => {
        let that = this;
        let coodinate = null
        //coodinate存放了点击时的坐标信息
        if (feature !== undefined) {
            coodinate = feature?.values_.geometry.flatCoordinates
            if (feature.values_.properties.type === 'dangericon') {
                //设置overlay的显示位置
                that.overlay.setPosition(coodinate);
                //显示overlay
                if (that.detailsInfo) {
                    that.map.addOverlay(that.overlay);
                }
            } else if (feature.values_.properties.type === 'video' || feature.values_.properties.type === 'wurenji') {
                //设置overlay的显示位置
                that.overlayVideo.setPosition(coodinate);
                //显示overlay
                that.map.addOverlay(that.overlayVideo);
            } else if (feature.values_.properties.type === 'team') {
                //设置overlay的显示位置
                that.overlayTeam.setPosition(coodinate);
                //显示overlay
                that.map.addOverlay(that.overlayTeam);
            } else if (feature.values_.properties.type === 'circle') {
                coodinate = null
            }
        }
        if (!coodinate) {
            that.map.removeOverlay(that.overlay);
            that.map.removeOverlay(that.overlayVideo);
            that.map.removeOverlay(that.overlayTeam);
        }
    }


    silence() {
        if (this.state.silence == silence) {
            this.setState({
                silence: silenceOff
            })
        }
        if (this.state.silence == silenceOff) {
            this.setState({
                silence: silence
            })
        }
    }
    volume() {
        if (this.state.volume == volume) {
            this.setState({
                volume: volumeOff
            })
        }
        if (this.state.volume == volumeOff) {
            this.setState({
                volume: volume
            })
        }
    }

    offCall() {
        this.setState({
            call: 'none'
        })
    }
    toCall(e) {
        this.setState({
            call: 'block'
        })
    }

    render() {
        return (<React.Fragment>

            <div id="map" className={styles.mapStyle}> </div>
            <div style={{ display: this.state.call }} className={styles.callModel}>
                <div className={styles.modelTop}>
                    <img src={head} alt="" />
                </div>
                <div className={styles.modelContent}>
                    <h3>XXX（第XX中队）</h3>
                    <span>正在等待对方接听</span>
                </div>
                <div className={styles.modelControl}>
                    <div className={styles.modelControlBtn}>
                        <div className={styles.modelControlImg} onClick={this.silence.bind(this)}>
                            <img src={this.state.silence} alt="" />
                        </div>
                        <span>静音</span>
                    </div>
                    <div className={styles.modelControlBtn}>
                        <div className={styles.modelControlImg} onClick={this.volume.bind(this)}>
                            <img src={this.state.volume} alt="" />
                        </div>
                        <span>免提</span>
                    </div>

                </div>
                <div className={styles.modelFooter}>
                    <img onClick={this.offCall.bind(this)} src={hangUp} alt="" />
                    {/* <img src={Answer} alt=""/> */}
                </div>
            </div>
        </React.Fragment >)
    }
}
export default MapOpenlayers;
