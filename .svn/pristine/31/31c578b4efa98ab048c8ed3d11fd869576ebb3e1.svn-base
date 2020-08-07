/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
// import AccountInformationImg from '@/assets/homePage/AccountInformationImg.png'
import router from 'umi/router';
import { Badge } from 'antd';
import OneGraphSchedulingImg from '@/assets/leftmenu/OneGraphSchedulingImg.png';
import OneGraphSchedulingIcon from '@/assets/leftmenu/OneGraphSchedulingIcon.png';
import VoiceSchedulingImg from '@/assets/leftmenu/VoiceSchedulingImg.png';
import VoiceSchedulingIcon from '@/assets/leftmenu/VoiceSchedulingIcon.png';
import VideoSchedulingImg from '@/assets/leftmenu/VideoSchedulingImg.png';
import VideoSchedulingIcon from '@/assets/leftmenu/VideoSchedulingIcon.png';
import SMSSchedulingImg from '@/assets/leftmenu/SMSSchedulingImg.png';
import SMSSchedulingIcon from '@/assets/leftmenu/SMSSchedulingIcon.png';
import FaxSchedulingImg from '@/assets/leftmenu/FaxSchedulingImg.png';
import FaxSchedulingIcon from '@/assets/leftmenu/FaxSchedulingIcon.png';
import TaskManagementImg from '@/assets/leftmenu/TaskManagementImg.png';
import TaskManagementIcon from '@/assets/leftmenu/TaskManagementIcon.png';
import logo from '@/assets/leftmenu/logo.png';

import badgeImg from '@/assets/leftmenu/badgeImg.png';
import userImg from '@/assets/leftmenu/user.png';

function mapStateToProps({ globalModel }) {
    return { globalModel: globalModel };
}
@connect(mapStateToProps)
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftmenuDataList: [
                {
                    "action": "GisDispatching",
                    'imgImg': OneGraphSchedulingImg,
                    'imgIcon': OneGraphSchedulingIcon,
                    "name": '一张图调度',
                },
                {
                    "action": "VoiceDispatching",
                    'imgImg': VoiceSchedulingImg,
                    'imgIcon': VoiceSchedulingIcon,
                    "name": '语音调度',
                },
                {
                    "action": "VideoSurveillance",
                    'imgImg': VideoSchedulingImg,
                    'imgIcon': VideoSchedulingIcon,
                    "name": '视频调度',
                },
                {
                    "action": "ShortMessage",
                    'imgImg': SMSSchedulingImg,
                    'imgIcon': SMSSchedulingIcon,
                    "name": '短信调度',
                },
                {
                    "action": "Fax",
                    'imgImg': FaxSchedulingImg,
                    'imgIcon': FaxSchedulingIcon,
                    "name": '传真调度',
                },
                {
                    "action": "TaskManagement",
                    'imgImg': TaskManagementImg,
                    'imgIcon': TaskManagementIcon,
                    "name": '任务管理',
                }

            ]
        }

    }

    //渲染前调用
    componentWillMount() {
        let url = window.location.hash;
        let urlList = url.split('/');
        let { dispatch } = this.props;
        dispatch({
            type: 'globalModel/setLeftMenuState',
            payload: urlList[2],
        });
    }

    //渲染后调用
    componentDidMount() {

    }
    //卸载时调用
    componentWillUnmount() {

    }
    setDom = () => {

    }
    liOnclick = (data) => {
        let { dispatch } = this.props;
        dispatch({
            type: 'globalModel/setLeftMenuState',
            payload: data,
        });
        router.push({
            pathname: `/cs/${data}`,
            query: {
            },
        });
    }

    render() {
        let { leftmenuDataList } = this.state;
        let action = this.props.globalModel.leftMenuState;
        console.log(action, '888888888888888')
        return (<React.Fragment>
            {this.setDom()}
            <div className={styles.header} >
                <div className={styles.logoDiv}>
                    <img src={logo} />
                    <span>
                        应急管理一体化指挥调度系统
                    </span>

                </div>
                <div className={styles.userDiv}>
                    <span>
                        <Badge count={5}>
                            <img src={badgeImg} />
                        </Badge>
                    </span>
                    <span>
                        <img src={userImg} />
                    </span>
                </div>
                <div className={styles.menuDiv}>
                    <ul>
                        {
                            leftmenuDataList.length === 0 ? null :
                                leftmenuDataList.map((item, key) => {
                                    return <li key={`leftMenu${key}`} className={action === item.action ? styles.LeftMenuDivMainUlLiAction : styles.LeftMenuDivMainUlLi} onClick={this.liOnclick.bind(this, item.action)}>
                                        <div className={styles.imgDiv}>
                                            <img src={action === item.action ? item.imgIcon : item.imgImg} alt={item.name} />
                                        </div>
                                        <div className={styles.liMainDiv}>
                                            {item.name}
                                        </div>
                                    </li>
                                })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>)
    }
}
export default Header;
