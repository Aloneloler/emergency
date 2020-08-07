import React from 'react';
import styles from './styles.less';
import router from 'umi/router'
import axios from 'axios'
import docx from '@/assets/DocumentSharing/docx.png';
import xlsx from '@/assets/DocumentSharing/xlsx.png';
import pdf from '@/assets/DocumentSharing/pdf.png';
import xiangmu from '@/assets/DocumentSharing/项目建议书.docx';
import ceshi from '@/assets/DocumentSharing/测试统计数据.xlsx';
import biji from '@/assets/DocumentSharing/笔记.pdf';
import x from '@/assets/DocumentSharing/x.png';
import FileViewer from 'react-file-viewer';
//react预览pdf文件插件
import PDF from 'react-pdf-js';

import Content from './Component/Content/index'
import Files from './Component/Files/index';

<<<<<<< .mine
import { Tag, Button, Table, message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';


||||||| .r50
import { Tag, Button, Table,message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

  

=======
>>>>>>> .r137
let taian = 'http://localhost:8889/static/taian.ffb3b2ac.pdf';


class DocumentSharing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< .mine
            fileState: 'none',
            fileType: '',
            columns: [
                {
                    title: '所有类型',
                    dataIndex: 'name',
                    filters: [
                        {
                            text: 'docx',
                            value: 'docx',
                        },
                        {
                            text: 'xlsx',
                            value: 'xlsx',
                        },
                        {
                            text: 'pdf',
                            value: 'pdf',
                        },
||||||| .r50
            columns:[
                {
                    title: '所有类型',
                    dataIndex: 'name',
                    filters: [
                        {
                            text: '文档',
                            value: 'file',
                        },
                        {
                            text: '图片',
                            value: 'img',
                        },
                        {
                            text: '视频',
                            value: 'video',
                        },
=======
>>>>>>> .r137

<<<<<<< .mine
                    ],
                    filterIcon: filtered => <CaretDownOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
                    onFilter: (value, record) => record.name.key == value,
                    sortDirections: ['descend'],
                },
                {
                    title: '路径',
                    dataIndex: 'route',
                    sorter: (a, b) => a.route.length - b.route.length,
                    sortDirections: ['descend', 'ascend'],
                },
                {
                    title: '创建时间',
                    dataIndex: 'startTime',
                    sorter: (a, b) => Date.parse(a.startTime) - Date.parse(b.startTime),
                    sortDirections: ['descend', 'ascend'],
                },
                {
                    title: '修改时间',
                    dataIndex: 'modifyTime',
                    sorter: (a, b) => Date.parse(a.modifyTime) - Date.parse(b.modifyTime),
                    sortDirections: ['descend', 'ascend'],
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                },
            ],
            data: [
                {
                    key: '1',
                    name: <div key='docx'><img src={docx} alt="" /> <a onClick={this.OnFile.bind(this, 'docx')}> 项目建议书</a></div>,
                    route: '--',
                    startTime: '2020/7/2',
                    modifyTime: '2020/7/2',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this, '项目建议书', 0)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
                {
                    key: '2',
                    name: <div key='pdf'><img src={pdf} alt="" /><a onClick={this.OnFile.bind(this, 'pdf')}>  笔记</a></div>,
                    route: '--',
                    startTime: '2020/6/2',
                    modifyTime: '2020/6/2',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this, '笔记', 1)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
                {
                    key: '3',
                    name: <div key='xlsx'><img src={xlsx} alt="" /><a onClick={this.OnFile.bind(this, 'xlsx')}>  测试统计数据</a></div>,
                    route: '--',
                    startTime: '2020/7/1',
                    modifyTime: '2020/7/1',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this, '测试统计数据', 2)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
                {
                    key: '4',
                    name: <div key='pdf'><img src={pdf} alt="" /><a onClick={this.OnFile.bind(this, 'pdf')}>  医疗救援</a></div>,
                    route: '--',
                    startTime: '2020/6/15',
                    modifyTime: '2020/7/2',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this, '医疗救援', 3)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
                {
                    key: '5',
                    name: <div key='docx'><img src={docx} alt="" /><a onClick={this.OnFile.bind(this, 'docx')}> 视频录像</a></div>,
                    route: '--',
                    startTime: '2020/5/26',
                    modifyTime: '2020/5/27',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this, '视频录像', 4)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
            ],
||||||| .r50
                    ],
                    filterIcon: filtered => <CaretDownOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
                    onFilter: (value, record) => record.name.key == value,
                    sortDirections: ['descend'],
                },
                {
                    title: '路径',
                    dataIndex: 'route',
                    sorter: (a, b) => a.route.length - b.route.length,
                    sortDirections: ['descend', 'ascend'],
                },
                {
                    title: '创建时间',
                    dataIndex: 'startTime',
                    sorter: (a, b) => Date.parse(a.startTime) - Date.parse(b.startTime),
                    sortDirections: ['descend', 'ascend'],
                },
                {
                    title: '修改时间',
                    dataIndex: 'modifyTime',
                    sorter: (a, b) => Date.parse(a.modifyTime) - Date.parse(b.modifyTime),
                    sortDirections: ['descend', 'ascend'],
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                },
            ],
            data:[
                {
                    key: '1',
                    name: <div key='file'><img src={file} alt="" /> 任务周报</div>,
                    route: '--',
                    startTime: '2020/7/2',
                    modifyTime: '2020/7/2',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this,'任务周报',0)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
                {
                    key: '2',
                    name: <div key='img'><img src={file} alt="" /> GIS调度API</div>,
                    route: '--',
                    startTime: '2020/6/2',
                    modifyTime: '2020/6/2',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this,'GIS调度API',1)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
                {
                    key: '3',
                    name: <div key='file'><img src={file} alt="" /> 应急任务</div>,
                    route: '--',
                    startTime: '2020/7/1',
                    modifyTime: '2020/7/1',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this,'应急任务',2)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
                {
                    key: '4',
                    name: <div key='file'><img src={file} alt="" /> 医疗救援</div>,
                    route: '--',
                    startTime: '2020/6/15',
                    modifyTime: '2020/7/2',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this,'医疗救援',3)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
                {
                    key: '5',
                    name: <div key='video'><img src={file} alt="" /> 视频录像</div>,
                    route: '--',
                    startTime: '2020/5/26',
                    modifyTime: '2020/5/27',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this,'视频录像',4)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
            ],
=======
>>>>>>> .r137
        }
    }

<<<<<<< .mine
    OnFile(fileType) {
        this.setState({
            fileState: 'block',
            fileType: fileType
        })
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
||||||| .r50
    deleteInfo(name,index){
        console.log(index);
        var data = [...this.state.data]
        //删除元素
        data.splice(index,1)
        this.setState({
            data:data
        })
        message.success(`${name} 文件删除成功！`);
    }
=======
    
>>>>>>> .r137



    //渲染前调用
    componentWillMount() {

    }


    //渲染后调用
    componentDidMount() {

    }
<<<<<<< .mine
    goToPage(datas) {
        console.log('datas', datas);
        this.setState({
            columns: datas.columns,
            data: datas.data,
        })
    }
||||||| .r50
    goToPage(datas){
        console.log('datas',datas);
        this.setState({
            
            columns:datas.columns,
            data:datas.data,
        })
    }
   
=======
>>>>>>> .r137

    goToFile(fileState, fileType) {
        console.log('tofile', fileState, fileType)
        this.setState({
            fileState: fileState,
            fileType: fileType
        })
    }

    closeFile() {
        this.setState({
            fileState: 'none',
        })
        // this.props.goToFile('none');
    }


    onDocumentComplete = (pages) => {

        this.setState({ page: 1, pages })

    }

    handlePrevious = () => {

        this.setState({ page: this.state.page - 1 })

    }

    handleNext = () => {

        this.setState({ page: this.state.page + 1 })

    }




    render() {
<<<<<<< .mine
        const { page, pages, type } = this.state;

||||||| .r50
      
=======

>>>>>>> .r137
        return (<React.Fragment>
            <div className={styles.allBoxs}>

<<<<<<< .mine
                <div className={styles.rightBox}>
                    <Menus goToPage={(data) => this.goToPage(data)} goToFile={(file, type) => this.goToFile(file, type)} />
                    <div className={styles.ContentBlock}>
                        <Tables data={this.state.data} columns={this.state.columns} />
                    </div>

                    <Files fileState={this.state.fileState} fileType={this.state.fileType} goToFile={(file) => this.goToFile(file)} />


                </div>
||||||| .r50
                <div className={styles.rightBox}>
                   <Menus goToPage = {(data) => this.goToPage(data)}/>
                    <div className={styles.ContentBlock}>
                        <Tables data={this.state.data} columns={this.state.columns}/>
                    </div>

                </div>
=======
                <Content></Content>
                
>>>>>>> .r137
            </div>

        </React.Fragment>)
    }
}
export default DocumentSharing;
