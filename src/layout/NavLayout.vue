<template>
    <nav id="Nav">
        <template v-for="(item, index) in menuList">
            <el-submenu v-if="item.children && item.children.length && item.meta"
                :index="item.meta.path"
                :key="index">
                <template slot="title">
                    <span slot="title">{{item.meta.title}}</span>
                </template>
                <nav-layout :menuList="item.children"></nav-layout>
            </el-submenu>
            <el-menu-item
                v-else-if="item && item.meta && item['meta']['whetherShow']"
                :index="item.meta.path"
                :key="index">
                <span>{{item.meta.title}}</span>
            </el-menu-item>
        </template>
    </nav>
</template>
/* 导航栏 */
<script>
export default {
    name: 'NavLayout',
    props: {
        menuList: {
            type: Array,
            required: true,
            // default: () => [],
        }
    },
    mounted() {
        // console.log('表头文件数据', this.menuList)
    },
}
</script>
<style scoped>
#Nav[tabindex="0"] {
    /* display: inline-block; */
    outline: none; /* 去除黑框 */
    transition: all .1s;
}
#Nav[tabindex="0"] > li:nth-child(1) {
    padding-left: 20px;
}
#Nav[tabindex="0"] > li {
    /* outline: none; */
    display: inline-block !important;
    width: 120px;
}
#Nav[tabindex="0"] > li.el-submenu {
    
}
#Nav[tabindex="0"] > .el-menu-item {
    font-size: 16px;
}
#Nav[tabindex="0"] > li:not(.el-submenu) {
    text-align: center;
}
#Nav[tabindex="0"] > li > div > span {
    font-size: 16px;
    /* color: #F5F5F7; */
}

</style>

