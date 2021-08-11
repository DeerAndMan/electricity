<template>
    <div id="ABPowerTotal">
        <!-- <button @click="changeDOM">改变DOM</button> -->

        <el-table :data="tableData_A" size="mini" border>
            <dynamic-theader
                v-for="(item,index) in ABpowerThead" 
                :key="index"
                :col="item"></dynamic-theader>
        </el-table>
        <el-row :gutter="20" style="margin-top: 12px">
            <el-col :xs="24" :sm="8" :md="8" :span="8">
                <div id="ABCharts_power_pie" style="width: 100%; height: 400px"></div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :span="8">
                <div id="ACharts_power_pie" style="width: 100%; height: 400px"></div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :span="8">
                <div id="BCharts_power_pie" style="width: 100%; height: 400px"></div>
            </el-col>
        </el-row>
        
        <div id="ACharts_power_bar" style="width: 100%; height: 450px"></div>
        <div id="BCharts_power_bar" style="width: 100%; height: 450px"></div>
        <div id="ACharts_power_Line" style="width: 100%; height: 450px"></div>
        <div id="BCharts_power_Line" style="width: 100%; height: 450px"></div>
    </div>
</template>
/* ABPowerTotal 甲乙用电总表 */
<script>
    import { axiosTest } from '@/servers/ABPower.js'

    import {ABpowerThead} from '@/utils/tableThead/PowerThead.js'
    import DynamicTheader from '@/utils/DynamicTheader'

    // 图
    import {pieChartComp, barChartComp, lineChartComp } from '@/utils/ABCharts.js'


export default {
    name: 'ABPowerTotal',
    components: {
        DynamicTheader
    },
    data() {
        return {
            ABpowerThead,
            tableData_A: [],
            
        }
    },
    created() {
        console.log('this 实例')
        // this.$nextTick(() => {
        //     console.log('vue 视图更新后 是否更新DOM！！！')
        // })
        // this.$nextTick(() => {
        //     console.log('vue 视图更新后  是否更新DOM！！！ 最后更新')
        //     this.initPieChart()
        //     this.initBarChart()
        //     this.initLineChart()
        // })
    },
    mounted() {
        // console.log('甲乙用电总表', this)
        // this.$message.warning("1111111111111111111")

        axiosTest('water_electricity_air/reportWater/queryYearMonthWeekDay.do?type=workday')

        this.initPieChart()
        this.initBarChart()
        this.initLineChart()

        // const mythis = this
        // setTimeout(() => { // 临时解决DOM 过期的问题!!!
        //     mythis.initPieChart()
        //     mythis.initBarChart()
        //     mythis.initLineChart()
        // }, 1000)
    },
    methods: {
        initPieChart() { // 饼图
            pieChartComp('ABCharts_power_pie')
            pieChartComp('ACharts_power_pie')
            pieChartComp('BCharts_power_pie')
        },

        initBarChart() { // 柱形图
            barChartComp('ACharts_power_bar')
            barChartComp('BCharts_power_bar')
        },

        initLineChart() { // 折线图
            lineChartComp('ACharts_power_Line')
            lineChartComp('BCharts_power_Line')
        },
        changeDOM() {
            this.$nextTick(() => {
                console.log( 2231, this )
            })
            this.initLineChart()
        }
    },
    updated() {
        // console.log('数据更新', this)
    },
    //注销window.onresize事件
    destroyed() {
        window.onresize = null;
    }
}
</script>
<style scoped>
#ABCharts_power_pie, #ACharts_power_pie, #BCharts_power_pie,
#ACharts_power_bar, #BCharts_power_bar,
#ACharts_power_Line, #BCharts_power_Line{
    margin-top: 12px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #cbcdd3;
    border: 1px solid #cbcdd3;
    border-image: linear-gradient(transparent, #cbcdd3, transparent) 1 5;
}
</style>