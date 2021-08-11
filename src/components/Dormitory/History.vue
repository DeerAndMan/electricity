<template>
    <div id="history">
        <fieldset>
            <legend>楼栋总用电</legend>
        </fieldset>
        <el-date-picker size="small"
            v-model="buildingDate"
            type="monthrange"
            placeholder="选择月份" 
            style="margin-right: 20px"/>
        <el-button type="primary" size="small" 
            :loading="search_load_building"
            @click="handle_building"
            icon="el-icon-search" >搜索
        </el-button>
        <el-button type="primary" size="small"
            :loading="down_load_building"
            @click="down_Excel('building')"
            icon="el-icon-download" >导出
        </el-button>
        <el-table :data="building_data" size="mini" border
            show-overflow-tooltip
            :max-height="table__maxHeight"
            v-loading="tab_load_building"
            :header-cell-style="{background:'#F5F7FA'}">
            <dynamic-theader
                v-for="(item,index) in building_thead" 
                :key="index"
                :col="item" />
        </el-table>

        <fieldset>
            <legend>房间用电</legend>
        </fieldset>
        <el-date-picker size="small"
            v-model="roomDate"
            type="monthrange"
            placeholder="选择月份" 
            style="margin-right: 20px"/>
        <el-button type="primary" size="small"
            :loading="search_load_room"
            @click="handle_room"
            icon="el-icon-search" >搜索
        </el-button>
        <el-button type="primary" size="small"
            :loading="down_load_room"
            @click="down_Excel('room')" 
            icon="el-icon-download" >导出
        </el-button>
        <el-table :data="room_data" size="mini" border
            show-overflow-tooltip
            :max-height="table__maxHeight"
            v-loading="tab_load_room"
            :header-cell-style="{background:'#F5F7FA'}">
            <dynamic-theader
                v-for="(item,index) in room_thead" 
                :key="index"
                :col="item" />
        </el-table>

        <fieldset>
            <legend>公共区域用电</legend>
        </fieldset>
        <el-date-picker size="small"
            v-model="publicDate"
            type="monthrange"
            placeholder="选择月份" 
            style="margin-right: 20px"/>
        <el-button type="primary" size="small" 
            :loading="search_load_public"
            @click="handle_public"
            icon="el-icon-search" >搜索
        </el-button>
        <el-button type="primary" size="small"
            :loading="down_load_public"
            @click="down_Excel('public')"
            icon="el-icon-download" >导出
        </el-button>
        <el-table :data="public_data" size="mini" border
            show-overflow-tooltip
            :max-height="table__maxHeight"
            v-loading="tab_load_public"
            :header-cell-style="{background:'#F5F7FA'}">
            <dynamic-theader
                v-for="(item,index) in public_thead" 
                :key="index"
                :col="item" />
        </el-table>

    </div>
</template>
/* 历史数据查询 */
<script>
import dayjs from 'dayjs'
import DynamicTheader from '@/utils/DynamicTheader'

import {
    HIS_BuildingThead,
    HIS_RoomThead,
    HIS_PublicThead
} from '@/utils/tableThead/DormitoryThead.js'

import {
    listHistoryTableOne,
    listHistoryTableTwoOrThree,
} from '@/servers/Dormitory.js'
import {ExcelHistory} from '@/utils/Excel/ExcelHistory.js'

export default {
    name: 'History',
    components: {
        DynamicTheader,

    },
    data() {
        return {
            /* 楼栋总用电 */
            search_load_building: false,
            down_load_building: false,
            tab_load_building: false,
            buildingDate: [],
            building_thead: HIS_BuildingThead,
            building_data: [],
            /* 房间用电 */
            search_load_room: false,
            down_load_room: false,
            tab_load_room: false,
            roomDate: [],
            room_thead: HIS_RoomThead,
            room_data: [],
            /* 公共区域用电 */
            search_load_public: false,
            down_load_public: false,
            tab_load_public: false,
            publicDate: [],
            public_thead: HIS_PublicThead,
            public_data: [],
        }
    },
    created() {
        this.buildingPower({
            startTime: dayjs().subtract(1, 'month').format('YYYY-MM'),
            endTime: dayjs().format('YYYY-MM'),
        })
        this.room_public_power({
            startTime: dayjs().subtract(1, 'month').format('YYYY-MM'),
            endTime: dayjs().format('YYYY-MM'),
            type: '宿舍房间电表',
        }, 'room')
        this.room_public_power({
            startTime: dayjs().subtract(1, 'month').format('YYYY-MM'),
            endTime: dayjs().format('YYYY-MM'),
            type: '公共用电设备',
        }, 'public')
    },
    methods: {
        buildingPower(params={}) {
            this.search_load_building = true
            this.tab_load_building = true
            listHistoryTableOne(params)
            .then( res => {
                // console.log('楼栋总用电', res)
                this.building_data = res.data
            })
            .finally( () => {
                this.search_load_building = false
                this.tab_load_building = false
            })
        },
        room_public_power(params={}, name="") {
            if( name === 'room' ){
                this.search_load_room = true
                this.tab_load_room = true
            }else if( name === 'public'){
                this.search_load_public = true
                this.tab_load_public = true
            }
            listHistoryTableTwoOrThree(params)
            .then( res => {
                if( name === 'room' ){
                    this.room_data = res.data
                }else if( name === 'public' ) {
                    this.public_data = res.data
                }
            })
            .finally( () => {
                if( name === 'room' ){
                    this.search_load_room = false
                    this.tab_load_room = false
                } else if( name === 'public' ){
                    this.search_load_public = false
                    this.tab_load_public = false
                }
            })
        },
        handle_building() {
            this.buildingPower({
                startTime: dayjs(this.buildingDate[0]).format('YYYY-MM'),
                endTime: dayjs(this.buildingDate[1]).format('YYYY-MM'),
            })
        },
        handle_room() {
            this.room_public_power({
                startTime: dayjs(this.roomDate[0]).format('YYYY-MM'),
                endTime: dayjs(this.roomDate[1]).format('YYYY-MM'),
                type: '宿舍房间电表',
            }, 'room')
        },
        handle_public(){
            this.room_public_power({
                startTime: dayjs(this.publicDate[0]).format('YYYY-MM'),
                endTime: dayjs(this.publicDate[1]).format('YYYY-MM'),
                type: '公共用电设备',
            }, 'public')
        },

        down_Excel(name) {
            if(name === 'building'){
                ExcelHistory([
                    { name: '楼栋', key: 'area', },
                    { name: '本月抄表', key: 'this_month', },
                    { name: '上月抄表', key: 'last_month', },
                    { name: '用量', key: 'electricity', },
                ], this.building_data, '楼栋总用电')
            }else if( name === 'room' ){
                ExcelHistory([
                    { name: '楼栋', key: 'area', },
                    { name: '房间号', key: 'name', },
                    { name: '本月抄表', key: 'this_month', },
                    { name: '上月抄表', key: 'last_month', },
                    { name: '用量', key: 'electricity', },
                ], this.room_data, '房间用电')
            }else if( name === 'public'){
                ExcelHistory([
                    { name: '楼栋', key: 'area', },
                    { name: '楼层', key: 'name', width: 30 },
                    { name: '项目', key: '', },
                    { name: '本月抄表', key: 'this_month', },
                    { name: '上月抄表', key: 'last_month', },
                    { name: '用量', key: 'electricity', },
                ], this.public_data, '公共区域用电')
            }
        }
    },
    computed: {
        table__maxHeight() {
            return Math.floor((document.documentElement.clientHeight - 160) / 3) + 'px'
        },
    },
}
</script>
<style scoped>
fieldset {
    font-size: 18px;
    padding-top: 5px;
    border-top: 1px solid silver;
}
legend {
    padding: .5em 0;
    border: 0;
    width: auto;
}
</style>