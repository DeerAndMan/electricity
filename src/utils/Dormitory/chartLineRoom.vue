<template>
    <div :id="idName" style="width: 100%; height: 460px"></div>
</template>
/* 房间用电 折线图 */
<script>
import echarts from '@/plugins/echarts';
export default {
    name: 'ChartLine',
    props: {
        idName: { // id 名称
            type: String,
            required: true
        },
        ChartTitle: { // 图 title
            type: String,
            default: '实时数据',
        },
        DataAttr: { // 数据 属性名
            type: String,
            required: true
        },
        TimeAttr: { // 时间 属性名
            type: String,
            required: true
        },
        AllData: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            lengthName: ['product'],
            dataArr: [],
        }
    },
    watch: {
        AllData: function() {
            this.LineInit()
        }
    },
    mounted() {
        this.LineInit()
    },
    methods: {
        handleDate() {
            this.lengthName = ['product']
            this.dataArr = []
            this.AllData.forEach( item => {
                this.lengthName.push( item.name )
                this.dataArr.push([ item[this.TimeAttr] || '', item[this.DataAttr] || '' ])
            })
            // console.log('数据处理！！！', [...new Set(this.lengthName)], this.dataArr )
        },
        LineInit(){
            let chartLine = echarts.getInstanceByDom(document.getElementById(this.idName))
            if( !chartLine ) chartLine = echarts.init(document.getElementById(this.idName))
            chartLine.showLoading({
                text: '数据正在加载...',
                textStyle: { fontSize : 30 , color: '#444' },
                effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
            });
            
            this.handleDate()

            const option = {
                title: {
                    text: this.ChartTitle,
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: true,
                    right: 20,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                dataset: {
                    source: [
                        [...new Set(this.lengthName)],
                        ...this.dataArr,
                    ]
                },

                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    { type: 'line', smooth: true }
                ]
            };
            chartLine.clear();
            option && chartLine.setOption(option)
            chartLine.hideLoading()
            
            window.addEventListener("resize", function() {                
                chartLine.resize();       
            });
        }
    },
    destroyed() { //注销window.onresize事件
        window.onresize = null;
    }
}
</script>