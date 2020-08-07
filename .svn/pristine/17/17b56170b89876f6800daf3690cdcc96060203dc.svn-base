/**
 * Copyright(C) 2019,by xskj,All rights reserved
 *
 * @date 2019年06月27日
 * @author zhangshuai
 * @desc  表格组件
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';
import classnames from 'classnames';

// columns 表头数据
// dataSource 列表数据
// width 宽度
// height 高度
// border 边框
// headerStyle 表头样式设置
// contentStyle 表格样式设置
// hoverStyle 鼠标悬浮样式设置
// align 文字居中方式
// rowHeight 行高
// whiteSpace 换行方式
// scrollBackground  滚动条颜色
// horizontalSpacing  横向间距
// verticalSpacing  竖向间距
// autoPlay   自动轮播    bool  默认：true
// interlaced  是否开启隔行变色  bool 默认 false
// oddStyle   当interlaced为true时生效  奇数行样式
// evenStyle 当interlaced为true时生效   偶数行样式
// insertIMG  是否在每行前插入图片   bool  默认 false
// imgStyle 控制表头和表格内每行插入的图片样式
// headerIMGUrl 表头图片
// contentIMGUrl 表格内每行的图片
// firstRowMaxWidth   在插入图片后，图片当前列的宽度设置

export default class DTable extends PureComponent {
  constructor(props) {
    super(props);

    this.timerMarquee = null;
    this.domMi = null;
    this.domMw = null;
    this.state = {
      theadArr: [],
      hoverIndex: '',
    };
  }

  format(x) {
    x = String(x);
    if (x.length == 0 || x == 'null' || x == 'undefined') {
      return '';
    }
    return x;
  }

  renderThead() {
    let domUl = this.refs.theadList;
    let list = domUl.querySelectorAll('.tdOne');
    let thlist = domUl.querySelectorAll('.thItem');
    let idArray = [];
    for (let i = 0; i < list.length; i++) {
      idArray.push(list[i].id);
    }
    let textList = [];
    for (let i = 0; i < thlist.length; i++) {
      textList.push(thlist[i].innerHTML);
    }

    let theadArr = [];
    for (let i = 0; i < idArray.length; i++) {
      let tempArr = [];
      // let borderRight = Number(
      //   document.getElementById(idArray[i]).style.borderRightWidth.slice(0, -2),
      // );
      let liWidth = document.getElementById(idArray[i]).getBoundingClientRect().width;
      let liHeight = document.getElementById(idArray[i]).getBoundingClientRect().height + 'px';
      let text = textList[i];
      let paddingLeft = document.getElementById(idArray[i]).style.paddingLeft;
      let paddingRight = document.getElementById(idArray[i]).style.paddingRight;
      tempArr[0] = liWidth;
      tempArr[1] = liHeight;
      tempArr[2] = text;
      tempArr[3] = paddingLeft;
      tempArr[4] = paddingRight;
      theadArr.push(tempArr);
    }
    this.setState({
      theadArr: theadArr,
    });
  }

  initMarquee = () => {
    this.stopMarquee();
    this.runMarquee();
  };

  //竖向滚动
  verticalMarquee = () => {
    this.domMw.scrollTop >= this.domMi.scrollHeight
      ? (this.domMw.scrollTop = 0)
      : this.domMw.scrollTop++;
    this.timerMarquee = requestAnimationFrame(this.verticalMarquee);
  };

  // 运动
  runMarquee = () => {
    this.stopMarquee();
    this.timerMarquee = requestAnimationFrame(this.verticalMarquee);
  };

  //暂停
  stopMarquee = () => {
    this.timerMarquee && cancelAnimationFrame(this.timerMarquee);
  };
  //  停止滚动
  stopVerticalMarquee = () => {
    if (this.props.autoPlay) {
      this.stopMarquee();
    }
  };
  // 开始滚动
  runVerticalMarquee = () => {
    if (this.props.autoPlay) {
      this.runMarquee();
    }
  };
  // 卸载
  componentWillUnmount = () => {
    window.onresize = null;
    if (this.props.autoPlay) {
      this.stopMarquee();
    }
  };

  // 鼠标移入
  mouseEnter = index => {
    // console.log(index)
    this.setState({
      hoverIndex: index,
    });
  };
  // 鼠标移出
  mouseLeave = () => {
    // console.log('===============')
    this.setState({
      hoverIndex: '',
    });
  };

  componentDidMount() {
    this.renderThead();
    if (this.props.autoPlay) {
      this.initMarquee();
    }
    window.onresize = () => {
      this.renderThead();
    };
  }

  componentWillReceiveProps(nexProps) {
    if (nexProps.autoPlay) {
      this.initMarquee();
    } else {
      this.stopMarquee();
    }
  }

  getTrStyle(key, index) {
    let { contentStyle, hoverStyle, interlaced, oddStyle, evenStyle } = this.props;
    let { hoverIndex } = this.state;

    let contentSty;
    if (interlaced) {
      let interlacedStyle;
      index % 2 == 0 ? (interlacedStyle = oddStyle) : (interlacedStyle = evenStyle);
      contentSty = {
        fontSize: interlacedStyle.fontSize ? interlacedStyle.fontSize : 12,
        background: interlacedStyle.background ? interlacedStyle.background : 'transparent',
        color: interlacedStyle.color ? interlacedStyle.color : '#383838',
      };
      return hoverIndex == key + index
        ? { ...contentSty, ...interlacedStyle, ...hoverStyle }
        : { ...contentSty, ...interlacedStyle };
    } else {
      contentSty = {
        fontSize: contentStyle.fontSize ? contentStyle.fontSize : 12,
        background: contentStyle.background ? contentStyle.background : 'transparent',
        color: contentStyle.color ? contentStyle.color : '#383838',
      };
      return hoverIndex == key + index
        ? { ...contentSty, ...contentStyle, ...hoverStyle }
        : { ...contentSty, ...contentStyle };
    }
  }

  getTdStyle(leg, trindex, tdindex) {
    let {
      contentStyle,
      verticalSpacing,
      hoverStyle,
      interlaced,
      oddStyle,
      evenStyle,
      rowHeight,
      horizontalSpacing,
      border,
    } = this.props;
    let { hoverIndex } = this.state;

    let commonStyle;
    interlaced
      ? trindex % 2 == 0
        ? (commonStyle = oddStyle)
        : (commonStyle = evenStyle)
      : (commonStyle = contentStyle);
    return {
      height: rowHeight,
      lineHeight: commonStyle.lineHeight ? commonStyle.lineHeight : rowHeight,
      borderTop: verticalSpacing,
      borderRight: leg - 1 == tdindex ? border : horizontalSpacing,
    };
  }

  renderVerticalTable() {
    let {
      width,
      height,
      columns,
      dataSource,
      border,
      headerStyle,
      contentStyle,
      align,
      rowHeight,
      whiteSpace,
      scrollBackground,
      verticalSpacing,
      horizontalSpacing,
      hoverStyle,
      insertIMG,
      autoPlay,
      firstRowMaxWidth,
      imgStyle,
      headerIMGUrl,
      contentIMGUrl,
    } = this.props;
    let colunmsArray = [];
    // 将dataIndex值放入数组，方便筛选
    columns.map(i => {
      colunmsArray.push(i.dataIndex);
    });
    return (
      <div
        ref={mw => {
          this.domMw = mw;
        }}
        className={styles.marqueeVerticalWrap}
        onMouseOver={this.stopVerticalMarquee}
        onMouseOut={this.runVerticalMarquee}
        style={{ width, height, overflow: autoPlay ? 'hidden' : 'auto' }}
      >
        <table
          style={{
            textAlign: align,
            whiteSpace,
            // borderCollapse: 'separate',
            // borderSpacing: '0px 3px',
          }}
          id="theadList"
          ref="theadList"
        >
          {/* <caption>我的标题</caption> */}
          <thead>
            <tr
              style={{
                ...contentStyle,
                display: 'none',
              }}
            >
              {insertIMG == true && (
                <th
                  style={Object.assign({}, { height: rowHeight }, headerStyle)}
                  width={firstRowMaxWidth}
                >
                  <img style={imgStyle} src={headerIMGUrl} alt="headerIMGUrl" />
                </th>
              )}
              {columns.map((i, index) => {
                return (
                  <th
                    className="thItem"
                    key={`th${index}`}
                    id={`th${i.name}`}
                    style={Object.assign({}, { height: rowHeight }, headerStyle, {
                      borderRight: columns.length - 1 == index ? border : horizontalSpacing,
                    })}
                  >
                    {i.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody
            ref={mi => {
              this.domMi = mi;
            }}
          >
            {dataSource.map((i, index) => {
              let temp = [];
              for (let x = 0; x < colunmsArray.length; x++) {
                temp.push(i[colunmsArray[x]]);
              }
              return (
                <tr
                  key={`trBgONE${index}`}
                  style={this.getTrStyle('trBgONE', index)}
                  ref={'trBgONE' + index}
                  onMouseEnter={() => this.mouseEnter(`trBgONE${index}`)}
                  onMouseLeave={() => this.mouseLeave()}
                >
                  {insertIMG && (
                    <td style={this.getTdStyle(temp.length, index, 1)} width={firstRowMaxWidth}>
                      <img style={imgStyle} src={contentIMGUrl} alt="contentIMGUrl" />
                    </td>
                  )}

                  {dataSource.length &&
                    temp.map((x, xindex) => {
                      return (
                        <td
                          key={`trBgONEtd${xindex}`}
                          className={classnames(index == 0 ? 'tdOne' : '', styles.tabletd)}
                          id={`trBgONEtd${xindex}`}
                          style={this.getTdStyle(temp.length, index, xindex)}
                        >
                          {this.format(x)}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>

          {autoPlay && (
            <tbody>
              {dataSource.map((i, index) => {
                let temp = [];
                for (let x = 0; x < colunmsArray.length; x++) {
                  temp.push(i[colunmsArray[x]]);
                }
                return (
                  <tr
                    key={`trBgTWO${index}`}
                    className={index == 0 ? 'selectTR' : ''}
                    style={this.getTrStyle('trBgTWO', index)}
                    ref={'trBgTWO' + index}
                    onMouseEnter={() => this.mouseEnter(`trBgTWO${index}`)}
                    onMouseLeave={() => this.mouseLeave()}
                  >
                    {insertIMG && (
                      <td style={this.getTdStyle(temp.length, index, 1)} width={firstRowMaxWidth}>
                        <img style={imgStyle} src={contentIMGUrl} alt="contentIMGUrl" />
                      </td>
                    )}

                    {dataSource.length &&
                      temp.map((x, xindex) => {
                        return (
                          <td
                            key={`trBgTWOtd${xindex}`}
                            className={styles.tabletd}
                            style={this.getTdStyle(temp.length, index, xindex)}
                          >
                            {this.format(x)}
                          </td>
                        );
                      })}
                  </tr>
                );
              })}
            </tbody>
          )}
          {autoPlay && (
            <tbody>
              {dataSource.map((i, index) => {
                let temp = [];
                for (let x = 0; x < colunmsArray.length; x++) {
                  temp.push(i[colunmsArray[x]]);
                }
                return (
                  <tr
                    key={`trBGTHREE${index}`}
                    style={this.getTrStyle('trBGTHREE', index)}
                    ref={'trBGTHREE' + index}
                    onMouseEnter={() => this.mouseEnter(`trBGTHREE${index}`)}
                    onMouseLeave={() => this.mouseLeave()}
                  >
                    {insertIMG && (
                      <th
                        style={Object.assign({}, { height: rowHeight }, headerStyle)}
                        width={firstRowMaxWidth}
                      >
                        <img style={imgStyle} src={contentIMGUrl} alt="contentIMGUrl" />
                      </th>
                    )}

                    {dataSource.length &&
                      temp.map((x, xindex) => {
                        return (
                          <td
                            key={`trBGTHREEtd${xindex}`}
                            className={styles.tabletd}
                            style={this.getTdStyle(temp.length, index, xindex)}
                          >
                            {this.format(x)}
                          </td>
                        );
                      })}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>

        {/* 空数据显示 */}
        {!dataSource.length && (
          <div className={styles.table_placeholder}>
            <div className={styles.empty_normal}>
              <p className={styles.empty_description}>No Data</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  render() {
    let {
      columns,
      dataSource,
      width,
      height,
      border,
      headerStyle,
      align,
      rowHeight,
      horizontalSpacing,
      insertIMG,
      firstRowMaxWidth,
      imgStyle,
      headerIMGUrl,
      headerThStyle,
    } = this.props;

    let colunmsArray = [];
    // 将dataIndex值放入数组，方便筛选
    columns.map(i => {
      colunmsArray.push(i.dataIndex);
    });
    // console.log(dataSource,columns,'dataSource=========')
    return (
      <div className={styles.Dtable_body} style={{ width, height }}>
        <div
          className={styles.theadWarp}
          style={Object.assign(
            {},
            { height: headerStyle.lineHeight ? headerStyle.lineHeight : rowHeight },
            headerStyle,
            {
              // paddingLeft: 0,
              // paddingRight: 0,
              // marginBottom:headerStyle.height ? headerStyle.height : rowHeight,
            },
          )}
        >
          {insertIMG && (
            <div
              style={{
                width: firstRowMaxWidth,
                height: '100%',
              }}
            >
              <img style={imgStyle} src={headerIMGUrl} />
            </div>
          )}

          {this.state.theadArr.length &&
            this.state.theadArr.map((i, index) => {
              return (
                <div
                  style={{
                    width: i[0],
                    height: '100%',
                    paddingLeft: i[3],
                    paddingRight: i[4],
                    borderRight:
                      this.state.theadArr.length - 1 == index ? border : horizontalSpacing,
                  }}
                  className={styles.headerThStyleWarp}
                >
                  <div
                    className={styles.headerThStyle}
                    style={{
                      textAlign:align,
                      ...headerThStyle,
                    }}
                  >
                    {i[2]}
                  </div>
                </div>
              );
            })}
        </div>

        {this.renderVerticalTable()}
      </div>
    );
  }
}

DTable.propTypes = {
  horizontalSpacing: PropTypes.string,
  verticalSpacing: PropTypes.string,
  scrollBackground: PropTypes.string,
  whiteSpace: PropTypes.string,
  rowHeight: PropTypes.string,
  align: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  dataSource: PropTypes.array,
  columns: PropTypes.array,
  headerStyle: PropTypes.shape({
    fontSize: PropTypes.number,
    color: PropTypes.string,
    background: PropTypes.string,
  }),
  contentStyle: PropTypes.shape({
    fontSize: PropTypes.number,
    color: PropTypes.string,
    background: PropTypes.string,
  }),
  hoverStyle: {
    background: PropTypes.string,
    color: PropTypes.string,
  },
  autoPlay: PropTypes.bool,
  interlaced: PropTypes.bool,
  insertIMG: PropTypes.bool,
  firstRowMaxWidth: PropTypes.string,
  headerIMGUrl: PropTypes.string,
  contentIMGUrl: PropTypes.string,
  headerThStyle: PropTypes.object,
};

DTable.defaultProps = {
  verticalSpacing: 'none',
  horizontalSpacing: 'none',
  scrollBackground: '#d6d6d6',
  whiteSpace: 'normal',
  rowHeight: '60px',
  align: 'left',
  width: '100%',
  height: '100%',
  border: 'none',
  dataSource: [],
  columns: [],
  headerStyle: {
    fontSize: 12,
    background: 'transparent',
    color: '#3B3B3B',
    padding: '8px 16px',
  },
  contentStyle: {
    fontSize: 12,
    background: 'transparent',
    color: '#383838',
    padding: '8px 16px',
  },
  hoverStyle: {
    background: '#1A8FFF ',
    color: '#fff ',
  },
  autoPlay: false,
  interlaced: false,
  insertIMG: false,
  firstRowMaxWidth: 60,
  oddStyle: {},
  evenStyle: {},
  imgStyle: {
    width: 40,
    height: 40,
  },
  headerIMGUrl: ' ',
  contentIMGUrl: ' ',
  headerThStyle: {},
};
