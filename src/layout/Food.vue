<template>
    <div id="Dormitory">
        <el-radio-group size="small" v-model="ridioComp">
            <el-radio-button label="perCapita">人均与总用电</el-radio-button>
            <el-radio-button label="room">房间用电</el-radio-button>
            <el-radio-button label="publicPower">公共用电</el-radio-button>
            <el-radio-button label="history">历史数据查询</el-radio-button>
            <el-radio-button label="abnormal">异常处理</el-radio-button>
        </el-radio-group>
        <div id="tempWrapper">
            <transition name="el-fade-in-linear">
                <perCapita key="Math.random()" v-if="ridioComp === 'perCapita'" />
                <room key="Math.random()" v-if="ridioComp === 'room'" />
                <publicPower key="Math.random()" v-if="ridioComp === 'publicPower'" />
                <history key="Math.random()" v-if="ridioComp === 'history'" />
                <abnormal key="Math.random()" v-if="ridioComp === 'abnormal'" />
            </transition>
        </div>
    </div>
</template>
/* 伙食 用电 */
<script>

const perCapita = () => import('@/components/Dormitory/PerCapita')
const room = () => import('@/components/Dormitory/Room')
const publicPower = () => import('@/components/Dormitory/PublicPower')
const history = () => import('@/components/Dormitory/History')
const abnormal = () => import('@/components/Dormitory/Abnormal')

export default {
    name: 'Dormitory',
    components: {
        perCapita,
        room,
        publicPower,
        history,
        abnormal
    },
    data() {
        return {
            ridioComp: 'perCapita'
        }
    },
}
</script>
<style scoped>
#tempWrapper{
    padding-top: 8px;
}
</style>
