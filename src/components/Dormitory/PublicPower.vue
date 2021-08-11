<template>
    <div id="publicPower">
        
        <div style="margin-bottom: 12px">
            <el-date-picker v-model="dateVal" size="small"
                type="daterange"
                style="margin-right: 20px"
                start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            <!-- <el-cascader v-model="cascaderBuild" size="mini"
                :options="options"
                :props="{multiple: true, expandTrigger: 'hover'}"
                collapse-tags
                clearable
                filterable
                style="width: 300px; margin-right: 20px" /> -->
            <el-select v-model="cascaderBuild" size="small" 
                filterable
                placeholder="请选择楼栋" style="margin-right: 20px" >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-input size="small"
                placeholder="请输入公共区域名称"
                type='input'
                autosize
                v-model="inpPublic"
                clearable
                style="width: 200px; margin-right: 20px" />
            <el-button type="primary" size="small" 
                :loading="searchLoad" icon="el-icon-search"
                @click="searchPublic">搜索
            </el-button>
        </div>

        <el-table :data="tableData" size="mini" border
            :max-height="table__maxHeight"
            v-loading="loading_tab"
            :header-cell-style="{background:'#F5F7FA'}">
            <dynamic-theader
                v-for="(item,index) in tableThead" 
                :key="index"
                :col="item" />
            <el-table-column fixed="right" label="操作" width="60">
                <template slot-scope="scope">
                    <el-button
                        @click.native.prevent="GetFloorFullDetas(scope.row)"
                        type="text"
                        size="mini">
                        详情
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 弹窗 -->
        <el-dialog title="实时数据" :visible.sync="dialogChartVisible"
            style="min-width: 420px">
            <chart-line idName="dialog_Line_public_min" 
                :key="dialogChartVisible"
                ChartTitle="公共区域实时数据"
                DataAttr="active_energy_delivered"
                TimeAttr="read_time"
                :AllData="dialogAllData" />
        </el-dialog>

    </div>
</template>
/* 公共用电 */
<script>
import dayjs from 'dayjs'
import DynamicTheader from '@/utils/DynamicTheader.vue'
import { PublicThead } from '@/utils/tableThead/DormitoryThead.js'

import ChartLine from '@/utils/Dormitory/chartLineRoom'

import { 
    listPublicElectricityTableOne,
    listElectricByFiveMinutePublic,
} from '@/servers/Dormitory.js'

export default {
    name: 'PublicPower',
    components: {
        DynamicTheader,
        ChartLine,

    },
    data() {
        return {
            dateVal: '',
            cascaderBuild: [],
            inpPublic: '',
            searchLoad: false,

            dialogChartVisible: false,
            dialogAllData: [],

            loading_tab: false,
            tableThead: PublicThead,
            tableData: [],

        }
    },
    created() {
        this.GetTableDatas({
            startTime: dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
            endTime: dayjs().format('YYYY-MM-DD'),
        })
    },
    methods: {
        GetTableDatas(params={}) { // 获取表格数据
            this.searchLoad = true
            this.loading_tab = true
            listPublicElectricityTableOne(params)
            .then( res => {
                console.log('初始化数据', res)
                this.tableData = res.data
            })
            .finally( () => {
                this.searchLoad = false
                this.loading_tab = false
            })
        },
        GetFloorFullDetas({name}) { // 详细数据
            // console.log('row', name, dayjs().format('YYYY-MM-DD') )
            if( !name ) return this.$message('name is not defind')
            listElectricByFiveMinutePublic({
                date: dayjs().format('YYYY-MM-DD'),
                room: name, // "6#-1F总开",
            })
            .then( res => {
                this.dialogAllData = res.data
            })
            .finally( () => {
                this.dialogChartVisible = true
            })
        },

        searchPublic() {
            console.log('搜索', this.dateVal, this.cascaderBuild, this.inpPublic )
            // if( this.inpPublic && this.cascaderBuild.length ){
            //     this.$message({
            //         showClose: true,
            //         message: '当手动输入与下拉选择同时存在时，优先查询手动输入',
            //         duration: 5000
            //     })
            // }
            const params = {
                startTime: dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
                endTime: dayjs().format('YYYY-MM-DD'),
            }
            if( this.dateVal ) {
                params['startTime'] = dayjs(this.dateVal[0]).format('YYYY-MM-DD')
                params['endTime'] = dayjs(this.dateVal[1]).format('YYYY-MM-DD')
            }
            if( this.cascaderBuild ) params['building'] = this.cascaderBuild
            if( this.inpPublic ) params['floor'] = this.inpPublic
            this.GetTableDatas(params)
        },


    },

    computed: {
        table__maxHeight() {
            return document.documentElement.clientHeight - 170 + 'px'
        },
        // options() { // 计算楼栋，每楼层
        //     const FloorList = this.$store.state.FloorList
        //     const rOptions = []
        //     for (const k_val in FloorList) {
        //         const obj = { value: k_val, label: k_val.replace('#', '栋'), children: [] }
        //         for (const item of FloorList[k_val]) {
        //             obj.children.push({ value: item, label: k_val.replace('#', '栋') + item+"层", })
        //         }
        //         rOptions.push( obj )
        //     }
        //     return rOptions
        // },
        options() { // 楼栋
            const rOptions = []
            for (const item of this.$store.state.BuildingList) {
                rOptions.push({
                    value: item,
                    label: item.replace('#', '栋'),
                })
            }
            return rOptions
        },
    },
}
</script>
<style scoped>

</style>
