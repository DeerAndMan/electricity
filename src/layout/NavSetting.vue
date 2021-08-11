<template>
    <div>
        <el-button icon="el-icon-setting" class="setNav" 
            @click="setMyNav">
        </el-button>

        <el-drawer
            title="设置导航栏及我的主页"
            size="50%"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose">

            <el-form ref="drawerForm" :model="drawerForm" label-width="80px" class="form--class">
                <el-form-item label="主导航">
                    <el-radio-group v-model="drawerForm.checkRadio" @change="checked_main">
                        <el-radio
                            v-for="(item, index) in cheackRadioList"
                            :key="index"
                            :label="item"
                        />
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="副导航">
                    <el-checkbox-group v-model="drawerForm.checkList_chil" @change="checked_chil">
                        <el-checkbox
                            v-for="(item, index) in cheackBoxList_chil"
                            :key="index"
                            :label="item" 
                            name="check_chil"/>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="主页设置">
                    <el-radio-group v-model="myMain" @change="radio_myMain">
                        <el-radio
                            v-for="(item, index) in cheackBoxList_chil"
                            :key="index"
                            :label="item"
                            name="check_chil"/>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="清空设置">
                    <el-button type="danger" plain size="mini" @click="clearLocalStorage">delete</el-button>
                </el-form-item>
            </el-form>

        </el-drawer>
    </div>
</template>
/* 导航栏自定义设置 */
<script>
import {asyncRouteMap} from '@/router/router.config.js'

export default {
    name: 'NavSetting',
    data() {
        return {
            routers: asyncRouteMap[0].children,
            drawer: false,
            direction: 'rtl',

            // 单选框 数组
            cheackRadioList: [],
            // 多选框 
            cheackBoxList_chil: [],

            drawerForm: {
                checkRadio: '',
                checkList_chil: []
            },
            myMain: '',
            localMyMain: '', // 存储到local中的
        }
    },
    created() {
        this.radioAllList()
    },
    methods: {
        /* 添加 全部导航 */
        radioAllList() {
            for (const item of this.routers) {
                if( item && item.meta && item.children ){
                    this.cheackRadioList.push(item['meta']['title'])
                }
            }
        },
        /* 主 导航 */
        checked_main() {
            // console.log('主导航改变', this.drawerForm['checkRadio'])
            this.cheackBoxList_chil = []
            for (const item of this.routers) {
                if( item['meta'] && item['meta']['title'] === this.drawerForm['checkRadio'] ){
                    // console.log( item )
                    for (const chil of item.children) {
                        if( chil && chil.meta ){
                            this.cheackBoxList_chil.push(chil['meta']['title'])
                        }
                    }
                }
            }
            this.cheackBoxList_chil = [...new Set(this.cheackBoxList_chil)]
            // console.log( this.cheackBoxList_chil  )
        },
        /* 副 导航 */
        checked_chil() {},
        /* 设置我的主页 */
        radio_myMain() {
            for (const item of this.routers) {
                // console.log( item )
                if( item['children'] ) {
                    for (const chil of item['children']) {
                        // console.log( chil )
                        if( chil['meta']['title'] === this.myMain ){
                            this.localMyMain = chil['meta']['path']
                            break
                        }
                    }
                }
            }
            console.log('选择结束', typeof(this.myMain), this.myMain, this.localMyMain )
            localStorage.setItem('navRadio', this.myMain) // 单选
            localStorage.setItem('myMain', this.localMyMain) // 默认主页
        },

        handleClose(done) {
            this.$confirm('确认关闭，并保存？')
            .then(() => {
                // console.log( this.drawerForm, '我选择的导航', this.routers )
                if( this.drawerForm['checkList_chil'].length ){
                    localStorage.setItem('myNav', JSON.stringify(this.drawerForm['checkList_chil']))
                }
                window.location.replace(window.location.href)
                done();
            })
            .catch(() => {});
        },
        setMyNav() {
            this.drawer = true
            // 是否已经设置过 导航 与 主页
            this.drawerForm.checkList_chil = JSON.parse(localStorage.getItem('myNav')) || []
            this.myMain = localStorage.getItem('navRadio') || ''
            // console.log( this.drawerForm.checkList_chil, '选中' )
        },
        clearLocalStorage() {
            this.drawerForm.checkList_chil = []
            localStorage.removeItem('navRadio')
            localStorage.removeItem('myMain')
            localStorage.removeItem('myNav')
            this.$message('清除成功！！！')
        }
    },
    watch: {
        
    },
}
</script>

<style scoped>
.setNav{
    line-height: 60px;
    padding: 0 20px;
    border: 0px;
}
/* .el-drawer__body{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
} */
.form--class{
    width: 90%;
    margin-left: 5%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>