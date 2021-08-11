<template>
    <el-menu class="el-menu-nav" router
        unique-opened
        collapse-transition
        :default-active="active"
        active-text-color="#ef0cc8"
        mode="horizontal"
        @select="handleSelect">
        <!-- 当子集大于2个时，其中包含error -->
        <nav-layout v-if="routerList.length > 1" :menuList="routerList" />
        <!-- 当子集小于2个时, 其中包括子集 -->
        <template v-else-if="routerList.length <= 1" v-for="(item, index) in routerLength">
            <el-menu-item v-if="item && item.meta && item['meta']['whetherShow']"
                :index="item.meta.path"
                :key="index">
                <span>{{item.meta.title}}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>
/* 导航栏 */
<script>

import {asyncRouteMap} from '@/router/router.config.js'
import NavLayout from './NavLayout'

export default {
    name: 'BasicNav',
    components: {
        NavLayout,
    },
    data() {
        return {
            active: localStorage.getItem('myMain') || '/maintain/treemind',
            routerList: [], // asyncRouteMap[0].children,
        }
    },
    created() {
        const initRouterList = JSON.parse(localStorage.getItem('myNav'))
        this.routerList = []
        if( initRouterList && initRouterList.length ){
            // console.log( 111 )
            for (const item of asyncRouteMap[0].children) {
                // console.log('item', item)
                if( item['meta'] && item['children'] && item['children'].length ){
                    let haveChil_isTrue = 0 // 是否存在子路由
                    for (const chil of item['children']) {
                        // console.log('chil', chil)
                        if( chil['meta'] && initRouterList.includes(chil['meta']['title']) ){
                            haveChil_isTrue ++
                            chil['meta']['whetherShow'] = true
                        }else {
                            chil['meta']['whetherShow'] = false
                        }
                    }
                    if( haveChil_isTrue ){
                        item['meta']['whetherShow'] = true
                        this.routerList.push( item )
                    }else {
                        item['meta']['whetherShow'] = false
                    }
                }
            }
        }else{
            // console.log( 222 )
            this.routerList = asyncRouteMap[0].children
        }

        // console.log('初始化 导航！！', initRouterList, this.routerList)
    },
    computed:{
        routerLength: function() {
            // console.log('计算长度 同时判断是否显示', this.routerList)
            let rArr = [];
            if( this.routerList.length <= 1 && this.routerList[0].name !== 'Error' ) {
                rArr = this.routerList[0].children
            } else {
                rArr = [
                    { meta: { title: '导航栏不能为空', path: '/error' }}
                ]
            }
            // console.log('rArr!!!', rArr)
            return rArr
        },
        
    },
    mounted() {
        this.active =  window.location.pathname;
        // this.active =  window.location.pathname;

        // console.log( [this.$router.options.routes[0]] );
        // console.log( 'asyncRouteMap!!!', asyncRouteMap[0].children )
        // console.log( window.location, window.location.pathname )
        // console.log( this.$router )
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath, '<!!!>');
        },
    },
}
</script>
<style scoped>
.el-container{
    border: 1px solid pink;
    box-sizing: border-box;
}
.el-menu-nav {
    padding: 0;
    transition: all .1s;
}
.el-menu.el-menu--horizontal{
    border-bottom: solid 0px;
}
</style>