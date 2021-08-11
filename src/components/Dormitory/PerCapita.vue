<template>
    <div id="perCapita">

        <div style="margin-bottom: 12px">
            <el-date-picker v-model="monVal" size="small" type="monthrange"
                style="margin-right: 24px"
                start-placeholder="开始月份" end-placeholder="结束月份">
            </el-date-picker>

            <el-button type="primary" size="small" 
                :loading="searchLoad" icon="el-icon-search"
                @click="searchMon">搜索
            </el-button>
            
            <!-- 导出 人力，总用量 -->
            <el-popover width="280" v-model="downloadBool" style="margin-left: 10px">
                <p style="margin-bottom: 10px">请选择导出类型! </p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="success" plain @click="downData_people">每日人力</el-button>
                    <el-button size="mini" type="warning" @click="downData_no">取消</el-button>
                    <el-button type="primary" size="mini" @click="downData_all">楼栋总用量</el-button>
                </div>
                <el-button type="primary" size="small" slot="reference" :loading="downloadLoad" >
                    <i class="el-icon-download"></i>
                    导出
                </el-button>

            </el-popover>
            <!-- 单笔,批量 导入 -->
            <el-popover width="280" v-model="uploadBool" style="margin-left: 10px">
                <p style="margin-bottom: 10px">请选择导入上传方式! 单笔导入直接输入</p>
                <el-form label-position="right" label-width="60px" 
                    ref="upData_aloneAll"
                    :model="aloneUpData" :rules="aloneRules">
                    <el-form-item label="日期" prop="date">
                        <el-date-picker size="mini" type="date" placeholder="选择日期"
                            v-model="aloneUpData.date"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="人力" prop="peopleNum">
                        <el-input size="mini" v-model="aloneUpData.peopleNum"></el-input>
                    </el-form-item>
                </el-form>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="success" plain @click="upData_all('upData_aloneAll')">批量上传</el-button>
                    <el-button size="mini" type="warning" @click="upData_no('upData_aloneAll')">取消</el-button>
                    <el-button type="primary" size="mini" @click="upData_yes('upData_aloneAll')">确定</el-button>
                </div>

                <el-button type="warning" size="small" slot="reference" :loading="uploadLoad" >
                    <i class="el-icon-upload"></i>
                    每日人力导入
                </el-button>
            </el-popover>

        </div>
        <!-- 表格 -->
        <el-table :data="tableData_Top" size="mini" border
            :header-cell-style="{background:'#F5F7FA'}" >
            <dynamic-theader
                v-for="(item,index) in tableThead_Top" 
                :key="index"
                :col="item" />
        </el-table>
        <!-- 每个月 表格 -->
        <el-table :data="tableData_Bot" size="mini" border 
            :key="tableThead_Bot.toString()">
            <dynamic-theader
                v-for="(item,index) in tableThead_Bot" 
                :key="index"
                :col="item" />
        </el-table>
        
        
        <!-- 柱形图带有表格 -->
        <bar-chart idName='powerPeople' title="人力明细"
            :getAllData="getAllData" attrName="people_number" />
        <bar-chart idName='powerTotal' title="楼栋用电"
            :getAllData="getAllData" attrName="electricity" />
        <bar-chart idName='powerPercapita' title="人均用电"
            :getAllData="getAllData" attrName="avg_electricity" />

    </div>
</template>
/* 人均与总用电 */
<script>
import dayjs from 'dayjs'
import {DorPerTheadTop, dynamicTheadBot} from '@/utils/tableThead/DormitoryThead'
import DynamicTheader from '@/utils/DynamicTheader'

import ChartBarTable from '@/utils/Charts/ChartBarTable'
// import {barChartComp} from '@/utils/perCapitaCharts'

import {ExcelPeople} from '@/utils/Excel/ExcelPeople'

import axios from 'axios'
import { 
    listTableOneByMonth,
    listTableTwoByMonth,
    baseFindByPage,
} from '@/servers/Dormitory'

export default {
    name: 'perCapita',
    components: {
        DynamicTheader,
        BarChart: ChartBarTable,
    },
    data() {
        return {
            monVal: '',
            searchLoad: false,
            downloadLoad: false,
            downloadBool: false,
            uploadBool: false,
            uploadLoad: false,
            aloneUpData: { data: '', peopleNum: '' },
            aloneRules: {
                date: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                peopleNum: [
                    { required: true, message: '请填写人力', trigger: 'blur' },
                    { type: 'number', message: '人力必须为数字值'}
                ]
            },
            
            // 上表格表头，数据
            tableThead_Top: DorPerTheadTop,
            tableData_Top: [],
            // 下表格表头，数据
            tableThead_Bot: [],
            tableData_Bot: [],
            // 全部数据
            getAllData: [],
        }
    },
    created() {
        this.tableThead()
        this.searchMon()
        // this.get_oneTable([dayjs().month(0).format('YYYY-MM'), dayjs().format('YYYY-MM') ])
        // this.get_twoTable([dayjs().month(0).format('YYYY-MM'), dayjs().format('YYYY-MM') ])

        // DOM 执行完后执行
        this.$nextTick(() => {
            // this.tableThead()
        })
    },
    methods: {
        /*  表一 表二 数据查询 */
        get_oneTable(time=[]) {
            listTableOneByMonth({
                startTime: time[0],
                endTime: time[1]
            })
            .then( res => {
                this.tableData_Top = []
                for (const item of res.data) {
                    this.tableData_Top.push({
                        ...item,
                        dosage: (item['this_month'] - item['last_month']).toFixed(3)
                    })
                }
                // console.log('表一数据', res)
            })
            .finally( () => {
                this.searchLoad = false
            })
        },
        get_twoTable(time=[]) {
            listTableTwoByMonth({
                startTime: time[0],
                endTime: time[1]
            })
            .then( res => {
                this.tableData_Bot = []
                /* 全部数据 */
                this.getAllData = res.data
                res.data.forEach( list => {
                    const obj = {"area": list['area']}
                    list.map.forEach( map => {
                        obj[`people_number${map.date}`] = map.people_number
                        obj[`electricity${map.date}`] = map.electricity
                        obj[`avg_electricity${map.date}`] = map.avg_electricity
                    })
                    this.tableData_Bot.push( obj )
                })
                // console.log('数据改变后的！', this.tableData_Bot )
            })
            .finally( () => {
                this.searchLoad = false
            })
        },
        /* 计算 表二表头 */
        tableThead(sDate, eDate){
            const startMon = sDate && eDate ? Number( dayjs(sDate).format('M') ) : 1
            const startYear = sDate && eDate ? dayjs(sDate).format('YYYY') : dayjs().year()
            let differNum = sDate && eDate ? 0 : dayjs().format('M');
            if( sDate && eDate ) {
                const differYear = Number( (dayjs(eDate).year() - dayjs(sDate).year()) * 12 )
                const differMon = Number( dayjs(eDate).format('M') - dayjs(sDate).format('M') )
                // console.log('???差', startMon, differYear, differMon )
                differNum = startMon + differYear + differMon
            }
            // console.log('开始的月，年，相差的月', startMon, startYear, differNum )

            const table_bot = []
            for (let mon = startMon; mon <= differNum; mon++) {
                table_bot.push( dayjs(startYear+'-'+mon).format('YYYY-MM') )
            }
            // console.log('月份差', table_bot )
            this.tableThead_Bot = dynamicTheadBot(table_bot)
        },

        /* 搜索 */
        searchMon() {
            const stateTime = this.monVal 
                ? dayjs(this.monVal[0]).format('YYYY-MM') 
                : dayjs().month(0).format('YYYY-MM')
            const endTime = this.monVal 
                ? dayjs(this.monVal[1]).format('YYYY-MM') 
                : dayjs().format('YYYY-MM')

            this.tableThead(this.monVal[0], this.monVal[1])

            this.searchLoad = true
            axios.all([
                this.get_oneTable([stateTime, endTime]), 
                this.get_twoTable([stateTime, endTime])
            ])
            // .then(axios.spread(function (acct, perms) {
            //     console.log('两个函数都执行完成了', acct, perms)
            // }));
        
        },
        /* 每日人力导入 */
        upData_yes(formName) {
            // this.uploadBool = false
            this.$refs[formName].validate( valid => {
                if( valid ) alert('成功')
                else {
                    alert('失败')
                    return false
                }
            })
        },
        upData_no(formName) {
            this.uploadBool = false
            this.$refs[formName].resetFields();
        },
        upData_all(formName) {
            console.log('批量上传', formName)
        },
        /* 导出 人力 楼栋总用量 */
        downData_people() { // 人力
            this.downloadLoad = true
            baseFindByPage({
                timeField: 'date'
            })
            .then( res => {
                console.log('人力全部数据', res)
                ExcelPeople([
                    { name: '楼栋', key: 'building', },
                    { name: '日期', key: 'date', },
                    { name: '人力', key: 'peopleNumber', },
                ], res.data)
            })
            .finally(() => {
                this.downloadLoad = false
            })
        },
        downData_no() {
            this.downloadBool = false
        },
        downData_all() {
            // console.log('导出楼栋用电', this.tableData_Top)
            this.downloadLoad = true
            ExcelPeople([
                { name: '日期', key: 'date', },
                { name: '楼栋', key: 'area', },
                { name: '上月抄表', key: 'last_month', },
                { name: '本月月抄表', key: 'this_month', },
                { name: '用量', key: 'dosage', },
                { name: '当日用电量', key: 'dosage_this', },
            ], this.tableData_Top, '导出楼栋总用电数据')
            .then( res => {
                this.downloadLoad = res
            })
        },

    },
}
</script>
<style scoped>
#powerPeople, #powerTotal, #powerPercapita{
    margin-top: 12px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #cbcdd3;
    border: 1px solid #cbcdd3;
    border-image: linear-gradient(transparent, #cbcdd3, transparent) 1 5;
}
</style>