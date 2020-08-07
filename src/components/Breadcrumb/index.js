/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';
import breadcrumb from "../../assets/search/breadcrumb.png"

function mapStateToProps({ globalModel }) {
    return {
        globalModel: globalModel,
        menudataList: globalModel.menudataList
    };
}
@connect(mapStateToProps)
class DBreadcrumb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    val: '',
                    name: '主题',
                },
                {
                    val: '',
                    name: '',
                }
            ],
            dataList: [
                // {
                //     val: '',
                //     name: '城市运行',
                // },
                // {
                //     val: '',
                //     name: '公共安全',
                // },
                // {
                //     val: '',
                //     name: '社会服务',
                // }, {
                //     val: '',
                //     name: '经济发展',
                // }, {
                //     val: '',
                //     name: '社会稳定',
                // }, {
                //     val: '',
                //     name: '舆情监测',
                // }

            ]
        }

    }

    //渲染前调用
    componentWillMount() {

    }

    //渲染后调用
    componentDidMount() {

    }
    //卸载时调用
    componentWillUnmount() {

    }
    render() {
        let { dataList } = this.state;
        let { menudataList } = this.props;
        // console.log(this.props.menudataList, ' this.props.menudataList')
        return (<React.Fragment>
            <div className={styles.DBreadcrumb}>
                <div className={styles.DBreadcrumblf}>
                    <Breadcrumb separator={'>'}>
                        <Breadcrumb.Item>
                            <div className={styles.itemOne}>
                                <img src={breadcrumb} />
                            </div>
                        </Breadcrumb.Item>
                        {
                            menudataList.map((item, index) => {
                                return <Breadcrumb.Item key={"Breadcrumb"+index} >
                                    {item.name}
                                </Breadcrumb.Item>
                            })
                        }
                    </Breadcrumb>
                </div>
                <div className={styles.DBreadcrumbRt}>
                    {
                        dataList.map((item, index) => {
                            return <div key={index} className={styles.DBreadcrumbRtMainLi}>
                                <span></span>
                                {item.name}
                            </div>
                        })
                    }
                </div>
            </div>
        </React.Fragment>)
    }
}
export default DBreadcrumb;
