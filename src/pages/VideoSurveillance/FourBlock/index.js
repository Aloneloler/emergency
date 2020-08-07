/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
function mapStateToProps({ }) {
    return {

    };
}
@connect(mapStateToProps)
class FourBlock extends React.Component {
    constructor(props) {
        super(props);
        this.player = null
        this.state = {

        }

    }

    //渲染前调用
    componentWillMount() {

    }

    //渲染后调用
    componentDidMount() {
        // this.initPlayers()
    }
    //卸载时调用
    componentWillUnmount() {
    }
    render() {
        return (<React.Fragment>
            <div className={styles.bodyDiv}>
                <iframe
                    src="https://open.ys7.com/ezopen/h5/iframe_se?url=ezopen://XQWDCX@open.ys7.com/E37805105/1.live&autoplay=0&accessToken=at.56dcn7uocz37awxzansjwrnq2h7con1h-7zoq6d56vy-1br2xio-kdo9tvrjy&templete=2"
                    width="600"
                    height="450"
                    id="ysopen"
                    allowfullscreen
                >
                </iframe>
                <iframe
                    src="https://open.ys7.com/ezopen/h5/iframe_se?url=ezopen://XQWDCX@open.ys7.com/E37805105/1.live&autoplay=0&accessToken=at.56dcn7uocz37awxzansjwrnq2h7con1h-7zoq6d56vy-1br2xio-kdo9tvrjy&templete=2"
                    width="600"
                    height="450"
                    id="ysopen"
                    allowfullscreen
                >
                </iframe>
                <iframe
                    src="https://open.ys7.com/ezopen/h5/iframe_se?url=ezopen://XQWDCX@open.ys7.com/E37805105/1.live&autoplay=0&accessToken=at.56dcn7uocz37awxzansjwrnq2h7con1h-7zoq6d56vy-1br2xio-kdo9tvrjy&templete=2"
                    width="600"
                    height="450"
                    id="ysopen"
                    allowfullscreen
                >
                </iframe>
                <iframe
                    src="https://open.ys7.com/ezopen/h5/iframe_se?url=ezopen://XQWDCX@open.ys7.com/E37805105/1.live&autoplay=0&accessToken=at.56dcn7uocz37awxzansjwrnq2h7con1h-7zoq6d56vy-1br2xio-kdo9tvrjy&templete=2"
                    width="600"
                    height="450"
                    id="ysopen"
                    allowfullscreen
                >
                </iframe>
            </div>
        </React.Fragment>)
    }
}
export default FourBlock;
