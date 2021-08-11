<template>
    <div id="BPowerDetail">
        
        <el-table :data="tableData" size="mini" 
            border :height="tableHeight"
            :header-cell-style="headClass">
        <dynamic-theader 
            v-for="(item,index) in BpowerThead" 
            :key="index" 
            :col="item"></dynamic-theader>
        </el-table>

    </div>
</template>
/* BPowerDetail 乙用电明细 */
<script>
    import {BpowerThead} from '@/utils/tableThead/PowerThead.js'
    import DynamicTheader from '@/utils/DynamicTheader'


export default {
    name: 'BPowerDetail',
    components: {
        DynamicTheader,
    },
    data() {
        return {
            tableHeight: window.screen.height  - 150,
            BpowerThead,
            tableData: [],
        }
    },
    mounted() {
        console.log('乙用电明细')
    },
    methods: {
        headClass() {

        }
    },
}
</script>