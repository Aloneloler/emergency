import React from 'react';
import styles from './styles.less';
import { Menu, Input, Select, Button } from 'antd';
// import people from '@/assets/ShortMessage/people.png';
// import Jilu from '@/assets/ShortMessage/jilu.png';
// import Xinjian from '@/assets/ShortMessage/xinjian.png';
// import Muban from '@/assets/ShortMessage/muban.png';

const { SubMenu } = Menu;
class ShortMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                { phone: '+13778272659', time: '2019.03.28', text: '测试短信' },
                { phone: '+13663285745', time: '2019.03.28', text: '测试短信' },
                { phone: '+15599521133', time: '2019.03.28', text: '测试短信' },
                { phone: '+17022279954', time: '2019.03.28', text: '测试短信' },
            ]
        }
    }

    //渲染前调用
    componentWillMount() {

    }


    //渲染后调用
    componentDidMount() {

    }

    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <div className={styles.menuDiv}>
                <div style={{ display: 'inline-block', width: 246, 'height': '100%' }}>
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: 246, 'height': '100%' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span style={{ fontSize: '16px' }}>短信调度</span>
                            }
                        >
                            {/* <Menu.Item key="1"><span style={{ fontSize: '15px' }} icon={<Jilu />}>短信记录</span></Menu.Item> */}
                            <Menu.Item key="2"><span style={{ fontSize: '15px' }}>新建短信</span></Menu.Item>
                            <Menu.Item key="3"><span style={{ fontSize: '15px' }}>短信模板</span></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className={styles.rightDiv}>
                    <div className={styles.searchDiv}>
                        <div>
                            <Input style={{ width: 127, height: 29, marginLeft: 17, marginTop: 20, position: "relative" }} placeholder='搜索关键字' />
                            <Select style={{ width: 127, height: 29, marginLeft: 6, marginTop: 20, position: "relative" }} placeholder='选择时间段' />
                            <Button style={{ width: 59, height: 29, marginLeft: 9, marginTop: 20, position: "relative" }} type='primary'>查询</Button>
                        </div>
                        <div className={styles.listStyle}>
                            <Menu
                                onClick={this.listClick}
                                style={{ 'width': '100%', 'height': '100%' }}
                                mode="inline"
                                defaultSelectedKeys={['0']}
                            >
                                {
                                    this.state.listData.map((item, index) => {
                                        return (
                                            <Menu.Item key={index}>
                                                <p className={styles.phoneSpan}>{item.phone}</p>
                                                <p className={styles.timeSpan}>{item.time}</p>
                                                <p className={styles.textSpan}>{item.text}</p>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </Menu>
                        </div>
                    </div>
                    <div className={styles.showDiv}>
                        <div className={styles.headDiv}>
                            <span className={styles.headSpan}>+13778272659</span>
                        </div>
                        <div className={styles.bodyDiv}>
                            {/* <img src={people} /> */}
                            <span className={styles.floatNumDiv}>13778272659</span>
                            <div className={styles.floatDiv}>
                                <div className={styles.inSpanStyle}>汛期易发强降雨，山洪灾害要警惕，关注预警早撤离，窨井桥涵请注意，河道水边须远离，灾害防御切谨记！</div>
                            </div>

                        </div>
                        <div className={styles.footDiv}>
                            <span className={styles.footSpan}>输入短信内容800字以内</span>
                            <Button type='primary'>发送</Button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default ShortMessage;