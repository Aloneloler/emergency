/* eslint-disable no-useless-constructor */

import React from 'react';
import styles from './styles.less';

/**
 *插件
 *@param {DocumentTitle}
 *@param {pathToRegexp}
 *@param {classNames}
 */
// import PropTypes from "prop-types";
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import pathToRegexp from 'path-to-regexp';

/**
 * UI组件
 */
import { Helmet } from 'react-helmet';
import { ThemeContext } from '@/utils/theme/customTheme';
/**
 * 业务组件
 * @param {NotFound} 异常页面
 * @param {XBreadcrumb} 面包屑
 */

/**
 * 本地资源
 */
// import logo from "../../assets/common/favicon.png";

/**
 * 全局常量
 */

 
const projetcName = '综合应急指挥信息平台';

function mapStateToProps({}) {
  return {};
}
@connect(mapStateToProps)
class User extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  /**
   * umi 下的配置
   */
  getPageTitle = () => {
    const {
      route: { routes },
      location,
    } = this.props;
    const { pathname } = location;
    let title = projetcName;
    for (let variable in routes) {
      if (routes.hasOwnProperty(variable)) {
        if (routes[variable].path && pathToRegexp(routes[variable].path).test(pathname)) {
          title = projetcName + ` - ${routes[variable].name}`;
        }
      }
    }
    return title;
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <DocumentTitle title={this.getPageTitle()}>
          <ThemeContext.Provider>
            <div
              id="sxkj-jsnt"
              className={styles.normal}
              style={{ transform: `scale(calc(${document.body.offsetWidth} / 1920)) rotate(0deg)` }}
            >
              <div className={styles.routerView}>{children}</div>
            </div>
          </ThemeContext.Provider>
        </DocumentTitle>
      </>
    );
  }
}

export default User;
