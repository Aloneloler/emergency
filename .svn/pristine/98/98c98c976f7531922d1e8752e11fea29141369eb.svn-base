import React from 'react';
import styles from './styles.less';
import { connect } from 'dva';
import { Rate } from 'antd';
function mapStateToProps({ }) {
    return {

    };
}
@connect(mapStateToProps)
class Command extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    //渲染前调用
    componentWillMount() {
        let value = String(this.props.value);
        let valueList = value.split('.');
        if (parseInt(valueList[0]) < 3) {
            this.valueData = '低级'
        } else {
            this.valueData = '高级'
        }
        if (valueList[1] > 5) {
            let valueList1 = valueList[0];
            valueList[0] = parseInt(valueList1) + parseInt(1);
        } else if (valueList[1] < 5) {
            valueList[1] = parseInt(5);
        }
        let newValue = parseFloat(valueList.join('.'));
        this.value = newValue;
    }
    tagsDiv = (data) => {
        let divDom = null;
        if (data === '热议') {
            divDom = (
                <React.Fragment>
                    <span className={styles.HeatedDiscussionSpan}>
                        {data}
                    </span>
                </React.Fragment>
            );
        } else if (data === '投诉') {
            divDom = (
                <React.Fragment>
                    <span className={styles.ComplaintSpan}>
                        {data}
                    </span>
                </React.Fragment>
            );
        } else if(this.props?.value >= 3.5) {
            divDom = (
                <React.Fragment>
                    <span className={styles.HeatedDiscussionSpan}>
                        {data}
                    </span>
                </React.Fragment>
            );
        } else if(this.props?.value < 3.5) {
            divDom = (
                <React.Fragment>
                    <span className={styles.ComplaintSpan}>
                        {data}
                    </span>
                </React.Fragment>
            );
        }
        return divDom;
    }
    //渲染后调用
    componentDidMount() {

    }
    //卸载时调用
    componentWillUnmount() {

    }
    render() {
        let { DataList } = this.state;
        // console.log(this.valueData, 'props')
        return (<React.Fragment>
            <div className={styles.command}>
                {this.tagsDiv(this.props.tags)}
                {
                    this.props?.tags === '热议' || this.props?.tags === '投诉' ? (<div className={styles.commandMain}>
                        <Rate disabled defaultValue={this.value} allowHalf={true} className={this.valueData === '高级' ? styles.RateDivTwo : styles.RateDiv} />
                    </div>): ""
                }

            </div>
        </React.Fragment>)
    }
}
export default Command;
