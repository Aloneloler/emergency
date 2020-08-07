import React from 'react';
import styles from './styles.less';
import router from 'umi/router';
import Refresh from '@/assets/VoiceDispatching/Refresh.png';
import details from '@/assets/VoiceDispatching/details.png';
import search from '@/assets/VoiceDispatching/search.png';
import out from '@/assets/VoiceDispatching/out.png';

import { Tabs, Menu, Table } from 'antd';

const { TabPane } = Tabs;

const columns = [
  {
    title: '序号',
    dataIndex: 'num',
  },
  {
    title: '通话对象',
    dataIndex: 'name',
  },
  {
    title: '通话时间',
    dataIndex: 'time',
  },
  {
    title: '通话时长',
    dataIndex: 'duration',
  },
  {
    title: '操作',
    dataIndex: 'operation',
  },
];

const data = [
  {
    key: '1',
    num: '1',
    name: '石家庄市应急管理局',
    time: '2020-02-10 08:00:00',
    duration: '1小时3分钟',
    operation: <a>重播</a>
  },
  {
    key: '2',
    num: '2',
    name: '唐山市应急管理局',
    time: '2020-02-10 08:00:00',
    duration: '55分钟',
    operation: <a>重播</a>
  },
  {
    key: '3',
    num: '3',
    name: '保定市应急管理局',
    time: '2020-02-10 08:00:00',
    duration: '23分钟',
    operation: <a>重播</a>
  },
  {
    key: '4',
    num: '4',
    name: '邢台市应急管理局',
    time: '2020-02-10 08:00:00',
    duration: '14分钟',
    operation: <a>重播</a>
  },
];

const data1 = [
  {
    key: '1',
    num: '1',
    name: '石家庄市应急管理局',
    time: '2020-02-10 08:00:00',
    duration: '1小时3分钟',
    operation: <a>重播</a>
  },
  {
    key: '2',
    num: '2',
    name: '邢台市应急管理局',
    time: '2020-02-10 08:00:00',
    duration: '14分钟',
    operation: <a>重播</a>
  },
];
const data2 = [
  {
    key: '1',
    num: '1',
    name: '唐山市应急管理局',
    time: '2020-02-10 08:00:00',
    duration: '55分钟',
    operation: <a>重播</a>
  },
  {
    key: '2',
    num: '2',
    name: '保定市应急管理局',
    time: '2020-02-10 08:00:00',
    duration: '23分钟',
    operation: <a>重播</a>
  },
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};


class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  //渲染前调用
  componentWillMount() {

  }


  //渲染后调用
  componentDidMount() {

  }


  changeTab = e => {
    // console.log('click ', e);
  }

  options() {
    let dom = null;
    dom = (
      <div className={styles.tabTopRight}>
        <div>
          <img src={search} />搜索
                </div>
        <div>
          <img src={out} />导出
                </div>
        <div>
          <img src={Refresh} />刷新
                </div>
        <div>
          <img src={details} />查看全部
                </div>
      </div>
    )
    return dom
  }


  render() {
    const rowSelection = {
      // selectedRowKeys,
      onChange: this.onSelectChange,
    };


    return (<React.Fragment>

      <div className={styles.recordBox}>
        <Tabs onChange={this.changeTab()} tabBarExtraContent={this.options()} type="card">
          <TabPane tab="通话记录" key="1">
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              size='small'
            />
          </TabPane>
          <TabPane tab="录音记录" key="2">
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data1}
              size='small'
            />
          </TabPane>
          <TabPane tab="监听记录" key="3">
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data2}
              size='small'
            />
          </TabPane>
        </Tabs>,
                        </div>


    </React.Fragment>)
  }
}
export default Record;
