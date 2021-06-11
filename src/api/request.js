/*
 * @Author: jianwen.Wang
 * @Date: 2020-09-28 14:28:16
 * @LastEditTime: 2020-12-02 11:41:28
 * @LastEditors: jiawen.wang
 */
import axios from './index';  //进行了二次封装了

export const getList = (page, pageSize) => {  //分页的接口
    return axios.get("/pagelist", { params: { page, pageSize } })
}

export const add = (name, age) => {
    return axios.post("/add", { name, age })
}

export const del = (id) => {
    return axios.post("/del", { id })
}

export const login = (username, password) => {
    return axios.post("/user/login", { username, password })
}
export const quit = () => {
    return axios.post("/users/quit")
}

export const upload = (data) => { //data是上传的表单数据
    return axios.post("/upload", data)
}