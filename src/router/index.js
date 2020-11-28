import Home from '../App'
import NotFound from '../components/home'
import DashBoard from '../components/dashBoard'
import List from '../components/list'
import Setting from '../components/setting'
import Add from '../components/add'
import Login from '../components/login'
import Notify from '../components/notify'


export const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/404',
        component: NotFound
    },
    {
        path: '/login',
        component: Login
    },
]

export const subRoutes = [
    {
        path: '/home/dashboard',
        component: DashBoard,
        roles: ["admin", "asd"]
    },
    {
        path: '/home/list',
        component: List,
        roles: ["admin", "asd"]
    },
    {
        path: '/home/setting',
        component: Setting,
        roles: ["admin"]
    },
    {
        path: '/home/add',
        component: Add,
        roles: ["admin"]
    },
    {
        path: '/home/notify',
        component: Notify,
        roles: ["admin", "asd"]
    },
]