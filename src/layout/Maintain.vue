<template>
    <div id="home">
        <el-radio-group size="small" v-model="ridioComp" @change="changeComp">
            <!-- <el-radio-button label="treeMind">甲乙線線路圖</el-radio-button>
            <el-radio-button label="APower">甲線用電明細</el-radio-button>
            <el-radio-button label="BPower">乙線用電明細</el-radio-button>
            <el-radio-button label="ABPower">甲乙線用電總表</el-radio-button> -->
        </el-radio-group>

        <!-- <router-link to="/maintain/treeMind">treeMind</router-link> |
            <router-link to="/maintain/APower">APower</router-link>  |
            <router-link to="/maintain/BPower">BPower</router-link>  |
            <router-link to="/maintain/ABPower">ABPower</router-link> -->

        <div id="tempWrapper">
            <!-- <transition name="el-fade-in-linear">
                <treeMind key="Math.random()" v-if="ridioComp === 'treeMind'" />
                <aPowerDetail key="Math.random()" v-if="ridioComp === 'APower'" />
                <bPowerDetail key="Math.random()" v-if="ridioComp === 'BPower'" />
                <abPowerTotal key="Math.random()" v-if="ridioComp === 'ABPower'" />
            </transition> -->
            <!-- <router-view /> -->
        </div>
    </div>
</template>
/* 工务主页 */
<script>
// import treeMind from '@/components/treeMind'

// import aPowerDetail from '@/components/APowerDetail'
// import bPowerDetail from '@/components/BPowerDetail'
// import abPowerTotal from '@/components/ABPowerTotal'

// const aPowerDetail = () => import('@/components/APowerDetail')
// const bPowerDetail = () => import('@/components/BPowerDetail')
// const abPowerTotal = () => import('@/components/ABPowerTotal')

export default {
    components: {
        // treeMind,
        // aPowerDetail,
        // bPowerDetail,
        // abPowerTotal
    },
    data() {
        return {
            ridioComp: 'treeMind',
        }
    },
    methods: {
        changeComp(){
            // console.log('改变', this.ridioComp)
        }
    },
}
</script>
<style scoped>
#tempWrapper{
    padding-top: 8px;
}
</style>