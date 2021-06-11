import axios from 'axios';

// const codeMessage = {
//     200: '服务器成功返回请求的数据。',
//     201: '新建或修改数据成功。',
//     202: '一个请求已经进入后台排队（异步任务）。',
//     204: '删除数据成功。',
//     400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//     401: '用户没有权限（令牌、用户名、密码错误）。',
//     403: '用户得到授权，但是访问是被禁止的。',
//     404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//     406: '请求的格式不可得。',
//     410: '请求的资源被永久删除，且不会再得到的。',
//     422: '当创建一个对象时，发生一个验证错误。',
//     500: '服务器发生错误，请检查服务器。',
//     502: '网关错误。',
//     503: '服务不可用，服务器暂时过载或维护。',
//     504: '网关超时。'
// };
// let uid: number = Number(localStorage.getItem('uid'));
// let access_token: string = localStorage.getItem('token');
// let access_tokenType = 'Bearer';




function request(url, option) {
    const fingerprint = url + (option.body ? JSON.stringify(option.body) : '');
    if (option.method === "POST" || option.method === 'PUT' || option.method === 'DELETE') {

    }
}
var service = axios.create({
    baseURL: "/api",  //所有的请求都会 带上 /api
    "content-type": "application/json",
    timeout: 5000
})
// //请求拦截器
service.interceptors.request.use((config) => {
    if (sessionStorage.getItem("token")) {
        config.headers["token"] = sessionStorage.getItem("token")
    }
    console.log(config)
    // var name = "csrfToken=";
    // var ca = document.cookie.split(';');
    // for (var i = 0; i < ca.length; i++) {
    //     var c = ca[i].trim();
    //     if (c.indexOf(name) === 0) {
    //         var cookieStr = c.substring(name.length, c.length);
    //     }
    // }
    // config.headers["x-csrf-token"] = cookieStr
    return config;
})
// //响应拦截器
service.interceptors.response.use((res) => {
    if (res.data.status === -1) {//token验证失败
        window.location.href = "/login"
    }
    return res.data
})

export default service;