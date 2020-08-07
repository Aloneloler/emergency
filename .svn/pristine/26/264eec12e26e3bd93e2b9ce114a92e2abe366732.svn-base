/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './styles.less';
import router from 'umi/router'


import { Input, Button, Modal, Select, DatePicker, Tag } from 'antd';

import Tables from './Component/table/index';
import docx from '@/assets/DocumentSharing/docx.png';
let { Option } = Select;
const { TextArea } = Input;

class RecordsManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            selectType: '救援任务',

            columns: [
                {
                    title: '会商主题',
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
                    title: '参会人员',
                    dataIndex: 'EventName',
                },
                {
                    title: '会商时间',
                    dataIndex: 'startTime',
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    render: (text, record) => (
                        <span>
                            <Button type="link">查看</Button>
                            <span style={{ color: 'red', cursor: 'pointer' }}>
                                删除
                             </span>

                        </span>
                    ),
                },
            ],
            data: [
                {
                    name: "会商记录 1",
                    EventName: '市应急管理局、市交管局、市公安局  ',
                    startTime: '2019.05.20  14:20:30',

                },
                {
                    name: "会商记录 1",
                    EventName: '应急管理局、市消防大队、市卫健委   ',
                    startTime: ' 2019.03.21  12:20:30 ',

                },
                {
                    name: "会商记录 1",
                    EventName: '市应急管理局、市交管局、市公安局 ',
                    startTime: ' 2019.01.12  08:20:20 ',

                },
                {
                    name: "会商记录 1",
                    EventName: '应急管理局、市消防大队、市卫健委  ',
                    startTime: '2019.01.15 09:30:50',

                }
            ],
        }
    }
    //渲染前调用
    componentWillMount() {

    }
    //渲染后调用
    componentDidMount() {

    }
    inputName(e) {
        // console.log(e.target.value);
        this.setState({
            taskName: e.target.value,
        })
    }

    render() {

        return (<React.Fragment>
            <div className={styles.allBox}>
                <div className={styles.inputBox}>
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


        </React.Fragment>)
    }
}
export default RecordsManagement;