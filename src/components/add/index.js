import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { add } from '../../api/request'


class Add extends Component {
    handleSubmit = e => {
        e.preventDefault(); //阻止用户默认行为
        this.props.form.validateFields((err, values) => {
            if (!err) {
                add(values.name, values.age).then((res) => {
                    if (res.status === 0) {
                        this.props.history.push("/home/list")
                    }
                })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="name"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('age', {
                            rules: [{ required: true, message: 'Please input your age!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

                                placeholder="age"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">添加</Button>
                    </Form.Item>
                </Form >
            </div>
        )
    }
}

export default Form.create()(Add)