<template>
    <div id="Room">

        <div style="margin-bottom: 12px">
            <el-date-picker v-model="dateVal" size="small"
                type="datetimerange"
                style="margin-right: 20px"
                start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            <el-cascader v-model="casDatas" size="small"
                :options="options"
                :props="{multiple: true, expandTrigger: 'hover'}"
                collapse-tags
                clearable
                filterable
                @change="cascaderChange"
                style="width: 300px; margin-right: 20px" />
            <el-input size="small"
                placeholder="请输入房间号"
                type='number'
                v-model="inpRoomNum"
                clearable
                style="width: 150px; margin-right: 20px" />
            <el-button type="primary" size="small" 
                :loading="searchLoad" icon="el-icon-search"
                @click="searchRoom">搜索
            </el-button>
        </div>

        <el-table :data="tableData_Top" size="mini" border
            v-loading="loading_top"
            @cell-click="handle_tabTop"
            :header-cell-style="{background:'#F5F7FA'}">
            <dynamic-theader
                v-for="(item,index) in tableThead_Top" 
                :key="index"
                :col="item" />
        </el-table>
        <!-- 房间 -->
        <!-- <div id="powerMonth" style="width: 100%; height: 460px"></div> -->
        <chart-line class="powerMonth"
            idName="power_Line_month"
            :AllData="ChartLineAllDate"
            TimeAttr="date"
            DataAttr="electricity"/>
        <!-- 各楼栋房间用电 -->
        <el-table :data="tableData_Bot" size="mini" border
            v-loading="loading_bot"
            :header-cell-style="{background:'#F5F7FA'}">
            <dynamic-theader 
                v-for="(item,index) in tableThead_Bot" 
                :key="index"
                :col="item" />
        </el-table>
        <!-- 房间月用电数据 -->
        <!-- <div id="powerRoom" style="width: 100%; height: 460px"></div> -->
        <bar-chart class="power_barRoom_month" 
            idName='power_barRoom_month' 
            title="楼栋房间用电"
            :getAllData="getAllData_chart_bar"
            attrName="electricity" />



        <!-- 弹窗 -->
        <el-dialog title="实时数据" :visible.sync="dialogChartVisible"
            style="min-width: 420px">
            <chart-line idName="dialog_Line_min" 
                :key="dialogChartVisible"
                :AllData="dialogAllData"
                TimeAttr="read_time"
                DataAttr="active_energy_delivered"/>
        </el-dialog>


    </div>
</template>
/* 房间用电 */
<script>
import dayjs from 'dayjs'

import DynamicTheader from '@/utils/DynamicTheader'

import ChartBarTable from '@/utils/Charts/ChartBarTable'
import ChartLine from '@/utils/Dormitory/chartLineRoom'

import {
    DorRoomTheadTop, 
    DorRoomThead_DynamicPowerRoom,
} from '@/utils/tableThead/DormitoryThead.js'

// import {DormitoryRoom} from '@/utils/Dormitory/RoomCharts'
// import {barChartComp} from '@/utils/perCapitaCharts'

// 导出excel
// import ExportExcel from '@/plugins/exportExcel'

import { 
    listRoomElectricityTableOne,
    listElectricByFiveMinute,
    listRoomHistoryByMonth,
    listAreaHistoryByMonth
    
} from '@/servers/Dormitory'

export default {
    name: 'Room',
    components: {
        DynamicTheader,
        ChartLine,
        BarChart: ChartBarTable,
    },
    data() {
        return {
            dateVal: '',
            casDatas: '', // 联级选择器数据
            inpRoomNum: '', // 房间号

            dialogChartVisible: false, // 弹窗
            dialogAllData: '',

            ChartLineAllDate: [], // 折线图数据

            searchLoad: false,
            loading_top: false,
            /* 上方 表格 */
            tableThead_Top: DorRoomTheadTop,
            tableData_Top: [],
            /* 下方 各楼栋房间用电 */
            loading_bot: false,
            tableThead_Bot: [],
            tableData_Bot: [],
            getAllData_chart_bar: [],
        }
    },
    created() {


        this.searchLoad = true
        this.loading_top = true
        listRoomElectricityTableOne({
            building: '6#',
            floor: '06',
            room: '06-06-029',
            startTime: "2021-01-01 00:00:00",
            endTime: '2021-12-01 00:00:00',
        })
        .then( res => {
            this.tableData_Top = res.data
            // console.log('请求成功！！！', res)
        })
        .finally(() => {
            this.searchLoad = false
            this.loading_top = false
        })

        // 初始化图
        // this.$nextTick(() => {
        // })
        
    },
    mounted() {
        // console.log(this.$store.state, 'store!!!')
        this.tableInit_Bot()
    },
    methods: {
        cascaderChange(val) {
            console.log('层级选择数据', val, this.casDatas)
        },
        searchRoom() {
            console.log(this.dateVal, this.casDatas, this.inpRoomNum)
            console.log( dayjs(this.dateVal[1]).format('YYYY-MM-DD HH:mm:ss') )
        },

        /* 上表格 点击 */
        handle_tabTop(row,column){
            // console.log('表格点击', row,column,event,cell)
            if( column && column.property === "dosage" ) {
                if( row && row.name ){
                    // console.log( '用量点击', row.name )
                    listElectricByFiveMinute({ date: '2021-08-03', room: '06-02-001' })
                    .then( res => {
                        // console.log(res.data)
                        this.dialogAllData = res.data
                        this.dialogChartVisible = true
                    })
                }else{
                    this.$message.warning("房间号不存在！！！");
                }
            } else if ( column && column.property === "name" && row.name ) {
                listRoomHistoryByMonth({
                    room: '06-01-001',
                    startTime: '2021-01',
                    endTime: '2021-12',
                })
                .then( res => {
                    console.log('折线图 月数据', res)
                    this.ChartLineAllDate = res.data
                })
            }
        },
        
        /* 下表格 */
        tableInit_Bot(){
            this.loading_bot = true
            this.tableThead_Bot = DorRoomThead_DynamicPowerRoom()
            listAreaHistoryByMonth({
                startTime: '2021-01',
                endTime: '2021-12'
            })
            .then( res => {
                this.getAllData_chart_bar = res.data
                res.data.forEach( list => {
                    const obj = {"area": list['area']}
                    list.map.forEach( map => {
                        obj[`electricity${map.date}`] = map.electricity
                    })
                    this.tableData_Bot.push( obj )
                })
                // console.log('各楼栋房间用电', res)
            })
            .finally( () => {
                this.loading_bot = false
            })
        },

    },

    computed: {
        options() { // 计算楼栋，每楼层
            const FloorList = this.$store.state.FloorList
            const rOptions = []
            for (const k_val in FloorList) {
                const obj = { value: k_val, label: k_val.replace('#', '栋'), children: [] }
                for (const item of FloorList[k_val]) {
                    obj.children.push({ value: item, label: k_val.replace('#', '栋') + item+"层", })
                }
                rOptions.push( obj )
            }
            return rOptions
        },
        
    },
}
</script>
<style scoped>
.powerMonth, .power_barRoom_month{
    margin-top: 12px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #cbcdd3;
    border: 1px solid #cbcdd3;
    border-image: linear-gradient(transparent, #cbcdd3, transparent) 1 5;
}
</style>