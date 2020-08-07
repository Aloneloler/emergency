/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import EZUIKit from '../../../node_modules/ezuikit/ezuikit'
import control from '../../assets/videoImg/control.png'
import enlarge from '../../assets/videoImg/enlarge.png'
import onLineVideo from '../../assets/videoImg/onLineVideo.png'
import offLineVideo from '../../assets/videoImg/offLineVideo.png'
import axios from 'axios'

import one from '../../assets/videoImg/one.png'
import one1 from '../../assets/videoImg/one1.png'
import four from '../../assets/videoImg/four.png'
import four1 from '../../assets/videoImg/four1.png'
import nine from '../../assets/videoImg/nine.png'
import nine1 from '../../assets/videoImg/nine1.png'
import search1 from '@/assets/VoiceDispatching/search1.png';
import { message, Input, Menu } from 'antd'
import Oneblock from './OneBlock/index'
import Fourblock from './FourBlock/index'
import Nineblock from './NineBlock/index'
// import EZUIKit from 'uikit-react'
const { SubMenu } = Menu;
function mapStateToProps({ }) {
    return {

    };
}
@connect(mapStateToProps)
class VideoSurveillance extends React.Component {
    constructor(props) {
        super(props);
        this.player = null
        this.state = {
            oneBlock: false,
            fourBlock: true,
            nineBlock: false
        }

    }
    // initPlayers = () => {
    //     this.player = new EZUIKit.EZUIPlayer({
    //         id: 'myPlayer',
    //         url: 'ezopen://XQWDCX@open.ys7.com/E37805105/1.hd.live',
    //         autoplay: true,
    //         accessToken: "at.7v1v5wn4d8ycv6tj1gbczjt299v6nfz9-7ef1sqdfmp-16i6oaz-dftziv69s",
    //         decoderPath: 'D:/workspace/CityHeBei/node_modules/ezuikit',
    //         width: 600,
    //         height: 400,
    //     })
    // }

    mousedownFunc = (data) => {
        axios({
            method: 'post',
            url: 'https://open.ys7.com/api/lapp/device/ptz/start',
            params: {
                accessToken: 'at.56dcn7uocz37awxzansjwrnq2h7con1h-7zoq6d56vy-1br2xio-kdo9tvrjy',
                deviceSerial: 'E37805105',
                channelNo: 1,
                direction: data,
                speed: 1
            }
        }).then(res => {
            if (res.data.msg !== '操作成功!') {
                message.warning(res.data.msg)
            }
        })
    }
    mouseupFunc = (data) => {
        axios({
            method: 'post',
            url: 'https://open.ys7.com/api/lapp/device/ptz/stop',
            params: {
                accessToken: 'at.56dcn7uocz37awxzansjwrnq2h7con1h-7zoq6d56vy-1br2xio-kdo9tvrjy',
                deviceSerial: 'E37805105',
                channelNo: 1,
                direction: data,
            }
        }).then(res => { })
    }

    blockClick = (data) => {
        if (data === 'one') {
            this.setState({
                oneBlock: true,
                fourBlock: false,
                nineBlock: false
            })
        } else if (data === 'four') {
            this.setState({
                oneBlock: false,
                fourBlock: true,
                nineBlock: false
            })
        } else {
            this.setState({
                oneBlock: false,
                fourBlock: false,
                nineBlock: true
            })
        }
    }

    BlockDiv = (data) => {
        let dom = null;
        if (data === 'one') {
            dom = (
                <React.Fragment>
                    <div className={styles.OneBlockDiv}>
                        <Oneblock />
                    </div>
                </React.Fragment>
            )
        } else if (data === 'four') {
            dom = (
                <React.Fragment>
                    <div className={styles.FourBlockDiv}>
                        <Fourblock />
                    </div>
                </React.Fragment>
            )
        } else if (data === 'nine') {
            dom = (
                <React.Fragment>
                    <div className={styles.NineBlockDiv}>
                        <Nineblock />
                    </div>
                </React.Fragment>
            )
        }
        return dom;
    }

    //渲染前调用
    componentWillMount() {

    }

    //渲染后调用
    componentDidMount() {
        // this.initPlayers()
    }
    //卸载时调用
    componentWillUnmount() {
    }
    render() {
        return (<React.Fragment>
            <div className={styles.allBox}>
                <div className={styles.rightBox}>
                    <div className={styles.menuBox}>
                        <div className={styles.search}>
                            <Input className={styles.inputSearch} placeholder="搜索" prefix={<img src={search1}></img>} />
                        </div>
                        <Menu
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <span>固定摄像头</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><img src={onLineVideo} className={styles.videoImg} /> <span>监控 1</span> <span className={styles.onLinespan}>在线</span></Menu.Item>
                                <Menu.Item key="2"><img src={offLineVideo} className={styles.videoImg} /> <span>监控 2</span> <span className={styles.offLinespan}>离线</span></Menu.Item>
                                <Menu.Item key="3"><img src={onLineVideo} className={styles.videoImg} /> <span>监控 3</span> <span className={styles.onLinespan}>在线</span></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <span>现场单兵</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="4"><img src={offLineVideo} className={styles.videoImg} /> <span>单兵 1</span> <span className={styles.offLinespan}>离线</span></Menu.Item>
                                <Menu.Item key="5"><img src={offLineVideo} className={styles.videoImg} /> <span>单兵 2</span> <span className={styles.offLinespan}>离线</span></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <span>无人机</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6"><img src={offLineVideo} className={styles.videoImg} /> <span>无人机 1</span> <span className={styles.offLinespan}>离线</span></Menu.Item>
                                <Menu.Item key="7"><img src={offLineVideo} className={styles.videoImg} /> <span>无人机 2</span> <span className={styles.offLinespan}>离线</span></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className={styles.controlDiv}>
                        <span className={styles.title}>云控制台</span>
                        <img src={control} className={styles.controlImg} />
                        <div className={styles.leftDiv} onMouseDown={this.mousedownFunc.bind(this, 2)} onMouseUp={this.mouseupFunc.bind(this, 2)} />
                        <div className={styles.rightDiv} onMouseDown={this.mousedownFunc.bind(this, 3)} onMouseUp={this.mouseupFunc.bind(this, 3)} />
                        <div className={styles.topDiv} onMouseDown={this.mousedownFunc.bind(this, 0)} onMouseUp={this.mouseupFunc.bind(this, 0)} />
                        <div className={styles.bottomDiv} onMouseDown={this.mousedownFunc.bind(this, 1)} onMouseUp={this.mouseupFunc.bind(this, 1)} />
                        <span className={styles.title1}>光圈</span>
                        <img src={enlarge} className={styles.enlargeImg} />
                        <div className={styles.plus} onMouseDown={this.mousedownFunc.bind(this, 8)} onMouseUp={this.mouseupFunc.bind(this, 8)} />
                        <div className={styles.reduce} onMouseDown={this.mousedownFunc.bind(this, 9)} onMouseUp={this.mouseupFunc.bind(this, 9)} />
                    </div>

                    <div className={styles.ContentBlock}>
                        <div className={styles.blockDiv}>
                            <img src={this.state.oneBlock ? one1 : one} className={styles.one} onClick={this.blockClick.bind(this, 'one')} />
                            <img src={this.state.fourBlock ? four1 : four} className={styles.four} onClick={this.blockClick.bind(this, 'four')} />
                            <img src={this.state.nineBlock ? nine1 : nine} className={styles.nine} onClick={this.blockClick.bind(this, 'nine')} />
                        </div>
                        <div className={styles.videoBlockDiv}>
                            {this.BlockDiv(this.state.oneBlock ? 'one' : this.state.fourBlock ? 'four' : 'nine')}
                        </div>
                        {/* <div className={styles.videoDivStyle0} id='myPlayer0'>
                            {this.videoIframe()}
                        </div>
                        <div className={styles.videoDivStyle1} id='myPlayer1'>
                            {this.videoIframe()}
                        </div>
                        <div className={styles.videoDivStyle2} id='myPlayer2'>
                            {this.videoIframe()}
                        </div>
                        <div className={styles.videoDivStyle3} id='myPlayer3'>
                            {this.videoIframe()}
                        </div> */}
                    </div>
                </div>
            </div>

        </React.Fragment>)
    }
}
export default VideoSurveillance;
