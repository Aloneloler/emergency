import React from 'react';
import styles from './styles.less';
import router from 'umi/router';
import monitoring from '@/assets/VoiceDispatching/monitoring.png';
import monitor from '@/assets/VoiceDispatching/monitor.png';
import user from '@/assets/VoiceDispatching/user.png';
import Refresh from '@/assets/VoiceDispatching/Refresh.png';
import onCall from '@/assets/VoiceDispatching/onCall.png';
import interrupt from '@/assets/VoiceDispatching/interrupt.png';
import deletes from '@/assets/VoiceDispatching/delete.png';
import ForcedDemolition from '@/assets/VoiceDispatching/ForcedDemolition.png';
import ForcedInsertion from '@/assets/VoiceDispatching/ForcedInsertion-suspend.png';
import ForcedRemoval from '@/assets/VoiceDispatching/ForcedRemoval-suspended.png';
import Suspended from '@/assets/VoiceDispatching/Suspended.png';
import search from '@/assets/VoiceDispatching/search.png';
import out from '@/assets/VoiceDispatching/out.png';
import x from '@/assets/VoiceDispatching/x.png';
import Lark from '@/assets/VoiceDispatching/Lark.png';
import Suspend from '@/assets/VoiceDispatching/Suspend.png';
import Answer from '@/assets/VoiceDispatching/Answer.png';
import head from '@/assets/VoiceDispatching/head.gif';
import hangUp from '@/assets/VoiceDispatching/hangUp.png';
import silence from '@/assets/VoiceDispatching/silence.png';
import volume from '@/assets/VoiceDispatching/volume.png';
import silenceOff from '@/assets/VoiceDispatching/silenceOff.png';
import volumeOff from '@/assets/VoiceDispatching/volumeOff.png';
import voiceCall from '@/assets/VoiceDispatching/voiceCall.png';

import Socket from '@/components/WebSocket/Socket';



import { Tabs, Menu, Input, Button } from 'antd';

const { SubMenu } = Menu;
const { TabPane } = Tabs;

class Content extends React.Component {
    constructor(props) {
        // console.log('111', props);
        // console.log(props.card);
        super(props);
        this.state = {
            card: props.card,
            call: 'none',
            popup: 'none',
            name: '',
            num: '',
            silence: silence,
            volume: volume,
            userName: '',
            Phone: '',
        }
        this.socket = null;
    }
    //渲染前调用
    componentWillMount() {
        this.setsocket();
    }

    setsocket = () => {
        this.socket = new Socket("wss://192.168.0.102:7071/ws/push/ok/yjzh/yjzh", "")
        this.socket.onmessage(this.processingData.bind(this));

    }
    processingData = data => {
        // console.log('data',data.msg);
        let res = JSON.parse(data.res);
        if (data.msg === '推送消息') {
            this.setState({
                popup: 'block',
                userName: res.user,
                Phone: res.Phone,
            })
        }

    }
    //渲染后调用
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            card: nextProps.card,

        })

    }


    onSelectChange = selectedRowKeys => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        // this.setState({ selectedRowKeys });
    };
    handleClick = e => {
        // console.log('click ', e);
    };
    handleClick2 = e => {
        // console.log('click ', e);
    };

    toCall(e) {
        // console.log(e);
        this.setState({
            call: 'block',
            name: e.name,
            num: e.num,
        })
    }
    offCall() {
        this.setState({
            call: 'none'
        })
    }
    silence() {
        // console.log(this.state.silence)
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

    popupOff() {
        this.setState({
            popup: 'none',
        })
    }

    popupOn() {
        let userName = this.state.userName;
        let phone = this.state.phone;
        this.setState({
            popup: 'none',
            call: 'block',
            name: userName,
            num: phone,
        })
    }

    render() {
        const rowSelection = {
            // selectedRowKeys,
            onChange: this.onSelectChange,
        };


        return (<React.Fragment>

            <div className={styles.contentBox}>
                {
                    this.state.card.map((item, index) => {
                        return <div key={index} className={styles.callCard}>
                            {
                                item.call == 'on' ?
                                    <div >
                                        <img src={x} className={styles.x} />
                                        <div className={styles.callTop}>
                                            <div className={styles.callLeft}>
                                                <img src={user} alt="" />
                                                <div className={styles.callState}>
                                                    <img src={onCall} alt="" /><span className={styles.onCall}>通话中</span>
                                                </div>
                                            </div>
                                            <div className={styles.callRight}>
                                                <div><span className={styles.userTitle}>用户：</span>{item.name}</div>
                                                <div><span className={styles.userTitle}>状态</span>：已呼通</div>
                                                <div><span className={styles.userTitle}>主叫</span>：{item.num}</div>
                                                <div><span className={styles.userTitle}>被叫</span>：80039422</div>
                                            </div>
                                        </div>
                                        <div className={styles.callFooter}>
                                            <div className={styles.callFooterLeft}>
                                                <div><img src={Lark} alt="" />强插</div>
                                                <div><img src={ForcedDemolition} alt="" />强拆</div>
                                                <div><img src={monitoring} alt="" />监听</div>
                                            </div>
                                            <div>
                                                <Button onClick={this.toCall.bind(this, item)} className={styles.callBtn} size='small' type="primary">单呼</Button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <img src={x} className={styles.x} />
                                        <div className={styles.callTop}>
                                            <div className={styles.callLeft}>
                                                <img src={user} alt="" />
                                                <div className={styles.callState}>
                                                    <img src={Suspended} alt="" /><span className={styles.Suspended}>已挂断</span>
                                                </div>
                                            </div>
                                            <div className={styles.callRight}>
                                                <div><span className={styles.userTitle}>用户：</span>{item.name}</div>
                                                <div><span className={styles.userTitle}>状态</span>：已呼通</div>
                                                <div><span className={styles.userTitle}>主叫</span>：{item.num}</div>
                                                <div><span className={styles.userTitle}>被叫</span>：80039422</div>
                                            </div>
                                        </div>
                                        <div className={styles.callFooter}>
                                            <div className={styles.callFooterLeft}>
                                                <div><img src={ForcedInsertion} alt="" />强插</div>
                                                <div><img src={ForcedRemoval} alt="" />强拆</div>
                                                <div><img src={monitor} alt="" />监听</div>
                                            </div>
                                            <div>
                                                <Button onClick={this.toCall.bind(this, item)} className={styles.callBtn} size='small' type="primary">单呼</Button>
                                            </div>
                                        </div>
                                    </div>
                            }

                        </div>




                    })
                }

                <div style={{ display: this.state.call }} className={styles.callModel}>
                    <div className={styles.modelTop}>
                        <img src={head} alt="" />
                    </div>
                    <div className={styles.modelContent}>
                        <h3>{this.state.name}</h3>
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

                <div style={{ display: this.state.popup }} className={styles.popup}>
                    <div className={styles.popupTop}>
                        <img className={styles.user} src={user} alt="" />
                        <span>{this.state.userName}邀请你语音聊天</span>
                        <img className={styles.x} src={x} alt="" />
                    </div>
                    <div className={styles.popupContent}>
                        <img src={voiceCall} alt="" />
                    </div>
                    <div className={styles.popupFooter}>
                        <Button className={styles.popupBtn} onClick={this.popupOn.bind(this)} type="primary">接听</Button>
                        <Button className={styles.closeBtn} onClick={this.popupOff.bind(this)} type="primary" danger>拒绝</Button>

                    </div>
                </div>


            </div>






        </React.Fragment>)
    }
}
export default Content;
