import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
// import { Rate } from 'antd';
function mapStateToProps({}) {
  return {};
}
@connect(mapStateToProps)
class BgDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //渲染前调用
  componentWillMount() {}

  //渲染后调用
  componentDidMount() {}
  //卸载时调用
  componentWillUnmount() {}
  render() {
    let { DataList } = this.state;
    return (
      <React.Fragment>
        <div className={styles.BgDiv}>
          <div className={styles.TitleDiv}>
            <div
              className={styles.TitleDivImg}
              style={{ display: this.props.url ? 'inline-block' : 'none' }}
            >
              <img
                src={this.props.url}
                alt={this.props.name}
                style={{ width: '27px', height: '27px' }}
              />
            </div>
            <div className={styles.TitleDivMain}>
              {this.props.name}

              <span style={{ fontSize: 14, marginLeft: 12 }}>{this.props.des}</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BgDiv;
