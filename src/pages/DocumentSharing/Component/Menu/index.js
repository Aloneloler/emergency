import React from 'react';
import styles from './styles.less';
import router from 'umi/router';
import search1 from '@/assets/DocumentSharing/search1.png';
import my from '@/assets/DocumentSharing/my.png';
import sharedSpace from '@/assets/DocumentSharing/sharedSpace.png';
import collection from '@/assets/DocumentSharing/collection.png';
import shareOn from '@/assets/DocumentSharing/shareOn.png';
import shareOff from '@/assets/DocumentSharing/shareOff.png';
import deleteOn from '@/assets/DocumentSharing/deleteOn.png';
import deleteOff from '@/assets/DocumentSharing/deleteOff.png';
import collectionOn from '@/assets/DocumentSharing/collectionOn.png';
import collectionOff from '@/assets/DocumentSharing/collectionOff.png';
import file from '@/assets/DocumentSharing/file.png';
import collectionLight from '@/assets/DocumentSharing/collectionLight.png';
import myDark from '@/assets/DocumentSharing/myDark.png';
import sharedSpaceLight from '@/assets/DocumentSharing/sharedSpaceLight.png';
import xiangmu from '@/assets/DocumentSharing/项目建议书.docx';
import ceshi from '@/assets/DocumentSharing/测试统计数据.xlsx';
import x from '@/assets/DocumentSharing/x.png';
import docx from '@/assets/DocumentSharing/docx.png';
import xlsx from '@/assets/DocumentSharing/xlsx.png';
import pdf from '@/assets/DocumentSharing/pdf.png'
import FileViewer from 'react-file-viewer';


import { Menu, Input ,message} from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            my:my,
            collection:collection,
            sharedSpace:sharedSpace,
            columns:[],
            data:[],
            fileState:'none',
        }
    }
    //渲染前调用
    componentWillMount() {

    }


    //渲染后调用
    componentDidMount() {

    }


    handleClick = e => {
        // console.log('click ', e);
        console.log(this.props.fileState)
        let eKey= e.key;
        let columns = [];
        let data = [];
        let datas = {};
        if(eKey=='1'){
            this.setState({
                my:my,
            collection:collection,
            sharedSpace:sharedSpace
            });
            columns=[
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
            ];
            
            data = [
                {
                    key: '1',
                    name: <div key='docx'><img src={docx} alt="" /> <a onClick={this.OnFile.bind(this,'docx')}> 任务周报</a></div>,
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
                    name: <div key='pdf'><img src={pdf} alt="" /><a onClick={this.OnFile.bind(this,'pdf')}>  GIS调度API</a></div>,
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
                    name: <div key='xlsx'><img src={xlsx} alt="" /><a onClick={this.OnFile.bind(this,'xlsx')}>  应急任务</a></div>,
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
                    name: <div key='pdf'><img src={pdf} alt="" /><a onClick={this.OnFile.bind(this,'pdf')}>  医疗救援</a></div>,
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
                    name: <div key='docx'><img src={docx} alt="" /><a onClick={this.OnFile.bind(this,'docx')}> 视频录像</a></div>,
                    route: '--',
                    startTime: '2020/5/26',
                    modifyTime: '2020/5/27',
                    operation: <div className={styles.operation}>
                        <img src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this,'视频录像',4)} className={styles.operationDelete} src={deleteOff} />
                        <img src={collectionOff} />
                    </div>
                },
            ];
            this.setState({
                columns:columns,
                data:data,
            })
            datas = {columns,data}
            this.props.goToPage(datas);
        };
        if (eKey == '2') {
            this.setState({
                my:myDark,
            collection:collection,
            sharedSpace:sharedSpaceLight
            });
            columns=[
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
                    title: '分享时间',
                    dataIndex: 'sharTime',
                    sorter: (a, b) => Date.parse(a.sharTime) - Date.parse(b.sharTime),
                    sortDirections: ['descend', 'ascend'],
                },
                {
                    title: '分享者',
                    dataIndex: 'sharMan',
                    sorter: (a, b) => a.sharMan - b.sharMan,
                    sortDirections: ['descend', 'ascend'],
                },
            ];
            data = [
                {
                    key: '1',
                    name: <div key='docx'><img src={docx} alt="" /> <a onClick={this.OnFile.bind(this,'docx')}> 任务周报</a></div>,
                    route: '--',
                    startTime: '2020/7/2',
                    modifyTime: '2020/7/2',
                    sharTime: '2020/7/2',
                    sharMan: <div className={styles.operation}>李斯</div>,
                    
                },
                {
                    key: '2',
                    name: <div key='xlsx'><img src={xlsx} alt="" /><a onClick={this.OnFile.bind(this,'xlsx')}> GIS调度API</a></div>,
                    route: '--',
                    startTime: '2020/6/2',
                    modifyTime: '2020/6/2',
                    sharTime: '2020/6/3',
                    sharMan: <div className={styles.operation}>李斯</div>,
                    
                },
            ]
            this.setState({
                columns:columns,
                data:data,
            })
            datas = {columns,data}
            this.props.goToPage(datas);

        };
        if (eKey == '3') {
            this.setState({
                my:myDark,
            collection:collectionLight,
            sharedSpace:sharedSpace
            });
            columns=[
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
            
                    ],
                    filterIcon: filtered => <CaretDownOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
                    onFilter: (value, record) => record.name.key == value,
                    sortDirections: ['descend'],
                },
                {
                    title: '所有者',
                    dataIndex: 'author',
                    sorter: (a, b) => a.author - b.author,
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
            ];
            data = [
                {
                    key: '1',
                    name: <div key='docx'><img src={docx} alt="" /><a onClick={this.OnFile.bind(this,'docx')}> 任务周报</a></div>,
                    author: '李斯',
                    modifyTime: '2020/7/2',
                    operation: <div className={styles.operation}>
                        <img className={styles.operationShare} src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this,'任务周报',0)} className={styles.operationShare} src={deleteOff} />
                    </div> 
                    
                },
                {
                    key: '2',
                    name: <div key='xlsx'><img src={xlsx} alt="" /><a onClick={this.OnFile.bind(this,'xlsx')}> GIS调度API</a></div>,
                    author: '李斯',
                    modifyTime: '2020/6/2',
                    operation: <div className={styles.operation}>
                        <img className={styles.operationShare} src={shareOff} />
                        <img onClick={this.deleteInfo.bind(this,'GIS调度API',1)} className={styles.operationShare} src={deleteOff} />
                    </div> 
                    
                },
            ]
            this.setState({
                columns:columns,
                data:data,
            })
            datas = {columns,data}
            this.props.goToPage(datas);

        }
    };

    deleteInfo(name,index){
        console.log(index);
        var data = [...this.state.data];
        var columns = [...this.state.columns];
        let datas = {};
        //删除元素
        data.splice(index,1)
        this.setState({
            data:data
        })
        datas = {columns,data}
        this.props.goToPage(datas);
        message.success(`${name} 文件删除成功！`);
    }

    OnFile(type){
        this.setState({
            fileState:'block',
        })
        this.props.goToFile('block',type);
    }

    // closeFile(){
    //     console.log('close')
    //     let file = 'none';
    //     this.setState({
    //         fileState:'none',
    //     })
    //     this.props.goToFile(file);
    // }
   

    render() {



        return (<React.Fragment>

            <div className={styles.menuBox}>
                <div className={styles.search}>
                    <Input className={styles.inputSearch} placeholder="搜索" prefix={<img src={search1}></img>} />
                </div>
                <div className={styles.tab}>

                    <Menu
                        onClick={this.handleClick.bind(this)}
                        style={{ width: 274 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >

                        <Menu.Item key="1">
                            <span className={styles.departmentBox}>
                                <img src={this.state.my}></img>
                                <span>我的空间</span>
                            </span>

                        </Menu.Item>
                        <Menu.Item key="2">
                            <span className={styles.departmentBox}>
                                <img src={this.state.sharedSpace}></img>
                                <span>共享空间</span>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="3" >
                            <span className={styles.departmentBox}>
                                <img src={this.state.collection}></img>
                                <span>收藏</span>
                            </span>
                        </Menu.Item>


                    </Menu>

                  

                </div>
            </div>




        </React.Fragment>)
    }
}
export default Menus;
