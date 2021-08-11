/* 宿务 */
/* 返回月份 数组 */
const r_DateList = (sDate, eDate) => {
    const s_year = sDate ? sDate.split('-')[0].replace(/\b(0+)/gi, '')
        : new Date().getFullYear()
    const s_month = sDate ? sDate.split('-')[1].replace(/\b(0+)/gi, '')
        : "01"

    const e_year = eDate ? eDate.split('-')[0].replace(/\b(0+)/gi, '')
        : new Date().getFullYear()
    const e_month = eDate ? eDate.split('-')[1].replace(/\b(0+)/gi, '')
        : (new Date().getMonth()+1).toString().padStart(2, "0");

    const rList = []
    if( s_year === e_year ){
        for (let mon = s_month; mon <= e_month; mon++) {
            rList.push( e_year+'-'+mon.toString().padStart(2, '0') )
        }
    }else{
        for (let year = s_year; year <= e_year; year++) {
            for (let mon = s_month; mon <= 12; mon++) {
                let year_mon = year + '-' + mon.toString().padStart(2, '0')
                if( year == e_year && mon == e_month ){
                    rList.push( year_mon )
                    break
                }
                rList.push( year_mon )
            }
        }
    }
    return rList
}



/* 人均与总用电 */
export const DorPerTheadTop = [
    {
        prop: 'date',
        label: '日期',
        align: "center",
    },
    {
        prop: 'area',
        label: '楼栋',
        align: "center",
    },
    {
        prop: 'last_month',
        label: '上月抄表',
        align: "center",
    },
    {
        prop: 'this_month',
        label: '本月抄表',
        align: "center",
    },
    {
        prop: 'dosage',
        label: '用量',
        align: "center",
    },
    // {
    //     prop: '',
    //     label: '电表显示数',
    //     align: "center",
    // },
    {
        prop: 'dosage_this',
        label: '当月用电量',
        align: "center",
    },
    // {
    //     prop: '',
    //     label: '详情',
    //     align: "center",
    // },
]
/**
 * 计算动态表头 人均
 * @param {Array} monList 月份数组
 */
export const dynamicTheadBot = (monList=[]) => {
    const rList = [{
        prop: 'area',
        label: '楼栋',
        width: '110',
        align: "center",
    }];
    const chilList = [ // Map对象
        ['人力', 'people_number'],
        ['总用电', 'electricity'],
        ['人均用电', 'avg_electricity']
    ]

    for (const mon of monList) {
        const headObj = {
            // label: new Date().getFullYear() + "-" + mon,
            label: mon,
            align: "center",
            children:[]
        }
        chilList.forEach(([key, value]) => {
            headObj.children.push({
                prop: value+mon,
                label: key,
                align: "center",
            })
        })
        rList.push(headObj)
    }
    return rList
}



/* 房间用电 上部分*/
export const DorRoomTheadTop = [
    {
        prop: 'area',
        label: '楼栋',
        align: "center",
    },
    {
        prop: 'name',
        label: '房间号',
        align: "center",
    },
    {
        prop: 'this_month',
        label: '本月抄表',
        align: "center",
    },
    {
        prop: 'last_month',
        label: '上月抄表',
        align: "center",
    },
    {
        prop: 'dosage',
        label: '用量',
        align: "center",
    },
    {
        prop: 'electricity',
        label: '电表显示数',
        align: "center",
    },
    // {
    //     prop: '',
    //     label: '当日用电数',
    //     align: "center",
    // },
    // {
    //     prop: '',
    //     label: '详情',
    //     align: "center",
    // },
]
/* 房间用电  各楼栋房间用电 */
export const DorRoomThead_DynamicPowerRoom = (sDate, eDate) => {
    const monList = r_DateList(sDate, eDate)

    const monThead = [{
        prop: 'area',
        label: '楼栋',
        align: "center",
    }]
    for (const item of monList) {
        monThead.push({
            prop: "electricity"+item,
            label: item+'用量',
            width: 100,
            align: "center",
        })
    }
    return monThead
}



/* 公共用电 */
export const PublicThead = [
    {
        prop: 'read_time',
        label: '日期',
        align: "center",
    },
    {
        prop: 'area',
        label: '楼栋',
        width: 60,
        align: "center",
    },
    {
        prop: 'name',
        label: '楼层',
        align: "center",
    },
    {
        prop: 'this_month',
        label: '本月抄表',
        align: "center",
    },
    {
        prop: 'last_month',
        label: '上月抄表',
        align: "center",
    },
    {
        prop: 'dosage',
        label: '用量',
        align: "center",
    },
    // {
    //     prop: '',
    //     label: '电表显示数',
    //     align: "center",
    // },
    {
        prop: 'electricity',
        label: '当月用电量',
        align: "center",
    },
]




/* 历史数据查询 */
/* 楼栋总用电 */
export const HIS_BuildingThead = [
    {
        prop: 'area',
        label: '楼栋',
        align: "center",
    },
    {
        prop: 'this_month',
        label: '本月抄表',
        align: "center",
    },
    {
        prop: 'last_month',
        label: '上月抄表',
        align: "center",
    },
    {
        prop: 'electricity',
        label: '用量',
        align: "center",
    },
]
/* 房间用电 */
export const HIS_RoomThead = [
    {
        prop: 'area',
        label: '楼栋',
        align: "center",
    },
    {
        prop: 'name',
        label: '房间号',
        align: "center",
    },
    {
        prop: 'this_month',
        label: '本月抄表',
        align: "center",
    },
    {
        prop: 'last_month',
        label: '上月抄表',
        align: "center",
    },
    {
        prop: 'electricity',
        label: '用量',
        align: "center",
    },
]
/* 公共区域用电 */
export const HIS_PublicThead = [
    {
        prop: 'area',
        label: '楼栋',
        align: "center",
    },
    {
        prop: 'name',
        label: '楼层',
        align: "center",
    },
    {
        prop: '',
        label: '项目',
        align: "center",
    },
    {
        prop: 'this_month',
        label: '本月抄表',
        align: "center",
    },
    {
        prop: 'last_month',
        label: '上月抄表',
        align: "center",
    },
    {
        prop: 'electricity',
        label: '用量',
        align: "center",
    },
]