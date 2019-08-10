import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '../pages/home/Home.vue'
// import City from '../pages/city/City.vue'
// import Detail from '../pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/pages/home/Home') // 异步组件实现按需加载，提升首屏加载速度。但只有在打包后的 app.js 大小超过 1mb 时，才有必要做按需加载，因为按需加载会导致发送多次 http 请求，造成延迟。
        },
        {
            path: '/city',
            name: 'City',
            component: () => import('@/pages/city/City')
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: () => import('@/pages/detail/Detail')
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
