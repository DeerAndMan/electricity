import echarts from '@/plugins/echarts';


export function DormitoryRoom(dom, data) {
    console.log(dom, data);
    let chartLine = echarts.getInstanceByDom(document.getElementById(dom))
    if( !chartLine ) chartLine = echarts.init(document.getElementById(dom))

    const option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            // feature: {
            //     saveAsImage: {}
            // }
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
            }
        ]
    };
    chartLine.clear();
    option && chartLine.setOption(option)
    
    window.addEventListener("resize", function() {                
        chartLine.resize();       
    });
}

