/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';

import AccountInformationImg from '@/assets/homePage/AccountInformationImg.png'
function mapStateToProps({ }) {
    return {

    };
}
@connect(mapStateToProps)
class AccountInformation extends React.Component {
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
    render() {
        return (<React.Fragment>
            <div className={styles.AccountInformation} >
                <img src={AccountInformationImg} />
                {/* <div className={styles.AccountInformationlf}>

                </div>
                <div className={styles.AccountInformationMain}>
                    {this.props.name}
                </div>
                <div className={styles.AccountInformationrt}>

                </div> */}
            </div>
        </React.Fragment>)
    }
}
export default AccountInformation;
