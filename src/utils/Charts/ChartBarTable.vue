<template>
    <div class="BarWrapper">
        <p class="titleName">{{title}}</p>
        <div :id="idName" style="width: 100%; height: 460px"></div>
    </div>
</template>
/* 柱形图中带有表格 */
<script>
import echarts from '@/plugins/echarts';

export default {
    name: 'ChartBarTable',
    props: {
        title: {
            type: String,
        },
        idName: {
            type: String,
            default: 'BarAndTable',
            required: true
        },
        getAllData: { // 全部数据
            type: Array,
            required: true
        },
        attrName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            getAllMon: [], // 全部月份
            dataset: { // 数据集
                dimensions: ['product'],
                source: []
            },
            
        }
    },
    mounted() {
        this.BarChartInit()
    },
    watch: {
        getAllData: function() {//监听数据变化实时改变
            this.BarChartInit()
        },
    },
    methods: {
        handleData() { // 处理数据
            /* 计算出月份 */
            const monList = []
            this.getAllData.forEach( item => {
                item['map'].forEach( mon => {
                    mon[this.attrName] && monList.push( mon['date'] )
                })
            })
            this.getAllMon = []
            this.getAllMon = [...new Set(monList)].sort((a,b) => {
                return new Date(a).getTime() - new Date(b).getTime()
            })
            // .map(item => item.split('-')[1]+'月')
            // console.log("全部月份", this.getAllMon )


            /* 计算所需要的数据 */
            this.dataset['source'] = []
            this.dataset['dimensions'] = ['product', ...this.getAllMon]
            Object.values(this.getAllData).forEach( val => { // 生成 dataset 数据集
                const sourceChildren = {product: val.area || '' }
                val && val['map'].map( item => {
                    const time = item['date'] // && item['date'].split('-')[1]+'月'
                    sourceChildren[time] = item[this.attrName] || ''
                })
                this.dataset['source'].push(sourceChildren)
            })
            // console.log('柱形图数据', this.dataset );
        },

        BarChartInit() { // 初始化
            //有的话就获取已有echarts实例的DOM节点。
            let chartBar = echarts.getInstanceByDom(document.getElementById(this.idName))
            if( !chartBar ) chartBar = echarts.init(document.getElementById(this.idName))
            chartBar.showLoading({
                text: '数据正在加载...',
                textStyle: { fontSize : 30 , color: '#444' },
                effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
            });
            this.handleData()

            /* 需要渲染的表格个数, 月份 */
            const xAxisArr = []
            const titleArr = ['月份']
            const seriesArr = []
            this.dataset['source'].forEach( x => {
                xAxisArr.push( x.product )
            })
            this.getAllMon.length && this.getAllMon.map( item => {
                titleArr.push( item )
                seriesArr.push( {type: 'bar'} )
            })

            // console.log('表格动态数据', titleArr.join('\n'), seriesArr );
            // console.log('全部数据', this.getAllMon, this.dataset)
            const mythis = this;
            const option = {
                dataset: { // 数据集
                    dimensions: this.dataset['dimensions'],
                    source: this.dataset['source']
                },

                title: {
                    text: titleArr.join('\n'), // '\n图添加表格\n1\n2\n3\n4',
                    bottom: -5,
                    left: 20,
                    textStyle: {
                        fontWeight: "normal",
                        color: '#16181d',
                        lineHeight: 16,
                        fontSize: 12,
                    }
                },
                legend: {
                    show: true,
                    type: "scroll",
                    right: 20,
                    width: "50%",
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: '8%',
                    left: '4%',
                    right: 1,
                    bottom: 0,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: xAxisArr,
                    axisTick: {
                        length: 18 * (this.getAllMon.length + 1), // 竖线的长度
                        lineStyle: {
                            color: '#909399'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#16181d', // 更改坐标轴颜色
                        }
                    },
                    axisLabel: { // 使用富文本来定义
                        interval: 0,
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter: function (value){
                            // console.log(value, mythis.dataset['source'])
                            // let indexNum = 0
                            // for (let i = 0; i < seriesList.length; i++) {
                            //     if (value === seriesList[i]) {
                            //         indexNum = i
                            //     }
                            // }
                            // return (
                            //     '{table|' + value + '}\n' +
                            //     '{table|' + datas[0][indexNum] + '}\n' +
                            //     '{table|' + datas[1][indexNum] + '}\n' +
                            //     '{table|' + datas[2][indexNum] + '}\n' +
                            //     '{table|' + datas[3][indexNum] + '}\n' +
                            //     '{table|' + '}'
                            // )
                            
                            const richTableArr = ['{table|' + value + '}'];
                            for (const mon of mythis.getAllMon) {
                                // console.log('mon', mon, value);
                                let datas = ''
                                for (const item of mythis.dataset['source']) {
                                    if( item["product"] === value ) {
                                        datas = item[mon] || ''
                                    }
                                }
                                richTableArr.push('{table|' + datas + '}')
                            }
                            return richTableArr.join('\n')
                        },
                        rich: { // 富文本设置样式
                            table: {
                                lineHeight: 16,
                                // fontSize: 12,
                            }
                        }
                    }
                },
                yAxis: { type: 'value' },
                series: seriesArr,
                graphic: this.getTableLine(this.getAllMon.length) // 富文本 line 线
            };
            chartBar.clear();
            option && chartBar.setOption(option)
            chartBar.hideLoading()
            window.addEventListener("resize", function() {                
                chartBar.resize();  
            });
        },
        
        getTableLine(num) { // table 线
            const list = []
            const bottom = 16 * num // 控制线的位置
            const height = 16
            for (let i = 0; i < num; i++) {
                list.push({
                    type: 'line',
                    bottom: bottom - i * height - 3,
                    left: 20,
                    style: {
                        fill: '#909399',
                        stroke: '#909399'
                    },
                    shape: { // 几条线
                        x1: 10,
                        y1: 0,
                        x2: 3840,
                        y2: 0
                    }
                })
            }
            return list
        },
        
        destroyed() { //注销window.onresize事件
            window.onresize = null;
        }
    },
}
</script>
<style scoped>
.BarWrapper{
    margin-top: 12px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #cbcdd3;
    border: 1px solid #cbcdd3;
    border-image: linear-gradient(transparent, #cbcdd3, transparent) 1 5;
}
.titleName{
    text-align: center;
    color: #909399;
}
</style>