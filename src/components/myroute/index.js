import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class MyRoute extends Component {
    render() {
        let { path, component: Com, roles } = this.props
        var permission = roles.some((item) => {
            return item === sessionStorage.getItem("username")
        })
        console.log(permission)
        return (
            <div>
                <Route path={path} render={(props) => {
                    return permission ? <Com {...props}></Com> : <div>无权访问</div>
                }} />
            </div>
        )
    }
}
