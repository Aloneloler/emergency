/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import { Button, Input } from 'antd';
import NewMeeting from '@/assets/Videoconferencing/NewMeeting.png';
import joinMeeting from '@/assets/Videoconferencing/joinMeeting.png'
import { event } from 'jquery';
import Iframe from 'react-iframe';
function mapStateToProps({ VideoconferencingModel }) {
    return {
        VideoconferencingModel: VideoconferencingModel
    };
}
@connect(mapStateToProps)
class Meeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MeetingVal: 0,
            ejectDivVal: "",
            meetingIDVal: '',
            nickName: null,
            activeMenuItemID: null,
        }

    }

    //渲染前调用
    componentWillMount() {



    }

    //渲染后调用
    componentDidMount() {
        let nickName = localStorage.getItem("nickName")
        this.setState({
            nickName: nickName
        })
    }
    //卸载时调用
    componentWillUnmount() {

    }
    setMeetingVal = (data) => {
        this.setState({
            MeetingVal: data
        })
    }
    ejectinputOnChange = (e) => {
        this.setState({
            ejectDivVal: e.target.value
        })
    }
    ejectmeetingID = (e) => {
        this.setState({
            meetingIDVal: e.target.value
        })
    }
    closeEject = (data, url) => {
        if (data === 0) {
            this.setState({
                MeetingVal: data,
                activeMenuItemID: null
            })
        } else {
            this.setState({
                MeetingVal: data,
                activeMenuItemID: url
            })
        }

    }
    setDom = () => {
        let dom;
        let { MeetingVal, ejectDivVal, meetingIDVal, activeMenuItemID, nickName } = this.state;
        if (MeetingVal === 1) {
            dom = (<React.Fragment>
                <Iframe
                    id="myIframe"
                    allow="microphone;camera;midi;encrypted-media;"
                    url={activeMenuItemID ? activeMenuItemID : null}
                    className={styles.iframe}
                    display={activeMenuItemID ? 'block' : 'none'}
                    height="100%"
                />
                <div className={styles.close} onClick={this.closeEject.bind(this, 0)}>
                    X
                </div>
            </React.Fragment>)
        } else if (MeetingVal === 2) {
            dom = (<React.Fragment>
                <Iframe
                    id="myIframe"
                    allow="microphone;camera;midi;encrypted-media;"
                    url={activeMenuItemID ? activeMenuItemID : null}
                    className={styles.iframe}
                    display={activeMenuItemID ? 'block' : 'none'}
                    height="100%"
                />
                <div className={styles.close} onClick={this.closeEject.bind(this, 0)}>
                    X
                </div>
            </React.Fragment>)
        } else {
            dom = (<React.Fragment>
                <div className={styles.Meeting}>
                    <div className={styles.Meetinglf}>
                        <dl onClick={this.closeEject.bind(this, 2, `https://192.168.0.102/aa/?queryTypeVal=new&&name=${nickName}`)}>
                            <dt>
                                <img src={NewMeeting} />
                            </dt>
                            <dd>
                                新会议
                            </dd>
                        </dl>
                    </div>
                    <div className={styles.MeetingRt} onClick={this.closeEject.bind(this, 1, `https://192.168.0.102/aa/?queryTypeVal=add&&name=${nickName}`)}>
                        <dl>
                            <dt>
                                <img src={joinMeeting} />
                            </dt>
                            <dd>
                                加入会议
                            </dd>
                        </dl>
                    </div>
                </div>
            </React.Fragment>)
        }
        return dom
    }
    render() {

        return (<React.Fragment>
            <div className={styles.Videoconferencing}>
                {this.setDom()}
            </div>
        </React.Fragment>)
    }
}
export default Meeting;
