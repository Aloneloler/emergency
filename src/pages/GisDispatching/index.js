/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-lets */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import { Tag, Button, Menu, Input } from 'antd'
import MapOpenlayers from './Map/MapOpenlayers'

import legend from '../../assets/GisDispatching/legend.png'
import search1 from '@/assets/VoiceDispatching/search1.png';
import dingwei from '../../assets/GisDispatching/dingwei.png'
import renyuan from '../../assets/GisDispatching/renyuan.png'
import dianhua from '../../assets/GisDispatching/dianhua.png'
import call from '../../assets/GisDispatching/call.png'
import shipin from '../../assets/GisDispatching/shipin.png'
import note from '../../assets/GisDispatching/note.png'
import happen from '../../assets/GisDispatching/happen.png'

const { SubMenu } = Menu;
function mapStateToProps({ GisModel }) {
    return {
        GisModel: GisModel
    };
}
@connect(mapStateToProps)
class GisDispatching extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            DetailsShow: false,
            DataList: [
                {
                    time: '2020年6月10日',
                    address: '唐山市XX区',
                    name: '自然灾害：XXX地区发生森林火险',
                    type: '特大',
                }, {
                    time: '2020年6月11日',
                    address: '唐山市XX区',
                    name: '地质灾害：XXX地区发生山体滑坡',
                    type: '重大',
                }, {
                    time: '2020年6月12日',
                    address: '唐山市XX区',
                    name: '事故灾难：XXX化工厂发生爆炸',
                    type: '重大',
                }, {
                    time: '2020年6月13日',
                    address: '唐山市XX区',
                    name: '城市内涝：XXX区发生内涝',
                    type: '特大',
                }
            ],
            showLayer: true,
            selected1: true,
            selected2: false,
            selected3: false,
            points: [
                { name: 'dangericon', coordinates: [118.211517333984375, 39.638645263788256] },
                { name: 'team', coordinates: [118.214349746704102, 39.643800619345647] },
                { name: 'video', coordinates: [118.214349746704102, 39.639636708164801] },
                { name: 'team', coordinates: [118.21713924407959, 39.635621270661375] },
                { name: 'video', coordinates: [118.208212852478027, 39.634745444683674] },
                { name: 'team', coordinates: [118.206624984741211, 39.633059861595058] },
            ],
            points1: [
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
            ],
            points2: [
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
            ]
        };
    }

    //渲染前调用
    componentWillMount() {
        this.props.dispatch({
            type: 'GisModel/setDetailsShow',
            payload: false,
        })
        //进入页面先走一次默认半径1千米的查询
        this.props.dispatch({
            type: 'GisModel/seRadiusPoint',
            payload: this.state.points,
        })
    }

    //渲染后调用
    componentDidMount() {
    }
    //卸载时调用
    componentWillUnmount() {
        this.props.dispatch({
            type: 'GisModel/setDetailsShow',
            payload: false,
        })
    }
    //改变时调用
    componentWillReceiveProps(nextprops) {
        this.setState({
            DetailsShow: nextprops.GisModel.DetailsShow
        })
    }

    gobackClick = () => {
        this.props.dispatch({
            type: 'GisModel/setDetailsShow',
            payload: false,
        })
        this.setState({
            DetailsShow: false
        })
    }

    onclickSelect = (data) => {
        this.setState({
            selected1: false,
            selected2: false,
            selected3: false,
        })
        if (data === 1) {
            this.props.dispatch({
                type: 'GisModel/setDistanceRadius',
                payload: 1000,
            })
            this.props.dispatch({ type: 'GisModel/seRadiusPoint', payload: this.state.points })
            this.setState({
                selected1: true,
            })
        } else if (data === 3) {
            this.props.dispatch({
                type: 'GisModel/setDistanceRadius',
                payload: 3000,
            })
            this.props.dispatch({ type: 'GisModel/seRadiusPoint', payload: this.state.points1 })
            this.setState({
                selected2: true,
            })
        } else if (data === 5) {
            this.props.dispatch({
                type: 'GisModel/setDistanceRadius',
                payload: 5000,
            })
            this.props.dispatch({ type: 'GisModel/seRadiusPoint', payload: this.state.points2 })
            this.setState({
                selected3: true,
            })
        }
    }

    onclickSelect1 = (data) => {
        this.setState({
            selected4: false,
            selected5: false,
            selected6: false,
        })
        if (data === '部门') {
            this.setState({
                selected4: true,
            })
        } else if (data === '专家') {
            this.setState({
                selected5: true,
            })
        } else if (data === '现场') {
            this.setState({
                selected6: true,
            })
        }
    }

    setDom = (DataList) => {
        let dom = null;
        dom = DataList.map((val, key) => {
            let item = (
                <div
                    key={'menu' + key}
                    className={styles.itemStyle}

                >
                    <span style={{ marginRight: '205px', fontSize: '12px', color: '#666666' }}>{val.time}</span>
                    <span style={{ fontSize: '12px', color: '#666666' }}>{val.address}</span>
                    <div style={{ float: 'left', fontSize: '14px', marginTop: '10px' }}>{val.name}</div>
                    <div className={val.type === '特大' ? styles.typeDivRed : val.type === '重大' ? styles.typeDivOrange : null} ><span className={styles.typeSpan}>{val.type}</span></div>
                </div>
            );
            return item;
        });
        return dom;
    }

    render() {
        let { DataList } = this.state
        return (<React.Fragment>
            <div >
                <img src={legend} className={styles.legendImg} />
                {!this.state.DetailsShow ? <div className={styles.happendImg}>
                    <div className={styles.helpPower}>
                        <span style={{ fontSize: '16px' }}>事件列表</span>
                    </div>
                    {this.setDom(DataList)}
                </div> : <div className={styles.happendImg}>
                        <div className={styles.helpPower}>
                            <span style={{ fontSize: '16px' }}>事件详情</span>
                            <button className={styles.goback} onClick={this.gobackClick.bind()}>返回</button>
                        </div>
                        <div>
                            <div className={styles.titleDiv}><span className={styles.title}>事件名称：</span><span className={styles.wenzi}>XXX化工厂发生爆炸</span></div>
                            <div className={styles.titleDiv}><span className={styles.title}>事件级别：</span><span className={styles.icon}>特大</span></div>
                            <div className={styles.titleDiv}><span className={styles.title}>事件描述：</span><span className={styles.wenzi}>XXX化工厂由于违规操作引起爆炸，目前未造成人员伤亡但火势很大……</span></div>
                            <img src={happen} className={styles.fireImg} />
                        </div>
                    </div>}
                {!this.state.DetailsShow ? <div className={styles.info}>
                    <div className={styles.helpPower}>
                        <span style={{ fontSize: '16px' }}>人员信息</span>
                    </div>
                    <div className={styles.search}>
                        <Input className={styles.inputSearch} placeholder="搜索" prefix={<img src={search1}></img>} />
                    </div>
                    <div className={styles.menuStyle}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <span>分组一</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1">
                                    <img src={renyuan} className={styles.renyuanImg} />
                                    <span className={styles.nameSpan}>王志刚</span>
                                    <img src={dianhua} className={styles.littleImg} />
                                    <img src={dingwei} className={styles.littleImg} />
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <img src={renyuan} className={styles.renyuanImg} />
                                    <span className={styles.nameSpan}>杜小强</span>
                                    <img src={dianhua} className={styles.littleImg} />
                                    <img src={dingwei} className={styles.littleImg} />
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <img src={renyuan} className={styles.renyuanImg} />
                                    <span className={styles.nameSpan}>李指挥</span>
                                    <img src={dianhua} className={styles.littleImg} />
                                    <img src={dingwei} className={styles.littleImg} />
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <span>分组二</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="4">
                                    <img src={renyuan} className={styles.renyuanImg} />
                                    <span className={styles.nameSpan}>张馨予</span>
                                    <img src={dianhua} className={styles.littleImg} />
                                    <img src={dingwei} className={styles.littleImg} />
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <img src={renyuan} className={styles.renyuanImg} />
                                    <span className={styles.nameSpan}>张馨予</span>
                                    <img src={dianhua} className={styles.littleImg} />
                                    <img src={dingwei} className={styles.littleImg} />
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <img src={renyuan} className={styles.renyuanImg} />
                                    <span className={styles.nameSpan}>张馨予</span>
                                    <img src={dianhua} className={styles.littleImg} />
                                    <img src={dingwei} className={styles.littleImg} />
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <span>分组三</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="7">
                                    <img src={renyuan} className={styles.renyuanImg} />
                                    <span className={styles.nameSpan}>张馨予</span>
                                    <img src={dianhua} className={styles.littleImg} />
                                    <img src={dingwei} className={styles.littleImg} />
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <img src={renyuan} className={styles.renyuanImg} />
                                    <span className={styles.nameSpan}>张馨予</span>
                                    <img src={dianhua} className={styles.littleImg} />
                                    <img src={dingwei} className={styles.littleImg} />
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className={styles.helpPower}>
                        <Button onClick={this.onclickSelect1.bind(this, '部门')} type={this.state.selected4 ? 'primary' : ''}>部门</Button>
                        <Button onClick={this.onclickSelect1.bind(this, '专家')} type={this.state.selected5 ? 'primary' : ''}>专家</Button>
                        <Button onClick={this.onclickSelect1.bind(this, '现场')} type={this.state.selected6 ? 'primary' : ''}>现场</Button>
                    </div>
                </div> : <div className={styles.info}>
                        <div className={styles.helpPower}>
                            <span style={{ fontSize: '16px' }}>救援力量</span>
                        </div>
                        <div className={styles.helpPower}>
                            <Button onClick={this.onclickSelect.bind(this, 1)} type={this.state.selected1 ? 'primary' : ''}>1KM</Button>
                            <Button onClick={this.onclickSelect.bind(this, 3)} type={this.state.selected2 ? 'primary' : ''}>3KM</Button>
                            <Button onClick={this.onclickSelect.bind(this, 5)} type={this.state.selected3 ? 'primary' : ''}>5KM</Button>
                        </div>
                        <div className={styles.menuStyle1}>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <span>消防专业队（2）</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="1">
                                        <img src={renyuan} className={styles.renyuanImg} />
                                        <span className={styles.onLinespan}>张馨予（第1中队）</span>
                                        <img src={call} className={styles.littleImg} />
                                        <img src={shipin} className={styles.littleImg} />
                                        <img src={note} className={styles.littleImg} />
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <img src={renyuan} className={styles.renyuanImg} />
                                        <span className={styles.onLinespan}>张小刚（第2中队）</span>
                                        <img src={call} className={styles.littleImg} />
                                        <img src={shipin} className={styles.littleImg} />
                                        <img src={note} className={styles.littleImg} />
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <span>医疗专业队（3）</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="3">
                                        <img src={renyuan} className={styles.renyuanImg} />
                                        <span className={styles.onLinespan}>张馨予（第1中队）</span>
                                        <img src={call} className={styles.littleImg} />
                                        <img src={shipin} className={styles.littleImg} />
                                        <img src={note} className={styles.littleImg} />
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <img src={renyuan} className={styles.renyuanImg} />
                                        <span className={styles.onLinespan}>张馨予（第1中队）</span>
                                        <img src={call} className={styles.littleImg} />
                                        <img src={shipin} className={styles.littleImg} />
                                        <img src={note} className={styles.littleImg} />
                                    </Menu.Item>
                                    <Menu.Item key="5">
                                        <img src={renyuan} className={styles.renyuanImg} />
                                        <span className={styles.onLinespan}>张馨予（第1中队）</span>
                                        <img src={call} className={styles.littleImg} />
                                        <img src={shipin} className={styles.littleImg} />
                                        <img src={note} className={styles.littleImg} />
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <span>通信专业队（2）</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="6">
                                        <img src={renyuan} className={styles.renyuanImg} />
                                        <span className={styles.onLinespan}>张馨予（第1中队）</span>
                                        <img src={call} className={styles.littleImg} />
                                        <img src={shipin} className={styles.littleImg} />
                                        <img src={note} className={styles.littleImg} />
                                    </Menu.Item>
                                    <Menu.Item key="7">
                                        <img src={renyuan} className={styles.renyuanImg} />
                                        <span className={styles.onLinespan}>张馨予（第1中队）</span>
                                        <img src={call} className={styles.littleImg} />
                                        <img src={shipin} className={styles.littleImg} />
                                        <img src={note} className={styles.littleImg} />
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                        <div className={styles.helpPower}>
                            <Button onClick={this.onclickSelect1.bind(this, '部门')} type={this.state.selected4 ? 'primary' : ''}>部门</Button>
                            <Button onClick={this.onclickSelect1.bind(this, '专家')} type={this.state.selected5 ? 'primary' : ''}>专家</Button>
                            <Button onClick={this.onclickSelect1.bind(this, '现场')} type={this.state.selected6 ? 'primary' : ''}>现场</Button>
                        </div>
                    </div>}

            </div>
            <MapOpenlayers />
        </React.Fragment >)
    }
}
export default GisDispatching;
