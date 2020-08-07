/* eslint-disable no-unused-expressions */
import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import MeetingDiv from './components/MeetingDiv/idnex';
import Iframe from 'react-iframe';
function mapStateToProps({ VideoconferencingModel }) {
    return {
        VideoconferencingModel: VideoconferencingModel
    };
}
@connect(mapStateToProps)
class Videoconferencing extends React.Component {
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

    setDom = () => {
        let dom;
        let { VideoconferencingVal } = this.props.VideoconferencingModel;
        if (VideoconferencingVal) {
            dom = (<React.Fragment>
                <MeetingDiv />
            </React.Fragment>)
        } 
        return dom
    }
    render() {
        let { activeMenuItemID } = this.props;
        return (<React.Fragment>
            <div className={styles.Videoconferencing}>
                {this.setDom()}
              
            </div>
        </React.Fragment>)
    }
}
export default Videoconferencing;
