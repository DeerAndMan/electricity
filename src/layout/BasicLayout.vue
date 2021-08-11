<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="22">
                    <!-- 导航栏 -->
                    <basic-nav />
                </el-col>
                <el-col :span="2">
                    <!-- 导航 设置 -->
                    <nav-setting />
                </el-col>
            </el-row>    
        </el-header>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>
/* 主导航页面 */
<script>

import BasicNav from './BasicNav.vue';
import NavSetting from './NavSetting'

export default {
    name: 'BasicLayout',
    components: {
        BasicNav,
        NavSetting,
    },
    data() {
        return {

        }
    },
    mounted() {
        
    },
    methods: {

    },
}
</script>
<style scoped>
.el-container{
    border: 1px solid pink;
    box-sizing: border-box;
}
.el-header{
    box-sizing: border-box;
    width: 100%;
    padding: 0;
    /* background: #dbfcff; */
    background: #fff;
}
/* .el-menu-nav {
    padding: 0;
    transition: all .1s;
} */
/* ::v-deep .el-menu-item > div {
    outline-color: white;
}
::v-deep 样式名:focus {
    outline: none;
} */
.setNav{
    /* position: absolute;
    right: 8px;
    top: 10px; */
}
</style>