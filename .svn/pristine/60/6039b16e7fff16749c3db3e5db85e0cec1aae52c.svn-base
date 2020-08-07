import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import { Icon, BackTop, Input, Button, message, Select } from 'antd';
// import { daoluData } from '../../../publicpages';
import user from '@/assets/login/user.png';
import lock from '@/assets/login/lock.png';
import Log from '@/assets/login/logo.png';
import title from '@/assets/login/loginTitle.png';
import bg from '@/assets/login/bg.png';

import router from 'umi/router'

function mapStateToProps({ loginModel }) {
    return {
        loginModel: loginModel,
    };
}
@connect(mapStateToProps)
class Login extends React.Component {
    constructor(props) {
        super(props);
        // this.dimension = daoluData.dimension;
        this.state = {
            rememberMe: false,
            userName: 'admin',
            userPwd: '123456',
        }
    }
    //渲染前调用
    componentWillMount() {

    }

    changeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    changeUserPwd(e) {
        this.setState({
            userPwd: e.target.value
        });
    }
    login(e) {
        // message.success('登陆成功！');
        // this.props.history.push("/VoiceDispatching");
        let { dispatch } = this.props;
        let { userName, userPwd } = this.state;
        let params = {
            username: userName,
            password: userPwd
        }
        dispatch({ type: 'loginModel/getLoginData', payload: { params: params, callback: this.getLoginDatas.bind(this) } });

    }
    getLoginDatas = (data) => {
        // console.log('data',data)

        localStorage.setItem('nickName', data.nickName);
        localStorage.setItem('userid', data.id);
        message.success('登陆成功！');
        this.props.history.push("/Videoconferencing");
    }


    //渲染后调用
    componentDidMount() {

    }

    render() {
        let leftBG = new Image;
        let rightBG = new Image;

        // let timeObj = moment((this.stateTime + time * 60) * 1000).format('YYYY-MM-DD HH:mm:ss')
        return (<React.Fragment>

            <div className={styles.login}>
                <div className={styles.bg_layer}>
                    <img src={Log} alt="" />
                </div>

                <div className={styles.component_layer}>
                    <div className={styles.loginBox}>

                        <div className={styles.loginRightBox}>
                            <div className={styles.bangDingBox}>
                                <div className={styles.LoginTitle}>
                                    <img src={title} alt="" />
                                </div>
                                <div className={styles.inputBox}>

                                    <Input
                                        onChange={this.changeUserName.bind(this)}
                                        value={this.state.userName}
                                        prefix={<img src={user}></img>}
                                        size="large"
                                        placeholder="请输入用户名"
                                        className={styles.inputUser}
                                        onPressEnter={this.login.bind(this)}
                                    />
                                </div>

                                <div className={styles.inputBox}>

                                    <Input
                                        onChange={this.changeUserPwd.bind(this)}
                                        value={this.state.userPwd}
                                        prefix={<img src={lock}></img>}
                                        size="large"
                                        placeholder="请输入密码"
                                        className={styles.inputPassword}
                                        type="password"
                                        onPressEnter={this.login.bind(this)}
                                    />
                                </div>

                                <div className={styles.btnBox}>
                                    <Button
                                        type="primary"
                                        className={styles.loginBtn}
                                        onClick={this.login.bind(this)}
                                    >登录</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>)
    }
}
export default Login;
