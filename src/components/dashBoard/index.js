import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class DashBoard extends Component {
    randColor() {
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        return "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0")
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={6} style={{ background: this.randColor() }}>col-6</Col>
                    <Col span={6} style={{ background: this.randColor() }}>col-6</Col>
                    <Col span={6} style={{ background: this.randColor() }}>col-6</Col>
                    <Col span={6} style={{ background: this.randColor() }}>col-6</Col>
                </Row>
            </div>
        )
    }
}
