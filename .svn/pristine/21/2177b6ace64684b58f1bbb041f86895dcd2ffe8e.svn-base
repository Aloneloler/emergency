/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './styles.less';
// import router from 'umi/router';
import { Menu, Dropdown } from 'antd';
// import menuIcon from '@/assets/header/menuIcon.png';
import {
  WenBrigadeMenuData,
  ContingencyMenuData,
  NaturalResourcesMenuData,
} from '@/utils/publickPage';
const SubMenu = Menu.SubMenu;
let defaultOpenMenu = [];

function mapStateToProps({ globalModel }) {
  return { globalModel: globalModel };
}
@connect(mapStateToProps)
class Index extends PureComponent {
  getNavMenuItems = menusData => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter(item => {
        if (item.id) {
          defaultOpenMenu.push(`${item.id}`);
        }
        return item.name;
      })
      .map(item => this.getSubMenuOrItem(item))
      .filter(item => item);
  };

  /**
   * 获取菜单子节点下的children
   */
  getSubMenuOrItem = item => {
    let itmeDom = null;
    if (item.children && item.children.some(child => child.name)) {
      const { name } = item;
      itmeDom = (
        <SubMenu
          title={
            item.icon ? (
              <span>
                {item.icon}
                <span>{name}</span>
              </span>
            ) : (
              name
            )
          }
          key={item.id}
        >
          {this.getNavMenuItems(item.children)}
        </SubMenu>
      );
    } else {
      itmeDom = (
        <Menu.Item key={item.linkUrl} title={item.linkUrl}>
          {item.name}
        </Menu.Item>
      );
    }
    return itmeDom;
  };
  //导航点击事件
  handleClick = e => {
    // console.log(e.item.props.children, 'event');
    let { dispatch } = this.props;
    for (let i in WenBrigadeMenuData) {
      if (e.item.props.children == WenBrigadeMenuData[i].name) {
        dispatch({
          type: 'globalModel/setlayername',
          payload: WenBrigadeMenuData[i].data[0]?.name,
        });
      }
    }
    for (let i in ContingencyMenuData) {
      if (e.item.props.children == ContingencyMenuData[i].name) {
        dispatch({
          type: 'globalModel/setlayername',
          payload: ContingencyMenuData[i].data[0]?.name,
        });
      }
    }
    for (let i in NaturalResourcesMenuData) {
      if (e.item.props.children == NaturalResourcesMenuData[i].name) {
        dispatch({
          type: 'globalModel/setlayername',
          payload: NaturalResourcesMenuData[i].data[0]?.name,
        });
      }
    }
    dispatch({ type: 'globalModel/setMapLayerControl', payload: 1 });
    dispatch({
      type: 'globalModel/setActiveMenuItemName',
      payload: e.item.props.children,
    });
    dispatch({
      type: 'globalModel/setActiveMenuItemID',
      payload: e.key,
    });
  };
  componentDidMount() {
    let { dispatch } = this.props;
    dispatch({ type: 'globalModel/getMenuListEffects', payload: 1 });
  }

  render() {
    let { currentPage, menuList } = this.props.globalModel;
    return (
      <React.Fragment>
        <Dropdown
          className={styles.menuleft}
          trigger={['click']}
          overlay={
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={currentPage}
              className={styles.menuClass}
              style={{ width: 200, marginTop: 0 }}
              onClick={this.handleClick}
            >
              {this.getNavMenuItems(menuList)}
            </Menu>
          }
        >
          {/* <img className={styles.menuIcon} src={menuIcon} /> */}
        </Dropdown>
        ,
      </React.Fragment>
    );
  }
}

export default Index;
