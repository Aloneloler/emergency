/**
 * Copyright(C) 2019,by xskj,All rights reserved
 *
 * @date 2019年06月27日
 * @author zhangshuai
 * @desc  气泡图组件
 * @params
 * width    宽度
 * height   高度
 * warpStyle 外层盒子样式设置
 * gridPadding   点间距
 * colorArr  气泡颜色数组
 * valueFont={
 *    family    值的字体
 *    size      值的字体大小
 *    color     值的字体颜色
 *    weight    值的字体粗细程度
 *    transform  值的transform设置   eg: transform:'rotate(45deg)',
 * }
 * labelFont={}  如上  标签设置
 * data   数据
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Bubble from './bubble';

// 示例接受到的数据格式
import defaultData from './defaultData.js';

export default class BubbleChart extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.drawBubble();
    // window.onresize = () => {
    //   this.drawRender();
    // };
  }

  // componentWillUnmount() {
  //   window.onresize = null;
  // }
  // 窗口大小改变重新绘制
  drawRender() {
    let { clientWidth, clientHeight } = this.refs.bubble;
    this.bubble.render(clientWidth, clientHeight);
  }

  // 渲染气泡图
  drawBubble() {
    const { data, colorArr, valueFont, labelFont, gridPadding } = this.props;
    // 获取dom元素
    let dom = this.refs.bubble;
    let obj = {
      gridPadding,
      colorArr,
      valueFont,
      labelFont,
      data: this.formatData(data),
    };
    // 实例化气泡图
    this.bubble = new Bubble(dom, obj);
  }

  // 判断新接受的data值是否发生改变
  componentWillReceiveProps(nextProps) {
    let data = this.formatData(nextProps.data);
    let colorArr = nextProps.colorArr;
    let valueFont = nextProps.valueFont;
    let labelFont = nextProps.labelFont;
    let gridPadding = nextProps.gridPadding;
    let obj = {
      data,
      colorArr,
      valueFont,
      labelFont,
      gridPadding,
    };
    this.bubble.draw(obj);
  }

  // 处理数据格式
  formatData(d) {
    let dataSource = [];
    let dataX = d.dimension;
    let leg = d.dimension.length;
    let dataY = d.metric[0];
    for (var i = 0; i < leg; i++) {
      dataSource.push({ label: dataX[i], value: dataY[i] });
    }
    return dataSource;
  }
  render() {
    const { warpStyle } = this.props;
    return (
      <div style={{ ...warpStyle, width: '100%', height: '100%' }}>
        <div ref="bubble" id="bubble" style={{ width: '100%', height: '100%' }} />
      </div>
    );
  }
}

BubbleChart.propTypes = {
  // width: PropTypes.number,
  // height: PropTypes.number,
  warpStyle: PropTypes.object,
  gridPadding: PropTypes.number,
  colorArr: PropTypes.array,
  valueFont: PropTypes.shape({
    family: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    weight: PropTypes.string,
    transform: PropTypes.string,
  }),

  labelFont: PropTypes.shape({
    family: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    weight: PropTypes.string,
    transform: PropTypes.string,
  }),
  data: PropTypes.object,
};

BubbleChart.defaultProps = {
  width: '100%',
  height: '100%',
  gridPadding: 2,
  data: defaultData,
  warpStyle: {},
};
