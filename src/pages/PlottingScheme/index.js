import React from 'react';
import styles from './styles.less';
import router from 'umi/router'
import { connect } from 'dva';

import { Input, Button, Modal, Select, DatePicker, Tag } from 'antd';

import Tables from './Component/table/index';
import { CaretDownOutlined, InboxOutlined } from '@ant-design/icons';
import docx from '@/assets/DocumentSharing/docx.png';
import ViewScheme from './ViewScheme/ViewScheme'

function mapStateToProps({ PlottingSchemeModel, globalMapModel }) {
    return {
        PlottingSchemeModel: PlottingSchemeModel,
        globalMapModel: globalMapModel,
    };
}
@connect(mapStateToProps)
class PlottingScheme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            selectType: '救援任务',

            columns: [
                {
                    title: '名称',
                    dataIndex: 'name',
                    render: (text, record) => (
                        <span>
                            <img src={docx} />
                            <span style={{ marginLeft: '10px', cursor: 'pointer' }}>
                                {text}
                            </span>

                        </span>
                    ),
                },
                {
                    title: '突发事件名称',
                    dataIndex: 'EventName',
                    render: (text, record) => (
                        <span>
                            XXX化工厂发生爆炸
                        </span>
                    ),
                },
                {
                    title: '标绘时间',
                    dataIndex: 'gmtCreate',
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    render: (text, record, index) => (
                        <span>
                            <Button type="link" onClick={this.ViewScheme.bind(this, record)}>查看</Button>
                            <span  style={{ color: 'red', cursor: 'pointer' }}>
                                删除
                             </span>

                        </span>
                    ),
                },
            ],
            data: [

            ],
        }
    }
    //渲染前调用
    componentWillMount() {
        let { dispatch } = this.props;
        dispatch({
            type: 'PlottingSchemeModel/schemeList',
            payload: { params: '', callback: this.callback.bind(this) },
        });
    }
    // 切换方案标会
    ViewScheme = (data) => {
        // console.log(data, '88888888888888888')
        this.setState({
            id: data.id
        })
        let { dispatch } = this.props;
        dispatch({
            type: 'PlottingSchemeModel/setshowBidcommittee',
            payload: true,
        });
    }

    //渲染后调用
    componentDidMount() {

    }
    callback = (data) => {

        this.setState({
            data: data.list
        })
        console.log(data, '88888888888888')
    }
    inputName(e) {
        // console.log(e.target.value);
        this.setState({
            taskName: e.target.value,
        })
    }

    render() {
        let { showBidcommittee } = this.props.PlottingSchemeModel;
        let { id } = this.state;
        return (<React.Fragment>

            {
                showBidcommittee ? <ViewScheme valId={id} /> : <div className={styles.allBox}> <div className={styles.inputBox}>
                    <div>
                        <Input placeholder="搜索" />
                    </div>
                    {/* <div>
                        任务类型: <Input placeholder="请输入" />
                    </div> */}
                    <div>
                        <Button className={styles.seachBtn} type="primary">搜索</Button>
                        {/* <Button onClick={this.addTask.bind(this)} type="primary" ghost>创建任务</Button> */}
                    </div>
                </div>

                    <Tables data={this.state.data} columns={this.state.columns} />
                </div>

            }





        </React.Fragment>)
    }
}
export default PlottingScheme;