import React, { Component } from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import { Table, Modal, Button, Icon } from 'antd';
import PropTypes from 'prop-types';
import router from 'umi/router';
export default class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };
  state = {
    infoModal: true,
    info: null,
  };
  showInfoModel(info) {
    console.log(info);
    this.setState({
      infoModal: true,
    });
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      infoModal: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      infoModal: false,
    });
  };

  render() {
    let { info } = this.props;
    return (
      <div ref="baseinfo">
        <Modal
          title="基本信息"
          visible={this.props.infoModal}
          bodyStyle={{ background: 'rgba(15,39,73,0.8)' }}
          onOk={this.handleOk}
          onCancel={this.props.hideModal}
          footer={null}
          header={null}
          width={800}
          centered
          wrapClassName={styles.content}
          getContainer={this.refs.baseinfo}
        >
          <div className={styles.warpContent}>
            <div className={styles.itemInfo}>
              <div>
                <span className={styles.itemName}>工单名称 ：</span>
                {info?.worksheet_title}
              </div>
              <div>
                <span className={styles.itemName}>创建时间 ：</span>
                {info?.create_time}
              </div>
            </div>

            <div className={styles.itemInfo}>
              <div>
                <span className={styles.itemName}>发生事项地 ：</span>
                {info?.dept_name}
              </div>
              <div>
                <span className={styles.itemName}>事件等级 ：</span>
                {info?.event_level}
              </div>
            </div>

            <div className={styles.itemInfo}>
              <div>
                <span className={styles.itemName}>执行者 ：</span>
                {info?.executor}
              </div>
              <div>
                <span className={styles.itemName}>计划时间 ：</span>
                {info?.plan_time}
              </div>
            </div>

            <div className={styles.itemInfo}>
              <div>
                <span className={styles.itemName}>来源类型 ：</span>
                {info?.source_category}
              </div>
              <div>
                <span className={styles.itemName}>事项类型 ：</span>
                {info?.type}
              </div>
            </div>

            <div className={styles.itemInfo}>
              <div>
                <span className={styles.itemName}>事项内容 ：</span>
                {info?.content}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
