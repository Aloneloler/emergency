import React from 'react';
import styles from './styles.less';
import { Menu, Input, Select, Button } from 'antd';
// import page1 from '@/assets/ShortMessage/page1.png';
// import page2 from '@/assets/ShortMessage/page2.png';
// import page3 from '@/assets/ShortMessage/page3.png';
// import page4 from '@/assets/ShortMessage/page4.png';
// import page5 from '@/assets/ShortMessage/page5.png';
// import page6 from '@/assets/ShortMessage/page6.png';

const { SubMenu } = Menu;
class Fax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                { phone: '0311-82452459', time: '2019.03.28', text: '测试传真' },
                { phone: '0311-82457645', time: '2019.03.28', text: '测试传真' },
                { phone: '0311-82452147', time: '2019.03.28', text: '测试传真' },
                { phone: '0311-82452227', time: '2019.03.28', text: '测试传真' },
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
                                <span style={{ fontSize: '16px' }}>传真调度</span>
                            }
                        >
                            <Menu.Item key="1"><span style={{ fontSize: '15px' }}>传真记录</span></Menu.Item>
                            <Menu.Item key="2"><span style={{ fontSize: '15px' }}>新建传真</span></Menu.Item>
                            <Menu.Item key="3"><span style={{ fontSize: '15px' }}>传真模板</span></Menu.Item>
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
                            <span className={styles.headSpan}>2019.02.21   10:09:10</span>
                        </div>
                        <div className={styles.bodyDiv}>
                            {/* <img src={page1} className={styles.page1}/>
                            <img src={page2} className={styles.page2}/>
                            <img src={page3} className={styles.page3}/>
                            <img src={page4} className={styles.page4}/>
                            <img src={page5} className={styles.page5}/>
                            <img src={page6} className={styles.page6}/> */}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Fax;