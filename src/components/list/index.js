import React, { Component } from 'react'
import { Card, Table, Modal, message } from 'antd';
import { getList, del } from '../../api/request'


export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0, //总的记录数
            pageSize: 7,
            dataSource: [],  //数据源
            id: -1,
            visible: false,
            loading: false,
            btn: true,
            columns: [   //列的格式
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '操作',
                    dataIndex: 'operate',
                    key: 'operate',
                    render: (text, record) => {
                        return <button onClick={this.remove.bind(this, record.key)}
                            style={{ "display": this.state.btn ? "block" : "none" }}>删除</button>
                    }
                }
            ]
        }
    }
    componentDidMount() {
        this.getData(1, this.state.pageSize)  //获取第一页的数据
        if (sessionStorage.getItem("username") !== "admin") {
            this.setState({
                btn: false
            })
        }
    }
    getData(page, pageSize) {   //因为分页时要多次使用
        getList(page, pageSize).then((res) => {
            var list = res.list.map((item) => {
                return {
                    key: item._id,
                    name: item.name,
                    age: item.age,
                }
            })
            this.setState({
                dataSource: list,
                count: res.count
            })
        })
    }
    getPageContent = (page, pageSize) => {  // 参数是这个组件帮我传的。不用自己传
        this.getData(page, pageSize);
    }
    goAdd = () => {
        this.props.history.push('/home/add')
    }
    remove = (id) => {
        this.setState({
            id,
            visible: true
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    handleOk = () => {
        message.success('删除成功');
        this.setState({
            loading: true
        }, () => {
            del(this.state.id).then((res) => {
                if (res.status === 0) {
                    this.getData(1, this.state.count)
                }
            }).finally(() => {
                setTimeout(() => {
                    this.setState({
                        visible: false,
                        loading: false
                    })
                }, 1000)

            })
        })

    }
    render() {
        let { dataSource, columns, count, pageSize } = this.state;

        return (
            <div>
                <Card bordered={false} title="学生列表" extra={<button onClick={this.goAdd}>添加</button>}>
                    <Table dataSource={dataSource} columns={columns}
                        pagination={{ total: count, pageSize, onChange: this.getPageContent }} />
                </Card>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    maskClosable={false}
                    confirmLoading={this.state.loading}
                >
                    <p>确认删除？</p>
                </Modal>
            </div>
        )
    }
}
