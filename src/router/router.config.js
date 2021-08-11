/* 路由 */
import BasicLayout from '@/layout/BasicLayout.vue'

const RouteView = { // 创建一个包裹组件
    name: 'RouteView',
    render: (h) => h('router-view')
}
/* 是否需要展示 */
const canShow = (title='') => {
    const myNav = localStorage.getItem('myNav')
    if( myNav ){
        if( myNav.includes(title) ) return true
        else return false
    }else {
        return true
    }
}

// localStorage.setItem('myMain', '/dormitory/publicPower')
// console.log( localStorage.getItem('myMain'), '我设置的主页！！' );

export const asyncRouteMap = [
    {
        path: '/',
        name: 'basicLayout',
        component: BasicLayout,
        redirect: localStorage.getItem('myMain') || '/maintain/treemind',
        children: [
            {
                path: '/maintain',
                name: 'Maintain', // 工务
                redirect: '/maintain/treemind',
                component: RouteView,
                meta: { title: '公务用电', path: '/maintain', whetherShow: true },
                children: [
                    {
                        path: 'treemind',
                        name: 'treemind',
                        meta: { 
                            title: '甲乙线路线图', 
                            path: '/maintain/treemind', 
                            whetherShow: canShow('甲乙线路线图') 
                        },
                        component: () => import('@/components/ABPower/treeMind'),
                    },
                    {
                        path: 'apower',
                        name: 'apower',
                        meta: { 
                            title: '甲线用电明细', 
                            path: '/maintain/apower',
                            whetherShow: canShow('甲线用电明细') 
                        },
                        component: () => import('@/components/ABPower/APowerDetail'),
                    },
                    {
                        path: 'bpower',
                        name: 'bpower',
                        meta: { 
                            title: '乙线用电明细', 
                            path: '/maintain/bpower', 
                            whetherShow: canShow('乙线用电明细')
                        },
                        component: () => import('@/components/ABPower/BPowerDetail'),
                    },
                    {
                        path: 'abpower',
                        name: 'abpower',
                        meta: { 
                            title: '甲乙线用电总表', 
                            path: '/maintain/abpower',
                            whetherShow: canShow('甲乙线用电总表') 
                        },
                        component: () => import('@/components/ABPower/ABPowerTotal'),
                    },
                ]
            },
            {
                path: '/dormitory',
                name: 'Dormitory', // 宿务
                component: RouteView,
                meta: { title: '宿务用电', path: '/dormitory', whetherShow: true },
                children: [
                    {
                        path: 'perCapita',
                        name: 'perCapita',
                        meta: { 
                            title: '人均与总用电', 
                            path: '/dormitory/perCapita',
                            whetherShow: canShow('人均与总用电') 
                        },
                        component: () => import('@/components/Dormitory/PerCapita'),
                    },
                    {
                        path: 'room',
                        name: 'room',
                        meta: { 
                            title: '房间用电', 
                            path: '/dormitory/room', 
                            whetherShow: canShow('房间用电') 
                        },
                        component: () => import('@/components/Dormitory/Room'),
                    },
                    {
                        path: 'publicPower',
                        name: 'publicPower',
                        meta: { 
                            title: '公共用电', 
                            path: '/dormitory/publicPower', 
                            whetherShow: canShow('公共用电')  
                        },
                        component: () => import('@/components/Dormitory/PublicPower'),
                    },
                    {
                        path: 'history',
                        name: 'history',
                        meta: { 
                            title: '历史数据查询', 
                            path: '/dormitory/history', 
                            whetherShow: canShow('历史数据查询')
                        },
                        component: () => import('@/components/Dormitory/History'),
                    },
                    {
                        path: 'abnormal',
                        name: 'abnormal',
                        meta: { 
                            title: '异常处理', 
                            path: '/dormitory/abnormal', 
                            whetherShow: canShow('异常处理') 
                        },
                        component: () => import('@/components/Dormitory/Abnormal'),
                    },
                ]
            },
            {
                path: '/food',
                name: 'Food', // 伙食
                // redirect: '/food/perCapita',
                component: () => import('@/layout/Food'),
                meta: { title: '伙食用电', path: '/food',  whetherShow: true },
                children: [

                ]
            },
            {
                path: 'error',
                name: 'Error', // 错误
                component: () => import('@/views/Error'),
            },
        ]
    },
    {
        path: '*',
        redirect: 'error',
    }
]