import echarts from '../plugins/echarts';

// export const registerChart = (dom) => {
//     let chartDom = echarts.getInstanceByDom(document.getElementById(dom))
//     if( !chartDom ) chartDom = echarts.init(document.getElementById(dom))
//     return chartDom
// }


/**
 * 饼图组件
 * @param {Object} dom DOM对象
 * @param {Object} data 数据
 */
export function pieChartComp(dom, data) {
    console.log(dom, data);
    // const chartPie = echarts.init(document.getElementById(dom))
    let chartPie = echarts.getInstanceByDom(document.getElementById(dom))
    if( !chartPie ) chartPie = echarts.init(document.getElementById(dom))

    const option = {
        title: {
            text: '某站点用户访问来源',
            // subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        // },
        legend: {
            orient: "vertical",
            type: "scroll",
            top: 'center',
            right: "3%",
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                center: ["38%", "50%"],
                data: [
                    {value: 1048, name: '搜索引擎'},
                    {value: 735, name: '直接访问'},
                    {value: 580, name: '邮件营销'},
                    {value: 484, name: '联盟广告'},
                    {value: 300, name: '视频广告'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    chartPie.clear();
    option && chartPie.setOption(option)
    
    window.addEventListener("resize", function() {                
        chartPie.resize();       
    });
}

/**
 * 柱形图组件
 * @param {Object} dom DOM对象
 * @param {Object} data 数据
 */
export function barChartComp(dom, data) {
    console.log(dom, data);
    
    function getTableLine(num) { // table 线
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
    }
    let lineList = getTableLine(5)
    console.log('lineList', lineList)


    const title = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const datas = [
        [12220, 20000, 1005, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130,],
        [20210, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130],
        [10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130],
        [2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130]
    ]
    
    //有的话就获取已有echarts实例的DOM节点。
    let chartBar = echarts.getInstanceByDom(document.getElementById(dom))
    if( !chartBar ) chartBar = echarts.init(document.getElementById(dom))

    const option = {
        title: {
            text: '\n图添加表格\n1\n2\n3\n4',
            bottom: 10,
            left: 20,
            textStyle: {
                fontWeight: "normal",
                color: '#16181d',
                lineHeight: 16,
                fontSize: 12,
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '4%',
            right: 1,
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                length: 86, // 竖线的长度
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
                    // console.log(value, index)
                    let indexNum = 0
                    for (let i = 0; i < title.length; i++) {
                        if (value === title[i]) {
                            indexNum = i
                        }
                    }
                    return (
                        '{table|' + value + '}\n' +
                        '{table|' + datas[0][indexNum] + '}\n' +
                        '{table|' + datas[1][indexNum] + '}\n' +
                        '{table|' + datas[2][indexNum] + '}\n' +
                        '{table|' + datas[3][indexNum] + '}\n' +
                        '{table|' + '}'
                    )
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
        series: [
            { name: 'bar0', type: 'bar', data: datas[0] },
            { name: 'bar1', type: 'bar', data: datas[1] },
            { name: 'bar2', type: 'bar', data: datas[2] },
            { name: 'bar3', type: 'bar', data: datas[3] }
        ],
        graphic: lineList // 富文本 line 线
    };
    chartBar.clear();
    option && chartBar.setOption(option)

    window.addEventListener("resize", function() {                
        chartBar.resize();  
    });
}

/**
 * 折线图组件
 * @param {Object} dom DOM对象
 * @param {Object} data 数据
 */
export function lineChartComp(dom, data) {
    console.log(dom, data);
    
    let chartLine = echarts.getInstanceByDom(document.getElementById(dom))
    if( !chartLine ) chartLine = echarts.init(document.getElementById(dom))
    // let chartLine = echarts.init(document.getElementById(dom))

    const option = {
        // title: { text: '折线图堆叠' },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient: "vertical",
            type: "scroll",
            top: 'center',
            right: "1%",
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '1%',
            right: '12%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                // saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                smooth: true,
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                smooth: true,
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                smooth: true,
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                smooth: true,
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                smooth: true,
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    chartLine.clear();
    console.log('组件元素   1？', chartLine);
    option && chartLine.setOption(option)

    window.addEventListener("resize", function() {                
        chartLine.resize();     
    });
}