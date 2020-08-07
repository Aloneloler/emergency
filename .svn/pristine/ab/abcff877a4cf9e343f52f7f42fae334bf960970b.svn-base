/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-constructor */

import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
// import Menu from '../Menu';
import moment from 'moment';
import Emergencies from '../Emergencies';

const getQueryString = function getQueryVariable(variable) {
  var query = window.location.href.split('?')[1];
  if (!query) {
    return false;
  }
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
};
function mapStateToProps({ globalModel }) {
  return { globalModel: globalModel };
}
@connect(mapStateToProps)
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: moment().format('YYYY/MM/DD  HH:mm:ss') };
  }
  componentDidMount() {
    let href = getQueryString('goback');
    this.setState({ goback: Boolean(href) });
    setInterval(() => {
      let time = moment().format('YYYY/MM/DD  HH:mm:ss');
      this.setState({ time: time });
    }, 1000);
  }

  render() {
    let { activeMenuItemName, modelID } = this.props.globalModel;
    let { time, goback } = this.state;
    return (
      <div className={styles.normal}>
        <h2 className={styles.modelTitle}>{activeMenuItemName}</h2>
        <div className={styles.timeCenter}>
          <span className={styles.time}>{time}</span>
          <Emergencies />
        </div>
      </div>
    );
  }
}

export default Home;
