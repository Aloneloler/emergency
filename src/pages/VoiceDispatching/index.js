import React from 'react';
import styles from './styles.less';
import router from 'umi/router'


import Menus from './Component/Menu/index';
import Record from './Component/Record/index';
import Content from './Component/Content/index';
import Operation from './Component/Operation/index';

import voiceCall from '@/assets/VoiceDispatching/voiceCall.png';
import x from '@/assets/VoiceDispatching/x.png';
import user from '@/assets/VoiceDispatching/user.png';
import { Button } from 'antd';



class VoiceDispatching extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [
                { name: '001', num: '80039423', call: 'on' },
                { name: '002', num: '80039424', call: 'off' },
                { name: '003', num: '80039425', call: 'on' },
                { name: '004', num: '80039426', call: 'off' },
                { name: '005', num: '80039427', call: 'on' },
                { name: '006', num: '80039428', call: 'off' },
                { name: '007', num: '80039429', call: 'on' },
                { name: '008', num: '80039430', call: 'off' },
                { name: '009', num: '80039431', call: 'on' },
                { name: '010', num: '80039432', call: 'off' },
            ],
        }
    }
    //渲染前调用
    componentWillMount() {

    }


    //渲染后调用
    componentDidMount() {

    }

    goToPage(data) {
        // console.log('data',data);
        this.setState({
            card: data,
        })
    }

    render() {

        return (<React.Fragment>
            <div className={styles.allBox}>

                <div className={styles.rightBox}>
                    <Menus goToPage={(data) => this.goToPage(data)} />
                    <div className={styles.ContentBlock}>

                        <Content card={this.state.card} />
                        <Operation />
                        <Record />

                    </div>

                </div>

            </div>

        </React.Fragment>)
    }
}
export default VoiceDispatching;
