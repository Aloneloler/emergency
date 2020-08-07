/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */
import React from "react";
import styles from "./styles.less";
import { connect } from "dva";
// import Menu from '../Menu';
import moment from 'moment';
import GisDispatchingImg from '@/assets/leftmenu/GisDispatchingImg.png';
import GisDispatchingIcon from '@/assets/leftmenu/GisDispatchingIcon.png';
import VoiceDispatchingIcon from '@/assets/leftmenu/VoiceDispatchingIcon.png';
import VoiceDispatchingImg from '@/assets/leftmenu/VoiceDispatchingImg.png';
import VideoconferencingIcon from '@/assets/leftmenu/VideoconferencingIcon.png';
import VideoconferencingImg from '@/assets/leftmenu/VideoconferencingImg.png';
import VideoSurveillanceIcon from '@/assets/leftmenu/VideoSurveillanceIcon.png';
import VideoSurveillanceImg from '@/assets/leftmenu/VideoSurveillanceImg.png';
import TaskManagementIcon from '@/assets/leftmenu/TaskManagementIcon.png';
import TaskManagementImg from '@/assets/leftmenu/TaskManagementImg.png';
import DocumentSharingIcon from '@/assets/leftmenu/DocumentSharingIcon.png';
import DocumentSharingImg from '@/assets/leftmenu/DocumentSharingImg.png';

import CollaborativeConsultationIcon from '@/assets/leftmenu/CollaborativeConsultationIcon.png';
import CollaborativeConsultationImg from '@/assets/leftmenu/CollaborativeConsultationImg.png';
import InstantmessagingIcon from '@/assets/leftmenu/InstantmessagingIcon.png';
import InstantmessagingImg from '@/assets/leftmenu/InstantmessagingImg.png';
import PlottingSchemeIcon from '@/assets/leftmenu/PlottingSchemeIcon.png';
import PlottingSchemeImg from '@/assets/leftmenu/PlottingSchemeImg.png';
import RecordsManagementIcon from '@/assets/leftmenu/RecordsManagementIcon.png';
import RecordsManagementImg from '@/assets/leftmenu/RecordsManagementImg.png';

import router from 'umi/router';
import { Popconfirm, message, Avatar } from 'antd';
function mapStateToProps({ globalModel }) {
    return {
        globalModel: globalModel

    };
}
@connect(mapStateToProps)
class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment().format('YYYY/MM/DD  HH:mm:ss'),
            leftmenuData: [
                {
                    "action": "GisDispatching",
                    'imgImg': GisDispatchingIcon,
                    'imgIcon': GisDispatchingImg,
                    "name": 'GIS调度',
                },
                {
                    "action": "VoiceDispatching",
                    'imgImg': VoiceDispatchingImg,
                    'imgIcon': VoiceDispatchingIcon,
                    "name": '语音调度',
                },
                {
                    "action": "Videoconferencing",
                    'imgImg': VideoconferencingImg,
                    'imgIcon': VideoconferencingIcon,
                    "name": '视频会议',
                },
                {
                    "action": "VideoSurveillance",
                    'imgImg': VideoSurveillanceImg,
                    'imgIcon': VideoSurveillanceIcon,
                    "name": '视频监控',
                }, {
                    "action": "TaskManagement",
                    'imgImg': TaskManagementImg,
                    'imgIcon': TaskManagementIcon,
                    "name": '任务管理',
                }, {
                    "action": "DocumentSharing",
                    'imgImg': DocumentSharingImg,
                    'imgIcon': DocumentSharingIcon,
                    "name": '文档共享',
                }

            ],
            leftmenuDataList: [
                // {
                //     "action": "Instantmessaging",
                //     'imgImg': InstantmessagingImg,
                //     'imgIcon': InstantmessagingIcon,
                //     "name": '即时通信',
                // },
                {
                    "action": "Videoconferencing",
                    'imgImg': CollaborativeConsultationImg,
                    'imgIcon': CollaborativeConsultationIcon,
                    "name": '协同会商',
                },
                {
                    "action": "PlottingScheme",
                    'imgImg': PlottingSchemeImg,
                    'imgIcon': PlottingSchemeIcon,
                    "name": '标绘方案',
                },
                {
                    "action": "RecordsManagement",
                    'imgImg': RecordsManagementImg,
                    'imgIcon': RecordsManagementIcon,
                    "name": '记录管理',
                },
                {
                    "action": "DocumentSharing",
                    'imgImg': DocumentSharingImg,
                    'imgIcon': DocumentSharingIcon,
                    "name": '文档共享',
                }

            ]
        }

    }
    liOnclick = (data) => {
        let { dispatch } = this.props;
        dispatch({
            type: 'globalModel/setLeftMenuState',
            payload: data,
        });
        router.push({
            pathname: `/${data}`,
            query: {
            },
        });
    }
    //渲染前调用
    componentWillMount() {
        let url = window.location.hash;
        let urlList = url.split('/');
        let { dispatch } = this.props;
        dispatch({
            type: 'globalModel/setLeftMenuState',
            payload: urlList[1],
        });
    }
    confirm(e) {
        // console.log(e);
        message.success('退出成功');
        router.push({
            pathname: `/login`,
            query: {
            },
        });
    }

    cancel(e) {
        // console.log(e);
        message.error('您点击了取消');
    }
    componentDidMount() {

    }
    render() {
        // let { activeMenuItemName } = this.props.globalModel;
        let action = this.props.globalModel.leftMenuState;
        let { leftmenuData, leftmenuDataList } = this.state;
        return (<div className={styles.LeftMenuDiv}>
            <div>
                <Popconfirm
                    placement="right"
                    title="确认退出?"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="是"
                    cancelText="否"
                >
                    <div className={styles.userDiv}>
                        <Avatar size={40} style={{ color: '#fff', backgroundColor: '#3699FF', fontSize: '12px' }}>用户</Avatar>
                    </div>

                </Popconfirm>
            </div>
            <div className={styles.LeftMenuDivMain}>
                <ul className={styles.LeftMenuDivMainUl}>

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

                    {/* <li className={action === 'VoiceDispatching' ? styles.LeftMenuDivMainUlLiAction : styles.LeftMenuDivMainUlLi} onClick={this.liOnclick.bind(this, 'VoiceDispatching')}>
                        <div className={styles.imgDiv}>
                            <img src={action === 'VoiceDispatching' ? VoiceDispatchingIcon : VoiceDispatchingImg} alt={'语音调度'} />
                        </div>
                        <div className={styles.liMainDiv}>
                            语音调度
                        </div>
                    </li>
                    <li className={action === 'Videoconferencing' ? styles.LeftMenuDivMainUlLiAction : styles.LeftMenuDivMainUlLi} onClick={this.liOnclick.bind(this, 'Videoconferencing')}>
                        <div className={styles.imgDiv}>
                            <img src={action === 'Videoconferencing' ? VideoconferencingIcon : VideoconferencingImg} alt={'视频会议'} />
                        </div>
                        <div className={styles.liMainDiv}>
                            视频会议
                        </div>
                    </li>
                    <li className={action === 'VideoSurveillance' ? styles.LeftMenuDivMainUlLiAction : styles.LeftMenuDivMainUlLi} onClick={this.liOnclick.bind(this, 'VideoSurveillance')}>
                        <div className={styles.imgDiv}>
                            <img src={action === 'VideoSurveillance' ? VideoSurveillanceIcon : VideoSurveillanceImg} alt={'视频监控'} />
                        </div>
                        <div className={styles.liMainDiv}>
                            视频监控
                        </div>
                    </li>
                    <li className={action === 'TaskManagement' ? styles.LeftMenuDivMainUlLiAction : styles.LeftMenuDivMainUlLi} onClick={this.liOnclick.bind(this, 'TaskManagement')}>
                        <div className={styles.imgDiv}>
                            <img src={action === 'TaskManagement' ? TaskManagementIcon : TaskManagementImg} alt={'任务管理'} />
                        </div>
                        <div className={styles.liMainDiv}>
                            任务管理
                        </div>
                    </li>
                    <li className={action === 'DocumentSharing' ? styles.LeftMenuDivMainUlLiAction : styles.LeftMenuDivMainUlLi} onClick={this.liOnclick.bind(this, 'DocumentSharing')}>
                        <div className={styles.imgDiv}>
                            <img src={action === 'DocumentSharing' ? DocumentSharingIcon : DocumentSharingImg} alt={'文档共享'} />
                        </div>
                        <div className={styles.liMainDiv}>
                            文档共享
                        </div>
                    </li>
                    <li className={action === 'DocumentSharing' ? styles.LeftMenuDivMainUlLiAction : styles.LeftMenuDivMainUlLi} onClick={this.liOnclick.bind(this, 'DocumentSharing')}>
                        <div className={styles.imgDiv}>
                            <img src={action === 'DocumentSharing' ? DocumentSharingIcon : DocumentSharingImg} alt={'文档共享'} />
                        </div>
                        <div className={styles.liMainDiv}>
                            即时通信
                        </div>
                    </li>
                    <li className={action === 'DocumentSharing' ? styles.LeftMenuDivMainUlLiAction : styles.LeftMenuDivMainUlLi} onClick={this.liOnclick.bind(this, 'DocumentSharing')}>
                        <div className={styles.imgDiv}>
                            <img src={action === 'DocumentSharing' ? DocumentSharingIcon : DocumentSharingImg} alt={'文档共享'} />
                        </div>
                        <div className={styles.liMainDiv}>
                            即时通信
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>);
    }
}

export default LeftMenu;
