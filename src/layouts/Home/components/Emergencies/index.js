/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
// import AccountInformationImg from '@/assets/homePage/AccountInformationImg.png'
import router from 'umi/router';

function mapStateToProps({ globalModel }) {
    return { globalModel: globalModel };
}
@connect(mapStateToProps)
class Emergencies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

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

    liOnclick = (data) => {
        let { dispatch } = this.props;
        dispatch({
            type: 'globalModel/setLeftMenuState',
            payload: data,
        });
        router.push({
            pathname: `/${data}`,
            query: {
            },
        });
    }

    render() {
        return (<React.Fragment>
            {/* <div className={styles.Emergencies} onClick={this.liOnclick.bind(this, 'HomePage')}>
                南通工地突发事故！
            </div> */}
        </React.Fragment>)
    }
}
export default Emergencies;
