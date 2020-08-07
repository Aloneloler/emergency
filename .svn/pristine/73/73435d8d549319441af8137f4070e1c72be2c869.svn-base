/**
 * 文件功能: 表格
 *
 * 创建日期：2018年12月5日
 *
 * 作者: shiyu
 *
 */
import React, { PureComponent } from "react";
import styles from "./styles.less";
import PropTypes from "prop-types";

class XTable extends PureComponent {
  constructor(props) {
    super(props);
    /* this.state = {
      activeIdsState: null,
    }*/
  }

  // 判断两个对象是否相等
  isEqual = (a, b) => {
    //如果a和b本来就全等
    if (a === b) {
      //判断是否为0和-0
      return a !== 0 || 1 / a === 1 / b;
    }
    //判断是否为null和undefined
    if (a == null || b == null) {
      return a === b;
    }
    //接下来判断a和b的数据类型
    var classNameA = toString.call(a),
      classNameB = toString.call(b);
    //如果数据类型不相等，则返回false
    if (classNameA !== classNameB) {
      return false;
    }
    //如果数据类型相等，再根据不同数据类型分别判断
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        //进行字符串转换比较
        return "" + a === "" + b;
      case "[object Number]":
        //进行数字转换比较,判断是否为NaN
        if (+a !== +a) {
          return +b !== +b;
        }
        //判断是否为0或-0
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
    }
    //如果是对象类型
    if (classNameA === "[object Object]") {
      //获取a和b的属性长度
      var propsA = Object.getOwnPropertyNames(a),
        propsB = Object.getOwnPropertyNames(b);
      if (propsA.length !== propsB.length) {
        return false;
      }
      for (var i = 0; i < propsA.length; i++) {
        var propName = propsA[i];
        //如果对应属性对应值不相等，则返回false
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true;
    }
    //如果是数组类型
    if (classNameA === "[object Array]") {
      if (a.toString() === b.toString()) {
        return true;
      }
      return false;
    }
  };

  // table单选
  tableClick = value => {
    this.props.radioClick(value);
    /* this.setState({
      activeIdsState: value
    });*/
    // console.log(value, '点击测试')
  };
  // tbody方法
  tbodyFun = () => {
    // console.log(this.props.data,'this.props.data')
    if (
      this.props.data !== null &&
      this.props.data !== undefined &&
      this.props.data.length !== 0
    ) {
      return this.props.data.map((dataItem, dataIndex) => {
        // 内部判断
        // let isEqualState = this.isEqual(dataItem, this.state.activeIdsState)
        // console.log(this.state.activeIdsState, isEqualState, 'isEqualState')
        // 通过外部传值来判断
        let isEqualValue =
          this.props.activeId.indexOf(dataItem[this.props.idKey]) > -1;
        // console.log(dataItem[this.props.idKey], this.props.activeId, isEqualValue, 'isEqualValue')
        return (
          <div
            key={dataIndex + "tbodyBox"}
            style={
              Number(dataIndex + 1) % 2 === 0
                ? isEqualValue
                  ? { ...this.props.evenStyle, ...this.props.activeStyle }
                  : { ...this.props.evenStyle }
                : isEqualValue
                ? { ...this.props.oddStyle, ...this.props.activeStyle }
                : { ...this.props.oddStyle }
            }
            onClick={
              this.props.radioFlag ? () => this.tableClick(dataItem) : null
            }
            className={this.props.radioFlag ? styles.cursorPointer : ""}
          >
            {this.props.columns.map((item, index) => {
              let spanSty = {
                width: item.width ? item.width : "150px",
                height: item.height ? item.height : "40px",
                lineHeight: item.height ? item.height : "40px",
                margin: item.margin,
                textAlign: item.textAlign ? item.textAlign : "center",
                padding: item.padding ? item.padding : ""
              };
              // console.log(item.dataIndex,dataItem[item.dataIndex],'dataItem[item.dataIndex]')
              if (item.indexStatus) {
                return (
                  <span
                    className={styles.spanSty}
                    key={index + "span"}
                    style={{
                      ...spanSty,
                      ...item.style
                    }}
                  >
                    {Number(dataIndex + 1)}
                  </span>
                );
              } else {
                if (item.render) {
                  return (
                    <span
                      className={styles.spanSty}
                      key={index + "span"}
                      style={{
                        ...spanSty,
                        ...item.style
                      }}
                    >
                      {item.render &&
                        item.render(dataItem, Number(dataIndex + 1))}
                    </span>
                  );
                } else {
                  return (
                    <span
                      className={styles.spanSty}
                      key={index + "span"}
                      style={{
                        ...spanSty,
                        ...item.style
                      }}
                      title={
                        item.style && item.style.whiteSpace === "nowrap"
                          ? dataItem[item.dataIndex]
                          : ""
                      }
                    >
                      {dataItem[item.dataIndex]}
                    </span>
                  );
                }
              }
            })}
          </div>
        );
      });
    }
  };

  render() {
    let spanSty = {};
    return (
      <React.Fragment>
        <div className={styles.tableBox} style={{ ...this.props.style }}>
          <div className={styles.thead}>
            {this.props.columns.map(item => {
              // console.log(item.onclick, '-------------')
              let spanSty = {
                width: item.width ? item.width : "150px",
                height: item.height ? item.height : "40px",
                lineHeight: item.height ? item.height : "40px"
              };
              if (item.onclick !== undefined) {
                return (
                  <span
                    className={styles.spanSty}
                    key={item.title}
                    style={{
                      cursor: "pointer",
                      ...spanSty,
                      ...item.style,
                      ...this.props.theadStyle
                    }}
                    onClick={item.onclick}
                  >
                    {item.title}
                  </span>
                );
              }
              return (
                <span
                  className={styles.spanSty}
                  key={item.title}
                  style={{
                    ...spanSty,
                    ...item.style,
                    ...this.props.theadStyle
                  }}
                >
                  {item.title}
                </span>
              );
            })}
          </div>
          <div className={styles.tbody}>{this.tbodyFun()}</div>
        </div>
      </React.Fragment>
    );
  }
}

XTable.defaultProps = {
  idKey: "id",
  activeId: [],
  columns: [],
  data: [],
  theadStyle: {},
  oddStyle: {},
  evenStyle: {},
  activeStyle: {},
  style: {},
  radioFlag: false,
  radioClick: function() {}
};
XTable.propTypes = {
  idKey: PropTypes.string,
  activeId: PropTypes.array,
  columns: PropTypes.array,
  data: PropTypes.array,
  theadStyle: PropTypes.object,
  oddStyle: PropTypes.object,
  evenStyle: PropTypes.object,
  activeStyle: PropTypes.object,
  style: PropTypes.object,
  radioFlag: PropTypes.bool,
  radioClick: PropTypes.func
};
export default XTable;
