import React from 'react';
import styles from './styles.less';
import router from 'umi/router';
import Refresh from '@/assets/VoiceDispatching/Refresh.png';
import details from '@/assets/VoiceDispatching/details.png';
import search from '@/assets/VoiceDispatching/search.png';
import out from '@/assets/VoiceDispatching/out.png';
import xiangmu from '@/assets/DocumentSharing/项目建议书.docx';
import ceshi from '@/assets/DocumentSharing/测试统计数据.xlsx';
import taian from '@/assets/DocumentSharing/taian.pdf';
import biji from '@/assets/DocumentSharing/笔记.pdf';
import headImg from '@/assets/DocumentSharing/headImg.png';
import x from '@/assets/DocumentSharing/x.png';

import { Button } from 'antd';
//react文件预览支持docx，xlsx
import FileViewer from 'react-file-viewer';
//react预览pdf文件插件
import PDF from 'react-pdf-js';



class Files extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileState: props.fileState,
            type: props.fileType,
            page: 1,
            pages: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            fileState: nextProps.fileState,
            type: nextProps.fileType,
        })
    }
    //渲染前调用
    componentWillMount() {

    }


    //渲染后调用
    componentDidMount() {

    }

    closeFile() {
        this.setState({
            fileState: 'none',
        })
        this.props.goToFile('none');
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
        const { page, pages, type } = this.state;

        return (<React.Fragment>

            <div style={{ display: this.state.fileState }} className={styles.filesBox}>
                <div className={styles.fileTop}>
                    <span>预览</span>
                    <img className={styles.x} src={x} onClick={this.closeFile.bind(this)} alt="" />
                </div>
                {
                    type == 'docx' ?
                        <div className={styles.flieContent}>
                            <FileViewer
                                fileType='docx'//文件类型
                                filePath={xiangmu} //文件地址
                            />
                        </div>
                        : type == 'xlsx' ?
                            <div className={styles.flieContent}>
                                <FileViewer
                                    fileType='xlsx'//文件类型
                                    filePath={ceshi} //文件地址
                                />
                            </div>
                            : type == 'pdf' ?
                                <div>
                                    <div className={styles.filePdf}>
                                        <PDF
                                            file={biji}
                                            onDocumentComplete={this.onDocumentComplete}
                                            page={page}
                                        />
                                    </div>

                                    <div className={styles.filePdfFooter}>

                                        {page === 1 ?
                                            null
                                            :
                                            <Button type='primary' onClick={this.handlePrevious}>上一页</Button>
                                        }

                                        <div className={styles.filePdfPage}>

                                            <span>第{page}页</span>/<span>共{pages}页</span>

                                        </div>
                                        {page === pages ?
                                            null
                                            :
                                            <Button style={{ marginLeft: '10px' }} type='primary' onClick={this.handleNext}>下一页</Button>
                                        }
                                    </div>
                                </div>
                                : ''

                }

            </div>



        </React.Fragment>)
    }
}
export default Files;
