import React from 'react';
import styles from './styles.less';
import router from 'umi/router'


import { Tag, Button, Table, } from 'antd';


class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns,
      data: props.data,
    }
  }
  //渲染前调用
  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      columns: nextProps.columns,
      data: nextProps.data,

    })
  }

  //渲染后调用
  componentDidMount() {

  }


  onSelectChange = selectedRowKeys => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    // this.setState({ selectedRowKeys });
  };

  render() {
    const rowSelection = {
      // selectedRowKeys,
      onChange: this.onSelectChange,
    };


    return (<React.Fragment>

      <div className={styles.tableBox}>
        <Table columns={this.state.columns} dataSource={this.state.data} />
      </div>



    </React.Fragment>)
  }
}
export default Tables;
