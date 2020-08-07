import React from 'react';
import styles from './styles.less';
import router from 'umi/router'
import shareOn from '@/assets/DocumentSharing/shareOn.png';
import shareOff from '@/assets/DocumentSharing/shareOff.png';
import deleteOn from '@/assets/DocumentSharing/deleteOn.png';
import deleteOff from '@/assets/DocumentSharing/deleteOff.png';
import collectionOn from '@/assets/DocumentSharing/collectionOn.png';
import collectionOff from '@/assets/DocumentSharing/collectionOff.png';
import file from '@/assets/DocumentSharing/file.png';
import docx from '@/assets/DocumentSharing/docx.png';
import xlsx from '@/assets/DocumentSharing/xlsx.png';
import pdf from '@/assets/DocumentSharing/pdf.png';

import { Tag, Button, Table, Upload, message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
// import index from '@/components/DTable/InfoModel';


class Tables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: props.columns,
            data: props.data,
            fileState: 'none',
        }
    }
    //渲染前调用
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            columns: nextProps.columns,
            data: nextProps.data,

        })
    }

    //渲染后调用
    componentDidMount() {

    }

    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        // this.setState({ selectedRowKeys });
    };
    handleChange(info) {
        let datas = {};
        if (info.file.status !== 'uploading') {
            console.log(info.file);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} 文件上传成功！`);
            let index = this.state.data.length;
            console.log(index);
            datas =
            {
                key: info.file.uid,
                name: <div key='docx'><img src={docx} alt="" /> <a onClick={this.OnFile.bind(this)}> {info.file.name}</a></div>,
                route: '--',
                startTime: '2020/7/2',
                modifyTime: '2020/7/2',
                operation: <div className={styles.operation}>
                    <img src={shareOff} onMouseOver={() => this.src = { shareOn }} onMouseOut={() => this.src = { shareOff }} />
                    <img onClick={this.deleteInfo.bind(this, info.file.name, index)} className={styles.operationDelete} src={deleteOff} />
                    <img src={collectionOff} />
                </div>
            }
            console.log(datas);
            this.setState({
                data: [...this.state.data, datas],
            });
            console.log(this.state.data);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 文件上传失败！`);
        }
    }

    deleteInfo(name, index) {
        console.log(index);
        var data = [...this.state.data]
        //删除元素
        data.splice(index, 1)
        this.setState({
            data: data
        })
        message.success(`${name} 文件删除成功！`);
    }

    OnFile() {
        this.setState({
            fileState: 'block',
        })
        // this.props.goToFile('block');
    }


    render() {
        const rowSelection = {
            // selectedRowKeys,
            // onChange: this.onSelectChange,
        };
        const upLoad = {
            name: 'file',
            action: 'http://localhost:8889/#/DocumentSharing',
            headers: {
                authorization: 'authorization-text',
            },
            onChange: this.handleChange.bind(this),
            showUploadList: false,
        }


        return (<React.Fragment>


            <div className={styles.tableBox}>
                <div className={styles.tableBtnBox}>
                    <Button type="primary">新建</Button>
                    <Upload className={styles.uploadBtn} {...upLoad} >
                        <Button className={styles.uploadBtn} type="primary" ghost>上传</Button>
                    </Upload>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} onChange={this.onChange()} />

            </div>



        </React.Fragment>)
    }
}
export default Tables;
