import echarts from '@/plugins/echarts';


const xAxisArr = ['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#', '10#', '11#', '12#', '13#', 
    '14#', '15#', '16#', '17#', '18#', '19#', '20#', '21#', '22#', '23#', '24#', '25#']
const datas = [
    [10, 200, 150, 280, 170, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130,],
    [22, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130],
    [10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130],
    [2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130],
    [12, 0, 105, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130,],
    [22, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130],
    [10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130],
    [2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130],
    [20, 2, 105, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130,],
    [20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130],
    [10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130],
    [2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130],
    [10, 20, 105, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130, 12, 20, 15, 80, 70, 110, 130,],
    [2, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130, 20, 8, 10, 80, 70, 110, 130],
    [10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130, 10, 10, 5, 80, 70, 110, 130],
    [2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130, 2, 12, 50, 80, 70, 110, 130]
]


/**
 * ???????????????
 * @param {Object} dom DOM??????
 * @param {Object} data ??????
 */
export function barChartComp(dom, monArr) {
    console.log(dom, monArr );
    // const monList = [...new Set(monArr)]
    // ????????????
    // const sortTime = (a, b) => {
    //     console.log(a,1,b);
    //     return new Date(dayjs(a)).getTime() - new Date(dayjs(b)).getTime()
    // }
    // monList.sort((a,b) => {
    //     return new Date(dayjs(a)).getTime() - new Date(dayjs(b)).getTime()
    // })


    /* ???????????????????????????, ?????? */
    const seriesList = [];
    for (let mon = 0; mon < new Date().getMonth()+1; mon++) {
        seriesList.push(mon+1+'???')
    }
    const titleArr = ['??????']
    const seriesArr = []
    for (const key in seriesList) {
        titleArr.push( seriesList[key] )
        seriesArr.push({ name: seriesList[key], type: 'bar', data: datas[key] })
    }

    function getTableLine(num) { // table ???
        const list = []
        const bottom = 16 * num // ??????????????????
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
                shape: { // ?????????
                    x1: 10,
                    y1: 0,
                    x2: 3840,
                    y2: 0
                }
            })
        }
        return list
    }
    let lineList = getTableLine(seriesList.length)
    // console.log('lineList', lineList)


    // console.log('??????????????????', titleArr.join('\n'), seriesArr );

    //????????????????????????echarts?????????DOM?????????
    let chartBar = echarts.getInstanceByDom(document.getElementById(dom))
    if( !chartBar ) chartBar = echarts.init(document.getElementById(dom))
    const option = {
        title: {
            text: titleArr.join('\n'), // '\n???????????????\n1\n2\n3\n4',
            bottom: -5,
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
            data: xAxisArr,
            axisTick: {
                length: 18 * (seriesList.length + 1), // ???????????????
                lineStyle: {
                    color: '#909399'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#16181d', // ?????????????????????
                }
            },
            axisLabel: { // ????????????????????????
                interval: 0,
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (value){
                    // console.log(value, index)
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
                    let indexNum = 0
                    for (let i = 0; i < xAxisArr.length; i++) {
                        if (value === xAxisArr[i]) {
                            indexNum = i
                        }
                    }
                    for (const mon in seriesList) {
                        richTableArr.push('{table|' + datas[mon][indexNum] + '}')
                    }
                    return richTableArr.join('\n')
                },
                rich: { // ?????????????????????
                    table: {
                        lineHeight: 16,
                        // fontSize: 12,
                    }
                }
            }
        },
        yAxis: { type: 'value' },
        series: seriesArr,
        graphic: lineList // ????????? line ???
    };
    chartBar.clear();
    option && chartBar.setOption(option)

    window.addEventListener("resize", function() {                
        chartBar.resize();  
    });
}
