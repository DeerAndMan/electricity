/* 路由 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import {asyncRouteMap} from './router.config';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
/* 进度环隐藏 */
NProgress.configure({showSpinner: false});

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: asyncRouteMap
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  // console.log(to, from, '路由拦截');
  // const myMain = localStorage.getItem('myMain')
  // console.log('是否设置主页', myMain );
  // console.log('是否为error页', to['path'] === 'error' );
  // console.log('是否允许访问', to['meta']['whetherShow'] );
  // console.log( '全部路由信息', asyncRouteMap[0]['children'] );

  if( to['path'] === '/error' ) next()
  else if( to['meta'] && to['meta']['whetherShow'] ) next()
  else {
    next({ path: "/error" })
  }

})
router.afterEach(() => {
  // console.log('路由之后拦截', to, from, next);
  NProgress.done()
})

export default router